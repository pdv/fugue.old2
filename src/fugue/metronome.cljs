(ns fugue.metronome)

(defn metronome
  "Returns a function:
  - 0 arity will produce a lazy seq of all the beat times
  - 1 arity (number) will return the time of that beat"
  ([bpm] (metronome bpm 0))
  ([bpm start]
   (fn nome
     ([] (map nome (range)))
     ([beat]
      (-> beat
          (/ bpm)
          (* 60)
          (+ start))))))
