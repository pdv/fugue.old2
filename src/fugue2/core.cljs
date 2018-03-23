(ns fugue2.core
  (:require [fugue2.audio :as a]))

(.log js/console "Hello ")

(defn start []
  (a/init-audio!)
  (-> (a/sin-osc 440)
      (a/gain 0.3)
      (a/gain (a/lfo 1 2 0.3))
      (a/out))
  (.log js/console "Started"))

(defn stop []
  (a/reset-audio!)
  (.log js/console "Stopped"))

(.addEventListener (.getElementById js/document "start") "click" start)
(.addEventListener (.getElementById js/document "stop") "click" stop)
