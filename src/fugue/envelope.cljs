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
    (number? input) [{:time 0 :value input}]
    (map? input) [input]
    (iterable? input) input))

(defn gate-x-sched
  "Returns a transducer that maps gate events to schedule events."
  [env]
  (comp
   ; make sure the input is a packet of gate events
   (map packetize)
   ; map packets of gate events to packets of schedule events
   (map (partial mapcat env))
   ;; ignore empty packets
   (filter not-empty)
   ;; start each packet with cancel and hold
   (map (partial cons {:time 0 :curve :cancel}))
   ;; flatten
   cat
   ; use an exponential curve by default
   (map (partial merge {:curve :exponential}))))

(defn env-gen [env gate-chan]
  (fn [ctx]
    (let [xform (gate-x-sched env)
          sched-chan (async/chan 1 xform)
          const-node (.createConstantSource ctx)]
      (async/pipe gate-chan sched-chan)
      (p/param! const-node "offset" 0.0001 sched-chan)
      (.start const-node)
      const-node)))

