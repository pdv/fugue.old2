(ns fugue.synthdef-test
  (:require [fugue.synthdef :as sut]
            [cljs.test :as t :refer-macros [deftest]]))

(deftest test-source
  (let [src (sut/source {:constructor "createOscillator"})
        id (:output-id src)]
    (print src)
    (t/is (= #{id} (:source-ids src)))
    (t/is (empty? (:connections src)))
    (t/is (= {:constructor "createOscillator",
              :audio-params []}
             ((:nodes src) id)))))

(def basic-synthdef
  {:source-ids #{"abc"}
   :output-id "abc"
   :nodes {"abc" {:constructor "createOscillator"}}
   :connections #{}})

(deftest test-effect
  (let [effect-def {:constructor "createGain" :audio-params []}
        synthdef (sut/effect basic-synthdef effect-def)
        id (:output-id synthdef)]
    (print synthdef)
    (t/is (= #{"abc"} (:source-ids synthdef)))
    (t/is (= effect-def ((:nodes synthdef) id)))
    (t/is (= #{{:from "abc" :to id}} (:connections synthdef)))))
