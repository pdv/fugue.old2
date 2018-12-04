(ns fugue.scheduling
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [goog.object :as o]
            [fugue.engine :refer [Modulator]]))

(defn schedule!
  [param value time curve]
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
  [modulator param ctx at]
  (go-loop []
    (let [input (async/<! chan)
          now (o/get ctx "currentTime")]
      (cond
        (number? input)
        (schedule! param input now :cancel)
        (map? input)
        (let [{:keys [value time curve]} input]
          (schedule! param value (+ at now time) curve)))
      (recur))))

(extend-protocol Modulator
  ManyToManyChannel
  (attach! [modulator param ctx at]
    (schedule-loop! modulator param ctx at)))
