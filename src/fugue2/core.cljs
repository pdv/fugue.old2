(ns fugue2.core
  (:require [fugue2.audio :as a]))

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

(defn feedback [src mod]
  (a/sin-osc ))

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

(defn start []
  (test-sample)
  (.log js/console "Started"))

(defn stop []
  (a/reset-audio!)
  (.log js/console "Stopped"))

(a/init-audio!)
(a/load-sample "audio/red.wav")
(a/load-sample "audio/orange.wav")

(-> (.getElementById js/document "start")
    (.addEventListener "click" start))

(-> (.getElementById js/document "stop")
    (.addEventListener "click" stop))
