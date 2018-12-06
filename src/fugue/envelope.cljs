(ns fugue.envelope)

;; an envelope is a function from gate to a set of targets

(defn perc [a d]
  (fn [{:keys [time value]}]
    (if (> value 0)
      [{:time (+ time a) :value value}
       {:time (+ time a d) :value 0}]
      [])))

(defn adsr [a d s r]
  (fn [{:keys [time value]}]
    (if (> value 0)
      [{:time (+ time a) :value value}
       {:time (+ time a d) :value (* value s)}]
      [{:time (+ time r) :value 0}])))

(defn packet [input]
  (cond
    (number? input) [{:time 0 :value input}]
    (map? input) [input]
    (iterable? input) input))

(defn log [tag]
  (map (fn [value]
         (print tag value)
         value)))

(defn gate-x-sched
  "Returns a stateful transducer that maps gate events to scheduler transients using env.
  If a gate event occurs before the latest output event, cancel and hold at that time.
  If a gate event occurs after the latest output event, hold that last event until the gate."
  [env]
  (fn [rf]
    (let [vlatest-seen-target (volatile! {})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result gate]
         (if-let [targets (env gate)]
           (let [latest-seen @vlatest-seen-target
                 latest-seen-time (:time latest-seen)
                 gate-time (:time gate)
                 hold-target (if (> gate-time latest-seen-time)
                               (assoc latest-seen :time gate-time :curve :instant)
                               {:time gate-time :curve :cancel-and-hold})
                 all-targets (cons hold-target targets)]
             (vreset! vlatest-seen-target (apply max-key :time latest-seen targets))
             (reduce rf result all-targets))
           result))))))
