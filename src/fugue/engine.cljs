(ns fugue.engine
  (:require [goog.object :as o]))

(defprotocol Modulator
  (attach! [modulator param ctx at]))

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
  (attach! [modulator param ctx at]
    (o/set param "value" modulator))
  map
  (attach! [modulator param ctx at]
    (.connect (build-node modulator ctx at) param)))

