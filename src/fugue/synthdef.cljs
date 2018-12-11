(ns fugue.synthdef)

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
  "I think merge-with conj would work if not for output-id"
  [synthdef other-synthdef]
  (-> synthdef
      (update :source-ids merge (:source-ids other-synthdef))
      (update :nodes merge (:nodes other-synthdef))
      (update :connections merge (:connections other-synthdef))))

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


(defn- process-param
  [synthdef node-id param-name modulators]
  (reduce (fn [synthdef modulator]
            (process-modulator synthdef node-id param-name modulator))
          (assoc-in synthdef [:nodes node-id :audio-params param-name] [])
          modulators))

(defn- add-node
  "Returns a new synthdef with nodedef added"
  [synthdef id nodedef]
  (let [id (random-uuid)
        params (:audio-params nodedef)
        node-without-aparams (assoc nodedef :audio-params [])
        synthdef (update synthdef :nodes assoc id node-without-aparams)]
    (reduce (fn [synthdef [param-name modulators]]
              (process-param synthdef id param-name modulators))
            (update synthdef :nodes assoc id node-without-aparams)
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


