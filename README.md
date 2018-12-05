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
- Sources like oscillators (`sin-osc`, `saw`, etc.) return a data structure ("synthdef") representing an audio graph
- Effects like filters (`lpf`, `hpf`, etc.) are pure functions on synthdefs 
- `f/eval` creates an `AudioNode` from a synthdef<br/>
  - using an `AudioContext` that you can provide, starting at a time that you can provide
- `f/out!` connects an `AudioNode` to the browser's output<br/>
  - An exclamation mark means things might get loud.
- The arguments to audio functions can be anything that satisfies the fugue.param.Modulator protocol
  - including other synthdefs, and sources of parameter curves


#### Using transducers (and, optionally, `core.async`) to transform musical events
```clojure
(defn midi-synth [midi-chan]
  (let [[hz-chan gate-chan] (cv/mono midi-chan)]
    (* (saw hz-chan) 
       (env-gen (adsr 0.03 0.5 0.4 1) gate-chan))))
```
The same transducers can be applied to "live" (chans, rx, callbacks) and "written" (collections, iterables) transport mechanisms. Channels are a useful way to model a live midi signal, and transducers are a natural way to transform them:
- qwerty keyboard events can be mapped to midi events: "a" is C, "w" is C#, etc.; 'z' lowers the octave, and 'x' raises the octave. This is a stateful transducer, because it needs to track the octave
- midi effects like arpeggiators and scale-correctors are midi->midi transducers
- Synthesizer note priority algorithms can be modeled using stateful transducers that transform midi events into frequency and gate "control voltages"
- Envelopes are transducers that mapcat gate signals to parameter ramps

#### Combining and modulating signals with `ConstantSourceNode`
```clojure
(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))
```
The experimental `ConstantSourceNode` allows us to combine and modulate signals in ways that were previously unavailable. As of this writing, `ConstantSourceNode` is only avaiable in Firefox, but there is a [polyfill](https://github.com/mohayonao/constant-source-node) available, which is included in the example.

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
