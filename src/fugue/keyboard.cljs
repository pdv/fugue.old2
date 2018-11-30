(ns fugue.keyboard
  (:require-macros [cljs.core.async :refer [go]])
  (:require [fugue.audio :as a]
            [cljs.core.async :as async :refer [chan <! put! close!]]))

(def keymap
  (zipmap [65 87 83 69 68 70 84 71 89 72 85 74 75] (range)))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(defn key-tracked-const []
  (let [const-node (a/constant)
        hz-listener #(set! (.-value (.-offset const-node)) %)
        event-listener #(-> %
                            .-keyCode
                            keymap
                            (+ 60)
                            note->hz
                            hz-listener)]
    (.addEventListener js/document "keydown" event-listener)
    const-node))

(defn <<< [f & args]
  (let [c (chan)]
    (apply f (concat args [(fn [x]
                             (if (nil? x)
                               (close! c)
                               (put! c x)))]))
    c))

(defn key-down-listener [cb]
  (.addEventListener js/document "keydown" cb))

(defn key-down-chan []
  (<<< key-down-listener))

(defn monitor-chan [c]
  (go (while true (.log js/console (<! c)))))


