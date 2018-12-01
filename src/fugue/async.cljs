(ns fugue.async
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [fugue.audio2 :as a]))

(extend-protocol a/Modulator
  ManyToManyChannel
  (modulate [modulator ctx param]
    (go-loop []
      ;; Why does this not work?
      ;; (a/modulate value ctx param)
      (set! (.-value param) (<! modulator))
      (recur))))
