(ns fugue.scheduling
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [goog.object :as o]
            [fugue.engine :refer [Modulator]]))

;; `cancelScheduledValues` will abort a ramp that's in-progress
;; which is hella annoying
;; `cancelAndHold` will not, hopefully

;; The behavior of the timeline in the face of cancelAndHoldAtTime() when automations are running and can be introduced at any time after calling cancelAndHoldAtTime() and before cancelTime is reached is quite complicated.

(defn schedule!
  [param value time curve]
  (case curve
    :cancel-and-hold
    (.cancelAndHoldAtTime param time)
    (:linear nil)
    (.linearRampToValueAtTime param value time)
    :exponential
    (.exponentialRampToValueAtTime param (max 0.0001 value) time)
    :instant
    (.setValueAtTime param value time)))

(defprotocol ScheduleEvent
  (schedule-event! [this param at]))

(extend-protocol ScheduleEvent
  number
  (schedule-event! [this param at]
    (schedule! param this at :cancel-and-hold))
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
