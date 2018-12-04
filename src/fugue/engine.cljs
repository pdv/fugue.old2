(ns fugue.engine
  (:require [goog.object :as o]))

(defprotocol Modulator
  (attach! [this param ctx at]))

(defn build-node
  "Returns the AudioNode defined by the provided def starting at at"
  [{:keys [in constructor static-params audio-params]} ctx at]
  (let [node (js-invoke ctx constructor)]
    (if in
      (.connect (build-node in ctx at) node)
      (.start node at))
    (doseq [[name value] static-params]
      (o/set node name value))
    (doseq [[name modulators] audio-params
            :let [param (o/get node name)]
            modulator modulators]
      (attach! modulator param ctx at))
    node))

(extend-protocol Modulator
  number
  (attach! [this param ctx at]
    (o/set param "value" this))
  map
  (attach! [this param ctx at]
    (.connect (build-node this ctx at) param)))

(defn play!
  ([synth-def] (play! synth-def (js/AudioContext.)))
  ([synth-def ctx] (play! synth-def ctx 0))
  ([synth-def ctx at]
   (cljs.pprint/pprint synth-def)
   (let [node (build-node synth-def ctx at)
         dest (o/get ctx "destination")]
     (.connect node dest))))
