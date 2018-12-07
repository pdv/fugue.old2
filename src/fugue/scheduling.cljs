(ns fugue.scheduling
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [goog.object :as o]
            [fugue.engine :refer [Modulator]]))

(defn- schedule!
  [param value time shape]
  (print "scheduling" time ":" value shape)
  (case shape
    :cancel-and-hold
    (.cancelAndHoldAtTime param time)
    (:linear nil)
    (.linearRampToValueAtTime param value time)
    :exponential
    (.exponentialRampToValueAtTime param (max 0.0001 value) time)
    :instant
    (.setValueAtTime param value time)))

(defprotocol Schedulable
  (schedule! [this param at]))

(extend-protocol Schedulable
  number
  (schedule! [this param at]
    (schedule! param this at :cancel-and-hold))
  cljs.core/PersistentArrayMap
  (schedule! [this param at]
    (let [{:keys [value time shape]} this]
      (schedule! param value (+ at time) shape))))

(extend-protocol Modulator
  cljs.core/PersistentVector
  (attach! [this param ctx at]
    (doseq [event this
            :let [now (o/get ctx "currentTime")]]
      (schedule! event param (+ now at))))
  ManyToManyChannel
  (attach! [this param ctx at]
    (go-loop []
      (let [event (async/<! this)
            now (o/get ctx "currentTime")]
        (schedule! event param (+ now at))
        (recur)))))
