(ns fugue.core
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.audio :as a]
            [fugue.async :as fasync]
            [fugue.envelope :as e]
            [fugue.cv :as cv]
            [fugue.metronome :as m]
            [fugue.keyboard :as kb]))

;;; Examples

(defn synth [hz-chan]
  (-> (a/saw hz-chan)
      (a/lpf (a/lfo 880 2 300) 1.3)))

(defn effect [in]
  (-> in
      (a/lpf 440 1.2)
      (a/hpf 990 2.0)))

(defn midi-synth [midi-chan]
  (let [{hz-chan :hz
         gate-chan :gate} (cv/midi->cv midi-chan)
        [hz1 hz2] (cv/fork hz-chan)
        env (e/env-gen (e/perc 0.03 1) gate-chan)
        f-env (a/+ 2 (a/* env 8000))]
    (-> (a/+ (a/saw hz1)
             (a/saw (a/* 2.5 hz2)))
        (a/lpf f-env)
        (a/gain 0.6))))

;;; Demo

(defonce ctx (atom nil))

(defn start! []
  (print "Starting")
  (reset! ctx (a/play! (midi-synth (kb/make-kb-midi-chan))))
  (print "Started"))

(defn stop! []
  (.close @ctx)
  (print "Stopped"))

(defn- bind-clicks [id cb]
  (-> (.getElementById js/document (clj->js id))
      (.addEventListener "click" cb)))

(defn main []
  (bind-clicks :start start!)
  (bind-clicks :stop stop!))

(main)
