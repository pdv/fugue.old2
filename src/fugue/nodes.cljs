(ns fugue.nodes
  (:refer-clojure :exclude [+ * delay]))

(defn source [node-def]
  (let [id (random-uuid)]
    {:source-id id
     :output-id id
     :nodes {id node-def}
     :connections #{}}))

(defn effect [in node-def]
  (let [id (random-uuid)]
    (-> in
        (assoc :output-id id)
        (update :nodes assoc id node-def)
        (update :connections conj {:from (:output-id in) :to id}))))

(defn- osc-def [type freq detune]
  {:constructor "createOscillator"
   :static-params {"type" type}
   :audio-params {"frequency" [0 freq]
                  "detune" [0 detune]}})

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (source (osc-def type freq detune))))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn- biquad-filter-def [type freq q]
  {:constructor "createBiquadFilter"
   :static-params {"type" type}
   :audio-params {"frequency" [0 freq]
                  "Q" [1 q]}})

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   (effect in (biquad-filter-def type freq q))))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn gain [in amp]
  (effect in {:constructor "createGain"
              :audio-params {"gain" [0 amp]}}))

(defn delay [in time]
  (effect in {:constructor "createDelay"
              :audio-params {"delayTime" [0 time]}}))

(defn constant-source [& modulators]
  (source {:constructor "createConstantSource"
           :audio-params {"offset" (cons 0.0001 modulators)}}))

;;  should these be somewhere else?

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

(defn fb [in f]
  ()
  (+ in (f in)))

(defn simple-delay
  ([in] (simple-delay in 0.3))
  ([in time] (simple-delay in time 0.4))
  ([in time amount]
   (fb in #(-> % (delay time) (gain amount)))))
