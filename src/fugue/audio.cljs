(ns fugue.audio
  (:refer-clojure :exclude [+ *]))

(def node? (partial instance? js/AudioNode))

(defprotocol Modulator
  "Able to modulate an AudioParam. Modulator has to be the first argument, and I wish you didn't have to pass ctx."
  (modulate! [modulator ctx param]))

(extend-protocol Modulator
  number
  (modulate! [modulator ctx param]
    (set! (.-value param) modulator))
  function
  (modulate! [modulator ctx param]
    (.connect (modulator ctx) param))
  js/AudioNode
  (modulate! [modulator ctx param]
    (.connect modulator param)))

(defn bind-param! [ctx param & modulators]
  "Attaches modulators to param sequentially"
  (doseq [modulator modulators]
    (modulate! modulator ctx param)))

;; Oscillators

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (fn [ctx]
     (let [node (.createOscillator ctx)]
       (set! (.-type node) (clj->js type))
       (bind-param! ctx (.-frequency node) 0 freq)
       (bind-param! ctx (.-detune node) 0 detune)
       (.start node)
       node))))

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
       (bind-param! ctx (.-frequency filter-node) 0 freq)
       (bind-param! ctx (.-Q filter-node) 1 q)
       (.connect in-node filter-node)
       filter-node))))

(def lpf (partial biquad-filter :lowpass))
(def hpf (partial biquad-filter :highpass))
(def bpf (partial biquad-filter :bandpass))


;; ConstantSourceNode

(defn const [& modulators]
  (fn [ctx]
    (let [const-node (.createConstantSource ctx)
          param (.-offset const-node)]
      (set! (.-value param) 0)
      (apply bind-param! ctx param (cons 0 modulators))
      (.start const-node)
      const-node)))


;; GainNode

(defn gain [in amp]
  (fn [ctx]
    (let [in-node ((const in) ctx)
          gain-node (.createGain ctx)]
      (bind-param! ctx (.-gain gain-node) 0 amp)
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

