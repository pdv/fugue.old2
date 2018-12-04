(ns fugue.nodes
  (:refer-clojure :exclude [+ *])
  (:require [goog.object :as o]
            [fugue.params :as p]))

(defn- set-static-params!
  [node static-params]
  (doseq [[name value] static-params]
    (o/set node name value)))

(defn- set-audio-params!
  [node audio-params]
  (doseq [[name modulators] audio-params
          :let [ctx (o/get node "context")
                param (o/get node name)]
          modulator modulators]
    (p/attach! modulator ctx param)))

(defn build-node
  [{:keys [in constructor static-params audio-params]}]
  (fn [ctx at]
    (let [node (js-invoke ctx constructor)]
      (if in
        (let [in-node-fn (build-node in)
              in-node (in-node-fn ctx at)]
          (.connect ((build-node in) ctx at) node))
        (.start node at))
      (set-static-params! node static-params)
      (set-audio-params! node audio-params)
      node)))

(defn play!
  ([synth-def] (play! synth-def (js/AudioContext.) 0))
  ([synth-def ctx at]
   (cljs.pprint/pprint synth-def)
   (let [node-fn (build-node synth-def)
         node (node-fn ctx at)]
     (.connect node (o/get ctx "destination")))))

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   {:constructor "createOscillator"
    :static-params {"type" type}
    :audio-params {"frequency" [0 freq]
                   "detune" [0 detune]}}))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   {:in in
    :constructor "createBiquadFilter"
    :static-params {"type" type}
    :audio-params {"frequency" [0 freq]
                   "Q" [1 q]}}))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn gain [in amp]
  {:in in
   :constructor "createGain"
   :audio-params {"gain" [0 amp]}})

(defn + [& modulators]
  {:constructor "createConstantSource"
   :audio-params {"offset" (cons 0 modulators)}})

(defn *
  ([x y] (gain (+ x) y))
  ([x y & more]
   (reduce * (* x y) more)))

(defn mix [& modulators]
  (* (+ modulators)
     (/ 1 (count modulators))))

(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))
