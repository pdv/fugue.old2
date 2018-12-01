(ns fugue.core
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [fugue.audio2 :as a]
            [fugue.async :as fasync]
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
         gate-chan :gate} (kb/midi->cv midi-chan)]
    (-> (a/saw hz-chan)
        (a/gain gate-chan))))

;;; Demo

(defonce ctx (atom nil))

(defn start! []
  (.log js/console "Starting")
  (a/play! (midi-synth (kb/make-kb-midi-chan)))
  (.log js/console "Started"))

(defn stop! []
  (.close @ctx)
  (.log js/console "Stopped"))

(defn- bind-clicks [id cb]
  (-> (.getElementById js/document (clj->js id))
      (.addEventListener "click" cb)))

(defn main []
  (bind-clicks :start start!)
  (bind-clicks :stop stop!))


(main)

(comment
  (defn every-function-ever [dep1 dep2 dep3]
    (let [foo (fn1 dep1)
          bar (fn2 dep2)]
      (fn3! dep3)
      (+ foo bar)))
)
