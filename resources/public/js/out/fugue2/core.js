// Compiled by ClojureScript 1.9.946 {}
goog.provide('fugue2.core');
goog.require('cljs.core');
goog.require('fugue2.audio');
console.log("Hello ");
fugue2.core.start = (function fugue2$core$start(){
fugue2.audio.init_audio_BANG_.call(null);

fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sin_osc.call(null,(440)),0.3));

return console.log("Started");
});
fugue2.core.stop = (function fugue2$core$stop(){
fugue2.audio.reset_audio_BANG_.call(null);

return console.log("Stopped");
});
document.getElementById("start").addEventListener("click",fugue2.core.start);
document.getElementById("stop").addEventListener("click",fugue2.core.stop);

//# sourceMappingURL=core.js.map?rel=1521816807679
