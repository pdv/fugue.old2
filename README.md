# fugue

- "[Overtone](https://github.com/overtone/overtone) on the web"
- A Clojurescript library for web midi and audio
- A live music programming environment in the browser

### Comparison to [klangmeister](https://github.com/ctford/klangmeister) / [cljs-bach](https://github.com/ctford/cljs-bach)

Though development began independently, Fugue and Klangmeister have the same goal: an Overtone-like music programming environment in the browser. Fugue has adpoted Klangmeister's approach to nodes (defining them as `AudioContext -> AudioNode` functions), but has a few important differences:

1. Fugue adopts Overtone's approach of treating filters and other audio effects as functions of audio sources. This allows traditional function composition techniques (especially the `->` macro) to be used to create chains:

```clojure
(def synth
  (-> (sin-osc 440)
      (lpf 880 1.3)))

(defn effects [in]
  (-> in
      (lpf 440 1.2)
      (reverb :hall)
      (hpf 990 2.0)))

(defn play-synth! []
  (-> synth effects play!))
```

2. Fugue uses `core.async` for midi. Channels are a natural way to model a midi signal, which is an asynchronous data stream. This makes Fugue especially suited for live performance using midi controllers, interfacing with the Web MIDI API. Midi effects can be defined as transducers, allowing them to operate on different transport mechanisms (sequences, channels, rx chains).

```clojure
(defn midi-synth [midi-chan]
  (let [{:keys [hz gate]} (midi->cv midi-chan)
        env (env-gen (adsr 0.03 0.5 0.4 1) gate)]
    (* (saw hz) env)))
```

3. Fugue uses `ConstantSourceNode`. This experimental addition to the Web Audio API allows us to add and multiply signals:

- Adding signals is accomplished by attaching them to the `offset` of a `ConstantSourceNode`. The result of the CSN is the sum of the inputs to `offset`.
- Multiplying a carrier and modulator signal is done by attaching the carrier to a `GainNode` whose `gain` is modulated by the modulator.

With addition and multiplication, we can create complex control signals like lfos and envelopes.

```clojure
(defn lfo [offset freq amount]
  (+ offset (* amount (sin-osc freq))))
```

As of this writing, `ConstantSourceNode` is only avaiable in Firefox, but there is a [polyfill](https://github.com/mohayonao/constant-source-node) available.

## Usage

To start the fighweel server:
```
lein figwheel
```

## License

Copyright © 2018 pdv

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
