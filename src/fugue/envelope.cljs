(ns fugue.envelope
  (:require [fugue.audio2 :as a]))

(defn adsr [a d s r]
  (fn [gate-val]
    (if (= 0 gate-val)
      [{:time r :value 0}]
      [{:time a :value gate-val}
       {:time (+ a d) :value (* gate-val s)}])))


