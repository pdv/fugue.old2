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
fugue2.core.test_sample_loop = (function fugue2$core$test_sample_loop(){
var offsets = cljs.core.map.call(null,(function (p1__38144_SHARP_){
return (0.25 * p1__38144_SHARP_);
}),cljs.core.range.call(null,(50)));
var now = fugue2.audio.now.call(null);
var times = cljs.core.map.call(null,((function (offsets,now){
return (function (p1__38145_SHARP_){
return (now + p1__38145_SHARP_);
});})(offsets,now))
,offsets);
var seq__38146 = cljs.core.seq.call(null,times);
var chunk__38147 = null;
var count__38148 = (0);
var i__38149 = (0);
while(true){
if((i__38149 < count__38148)){
var time = cljs.core._nth.call(null,chunk__38147,i__38149);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/808_snare.wav",time),0.5));

var G__38150 = seq__38146;
var G__38151 = chunk__38147;
var G__38152 = count__38148;
var G__38153 = (i__38149 + (1));
seq__38146 = G__38150;
chunk__38147 = G__38151;
count__38148 = G__38152;
i__38149 = G__38153;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38146);
if(temp__4657__auto__){
var seq__38146__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38146__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__38146__$1);
var G__38154 = cljs.core.chunk_rest.call(null,seq__38146__$1);
var G__38155 = c__28854__auto__;
var G__38156 = cljs.core.count.call(null,c__28854__auto__);
var G__38157 = (0);
seq__38146 = G__38154;
chunk__38147 = G__38155;
count__38148 = G__38156;
i__38149 = G__38157;
continue;
} else {
var time = cljs.core.first.call(null,seq__38146__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/808_snare.wav",time),0.5));

var G__38158 = cljs.core.next.call(null,seq__38146__$1);
var G__38159 = null;
var G__38160 = (0);
var G__38161 = (0);
seq__38146 = G__38158;
chunk__38147 = G__38159;
count__38148 = G__38160;
i__38149 = G__38161;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue2.core.play_loop = (function fugue2$core$play_loop(pattern,tempo){
var now = fugue2.audio.now.call(null);
var bar_length = ((60) / tempo);
var seq__38164 = cljs.core.seq.call(null,pattern);
var chunk__38165 = null;
var count__38166 = (0);
var i__38167 = (0);
while(true){
if((i__38167 < count__38166)){
var pat = cljs.core._nth.call(null,chunk__38165,i__38167);
var pat_length_38176 = (bar_length * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pat));
var per_sample_offset_38177 = (pat_length_38176 * new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat));
var offsets_38178 = cljs.core.map.call(null,((function (seq__38164,chunk__38165,count__38166,i__38167,pat_length_38176,per_sample_offset_38177,pat,now,bar_length){
return (function (p1__38162_SHARP_){
return (per_sample_offset_38177 + (pat_length_38176 * p1__38162_SHARP_));
});})(seq__38164,chunk__38165,count__38166,i__38167,pat_length_38176,per_sample_offset_38177,pat,now,bar_length))
,cljs.core.range.call(null,(50)));
var times_38179 = cljs.core.map.call(null,((function (seq__38164,chunk__38165,count__38166,i__38167,pat_length_38176,per_sample_offset_38177,offsets_38178,pat,now,bar_length){
return (function (p1__38163_SHARP_){
return (now + p1__38163_SHARP_);
});})(seq__38164,chunk__38165,count__38166,i__38167,pat_length_38176,per_sample_offset_38177,offsets_38178,pat,now,bar_length))
,offsets_38178);
var seq__38168_38180 = cljs.core.seq.call(null,times_38179);
var chunk__38169_38181 = null;
var count__38170_38182 = (0);
var i__38171_38183 = (0);
while(true){
if((i__38171_38183 < count__38170_38182)){
var time_38184 = cljs.core._nth.call(null,chunk__38169_38181,i__38171_38183);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_38184),0.5));

var G__38185 = seq__38168_38180;
var G__38186 = chunk__38169_38181;
var G__38187 = count__38170_38182;
var G__38188 = (i__38171_38183 + (1));
seq__38168_38180 = G__38185;
chunk__38169_38181 = G__38186;
count__38170_38182 = G__38187;
i__38171_38183 = G__38188;
continue;
} else {
var temp__4657__auto___38189 = cljs.core.seq.call(null,seq__38168_38180);
if(temp__4657__auto___38189){
var seq__38168_38190__$1 = temp__4657__auto___38189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38168_38190__$1)){
var c__28854__auto___38191 = cljs.core.chunk_first.call(null,seq__38168_38190__$1);
var G__38192 = cljs.core.chunk_rest.call(null,seq__38168_38190__$1);
var G__38193 = c__28854__auto___38191;
var G__38194 = cljs.core.count.call(null,c__28854__auto___38191);
var G__38195 = (0);
seq__38168_38180 = G__38192;
chunk__38169_38181 = G__38193;
count__38170_38182 = G__38194;
i__38171_38183 = G__38195;
continue;
} else {
var time_38196 = cljs.core.first.call(null,seq__38168_38190__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_38196),0.5));

var G__38197 = cljs.core.next.call(null,seq__38168_38190__$1);
var G__38198 = null;
var G__38199 = (0);
var G__38200 = (0);
seq__38168_38180 = G__38197;
chunk__38169_38181 = G__38198;
count__38170_38182 = G__38199;
i__38171_38183 = G__38200;
continue;
}
} else {
}
}
break;
}

var G__38201 = seq__38164;
var G__38202 = chunk__38165;
var G__38203 = count__38166;
var G__38204 = (i__38167 + (1));
seq__38164 = G__38201;
chunk__38165 = G__38202;
count__38166 = G__38203;
i__38167 = G__38204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38164);
if(temp__4657__auto__){
var seq__38164__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38164__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__38164__$1);
var G__38205 = cljs.core.chunk_rest.call(null,seq__38164__$1);
var G__38206 = c__28854__auto__;
var G__38207 = cljs.core.count.call(null,c__28854__auto__);
var G__38208 = (0);
seq__38164 = G__38205;
chunk__38165 = G__38206;
count__38166 = G__38207;
i__38167 = G__38208;
continue;
} else {
var pat = cljs.core.first.call(null,seq__38164__$1);
var pat_length_38209 = (bar_length * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pat));
var per_sample_offset_38210 = (pat_length_38209 * new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat));
var offsets_38211 = cljs.core.map.call(null,((function (seq__38164,chunk__38165,count__38166,i__38167,pat_length_38209,per_sample_offset_38210,pat,seq__38164__$1,temp__4657__auto__,now,bar_length){
return (function (p1__38162_SHARP_){
return (per_sample_offset_38210 + (pat_length_38209 * p1__38162_SHARP_));
});})(seq__38164,chunk__38165,count__38166,i__38167,pat_length_38209,per_sample_offset_38210,pat,seq__38164__$1,temp__4657__auto__,now,bar_length))
,cljs.core.range.call(null,(50)));
var times_38212 = cljs.core.map.call(null,((function (seq__38164,chunk__38165,count__38166,i__38167,pat_length_38209,per_sample_offset_38210,offsets_38211,pat,seq__38164__$1,temp__4657__auto__,now,bar_length){
return (function (p1__38163_SHARP_){
return (now + p1__38163_SHARP_);
});})(seq__38164,chunk__38165,count__38166,i__38167,pat_length_38209,per_sample_offset_38210,offsets_38211,pat,seq__38164__$1,temp__4657__auto__,now,bar_length))
,offsets_38211);
var seq__38172_38213 = cljs.core.seq.call(null,times_38212);
var chunk__38173_38214 = null;
var count__38174_38215 = (0);
var i__38175_38216 = (0);
while(true){
if((i__38175_38216 < count__38174_38215)){
var time_38217 = cljs.core._nth.call(null,chunk__38173_38214,i__38175_38216);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_38217),0.5));

var G__38218 = seq__38172_38213;
var G__38219 = chunk__38173_38214;
var G__38220 = count__38174_38215;
var G__38221 = (i__38175_38216 + (1));
seq__38172_38213 = G__38218;
chunk__38173_38214 = G__38219;
count__38174_38215 = G__38220;
i__38175_38216 = G__38221;
continue;
} else {
var temp__4657__auto___38222__$1 = cljs.core.seq.call(null,seq__38172_38213);
if(temp__4657__auto___38222__$1){
var seq__38172_38223__$1 = temp__4657__auto___38222__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38172_38223__$1)){
var c__28854__auto___38224 = cljs.core.chunk_first.call(null,seq__38172_38223__$1);
var G__38225 = cljs.core.chunk_rest.call(null,seq__38172_38223__$1);
var G__38226 = c__28854__auto___38224;
var G__38227 = cljs.core.count.call(null,c__28854__auto___38224);
var G__38228 = (0);
seq__38172_38213 = G__38225;
chunk__38173_38214 = G__38226;
count__38174_38215 = G__38227;
i__38175_38216 = G__38228;
continue;
} else {
var time_38229 = cljs.core.first.call(null,seq__38172_38223__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_38229),0.5));

var G__38230 = cljs.core.next.call(null,seq__38172_38223__$1);
var G__38231 = null;
var G__38232 = (0);
var G__38233 = (0);
seq__38172_38213 = G__38230;
chunk__38173_38214 = G__38231;
count__38174_38215 = G__38232;
i__38175_38216 = G__38233;
continue;
}
} else {
}
}
break;
}

var G__38234 = cljs.core.next.call(null,seq__38164__$1);
var G__38235 = null;
var G__38236 = (0);
var G__38237 = (0);
seq__38164 = G__38234;
chunk__38165 = G__38235;
count__38166 = G__38236;
i__38167 = G__38237;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue2.core.pattern = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_kick_short.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_snare.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"offset","offset",296498311),0.5], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_hat_closed.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"offset","offset",296498311),0.5], null)], null);
fugue2.core.start = (function fugue2$core$start(){
fugue2.core.play_loop.call(null,fugue2.core.pattern,(40));

return console.log("Started");
});
fugue2.core.stop = (function fugue2$core$stop(){
fugue2.audio.reset_audio_BANG_.call(null);

return console.log("Stopped");
});
fugue2.core.samples = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio/808_kick_short.wav","audio/808_snare.wav","audio/808_hat_closed.wav"], null);
fugue2.core.load_samples = (function fugue2$core$load_samples(samples){
var seq__38238 = cljs.core.seq.call(null,samples);
var chunk__38239 = null;
var count__38240 = (0);
var i__38241 = (0);
while(true){
if((i__38241 < count__38240)){
var sample = cljs.core._nth.call(null,chunk__38239,i__38241);
fugue2.audio.load_sample.call(null,sample);

var G__38242 = seq__38238;
var G__38243 = chunk__38239;
var G__38244 = count__38240;
var G__38245 = (i__38241 + (1));
seq__38238 = G__38242;
chunk__38239 = G__38243;
count__38240 = G__38244;
i__38241 = G__38245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38238);
if(temp__4657__auto__){
var seq__38238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38238__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__38238__$1);
var G__38246 = cljs.core.chunk_rest.call(null,seq__38238__$1);
var G__38247 = c__28854__auto__;
var G__38248 = cljs.core.count.call(null,c__28854__auto__);
var G__38249 = (0);
seq__38238 = G__38246;
chunk__38239 = G__38247;
count__38240 = G__38248;
i__38241 = G__38249;
continue;
} else {
var sample = cljs.core.first.call(null,seq__38238__$1);
fugue2.audio.load_sample.call(null,sample);

var G__38250 = cljs.core.next.call(null,seq__38238__$1);
var G__38251 = null;
var G__38252 = (0);
var G__38253 = (0);
seq__38238 = G__38250;
chunk__38239 = G__38251;
count__38240 = G__38252;
i__38241 = G__38253;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue2.audio.init_audio_BANG_.call(null);
fugue2.core.load_samples.call(null,fugue2.core.samples);
document.getElementById("start").addEventListener("click",fugue2.core.start);
document.getElementById("stop").addEventListener("click",fugue2.core.stop);

//# sourceMappingURL=core.js.map?rel=1525460228942
