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

(defn start []
  (play-loop pattern 40)
  (.log js/console "Started"))

(defn stop []
  (a/reset-audio!)
  (.log js/console "Stopped"))

(def samples
  ["audio/808_kick_short.wav"
   "audio/808_snare.wav"
   "audio/808_hat_closed.wav"])

(defn load-samples [samples]
  (doseq [sample samples]
    (a/load-sample sample)))

(a/init-audio!)
(load-samples samples)

(-> (.getElementById js/document "start")
    (.addEventListener "click" start))

(-> (.getElementById js/document "stop")
    (.addEventListener "click" stop))
