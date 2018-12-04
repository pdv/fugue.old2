(ns fugue.params
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [goog.object :as o]))

(defn schedule!
  [param value time curve]
  (print "scheduling" value time curve)
  (case curve
    :cancel
    (let [value (or value (.-value param))]
      (.cancelScheduledValues param time)
      (.setValueAtTime param value time))
    :linear
    (.linearRampToValueAtTime param value time)
    :exponential
    (.exponentialRampToValueAtTime param (max 0.0001 value) time)
    :instant
    (.setValueAtTime param value time)))

(defn schedule-loop!
  [ctx param chan]
  (go-loop []
    (let [input (async/<! chan)
          now (o/get ctx "currentTime")]
      (print input "at" now)
      (cond
        (number? input)
        (schedule! param input now :cancel)
        (map? input)
        (let [{:keys [value time curve]} input]
          (schedule! param value (+ now time) curve)))
      (recur))))

(defprotocol Modulator
  "Able to modulate an AudioParam. Modulator has to be the first argument, and I wish you didn't have to pass ctx."
  (attach! [modulator ctx param]))

(extend-protocol Modulator

  number
  (attach! [modulator ctx param]
    (set! (.-value param) modulator))

  function
  (attach! [modulator ctx param]
    (.connect (modulator ctx) param))

  js/AudioNode
  (attach! [modulator ctx param]
    (.connect modulator param))

  ManyToManyChannel
  (attach! [modulator ctx param]
    (schedule-loop! ctx param modulator)))

(defn param!
  [node name & modulators]
  (let [ctx (o/get node "context")
        param (o/get node (clj->js name))]
    (doseq [modulator modulators]
      (attach! modulator ctx param))))
