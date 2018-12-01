(ns fugue.envelope
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.audio2 :as a]))

(defn adsr [a d s r]
  (fn [gate-val]
    (if (= 0 gate-val)
      [{:time r :value 0}]
      [{:time a :value gate-val}
       {:time (+ a d) :value (* gate-val s)}])))

(defn cancel-and-hold! [param time]
  (let [value (.-value param)]
    (.cancelScheduledValues param time)
    (.setValueAtTime param value time)))

(defn schedule-value!
  "Ramps the parameter to the value at the given time."
  [param value time]
  (if (= value 0)
    (.linearRampToValueAtTime param 0 time)
    (.exponentialRampToValueAtTime param value time)))

(defn env-gen [env gate]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)
          param (.-offset const-node)]
      (go-loop []
        (let [env-values (env (<! gate))
              now (.-currentTime ctx)]
          (cancel-and-hold! param now)
          (doseq [{dtime :time
                   value :value} env-values]
            (schedule-value! param (+ now dtime) value))
          (recur)))
      (.start const-node)
      const-node)))

