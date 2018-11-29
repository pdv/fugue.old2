(ns fugue2.async
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :refer [chan >! pipeline]]))

(defn kb-chan []
  (let [c (chan)]
    (.addEventListener js/document "keydown" #(go (>! c %)))
    c))

