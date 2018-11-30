(ns fugue.async
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [fugue.audio2 :as a]))

(extend-protocol a/Modulator
  ManyToManyChannel
  (modulate [modulator ctx param]
    (go-loop []
      (let [value (<! modulator)]
        (.log js/console value)
        (set! (.-value param) value)
        ;; Why does this not work?
        ;; (a/modulate (<! value) ctx param)
        (recur)))))
