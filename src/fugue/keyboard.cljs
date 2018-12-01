(ns fugue.keyboard
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [fugue.audio :as a]
            [cljs.core.async :as async]))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(def key->offset ; from c
  (zipmap ["a" "w" "s" "e" "d" "f" "t" "g" "y" "h" "u" "j" "k" "l" "p"]
          (range)))

(defn keypress-x-midi [rf]
  "A stateful transducer that maps keypress events to midi events.
  (a) -> c, (w) -> c#, (s) -> d, ...
  (z) lowers one octave, (x) raises one octave"
 (let [voctave (volatile! 0)]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result keypress]
       (let [type (.-type keypress)
             key (.-key keypress)
             offset (key->offset key)]
         (if-not (nil? offset)
           (rf result (into {:note (+ 60 offset (* 12 @voctave))}
                            (case type
                              "keydown" {:type :note-on :velo 127}
                              "keyup" {:type :note-off :velo 0})))
           (when (= "keydown" type)
             (vswap! voctave (case key
                               "z" dec
                               "x" inc
                               identity))
             result)))))))

(defn make-kb-midi-chan []
  (let [c (async/chan 1 (comp (dedupe) keypress-x-midi))]
    (doseq [type ["keydown" "keyup"]]
      (.addEventListener js/document type (partial async/put! c)))
    c))

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

(defn test-mult [in-chan]
  (let [mult-chan (async/mult in-chan)
        ret-chan (async/chan)]
    (async/tap mult-chan ret-chan)
    ret-chan))

; (defn split [chan & xforms])

(defn midi->cv [midi]
  "Splits a midi channel to a hz channel and a gate [0, 1) channel"
  (let [midi-mult (async/mult midi)
        hz-chan (async/chan 1 midi-x-hz)
        gate-chan (async/chan 1 midi-x-gate)]
    (async/tap midi-mult hz-chan)
    (async/tap midi-mult gate-chan)
    {:hz hz-chan :gate gate-chan}))

(defn monitor-chan [prefix c]
  (go-loop []
    (let [x (async/<! c)]
      (print prefix (.toString x))
      (recur))))


