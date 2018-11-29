(defproject fugue2 "0.1.0-SNAPSHOT"
  :description "Fugue 2.0: ConstantSourceNode"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]]
  :plugins [[lein-figwheel "0.5.15"]]
  :cljsbuild {
    :builds [{:id "fugue2"
              :source-paths ["src/"]
              :figwheel true
              :compiler {:main "fugue2.core"
                         :asset-path "js/out"
                         :output-to "resources/public/js/fugue.js"
                         :output-dir "resources/public/js/out"}}]})

