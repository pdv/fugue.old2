(ns fugue.core
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.audio2 :as a]
            [fugue.async :as fasync]
            [fugue.keyboard :as kb]))

;;; Examples

(def synth
  (-> (a/saw (kb/kb-hz-chan))
      (a/lpf (a/lfo 880 2 300) 1.3)))

(defn effect [in]
  (-> in
      (a/lpf 440 1.2)
      (a/hpf 990 2.0)))

;;; Demo

(defonce ctx (atom nil))

(defn start []
  (.log js/console "Starting")
  ;; (reset! ctx (a/play! synth))
  (kb/monitor-chan (kb/kb-midi-chan))
  (.log js/console "Started"))

(defn stop []
  (.close @ctx)
  (.log js/console "Stopped"))

(defn- clicks! [id cb]
  (-> (.getElementById js/document (clj->js id))
      (.addEventListener "click" cb)))

(defn main []
  (clicks! :start start)
  (clicks! :stop stop))

(main)

