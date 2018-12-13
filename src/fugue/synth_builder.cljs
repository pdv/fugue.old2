(ns fugue.synth-builder
  (:require [goog.object :as o]))

(defn- create-node
  [ctx nodedef]
  (let [node (js-invoke ctx (:constructor nodedef))]
    (doseq [[name value] (:static-params nodedef)]
      (o/set node name value))
    (doseq [[name values] (:audio-params nodedef)
            :let [param (o/get node name)]
            value values]
      (o/set param "value" value))
    node))

(defn- connect! [synth]
  (doseq [{:keys [from to param]} (:connections synth)
          :let [nodes (:nodes synth)
                from-node (nodes from)
                to-node (nodes to)
                dest (if param (o/get to-node param) to-node)]]
    (.connect from-node dest)))

(defn update-values [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn create-synth [ctx synthdef]
  (let [node-factory (partial create-node ctx)
        synth (update synthdef :nodes update-values node-factory)]
    (connect! synth)
    synth))

(defn start! [synth at]
  (doseq [source-node (map #((:nodes synth) %) (:source-ids synth))]
    (.start source-node at)))

(defn connect-to-destination! [synth ctx]
  (let [node ((:nodes synth) (:output-id synth))
        dest (o/get ctx "destination")]
    (.connect node dest)))

(defn play! [synthdef]
  (let [ctx (js/AudioContext.)
        synth (create-synth ctx synthdef)]
    (connect-to-destination! synth ctx)
    (start! synth 0)
    ctx))
