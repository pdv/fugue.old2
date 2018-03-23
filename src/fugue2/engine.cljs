(ns fugue2.engine)

(defn make-ctx [] (js/AudioContext.))

(defn current-time [ctx]
  (.-currentTime ctx))

(defn sample-rate [ctx]
  (.-sampleRate ctx))

(defn resume! [ctx]
  (.resume ctx))

(defn suspend! [ctx]
  (.suspend ctx))

(defn close! [ctx]
  (.close ctx))

(defn out [ctx in]
  (.connect in (.-destination ctx))
  in)

(def node? (partial instance? js/AudioNode))

(defn attach-param! [modulator param]
  (cond
    (number? modulator) (set! (.-value param) modulator)
    (node? modulator) (.connect modulator param)
    :else (throw (js/Error. "Invalid modulator type"))))

;;; Nodes

(defn oscillator
  [ctx type freq detune]
  (let [osc-node (.createOscillator ctx)]
    (set! (.-type osc-node) (clj->js type))
    (attach-param! freq (.-frequency osc-node))
    (attach-param! detune (.-detune osc-node))
    (.start osc-node)
    osc-node))

(defn biquad-filter
  ([ctx in type freq q]
   (let [filter-node (.createBiquadFilter ctx)]
     (set! (.-type filter-node) (clj->js type))
     (attach-param! freq (.-frequency filter-node))
     (attach-param! q (.-Q filter-node))
     (.connect in filter-node)
     filter-node)))

(defn gain
  [ctx in amount]
  (let [gain-node (.createGain ctx)]
    (attach-param! amount (.-gain gain-node))
    (.connect in gain-node)
    gain-node))

(defn constant
  [ctx & modulators]
  (let [constant-node (.createConstantSource ctx)]
    (run! #(attach-param! % (.-offset constant-node)) modulators)
    (.start constant-node)
    constant-node))
