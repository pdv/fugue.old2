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
    (:exponential nil)
    (.exponentialRampToValueAtTime param (max 0.0001 value) time)
    :instant
    (.setValueAtTime param value time)))

(defprotocol ScheduleEvent
  (schedule-event! [this param at]))

(extend-protocol ScheduleEvent
  number
  (schedule-event! [this param at]
    (schedule! param this at :cancel))
  cljs.core/PersistentArrayMap
  (schedule-event! [this param at]
    (let [{:keys [value time curve]} this]
      (schedule! param value (+ at time) curve))))

(extend-protocol Modulator
  cljs.core/PersistentVector
  (attach! [this param ctx at]
    (doseq [event this
            :let [now (o/get ctx "currentTime")]]
      (schedule-event! event param (+ now at))))
  ManyToManyChannel
  (attach! [this param ctx at]
    (go-loop []
      (let [event (async/<! this)
            now (o/get ctx "currentTime")]
        (schedule-event! event param (+ now at))
        (recur)))))
