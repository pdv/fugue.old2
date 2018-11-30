(ns fugue.audio2)

(def node? (partial instance? js/AudioNode))

(defn- attach-param! [param modulator]
  (cond
    (number? modulator) (set! (.-value param) modulator)
    (node? modulator) (.connect modulator param)
    :else (throw (js/Error. "Invalid modulator type"))))

;; Oscillators

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (fn [ctx]
     (let [osc-node (.createOscillator ctx)]
       (set! (.-type osc-node) (clj->js type))
       (set! (.-value (.-frequency osc-node)) 0)
       (attach-param! (.-frequency osc-node) freq)
       (attach-param! (.-detune osc-node) detune)
       (.start osc-node)
       osc-node))))

(def sin-osc (partial oscillator :sine))
(def saw (partial oscillator :sawtooth))
(def square (partial oscillator :square))
(def tri-osc (partial oscillator :triangle))

;; Filters

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   (fn [ctx]
     (let [in-node (in ctx)
           filter-node (.createBiquadFilter ctx)]
       (set! (.-type filter-node) (clj->js type))
       (attach-param! (.-frequency filter-node) freq)
       (attach-param! (.-Q filter-node) q)
       (.connect in-node filter-node)
       filter-node))))

(def lpf (partial biquad-filter :lowpass))
(def hpf (partial biquad-filter :highpass))
(def bpf (partial biquad-filter :bandpass))

;; Output

(defn play!
  ([in] (play! in (js/AudioContext.)))
  ([in ctx]
   (.connect (in ctx) (.-destination ctx))
   ctx))

