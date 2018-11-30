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
    (.connect (modulator ctx) param))
  js/AudioNode
  (modulate [modulator ctx param]
    (.connect modulator param)))


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

(defn const [& modulators]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)]
      (run! #(modulate % ctx (.-offset const-node)) modulators)
      (.start const-node)
      const-node)))


;; GainNode

(defn gain [in amp]
  (fn [ctx]
    (let [in-node ((const in) ctx)
          gain-node (.createGain ctx)]
      (modulate amp ctx (.-gain gain-node))
      (.connect in-node gain-node)
      gain-node)))


;; Mix

(def sum const)

(defn multiply
  ([x y] (gain (const x) (const y)))
  ([x y & more]
   (reduce multiply (multiply x y) more)))

(defn mix [& modulators]
  (multiply (sum modulators)
            (/ 1 (count modulators))))

(defn lfo [value freq amount]
  (sum (multiply (sin-osc freq)
                 amount)
       value))

;; Output

(defn play!
  ([in] (play! in (js/AudioContext.)))
  ([in ctx]
   (.connect (in ctx) (.-destination ctx))
   ctx))

