(ns ^:figwheel-always fugue.test-runner
  (:require [fugue.core-test]
            [fugue.synthdef-test]
            [cljs.test :refer-macros [run-tests]]))

(cljs.test/run-tests 'fugue.core-test
                     'fugue.synthdef-test)

