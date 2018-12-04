(ns fugue.cv
  (:require [cljs.core.async :as async]))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(def midi-x-hz
  (comp
   (filter #(= :note-on (:type %)))
   (map :note)
   (dedupe)
   (map note->hz)))

(def midi-x-gate
  "Naive monophonic algorithm, outputs [0, 1)"
  (comp
   (map :velo)
   (dedupe)
   (map #(/ % 128))))

(defn fork
  "Returns a list of copies of chan with optional xforms applied.
  1-arity return two new channels mult'ed from chan untransformed.
  n-arity returns n new channels mult'ed from chan with xforms applied.
  Do not read from chan after calling this."
  ([chan] (fork chan (map identity) (map identity)))
  ([chan & xforms]
   (let [mult (async/mult chan)
         new-chans (map (partial async/chan 1) xforms)]
     (doseq [new-chan new-chans]
       (async/tap mult new-chan))
     new-chans)))
