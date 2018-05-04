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

(defn mix
  [ctx ins]
  (let [mixed (.createGain ctx)]
    (doseq [in ins]
      (.connect in mixed))
    mixed))

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
  [ctx in type freq q]
  (let [filter-node (.createBiquadFilter ctx)]
    (set! (.-type filter-node) (clj->js type))
    (attach-param! freq (.-frequency filter-node))
    (attach-param! q (.-Q filter-node))
    (.connect in filter-node)
    filter-node))

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

;; Gate

(defn observe-gate
  "Calls trigger-fn when the threshold is exceeded or dropped below"
  [ctx in threshold trigger-fn]
  (let [script-node (.createScriptProcessor ctx 256 1 1)
        gate-open (atom false)]
    (set! (.-onaudioprocess script-node)
          (fn [event]
            (let [input-buffer (.-inputBuffer event)
                  input-data (.getChannelData input-buffer 0)
                  input-arr (Array.from input-data)
                  exceeds-threshold (some #(> % threshold) input-arr)]
              (when (compare-and-set! gate-open exceeds-threshold)
                (trigger-fn exceeds-threshold)))))
    (.connect in script-node)
    script-node))

(defn schedule-value!
  "Ramps the parameter to the value at the given time."
  [param value time]
  (if (= value 0)
    (do ; You can't exponential ramp to 0
      (.exponentialRampToValueAtTime param 0.00001 time))
    (.exponentialRampToValueAtTime param value time)))

(defn cancel-scheduled-values!
  "Cancels scheduled values but maintains the current value"
  [param time]
  (let [val (.-value param)]
    (.cancelScheduledValues param 0)
    (.exponentialRampToValueAtTime param (+ val 0.0001) time)))


;; Samples

(defn load-sample
  "Loads the sample at url and calls buffer-fn with the decoded buffer"
  [ctx url buffer-fn]
  (let [request (js/XMLHttpRequest.)
        onerror (fn [e] (.log js/console (.-err e)))
        onload #(.decodeAudioData ctx (.-response request) buffer-fn onerror)]
    (.open request "GET" url true)
    (set! (.-responseType request) "arraybuffer")
    (set! (.-onload request) onload)
    (.send request)))

;; todo: would be cool if this was triggered with a gate
(defn buffer-node
  [ctx buffer time]
  (let [node (.createBufferSource ctx)]
    (set! (.-buffer node) buffer)
    (.start node time)
    node))
