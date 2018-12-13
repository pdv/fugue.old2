(ns fugue.synth-builder
  (:require [goog.object :as o]))

(defn empty-synth []
  {:source-ids ${}
   :output-id nil
   :nodes {}
   :connections {}
   :params {}})

(defn create-modulator
  "If modulator is a number, set it. Otherwise, add {modulator: param} to :params"
  [synth node param modulator]
  (if (number? modulator)
    (do
      (o/set param "value" modulator)
      synth)
    (update synth :nodes assoc modulator param)))

(defn create-node [synth ctx nodedef]
  (let [{:keys [id constructor audio-params]} nodedef
        node (js-invoke ctx constructor)
        synth (update synth :nodes assoc id node)]
    (doseq [[name value] (:static-params nodedef)]
      (o/set node name value))
    (reduce (fn [synth [param-name modulators]]
              (let [param (o/get node name)]
                (reduce (fn [synth modulator]
                          (create-modulator synth node param modulator))
                        synth
                        modulators)))
            synth
            (:audio-params nodedef))))

(defn create-synth [ctx synthdef]
  (let [synth (-> (select-keys synthdef [:source-ids :output-id :connections])
                  (assoc :nodes {})
                  (assoc :params {}))]
    (reduce (fn [synth nodedef]
              (create-node synth ctx nodedef))
            synth
            (:nodes synthdef))))

(defn start [synth at]
  (doseq [source-node (map #((:nodes synth) %) (:source-ids synth))]
    (.start source-node at)))

(defn out [synth ctx]
  (let [node ((:nodes synth) (:output-id synth))
        dest (o/get ctx "destination")]
    (.connect node dest)))
