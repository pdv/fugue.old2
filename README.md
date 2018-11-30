# fugue2

A rework/rewrite of [fugue](https://github.com/pdv/fugue) using ConstantSourceNode and core.async.

## Comparison to Fugue 1 / Klangmeister / cljs-bach

Though development began independently, Fugue and Klangmeister share effective the same goal: an Overtone-like Clojure music programming environment on the web. Much of the approach is the same, but there are a few key differences:

1. Fugue adopts Overtone's approach of treating filters and other audio effects as functions of audio sources. This allows traditional function composition techniques (especially the `->` macro) to be used to create chains:

```
(def example-synth
  (-> (sin-osc 440)
      (lpf 880 1.3)))

(def example-effect
  (-> (lpf 440 1.2)
      (reverb :hall)
      (hpf 990 2.0)))

(defn play-synth! []
  (-> example-synth
      example-effect
      play!))
```

2. Fugue uses `core.async` for midi. Channels are a natural way to model a midi signal, which is an asynchronous data stream. This makes Fugue especially suited for live performance using midi controllers, interfacing with the Web MIDI API.

```
(defn basic-synth [midi-in]
  (let [note-chan (:note midi-in)
        hz-chan (note->hz note-chan)
        velo-chan (:velo midi-in)]
    (-> (sin-osc hz-chan)
        (env-gen (pluck 0.3) gate-chan))))
```

3. Fugue uses `ConstantSourceNode`. This experimental addition to the Web Audio API opens up a world of possibilities espeically for envelopes, lfos, and other parameter modulators.

```
(defn wobble-bass [note-chan gate-chan wobble-rate-chan]
  (-> (saw (note->hz note-chan))
      (env-gen (adsr 0.05 0.1 0.9 0.4) gate-chan)
      (lpf (lfo 440 wobble-rate-chan))))
```


## Usage

To start the fighweel server:
```
lein figwheel
```

## License

Copyright © 2018 pdv

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
