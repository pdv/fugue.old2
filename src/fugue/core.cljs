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
            [fugue.output :as out]))

;;; Examples

(defn synth [hz-chan]
  (-> (a/saw hz-chan)
      (a/lpf (a/lfo 880 2 300) 1.3)))

(defn effect [in]
  (-> in
      (a/lpf 440 1.2)
      (a/hpf 990 2.0)))

(defn midi-x-sched [env-fn]
  (comp
   cv/midi-x-gate
   (e/gate-x-sched env-fn)))

(defn four-on-floor
  "Returns a lazy sequence of {:time :value}"
  [bpm value]
  (let [nome (m/metronome bpm)]
    (map #(into {} {:time % :value value}) (nome))))

(defn play-repeated-pluck! [bpm]
  (let [gate (take 30 (four-on-floor bpm 1))
        env-fn (e/perc 0.03 0.03)
        env (into [] (e/gate-x-sched (e/perc 0.07 0.1)) gate)]
        ; filter-env (a/+ 2 (a/* env 8000))]
    (-> (a/+ (a/saw 220)
             (a/saw 440))
        (a/gain env)
        (out/play!))))

(defn play-midi-synth! [midi-chan]
  (let [[hz gate] (cv/fork midi-chan cv/midi-x-hz cv/midi-x-gate)
        [hz1 hz2] (cv/fork hz)
        [env] (cv/fork gate (e/gate-x-sched (e/adsr 0.03 0.3 0.5 0.3)))
        filter-env (a/+ 2 (a/* env 8000))]
    (-> (a/+ (a/saw hz1)
             (a/saw (a/* 2.5 hz2)))
        (a/lpf filter-env)
        (a/gain 0.6)
        (out/play!))))

(defn basic-synth []
  (-> (a/saw 440)
      (a/lpf 220)))

;;; Demo

(defonce ctx (atom nil))

(defn start! []
  (print "Starting")
;  (reset! ctx (play-repeated-pluck! 120))
  (reset! ctx (play-midi-synth! (kb/kb-midi-chan)))
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
