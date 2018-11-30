(ns fugue.keyboard
  (:require-macros [cljs.core.async :refer [go]])
  (:require [fugue.audio :as a]
            [cljs.core.async :as async :refer [chan <! put! close! pipeline]]))

;; to offset from C
(def keymap
  (zipmap [65 87 83 69 68 70 84 71 89 72 85 74 75] (range)))

(defn key-code->note [key-code]
  (+ 60 (keymap key-code)))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(defn key-tracked-const []
  (let [const-node (a/constant)
        hz-listener #(set! (.-value (.-offset const-node)) %)
        event-listener #(-> %
                            .-keyCode
                            key-code->note
                            note->hz
                            hz-listener)]
    (.addEventListener js/document "keydown" event-listener)
    const-node))

(defn cb->chan [f & args]
  (let [c (chan)]
    (apply f (concat args [(fn [x]
                             (if (nil? x)
                               (close! c)
                               (put! c x)))]))
    c))

(defn key-down-listener [cb]
  (.addEventListener js/document "keydown" cb))

(defn key-down-chan []
  (cb->chan key-down-listener))

(defn kb-hz-chan []
  (let [hz-chan (chan)
        kd-chan (key-down-chan)]
    (pipeline
     4
     hz-chan
     (map #(-> %
               .-keyCode
               key-code->note
               note->hz))
     kd-chan)
    hz-chan))

(defn monitor-chan [c]
  (go (while true (.log js/console (<! c)))))


