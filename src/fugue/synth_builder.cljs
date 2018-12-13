(ns fugue.synth-builder
  (:require [goog.object :as o]))

(defn- new-synth [synthdef]
  (-> (select-keys synthdef [:source-ids :output-id :connections])
      (assoc :nodes {})
      (assoc :params {})))

(defn- process-modulator
  "If modulator is a number, set it. Otherwise, add {modulator: param} to :params"
  [synth node param modulator]
  (if (number? modulator)
    (do
      (o/set param "value" modulator)
      synth)
    (update synth :nodes assoc modulator param)))

(defn- process-param
  [synth node param-name modulators]
  (let [param (o/get node param-name)]
    (reduce (fn [synth modulator]
              (process-modulator synth node param modulator))
            synth
            modulators)))

(defn- create-node [synth ctx id nodedef]
  (let [node (js-invoke ctx (:constructor nodedef))]
    (doseq [[name value] (:static-params nodedef)]
      (o/set node name value))
    (reduce (fn [synth [param-name modulators]]
              (process-param synth node param-name modulators))
            (update synth :nodes assoc id node)
            (:audio-params nodedef))))

(defn- create-nodes [synth ctx nodes]
  (reduce (fn [synth [node-id nodedef]]
            (create-node synth ctx node-id nodedef))
          synth
          nodes))

(defn- make-connections [synth]
  (doseq [{:keys [from to param]} (:connections synth)
          :let [nodes (:nodes synth)
                from-node (nodes from)
                to-node (nodes to)
                dest (if param (o/get to-node param) to-node)]]
    (.connect from-node dest))
  synth)

(defn create-synth [ctx synthdef]
  (-> synthdef
      new-synth
      (create-nodes ctx (:nodes synthdef))
      make-connections))

(defn start [synth at]
  (doseq [source-node (map #((:nodes synth) %) (:source-ids synth))]
    (.start source-node at)))

(defn out [synth ctx]
  (let [node ((:nodes synth) (:output-id synth))
        dest (o/get ctx "destination")]
    (.connect node dest)))
