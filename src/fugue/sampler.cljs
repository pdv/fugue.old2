(ns fugue.sampler
  (:require [fugue.audio :as a]))

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

(def samples
  ["audio/lcd.mp3"
   "audio/808_kick_short.wav"
   "audio/808_snare.wav"
   "audio/808_hat_closed.wav"])

(defn load-samples [samples]
  (doseq [sample samples]
    (a/load-sample sample)))

