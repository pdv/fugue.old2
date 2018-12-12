# fugue

- "[Overtone](https://github.com/overtone/overtone) on the web"
- A Clojurescript library for web midi and audio
- *Soon: A self-hosted live music programming environment in the browser*

#### Modeling synthesis with function composition
```clojure
(require '[fugue.live :as f])

(def synth
  (-> (f/+ (f/saw 440)
           (f/saw 880))
      (f/gain 0.6)))

(defn effect [in]
  (-> in
      (f/lpf (f/+ 440 (f/lfo 200 0.7)) 1.2)
      (f/reverb :hall)
      (f/pan (f/sin-osc 0.2))))

(-> synth effect f/eval f/out!)
```
- Sources like `saw`, `lfo`, and `sample` each return an immutable data structure ("synthdef") representing an audio graph
- Effects like `lpf` and `pan` are pure functions that take a synthdef as their first argument and return a synthdef
- The `AudioParam` arguments to synthdef-returning functions can be anything that satisfies `fugue.param.Modulator`
- `f/eval` creates an `AudioNode` from a synthdef
- `f/out!` connects an `AudioNode` to the browser's output ("!" means loud)

#### Using transducers (and, optionally, `core.async`) to transform musical events
```clojure
(defn midi-synth [midi-chan]
  (let [[hz-chan gate-chan] (f/monophonic midi-chan)]
    (* (f/saw hz-chan) 
       (f/env-gen (f/adsr 0.03 0.5 0.4 1) gate-chan))))

(defn create-querty-midi-chan []
  (let [c (async/chan 1 (f/querty->midi))]
    (doseq [type ["keydown" "keyup"]]
      (.addEventListener js/document type (partial async/put! c)))
    c))

(-> (midi-synth (create-querty-midi-chan)) a/eval a/out!)
```
- `f/querty->midi` returns a stateful transducer: 'a' is C, 'w' is C#, etc.; 'z' lowers the octave, 'x' raises it
- Midi effects like arpeggiators and scale correctors are midi->midi transducers
- Note priority algorithms are stateful transducers that map midi events to frequency and gate "control voltages"
- Envelopes are transducers that mapcat gate signals to parameter ramps

#### Combining and modulating signals with `ConstantSourceNode`
```clojure
(defn lfo [offset freq amount]
  (f/+ offset (f/* amount (f/sin-osc freq))))
```
- `f/+` creates a `ConstantSourceNode` synthdef and modulates the `offset` parameter with its arguments
- `f/*` puts a `CSN` through a series of `GainNode` synthdefs with `gain` set to the arguments
- `ConstantSourceNode` is currently only available in Firefox, but there is a [polyfill](https://github.com/mohayonao/constant-source-node) available.

### See also

- [Overtone](https://github.com/overtone/overtone)

  Fugue's API is closely modeled from Overtone. The differences are primarily in the approaches to parameter modulation and the engine on which they are implemented.
- [klangmeister](https://github.com/ctford/klangmeister) / [cljs-bach](https://github.com/ctford/cljs-bach)

  Though development began independently, Fugue and Klangmeister have the same goal: an Overtone-like music programming environment in the browser. Klangmeister's implementation has been a huge inspiration for Fugue, but ultimately the APIs are incompatible.

## Usage

To start the figwheel server:
```
lein figwheel
```
To have tests run on changes, run this from the figwheel repl:
```
(require 'fugue.test-runner)
```

## License

Copyright © 2016-2018 Phil Del Vecchio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
