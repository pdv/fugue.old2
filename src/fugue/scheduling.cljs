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

(defn- curve-x-schedule
  "Returns a stateful transducer that maps curves to schedulables using now-fn"
  [now-fn]
  (fn [rf]
    (let [v-last-scheduled (volatile! {:time (now-fn) :level -1})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result curve]
         (let [{last-time :time last-level :level} @v-last-scheduled
               {:keys [start ramps]} curve
               start-time (+ (now-fn) (get start :time 0))
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

(defn- xf
  "Creates a curve-x-schedule transducer from a ctx and start time"
  [ctx at]
  (curve-x-schedule (fn [] (+ at (o/get ctx "currentTime")))))

;; Just ramps for now
;; Maybe add ints later

(extend-protocol Modulator

  PersistentVector
  (attach! [this param ctx at]
    (transduce (xf ctx at) (partial schedule! param) this))

  ManyToManyChannel
  (attach! [this param ctx at]
    (let [schedule-chan (async/chan (xf ctx at))]
      (async/pipe this schedule-chan)
      (go-loop []
        (schedule! param (async/<! schedule-chan))
        (recur)))))
