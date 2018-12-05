# fugue

- "[Overtone](https://github.com/overtone/overtone) on the web"
- A Clojurescript library for web midi and audio
- A live music programming environment in the browser

### Comparison to [klangmeister](https://github.com/ctford/klangmeister) / [cljs-bach](https://github.com/ctford/cljs-bach)

Though development began independently, Fugue and Klangmeister have the same goal: an Overtone-like music programming environment in the browser. Fugue has adpoted Klangmeister's approach to nodes (defining them as `AudioContext, start time -> AudioNode` functions), but has a few important differences:

#### Fugue adopts Overtone's approach of treating filters and other audio effects as functions of audio sources.
This allows traditional function composition techniques (especially the `->` macro) to be used to create chains:
```clojure
(def synth
  (-> (sin-osc 440)
      (lpf 880 1.3)))

(defn effects [in]
  (-> in
      (lpf (lfo 200 0.7) 1.2)
      (reverb :hall)
      (pan (sin-osc 0.2))
      (hpf 990 2.0)))

(defn play-synth! []
  (-> synth effects play!))
```
Under the hood, AudioNode functions like `saw` and `filter` return a data structure that represents the audio graph and isn't created until you call `play!`, which assembles and starts your synth using an `AudioContext` that it creates or you provide now or at a time that you provide. The `AudioParam` arguments (osc frequency, gain amount) can be anything that satisfies the `fugue.engine.Modulator` protocol, like a number, another node, a sequence of scheduler values, or an async source like a channel or an observable.

#### Fugue uses `ConstantSourceNode` to combine signals
This experimental addition to the Web Audio API allows us to add and multiply signals:
- Adding signals is accomplished attaching them each to a CSN's `offset` after setting it to 0.
- Multiplying a pair of signals is done by attaching the first to a `GainNode` whose `gain` is modulated by the second.
With addition and multiplication, we can create complex control signals like lfos and envelopes.
```clojure
(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))
```

As of this writing, `ConstantSourceNode` is only avaiable in Firefox, but there is a [polyfill](https://github.com/mohayonao/constant-source-node) available, which is included in the example.


#### Fugue uses transducers (and, optionally, `core.async`) for midi.
The same transducers can be applied to live (chans, rx, callbacks) and "written" (colls) midi signals. Channels are a natural way to model a live midi signal, and transducers are a natural way to transform them:
- qwerty keyboard events can be mapped to midi events: "a" is C, "w" is C#, etc.; 'z' lowers the octave, and 'x' raises the octave. This is a stateful transducer, because it needs to track the octave
- midi effects like arpeggiators and scale-correctors are midi->midi transducers
- Synthesizer note priority algorithms can be modeled using stateful transducers that transform midi events into frequency and gate "control voltages"
- Envelopes are transducers that mapcat gate signals to parameter ramps

With fugue, these signals can be used to modulate parameters, in real time or by scheduling.

```clojure
(defn midi-synth [midi-chan]
  (let [[hz-chan gate-chan] (cv/mono midi-chan)]
    (* (saw hz-chan) 
       (env-gen (adsr 0.03 0.5 0.4 1) gate-chan))))
```

## Usage

To start the figwheel server:
```
lein figwheel
```

## License

Copyright © 2018 Phil Del Vecchio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
