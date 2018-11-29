(ns fugue2.core
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue2.async :as async-midi]
            [fugue2.audio :as a]
            [fugue2.audio2 :as a2]))

(defn detuned-synth! []
  (-> (a/mix (a/saw 110 (a/lfo 0 0.5 30))
             (a/saw 220))
      (a/gain 0.2)
      (a/out)))

(defn dubstep-bass []
  (-> (a/saw (a/sin-osc 0.5))
      (a/lpf (a/lfo 440 2 100))
      (a/out)))

(defn start-synth! []
  (-> (a/saw 440)
      (a/lpf (a/lfo 220 2 220))
      (a/gain 0.2)
      (a/out)))

(defn test-gate []
  (let [curve (a/perc 0.1 1.0)
        gate (a/square 0.5)
        env (a/env-gen curve gate)]
    (-> (a/saw 440)
        (a/gain env)
        (a/out))))

(defn test-sample []
  (-> (a/sample "audio/red.wav")
      (a/gain 0.5)
      (a/out)))

(defn test-sample-loop []
  (let [offsets (map #(* 0.25 %) (range 50))
        now (a/now)
        times (map #(+ now %) offsets)]
    (doseq [time times]
      (-> (a/sample "audio/808_snare.wav" time)
          (a/gain 0.5)
          (a/out)))))

(defn play-loop [pattern tempo]
  (let [now (a/now)
        bar-length (/ 60 tempo)]
    (doseq [pat pattern]
      (let [pat-length (* bar-length (:scale pat))
            per-sample-offset (* pat-length (:offset pat))
            offsets (map #(+ per-sample-offset (* pat-length %)) (range 50))
            times (map #(+ now %) offsets)]
        (doseq [time times]
          (-> (a/sample (:sample pat) time)
              (a/gain 0.5)
              (a/out)))))))

(def sample-map
  {44 "audio/808_snare.wav"
   45 "audio/808_kick.wav"})

(defn sampler []
  (-> 44
      sample-map
      a/sample
      a/out))

(def sequencer
  [{:sample "audio/808_clap.wav"
    :seq [0 0 0 0 1 0 0 0]}
   {:sample "audio/808_kick_short.wav"
    :seq [1 0 0 1 0 0 0 0]}])

(def pattern
  [{:sample "audio/808_kick_short.wav"
    :scale 1
    :offset 0}
   {:sample "audio/808_snare.wav"
    :scale 1
    :offset 0.5}
   {:sample "audio/808_hat_closed.wav"
    :scale 0.5
    :offset 0.5}])

(defn play-simple-sample! []
  (-> (a/sample "audio/lcd.mp3")
      (a/gain 0.5)
      (a/out)))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

;; keyCode -> midi offset from C
(def keymap
  (zipmap [65 87 83 69 68 70 84 71 89 72 85 74 75] (range)))

(defn- key-tracked-const []
  (let [const-node (a/constant)
        hz-listener #(set! (.-value (.-offset const-node)) %)
        event-listener #(-> %
                            .-keyCode
                            keymap
                            (+ 60)
                            note->hz
                            hz-listener)]
    (.addEventListener js/document "keydown" event-listener)
    const-node))

(defn- key-tracked-osc []
  (-> (a/sin-osc (key-tracked-const))
      (a/gain 0.05)
      (a/out)))

(defn- test-key-tracking []
  (let [c (async-midi/kb-chan)]
    (go
      (while true
        (.log js/console (<! c))))))


(defn start []
  (.log js/console "About to start")
  ;;  (play-simple-sample!)
  ;; (key-tracked-osc)
  (a2/play-synth!)
  (.log js/console "Started"))

(defn stop []
  (a/reset-audio!)
  (.log js/console "Stopped"))

(def samples
  ["audio/lcd.mp3"
   "audio/808_kick_short.wav"
   "audio/808_snare.wav"
   "audio/808_hat_closed.wav"])

(defn load-samples [samples]
  (doseq [sample samples]
    (a/load-sample sample)))

(defn- setup-button-listeners []
  (-> (.getElementById js/document "start")
      (.addEventListener "click" start))
  (-> (.getElementById js/document "stop")
      (.addEventListener "click" stop)))

(defn main []
  (a/init-audio!)
  (load-samples samples)
  ;;  (test-key-tracking)
  (setup-button-listeners))

(main)
