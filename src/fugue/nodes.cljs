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

(defn feedback [in & effect-node-defs]
  (let [id (random-uuid)
        gain-def {:constructor "createGain"}
        effects (into {} (map (fn [node-def] {(random-uuid) node-def}) effect-node-defs))]
    (-> in
        ;; pass through
        (assoc :output-id id)
        (update :nodes assoc id gain-def)
        (update :connections conj {:from (:output-id in) :to id})
        ;;; feedback
        (update :nodes conj effects)
        (update :connections concat (map (fn [from to] {:from from :to to})
                                         (cons id (keys effects))
                                         (concat (keys effects) [id]))))))

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

(defn gain-def [amp]
  {:constructor "createGain"
   :audio-params {"gain" [0 amp]}})

(defn gain [in amp]
  (effect in (gain-def amp)))

(defn delay-def [time]
  {:constructor "createDelay"
   :audio-params {"delayTime" [0 time]}})

(defn delay [in time]
  (effect in (delay-def time)))

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

(defn simple-delay
  ([in] (simple-delay in 0.3))
  ([in time] (simple-delay in time 0.4))
  ([in time amount]
   (feedback in (delay-def time) (gain-def amount))))
