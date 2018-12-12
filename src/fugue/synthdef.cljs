(ns fugue.synthdef
  (:require [clojure.set :refer [union]]))

;; during assembly, the only params that are extracted are node params
;; during compilation, keyword params will be raised to the top level

(defn synthdef? [x]
  (:output-id x))

(defn create-empty []
  {:source-ids #{}
   :output-id nil
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
  (if (synthdef? modulator)
    (-> synthdef
        (absorb modulator)
        (update :connections conj {:from (:output-id modulator)
                                   :to node-id
                                   :param param-name}))
    (-> synthdef
        (update-in [:nodes node-id :audio-params param-name] conj modulator))))

(defn- add-node
  "Returns a new synthdef with nodedef added"
  [synthdef id nodedef]
  (let [params (:audio-params nodedef)
        node-without-aparams (assoc nodedef :audio-params [])
        synthdef (update synthdef :nodes assoc id node-without-aparams)]
    (reduce (fn [synthdef [param-name modulators]]
              (reduce (fn [synthdef modulator]
                        (process-modulator synthdef id param-name modulator))
                      synthdef
                      modulators))
            synthdef
            params)))

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


