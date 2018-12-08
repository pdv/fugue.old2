(ns fugue.engine
  (:require [goog.object :as o]))

(defprotocol Modulator
  (attach! [this param ctx at]))

(defn create-node
  "Recursively builds an AudioNode graph defined by the provided nodedef.
  Any sources in the graph will be started at at.
  Returns the AudioNode defined by the root of the graph (the output)"
  [nodedef ctx at]
  (let [node (js-invoke ctx (:constructor nodedef))]
    (if-let [in (:in nodedef)]
      (.connect (create-node in ctx at) node)
      (.start node at))
    (doseq [[name value] (:static-params nodedef)]
      (o/set node name value))
    (doseq [[name modulators] (:audio-params nodedef)
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
