(ns fugue.cv
  (:require [cljs.core.async :as async]))

(defn note->hz [note]
  (-> note
      (- 69)
      (/ 12)
      (partial js/Math.pow 2.0)
      (* 444.0)))

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
  chan should be considered put-only after calling fork."
  ([chan] (fork chan (map identity) (map identity)))
  ([chan & xforms]
   (let [mult (async/mult chan)
         new-chans (map (partial async/chan 1) xforms)]
     (doseq [new-chan new-chans]
       (async/tap mult new-chan))
     new-chans)))

(defn midi->cv [midi-chan]
  "Splits a midi channel to a hz channel and a gate [0, 1) channel"
  (let [[hz gate] (fork midi-chan midi-x-hz midi-x-gate)]
    {:hz hz :gate gate}))
