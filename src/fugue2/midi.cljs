(ns fugue2.midi)

;; fugue - a cljs bootstrapped music programming environment

(defn demo-synth []
  (let [midi-in (midi/in "Oxygen 49")
        freq (midi/note->cv :freq midi-in)
        velo (midi->cv :velo midi-kb)]
    (-> (saw freq)
        (gain velo))))

(defn note->hz [note]
  (* 440.0 (js/Math.pow 2.0 (/ (- note 69.0) 12.0))))

(def msg-type
  {144 :note
   128 :note
   224 :bend
   176 :ctrl})

(defn event->msg
  "Converts a MIDIMessageEvent into a midi message"
  [e]
  (let [js-arr (.from js/Array (.-data e))
        [status note velocity] (js->clj js-arr)]
    {:type (msg-type (bit-and status 0xf0))
     :note note
     :velocity velocity}))

(defn note->cv
  [ctx midi-in channel type]
  (let [const-node (.createConstantSource ctx)]
    (set! (.-onmidimessage midi-in)
          (fn [event]
            (let [msg (event->msg event)]
              (when (eq (:type msg) type)
                (set! (.-offset const-node) (:note msg))))))
    const-node))

(defonce ins (atom []))
(defonce outs (atom []))

(defn in [name]
  (some #(eq name (.-name %)) ins)

(defn out [name]
  (some #(eq name (.-name %)) outs))

(defn- maplike->seq
  "The Web MIDI Api uses 'maplike' for its MIDIInputMap and MIDIOutputMap"
  [m]
  (js->clj (.from js/Array (.values m))))

(defn- open-ports! [midi-access]
  (reset! ins (maplike-seq (.-inputs midi-access)))
  (reset! outs (maplike-seq (.-outputs midi-access))))

(defn init!
  "Initializes midi I/O"
  []
  (.. (.requestMIDIAccess js/navigator)
      (then open-ports!)))
