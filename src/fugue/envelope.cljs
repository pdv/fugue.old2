(ns fugue.envelope
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]))

;; TODO
;; - specify curve

(defn perc [a d]
  (fn [gate-val]
    (if (not= 0 gate-val)
      [{:time a :value gate-val}
       {:time d :value 0}]
      [{:time d :value 0}])))

(defn adsr [a d s r]
  (fn [gate-val]
    (if (= 0 gate-val)
      [{:time r :value 0}]
      [{:time a :value gate-val}
       {:time (+ a d) :value (* gate-val s)}])))

(defn cancel-and-hold!
  [param time]
  (let [value (.-value param)]
    (.cancelScheduledValues param time)
    (set! (.-value param) value)))

(defn schedule-value!
  "Ramps the parameter to the value at the given time."
  [param value time]
  (let [target (if (= value 0) 0.0001 value)]
    (.exponentialRampToValueAtTime param target time)))

(defn env-gen [env gate]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)
          param (.-offset const-node)]
      (set! (.-value param) 0.0001)
      (go-loop []
        (let [env-values (env (<! gate))
              now (.-currentTime ctx)]
          (cancel-and-hold! param now)
          (doseq [{dtime :time
                   value :value} env-values]
            (schedule-value! param value (+ now dtime)))
          (recur)))
      (.start const-node)
      const-node)))

