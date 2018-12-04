(ns fugue.engine
  (:require [goog.object :as o]))

(defprotocol Modulator
  (attach! [this param ctx at]))

(defn create-node
  "Recursively builds an AudioNode graph defined by the provided map.
  Any sources in the graph will be started at at.
  Returns the AudioNode defined by the root of the graph (the output)"
  [{:keys [in constructor static-params audio-params]} ctx at]
  (let [node (js-invoke ctx constructor)]
    (if in
      (.connect (create-node in ctx at) node)
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
  cljs.core/PersistentArrayMap
  (attach! [this param ctx at]
    (.connect (create-node this ctx at) param)))
