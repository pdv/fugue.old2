(ns fugue.envelope
  (:require [cljs.core.async :as async]
            [fugue.params :as p]))

(defn perc [a d]
  (fn [{:keys [time value]}]
    (if (> value 0)
      #{{:time (+ time a) :value value}
        {:time (+ time a d) :value 0}}
      #{})))

(defn adsr [a d s r]
  (fn [{:keys [time value]}]
    (if (> value 0)
      #{{:time (+ time a) :value value}
        {:time (+ time a d) :value (* value s)}}
      #{{:time (+ time r) :value 0}})))

(defn packetize [input]
  (cond
    (number? input) [{:time 0 :value input :curve :instant}]
    (map? input) [input]
    (iterable? input) input))

(defn gate-x-sched
  "Returns a transducer that maps gate events to schedule events."
  [ctx env]
  (comp
   ; make sure the input is a list of gate events
   (map packetize)
   ; apply the envelope to each gate event
   (map (partial mapcat env))
   ; flatten the schedule events, first canceling and holding
   (mapcat (partial cons {:time 0 :curve :cancel}))
   ; use an exponential curve by default
   (map (partial merge {:curve :exponential}))
   ; convert the relative times to absolute times
   (map #(update % :time + (.-currentTime ctx)))))

(defn env-gen [env gate-chan]
  (fn [ctx]
    (let [xform (gate-x-sched ctx env)
          sched-chan (async/chan 1 xform)
          const-node (.createConstantSource ctx)]
      (async/pipe gate-chan sched-chan)
      (p/param! const-node "offset" 0.0001 sched-chan)
      (.start const-node)
      const-node)))

