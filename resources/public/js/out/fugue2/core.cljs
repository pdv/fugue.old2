(ns fugue2.core
  (:require [fugue2.audio :as a]))

(.log js/console "Hello ")

(defn start-synth! []
  (-> (a/mix (a/saw 110 (a/lfo 0 0.5 30))
             (a/saw 220))
      (a/gain 0.2)
      (a/out)))

(defn start []
  (a/init-audio!)
  (start-synth!)
  (.log js/console "Started"))

(defn stop []
  (a/reset-audio!)
  (.log js/console "Stopped"))

(.addEventListener (.getElementById js/document "start") "click" start)
(.addEventListener (.getElementById js/document "stop") "click" stop)
