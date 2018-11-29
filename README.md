# fugue2

A rework/rewrite of [fugue](https://github.com/pdv/fugue) using the experimental ConstantSourceNode, which is currently only available in Firefox. A major design goal of Fugue is to allow patching different signal types together seamlessly, so composition and synthesis are indistinguishable. With a modular synth, you can plug a control signal into an audio input and vice versa, to interesting effect. The ConstantSourceNode represents the bridge between the digital, discrete world of events and MIDI and the analog, continuous world of audio.

## Goals

- Use Web Audio clock for all timing
- core.async should be the only async tool, if any

## Layers

- Performance layer: Full DSL via `use`
- Bridge layer: Wraps engine with state (ctx, samples, etc)
- Engine layer: "Pure", only layer that interacts with js

## Usage

To start the fighweel server:
```
lein figwheel
```

## License

Copyright © 2018 pdv

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
