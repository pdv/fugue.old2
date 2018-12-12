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

