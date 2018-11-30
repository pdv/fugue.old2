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

(defn schedule-value!
  "Ramps the parameter to the value at the given time."
  [param value time]
  (if (= value 0)
    (do ; You can't exponential ramp to 0
      (.exponentialRampToValueAtTime param 0.00001 time))
    (.exponentialRampToValueAtTime param value time)))

(defn env-gen [env gate]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)]
      (go-loop []
        (doseq [env-val (env (<! gate))
                :let [time (+ (.-currentTime ctx) (:time env-val))
                      value (:value env-val)]]
          (schedule-value! (.-offset const-node) value time))
        (recur))
      const-node)))

