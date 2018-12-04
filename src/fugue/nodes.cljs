(ns fugue.nodes
  (:require [goog.object :as o]
            [fugue.params :as p]))

(defn source-node
  [{:keys [constructor static-params params] :as input}]
  (fn [ctx]
    (let [node (constructor ctx)]
      (doseq [[name value] static-params]
        (o/set node (clj->js name) (clj->js value)))
      (doseq [[name modulators] params
              :let [param (o/get node (clj->js name))]
              modulator modulators]
        (p/attach! modulator ctx param))
      (.start node)
      node)))

(defn osc-def
  [type freq detune]
  {:constructor #(.createOscillator %)
   :static-params {:type type}
   :params {:frequency [0 freq]
            :detune [0 detune]}})

(defn osc
  ([type freq] (osc type freq 0))
  ([type freq detune]
   (source-node (osc-def type freq detune))))
