// Compiled by ClojureScript 1.9.946 {}
goog.provide('fugue2.core');
goog.require('cljs.core');
goog.require('fugue2.audio');
fugue2.core.detuned_synth_BANG_ = (function fugue2$core$detuned_synth_BANG_(){
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.mix.call(null,fugue2.audio.saw.call(null,(110),fugue2.audio.lfo.call(null,(0),0.5,(30))),fugue2.audio.saw.call(null,(220))),0.2));
});
fugue2.core.dubstep_bass = (function fugue2$core$dubstep_bass(){
return fugue2.audio.out.call(null,fugue2.audio.lpf.call(null,fugue2.audio.saw.call(null,fugue2.audio.sin_osc.call(null,0.5)),fugue2.audio.lfo.call(null,(440),(2),(100))));
});
fugue2.core.start_synth_BANG_ = (function fugue2$core$start_synth_BANG_(){
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.lpf.call(null,fugue2.audio.saw.call(null,(440)),fugue2.audio.lfo.call(null,(220),(2),(220))),0.2));
});
fugue2.core.feedback = (function fugue2$core$feedback(src,mod){
return fugue2.audio.sin_osc.call(null);
});
fugue2.core.test_gate = (function fugue2$core$test_gate(){
var curve = fugue2.audio.perc.call(null,0.1,1.0);
var gate = fugue2.audio.square.call(null,0.5);
var env = fugue2.audio.env_gen.call(null,curve,gate);
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.saw.call(null,(440)),env));
});
fugue2.core.test_sample = (function fugue2$core$test_sample(){
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/red.wav"),0.5));
});
fugue2.core.start = (function fugue2$core$start(){
fugue2.core.test_sample.call(null);

return console.log("Started");
});
fugue2.core.stop = (function fugue2$core$stop(){
fugue2.audio.reset_audio_BANG_.call(null);

return console.log("Stopped");
});
fugue2.audio.init_audio_BANG_.call(null);
fugue2.audio.load_sample.call(null,"audio/red.wav");
fugue2.audio.load_sample.call(null,"audio/orange.wav");
document.getElementById("start").addEventListener("click",fugue2.core.start);
document.getElementById("stop").addEventListener("click",fugue2.core.stop);

//# sourceMappingURL=core.js.map?rel=1525454673150
