(ns fugue.engine
  (:require [goog.object :as o]))

(defprotocol Modulator
  (attach! [this param ctx at]))

(defn create-node
  "Recursively builds an AudioNode graph defined by the provided nodedef.
  Any sources in the graph will be started at at.
  Returns the AudioNode defined by the root of the graph (the output)"
  [ctx at nodedef]
  (let [node (js-invoke ctx (:constructor nodedef))]
    (doseq [[name value] (:static-params nodedef)]
      (o/set node name value))
    (doseq [[name modulators] (:audio-params nodedef)
            :let [param (o/get node name)]
            modulator modulators]
      (attach! modulator param ctx at))
    node))

(defn create-synth
  [ctx at synthdef]
  (let [node-factory (partial create-node ctx at)
        nodedefs (:nodes synthdef)
        nodes (reduce #(update % %2 node-factory) nodedefs (keys nodedefs))
        source-node (nodes (:source-id synthdef))
        output-node (nodes (:output-id synthdef))]
    (doseq [{:keys [from to]} (:connections synthdef)]
      (.connect (nodes from) (nodes to)))
    (.start source-node at)
    output-node))

(extend-protocol Modulator
  number
  (attach! [this param ctx at]
    (o/set param "value" this))
  cljs.core/PersistentArrayMap
  (attach! [this param ctx at]
    (.connect (create-synth ctx at this) param)))
