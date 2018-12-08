(ns fugue.cv
  (:require [cljs.core.async :as async]))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

;; note priority is [note] -> note
;; low, high, last, first

(defn midi-x-note
  "Returns a stateful transducer that maps midi events to midi notes based on
  priority-fn, which selects from a list of notes currently down."
  [priority-fn]
  (fn [rf]
    (let [v-down (volatile! [])]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result midi]
         (let [op (if (= :note-on (:type midi)) conj disj)
               down (op @v-down (:note midi))]
           (vreset! v-down down)
           (rf result (priority-fn down))))))))

(def midi-x-hz
  (comp
   (midi-x-note last)
   (map note->hz)
   ;; TODO fix this
   (map (fn [hz]
          {:ramps [{:target hz :shape :instant :duration 0}]}))))


(def midi-x-gate
  "Naive monophonic algorithm, outputs [0, 1)"
  (comp
   (map :velo)
   (dedupe)
   (map #(/ % 128))
   ;; TODO deal with this
   (map (fn [l] {:level l}))))

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
