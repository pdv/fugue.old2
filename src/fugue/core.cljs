(ns fugue.core
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.audio2 :as a]
            [fugue.keyboard :as kb]))

;;; Examples

(def synth
  (-> (a/saw 440)
      (a/lpf (a/lfo 880 0.2 300) 1.3)))

(defn effect [in]
  (-> in
      (a/lpf 440 1.2)
      (a/hpf 990 2.0)))

(defn play-synth! []
  (-> synth a/play!))

;;; Demo

(defonce ctx (atom nil))

(defn start []
  (.log js/console "Starting")
  (reset! ctx (play-synth!))
  (.log js/console "Started"))

(defn stop []
  (.close @ctx)
  (.log js/console "Stopped"))

(defn- clicks! [id cb]
  (-> (.getElementById js/document (clj->js id))
      (.addEventListener "click" cb)))

(defn main []
  (clicks! :start start)
  (clicks! :stop stop)
  (kb/monitor-chan (kb/key-down-chan)))

(main)

