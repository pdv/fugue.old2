(ns fugue.synthdef
  (:require [clojure.set :refer [union]]))

;; during assembly, the only params that are extracted are node params
;; during compilation, keyword params will be raised to the top level

(defn- synthdef? [x]
  (:output-id x))

(defn- create-empty []
  {:source-ids #{}
   :output-id nil
   :params {}
   :nodes {}
   :connections #{}})

(defn- absorb
  [synthdef other-synthdef]
  (-> synthdef
      (update :source-ids union (:source-ids other-synthdef))
      (update :nodes merge (:nodes other-synthdef))
      (update :connections union (:connections other-synthdef))))

(defn- process-modulator
  "If a modulator is a synthdef, merge it into synthdef.
  Otherwise, add it to the list of modulators on the nodedef."
  [synthdef node-id param-name modulator]
  (condp #(%1 %2) modulator
    synthdef?
    (-> synthdef
        (absorb modulator)
        (update :connections conj {:from (:output-id modulator)
                                   :to node-id
                                   :param param-name}))
    number?
    (-> synthdef
        (update-in [:nodes node-id :audio-params param-name] conj modulator))
    ;; else
    (-> synthdef
        (update-in [:params modulator] conj {:node-id node-id
                                             :param-name param-name}))))

(defn- add-node
  "Returns a new synthdef with nodedef added"
  [synthdef node-id nodedef]
  (let [mod-processor #(apply process-modulator %1 node-id %2)
        init (update synthdef :nodes assoc node-id (assoc nodedef :audio-params {}))
        modulators (for [[param-name modulators] (:audio-params nodedef)
                         modulator modulators]
                     [param-name modulator])]
    (reduce mod-processor init modulators)))

(defn source [nodedef]
  (let [id (random-uuid)]
    (-> (create-empty)
        (add-node id nodedef)
        (update :source-ids conj id)
        (assoc :output-id id))))

(defn effect [synthdef nodedef]
  (let [id (random-uuid)]
    (-> synthdef
        (add-node id nodedef)
        (assoc :output-id id)
        (update :connections conj {:from (:output-id synthdef) :to id}))))

