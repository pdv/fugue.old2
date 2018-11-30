(ns fugue.audio2)

(def node? (partial instance? js/AudioNode))

(defprotocol Modulator
  "Able to modulate an AudioParam. Modulator has to be the first argument, and I wish you didn't have to pass ctx."
  (modulate [modulator ctx param]))

(extend-protocol Modulator
  number
  (modulate [modulator ctx param]
    (set! (.-value param) modulator))
  function
  (modulate [modulator ctx param]
    (let [modulator-node (modulator ctx)]
      (.connect modulator-node param)))
  js/AudioNode
  (modulate [modulator ctx param]
    (.connect modulator param)))

;; Gain

(defn gain
  [in amp]
  (fn [ctx]
    (let [in-node (in ctx)
          gain-node (.createGain ctx)]
      (modulate amp ctx (.-gain gain-node))
      (.connect in-node gain-node)
      gain-node)))

;; Oscillators

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (fn [ctx]
     (let [osc-node (.createOscillator ctx)]
       (set! (.-type osc-node) (clj->js type))
       (set! (.-value (.-frequency osc-node)) 0)
       (modulate freq ctx (.-frequency osc-node))
       (modulate detune ctx (.-detune osc-node))
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
       (modulate freq ctx (.-frequency filter-node))
       (modulate q ctx (.-Q filter-node))
       (.connect in-node filter-node)
       filter-node))))

(def lpf (partial biquad-filter :lowpass))
(def hpf (partial biquad-filter :highpass))
(def bpf (partial biquad-filter :bandpass))

;; ConstantSourceNode

(defn constant
  [& modulators]
  (fn [ctx]
    (.log js/console "Creating const")
    (let [const-node (.createConstantSource ctx)]
      (run! #(modulate % ctx (.-offset const-node)) modulators)
      (.start const-node)
      const-node)))

(defn lfo [value freq amount]
  (let [osc-node (sin-osc freq)
        modulator (gain osc-node amount)]
    (constant value modulator)))

;; Output

(defn play!
  ([in] (play! in (js/AudioContext.)))
  ([in ctx]
   (.connect (in ctx) (.-destination ctx))
   ctx))

