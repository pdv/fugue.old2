(ns fugue.output
  (:require [goog.object :as o]
            [fugue.engine :as e]))

(defn play!
  ([synth-def] (play! synth-def (js/AudioContext.)))
  ([synth-def ctx] (play! synth-def ctx 0))
  ([synth-def ctx at]
   (cljs.pprint/pprint synth-def)
   (let [node (e/build-node synth-def ctx at)
         dest (o/get ctx "destination")]
     (.connect node dest)
     ctx)))
