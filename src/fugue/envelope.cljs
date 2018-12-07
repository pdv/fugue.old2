(ns fugue.envelope)

(defn adsr [a d s r]
  {:open [{:target 1 :duration a}
          {:target s :duration d}]
   :close [{:target 0 :duration r}]})

(defn perc [a d]
  {:open [{:target 1 :duration a}
          {:target 0 :duration d}]})

(defn ramps [envdef gate-level]
  (map #(update % :target * gate-level)
       (envdef (if (> gate-level 0) :open :close))))

(defn env [envdef]
  (partial ramps envdef))

(defn curve [env gate]
  {:start (select-keys gate [:time])
   :ramps (env (:level gate))})

(defn curve-x-schedulable
  "Returns a stateful transducer that maps curves to schedulables using fn now"
  [now]
  (fn [rf]
    (let [v-last-scheduled (volatile! {:time (now) :level -1})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result curve]
         (let [{last-time :time last-level :level} @v-last-scheduled
               {:keys [start ramps]} curve
               start-time (+ (now) (get start :time 0))
               times (reductions + start-time (map :duration ramps))
               levels (map :target ramps)
               first-time (first times)
               override (< first-time last-time)]
           (vreset! v-last-scheduled {:time (last times) :level (last levels)})
           (reduce rf result (cons {:time first-time
                                    :shape (if override :cancel-and-hold :instant)
                                    :value (or (:time start) last-level)}
                                   (map (fn [level time]
                                          {:value level :time time :shape :exponential})
                                        levels
                                        (last times))))))))))

(defn gate-x-sched [envdef]
  (comp
   (map partial curve (env envdef))
   curve-x-schedulable))

(def EX-CURVE
  {:start {:time 0.2 :level 43}
   :ramps [{:target 134 :duration 0.3 :curve :exp}
           {:target 73 :duration 0.1 :curve :exp}]})

;; Revert -- this step has to happen after we convert relative times to absolute times
;; This should return curves with both start and end times

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
         (print "latest seen" @vlatest-seen-target)
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
