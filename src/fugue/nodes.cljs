(ns fugue.nodes
  (:refer-clojure :exclude [+ *]))

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

(defn constant-source [& modulators]
  {:constructor "createConstantSource"
   :audio-params {"offset" (cons 0.0001 modulators)}})

(def + constant-source)

(defn *
  ([x y] (gain (+ x) y))
  ([x y & more]
   (reduce * (* x y) more)))

(defn mix [& modulators]
  (* (+ modulators)
     (/ 1 (count modulators))))

(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))
