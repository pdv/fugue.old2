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
  "Naive monophonic algorithm"
  (comp
   (map :velo)
   (dedupe)
   (map #(/ % 128))))

(defn fork
  "Returns a list of new channels forked from chan with optional
  transducers applied"
  ([chan] (fork chan (map identity)))
  ([chan xform] (fork chan (map identity) xform))
  ([chan xform & xforms]
   (let [mult (async/mult chan)
         new-chans (map (partial async/chan 1) (cons xform xforms))]
     (doseq [new-chan new-chans]
       (async/tap mult new-chan))
     new-chans)))

(defn midi->cv [midi-chan]
  "Splits a midi channel to a hz channel and a gate [0, 1) channel"
  (let [[hz gate] (fork midi-chan midi-x-hz midi-x-gate)]
    {:hz hz :gate gate}))
