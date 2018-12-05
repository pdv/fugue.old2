# fugue

- "[Overtone](https://github.com/overtone/overtone) on the web"
- A Clojurescript library for web midi and audio
- A live music programming environment in the browser

#### Modeling synthesis with function composition
```clojure
(use '[fugue.live :as f])

(def synth [freq]
  (-> (f/+ (f/saw freq)
           (f/saw (* 2 freq)))
      (f/lpf 880 1.3)
      (f/gain 0.6)))

(defn effect [in]
  (-> in
      (f/lpf (f/+ 440 (f/lfo 200 0.7)) 1.2)
      (f/reverb :hall)
      (f/pan (f/sin-osc 0.2))))

(-> synth effect a/eval a/out!)
```
- Sources like `saw`, `lfo`, and `sample` each return an immutable data structure ("synthdef") representing an audio graph
- Effects like `lpf` and `pan` are pure functions that take a synthdef as their first argument and return a synthdef
- The `AudioParam` arguments to synthdef-returning functions can be anything that satisfies `fugue.param.Modulator`
- `f/eval` creates an `AudioNode` from a synthdef
- `f/out!` connects an `AudioNode` to the browser's output ("!" means loud)

#### Using transducers (and, optionally, `core.async`) to transform musical events
```clojure
(defn midi-synth [midi-chan]
  (let [[hz-chan gate-chan] (f/mono midi-chan)]
    (* (f/saw hz-chan) 
       (f/env-gen (f/adsr 0.03 0.5 0.4 1) gate-chan))))
```
- `querty->midi` is a stateful transducer: 'a' is C, 'w' is C#, etc.; 'z' lowers the octave, and 'x' raises it
- Midi effects like arpeggiators and scale correctors are midi->midi transducers
- Note priority algorithms are stateful transducers that map midi events to frequency and gate "control voltages"
- Envelopes are transducers that mapcat gate signals to parameter ramps

#### Combining and modulating signals with `ConstantSourceNode`
```clojure
(defn lfo [offset freq amount]
  (f/+ offset (f/* amount (f/sin-osc freq))))
```
- `f/+` creates a `ConstantSourceNode` synthdef and modulates the `offset` parameter with its arguments
- `f/*` puts a `CSN` through a `GainNode` synthdef for each argument and modulates the `gain` parameter with them
- `ConstantSourceNode` is only avaiable in Firefox, but there is a [polyfill](https://github.com/mohayonao/constant-source-node) available.

### See also

- [Overtone](https://github.com/overtone/overtone)
Fugue's API is closely modeled from Overtone. The differences are primarily in the approaches to parameter modulation and the engine on which they are implemented.
- [klangmeister](https://github.com/ctford/klangmeister) / [cljs-bach](https://github.com/ctford/cljs-bach)
Though development began independently, Fugue and Klangmeister have the same goal: an Overtone-like music programming environment in the browser. Klangmeister has been an inspiration for Fugue, but ultimately the APIs are incompatible.

## Usage

To start the figwheel server:
```
lein figwheel
```

## License

Copyright © 2018 Phil Del Vecchio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
