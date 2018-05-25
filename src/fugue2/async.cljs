(ns fugue2.async
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :refer [chan >!]]))

(defn kb-midi-chan []
  (let [c (chan)]
    (.addEventListener js/document "keydown" #(go (>! c %)))
    c))

