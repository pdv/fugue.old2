(ns fugue.core
  (:require-macros [cljs.core.async
                    :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.nodes :as a]
            [fugue.envelope :as e]
            [fugue.cv :as cv]
            [fugue.metronome :as m]
            [fugue.keyboard :as kb]
            [fugue.scheduling :as s]
            [fugue.output :as out]
            [fugue.synthdef :as synthdef]
            [fugue.synth-builder :as builder]))

(defn play-repeated-pluck! [bpm]
  (let [gate (take 30 (m/four-on-floor bpm 1))
        env-fn (e/perc 0.03 0.03)
        env (into [] (e/gate-x-curve (e/perc 0.2 0.4)) gate)]
        ; filter-env (a/+ 2 (a/* env 8000))]
    (-> (a/+ (a/saw 220)
             (a/saw 440))
        (a/gain env)
        (out/play!))))

(defn steel-drum [freq gate]
  (a/* (e/env-gen (e/perc 0.01 0.2) gate)
       (a/+ (a/sin-osc (a/* freq 0.5))
            (-> (a/saw freq)
                (a/lpf (a/* freq 1.1) 0.4)))))

(defn synth [freq gate]
  (let [env (e/env-gen (e/adsr 1 2 0.3 0.6) gate)
        filter-env (a/+ 2 (a/* 8000 env))]
    (-> (a/+ (a/saw freq)
             (a/saw (a/* 1.5 freq)))
        (a/lpf filter-env)
        (a/simple-delay)
        (a/gain 0.6))))

(defn simp []
  (-> (a/sin-osc 440)
      (a/simple-delay)))

(defn midify
  "synth is a (freq, gate) -> node fn"
  [synth midi]
  (let [midi-mult (async/mult midi)
        freq-cv (s/ControlVoltage. midi-mult cv/midi-x-hz)
        gate-cv (s/ControlVoltage. midi-mult cv/midi-x-gate)]
    (synth freq-cv gate-cv)))

;;;

(def sdef
  (synthdef/effect (synthdef/source {:constructor "createOscillator"
                                     :static-params {"type" "sawtooth"}
                                     :audio-params {"frequency" [440 :freq]}})
                   {:constructor "createGain"
                    :audio-params {"gain" [0.1]}}))

;;; Demo

(defonce ctx (atom nil))

(defn start! []
  (print "Starting")
  (reset! ctx (js/AudioContext.))
  (let [synth (builder/play! sdef @ctx)]
    (builder/ctrl! synth :freq 820)
    (print "Started")))

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
