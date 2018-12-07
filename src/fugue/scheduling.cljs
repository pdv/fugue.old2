(ns fugue.scheduling
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [goog.object :as o]
            [fugue.engine :refer [Modulator]]))

(defn- schedule!
  [param {:keys [value time shape]}]
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

(defn- curve-start-event [last-scheduled start-time curve-start-level]
  (let [overlapping (< start-time (:time last-scheduled))]
    {:time start-time
     :value (or curve-start-level (:value last-scheduled))
     :shape (if (and overlapping (not curve-start-level))
              :cancel-and-hold
              :instant)}))

(defn- curve-ramp-events [start-time ramps shape]
  (let [durations (map :duration ramps)
        times (reductions + start-time durations)
        levels (map :target ramps)]
    (map (fn [level time]
           {:value level :time time :shape shape})
         levels
         (rest times))))

(defn- curve-x-schedule
  "Returns a stateful transducer that maps curves to schedulables using now-fn"
  [now-fn]
  (fn [rf]
    (let [v-last-scheduled (volatile! {:time (now-fn) :value -1})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result curve]
         (let [last-scheduled @v-last-scheduled
               {:keys [start ramps]} curve
               start-time (+ (now-fn) (get start :time 0))
               start-event (curve-start-event last-scheduled start-time (:level start))]
           (print "last" last-scheduled)
           (if-let [ramp-events (curve-ramp-events start-time ramps :exponential)]
             (let [events (cons start-event ramp-events)]
               (vswap! v-last-scheduled (last events))
               (print events)
               (reduce rf result events))
             result)))))))

(defn- xf
  "Creates a curve-x-schedule transducer from a ctx and start time"
  [ctx at]
  (curve-x-schedule (fn [] (+ at (o/get ctx "currentTime")))))

;; Just ramps for now
;; Maybe add ints later

(extend-protocol Modulator

  PersistentVector
  (attach! [this param ctx at]
    (transduce (xf ctx at)
               (fn [result event] (schedule! param event))
               this))

  ManyToManyChannel
  (attach! [this param ctx at]
    (let [schedule-chan (async/chan 1 (xf ctx at))]
      (async/pipe this schedule-chan)
      (go-loop []
        (schedule! param (async/<! schedule-chan))
        (recur)))))
