(ns fugue.audio
  (:refer-clojure :exclude [+ *])
  (:require [goog.object :as o]
            [fugue.nodes :as n]
            [fugue.params :refer [param!]]))

;; Oscillators

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (fn [ctx]
     (let [node (.createOscillator ctx)]
       (o/set node "type" (clj->js type))
       (param! node :frequency 0 freq)
       (param! node :detune 0 detune)
       (.start node)
       node))))

(def sin-osc (partial n/osc :sine))
(def saw (partial n/osc :sawtooth))
(def square (partial n/osc :square))
(def tri-osc (partial n/osc :triangle))

;; Filters

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   (fn [ctx]
     (let [in-node (in ctx)
           filter-node (.createBiquadFilter ctx)]
       (o/set filter-node "type" (clj->js type))
       (param! filter-node :frequency 0 freq)
       (param! filter-node :Q 1 q)
       (.connect in-node filter-node)
       filter-node))))

(def lpf (partial biquad-filter :lowpass))
(def hpf (partial biquad-filter :highpass))
(def bpf (partial biquad-filter :bandpass))

;; ConstantSourceNode

(defn const [& modulators]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)]
      (apply param! const-node :offset (cons 0 modulators))
      (.start const-node)
      const-node)))

;; GainNode

(defn gain [in amp]
  (fn [ctx]
    (let [in-node ((const in) ctx)
          gain-node (.createGain ctx)]
      (param! gain-node :gain 0 amp)
      (.connect in-node gain-node)
      gain-node)))

;; Mix

(def + const)

(defn *
  ([x y] (gain (const x) (const y)))
  ([x y & more]
   (reduce * (* x y) more)))

(defn mix [& modulators]
  (* (+ modulators)
      (/ 1 (count modulators))))

(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))

;; Output

(defn play!
  ([in] (play! in (js/AudioContext.)))
  ([in ctx]
   (.connect (in ctx) (.-destination ctx))
   ctx))
