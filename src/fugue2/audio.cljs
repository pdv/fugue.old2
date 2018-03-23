(ns fugue2.audio
  (:require [fugue2.engine :as engine]))

(defonce ctx (atom nil))

(defn init-audio! []
  (reset! ctx (engine/make-ctx)))

(defn reset-audio! []
  (engine/close! @ctx)
  (init-audio!))

(defn out [in]
  (engine/out @ctx in)
  in)

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
