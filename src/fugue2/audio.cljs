(ns fugue2.audio
  (:require [fugue2.engine :as engine]))

(defonce ctx (atom nil))
(defonce buffers (atom {}))

(defn init-audio! []
  (reset! ctx (engine/make-ctx)))

(defn reset-audio! []
  (engine/close! @ctx)
  (init-audio!))

(defn out [in]
  (engine/out @ctx in)
  in)

(defn now []
  (engine/current-time @ctx))

;;; Mix

(defn gain
  "Multiplies the amplitude of in by amp"
  [in amp]
  (engine/gain @ctx in amp))

(defn mix
  "Combines the inputs into one signal"
  [& args]
  (engine/mix @ctx args))

;;; Oscillators

(defn sin-osc
  "Starts a sine wave oscillator at the given frequency"
  ([freq] (sin-osc freq 0))
  ([freq detune]
   (engine/oscillator @ctx :sine freq detune)))

(defn saw
  "Starts a saw wave oscillator at the given frequency"
  ([freq] (saw freq 0))
  ([freq detune]
   (engine/oscillator @ctx :sawtooth freq detune)))

(defn square
  "Starts a square wave oscillator at the given frequency"
  ([freq] (square freq 0))
  ([freq detune]
   (engine/oscillator @ctx :square freq detune)))

(defn tri
  "Starts a triangle wave oscillator at the given frequency"
  ([freq] (tri freq 0))
  ([freq detune]
   (engine/oscillator @ctx :triangle freq detune)))

;;; Samples

(defn load-sample [url]
  (engine/load-sample @ctx url #(swap! buffers assoc url %)))

(defn sample
  ([url] (sample url 0))
  ([url time]
   (engine/buffer-node @ctx (@buffers url) time)))

;;; Filters

(defn lpf
  "Applies a low-pass filter to the input"
  ([in freq] (lpf in freq 1))
  ([in freq q]
   (engine/biquad-filter @ctx in :lowpass freq q)))

(defn hpf
  "Applies a high-pass filter to the input"
  ([in freq] (lpf in freq 1))
  ([in freq q]
   (engine/biquad-filter @ctx in :highpass freq q)))

(defn bpf
  "Applies a band-pass filter to the input"
  ([in freq] (lpf in freq 1))
  ([in freq q]
   (engine/biquad-filter @ctx in :bandpass freq q)))

;;; Modulators

(defn lfo
  [value freq amount]
  (let [osc-node (sin-osc freq)
        modulator (gain osc-node amount)]
    (engine/constant @ctx value modulator)))

;; Envelopes

(defn perc [a r]
  (fn [is-open]
    {:levels [0 1 0]
     :times [0 a r]}
    {:levels []
     :times []}))

(defn adsr [a d s r]
  (fn [is-open]
    {:levels [0 1 s]
     :times [0 a d]}
    {:levels [0]
     :times [r]}))

(defn apply-curve [absolute-levels relative-times param]
  (let [now (engine/current-time @ctx)
        absolute-times (map #(+ now %) relative-times)]
    (engine/cancel-scheduled-values! param now)
    (doseq [[level time] (map list absolute-levels absolute-times)]
      (engine/schedule-value! param level time))))

(defn env-gen
  ([env gate] (env-gen env gate 1))
  ([env gate scale] (env-gen env gate scale 0))
  ([env gate scale bias]
   (let [const-node (engine/constant @ctx)
         param (.-offset const-node)
         gate-trigger (fn [gate-open]
                        (let [curve (env gate-open)
                              levels (map #(+ bias (* scale %)) (:levels curve))
                              times (:times curve)]
                          (apply-curve levels times param)))]
     (set! (.-value param) 0)
     (engine/observe-gate @ctx gate 0.95 gate-trigger)
     const-node)))
