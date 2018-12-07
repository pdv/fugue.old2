(ns fugue.envelope
  (:require [cljs.core.async :as async]))

(defn adsr [a d s r]
  {:open [{:target 1 :duration a}
          {:target s :duration d}]
   :close [{:target 0 :duration r}]})

(defn perc [a d]
  {:open [{:target 1 :duration a}
          {:target 0 :duration d}]})

(defn ramps [envdef gate-level]
  (map #(update % :target * gate-level)
       (envdef (if (> gate-level 0) :open :close))))

(defn envelope [envdef]
  (partial ramps envdef))

(defn curve [envelope gate]
  {:start (select-keys gate [:time])
   :ramps (envelope (:level gate))})

(defn gate-x-curve [envdef]
  (map (partial curve (envelope envdef))))

;; TODO should this (and the async Modulator) be extracted?

(defn env-gen [envdef gate-chan]
  (let [curve-chan (async/chan 1 (gate-x-curve envdef))]
    (async/pipe gate-chan curve-chan)
    curve-chan))
