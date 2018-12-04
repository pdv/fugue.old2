(ns fugue.core
  (:require-macros [cljs.core.async
                    :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.nodes :as a]
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
  (let [{:keys [hz gate]} (cv/midi->cv midi-chan)
        [hz1 hz2] (cv/fork hz)
        env (e/env-gen (e/adsr 0.03 0.3 0.5 0.3) gate)
        f-env (a/+ 2 (a/* env 8000))]
    (-> (a/+ (a/saw hz1)
             (a/saw (a/* 2.5 hz2)))
        (a/lpf f-env)
        (a/gain 0.6))))

(defn basic-synth []
  (-> (a/saw 440)
      (a/lpf 22)))

;;; Demo

(defonce ctx (atom nil))

(defn start! []
  (print "Starting")
  (a/play! (basic-synth))
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
