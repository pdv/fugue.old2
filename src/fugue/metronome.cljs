(ns fugue.metronome)

(defn metronome [ctx bpm]
  (let [start (.-currentTime ctx)]
    (fn
      ([]
       (-> (.-currentTime ctx)
           (- start)
           (/ 60)
           (* bpm)))
      ([beat]
       (-> beat
           (/ bpm)
           (* 60)
           (+ start))))))
