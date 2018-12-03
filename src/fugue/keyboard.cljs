(ns fugue.keyboard
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]))

(def key->offset ; from c
  (zipmap ["a" "w" "s" "e" "d" "f" "t" "g" "y" "h" "u" "j" "k" "l" "p"]
          (range)))

(defn keypress-x-midi
  "Returns a stateful transducer that maps keypress events to midi events.
  (a) -> c, (w) -> c#, (s) -> d, ...
  (z) lowers one octave, (x) raises one octave"
  ([] (keypress-x-midi 4))
  ([octave]
   (fn [rf]
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
                (vswap! voctave (case key "z" dec "x" inc identity))
                result)))))))))

(defn make-kb-midi-chan []
  (let [c (async/chan 1 (keypress-x-midi))]
    (doseq [type ["keydown" "keyup"]]
      (.addEventListener js/document type (partial async/put! c)))
    c))

