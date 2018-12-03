(ns fugue.async
  (:require-macros [cljs.core.async :refer [go-loop]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [fugue.audio :as a]))

(extend-protocol a/Modulator
  ManyToManyChannel
  (modulate! [modulator ctx param]
    (go-loop []
      ;; (a/modulate value ctx param)
      (set! (.-value param) (async/<! modulator))
      (recur))))

(defn fork
  "Returns a list of new channels forked from chan with optional
  transducers applied"
  ([chan] (fork chan (map identity)))
  ([chan xform] (fork chan (map identity) xform))
  ([chan xform & xforms]
   (let [mult (async/mult chan)
         new-chans (map (partial async/chan 1) (cons xform xforms))]
     (doseq [new-chan new-chans]
       (async/tap mult new-chan))
     new-chans)))
