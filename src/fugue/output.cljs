(ns fugue.output
  (:require [goog.object :as o]
            [fugue.engine :as e]))

(defn play!
  ([synthdef] (play! synthdef (js/AudioContext.)))
  ([synthdef ctx] (play! synthdef ctx 0))
  ([synthdef ctx at]
   (cljs.pprint/pprint synthdef)
   (let [node (e/create-synth ctx at synthdef)
         dest (o/get ctx "destination")]
     (.connect node dest)
     ctx)))
