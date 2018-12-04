(ns fugue.async
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [fugue.audio :as a]))

(defn schedule!
  [param {:keys [curve time value]}]
  (print "scheduling:" curve time value)
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

(defn sanitize [input]
  (cond
    (number? input) (sanitize {:value input})
    (map? input) (merge {:time 0 :curve :instant} input)))

(extend-protocol a/Modulator
  ManyToManyChannel
  (modulate! [modulator ctx param]
    (go-loop []
      (schedule! param (sanitize (<! modulator)))
      (recur))))
