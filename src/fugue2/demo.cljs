(ns fugue2.demo)

(defn metronome [bpm])
(defn start [metronome])
(defn pause [metronome])

(defn adsr [a d s r])

(def kb-input
  {:note (chan)
   :velo (chan)})

(defn synth [input]
  (let [freq (input :note)])
  (-> (sin-osc (input :note))
      (gain (input :velo))))

(def env-example
  {:node "this is the node"
   :open (fn []
           )
   :close (fn []
            )})
