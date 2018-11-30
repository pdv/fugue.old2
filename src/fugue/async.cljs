(ns fugue.async
  (:require-macros [cljs.core.async :refer [go]])
  (:require [cljs.core.async :as async :refer [<!]]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [fugue.audio2 :as a]))

(extend-protocol a/Modulator
  ManyToManyChannel
  (modulate [modulator ctx param]
    (go-loop []
      (let [mod (<! modulator)]
        (.log js/console mod)
        (a/modulate (<! mod) ctx param)
        (recur))))))
