(ns fugue.keyboard
  (:require-macros [cljs.core.async :refer [go]])
  (:require [fugue.audio :as a]
            [cljs.core.async :as async :refer [chan <! put! close! pipeline]]))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(def key->offset ; from c
  (zipmap ["a" "w" "s" "e" "d" "f" "t" "g" "y" "h" "u" "j" "k" "l" "p"]
          (range)))

(defn note-on
  ([note] (note-on note 127))
  ([note velocity]
   {:type :note
    :data {:note note
           :velocity 127}}))

(defn note-off [note]
  {:type :note
   :data {:note note
          :velocity 0}})

(defn keypress->midi [rf]
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
             offset (key->offset key)
             note (+ 60 offset (* 12 @voctave))]
         (.log js/console type key offset note)
         (if (not= offset nil)
           (rf result (case type
                        "keydown" (note-on note 127)
                        "keyup" (note-off note)))
           (do
             (when (and (= type "keydown") (= key "z"))
               (vswap! voctave dec))
             (when (and (= type "keydown") (= key "x"))
               (vswap! voctave inc))
             result)))))))

(defn kb-midi-chan []
  (let [c (chan 1 (comp (dedupe) keypress->midi))]
    (doseq [type ["keydown" "keyup"]]
      (.addEventListener js/document type (partial put! c)))
    c))

(defn kb-hz-chan []
  (async/map (comp note->hz :note) [(kb-midi-chan)]))

(defn monitor-chan [c]
  (go (while true (.log js/console (.toString (<! c))))))


