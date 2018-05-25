// Compiled by ClojureScript 1.9.946 {}
goog.provide('fugue2.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('fugue2.async');
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
var offsets = cljs.core.map.call(null,(function (p1__35554_SHARP_){
return (0.25 * p1__35554_SHARP_);
}),cljs.core.range.call(null,(50)));
var now = fugue2.audio.now.call(null);
var times = cljs.core.map.call(null,((function (offsets,now){
return (function (p1__35555_SHARP_){
return (now + p1__35555_SHARP_);
});})(offsets,now))
,offsets);
var seq__35556 = cljs.core.seq.call(null,times);
var chunk__35557 = null;
var count__35558 = (0);
var i__35559 = (0);
while(true){
if((i__35559 < count__35558)){
var time = cljs.core._nth.call(null,chunk__35557,i__35559);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/808_snare.wav",time),0.5));

var G__35560 = seq__35556;
var G__35561 = chunk__35557;
var G__35562 = count__35558;
var G__35563 = (i__35559 + (1));
seq__35556 = G__35560;
chunk__35557 = G__35561;
count__35558 = G__35562;
i__35559 = G__35563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35556);
if(temp__4657__auto__){
var seq__35556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35556__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__35556__$1);
var G__35564 = cljs.core.chunk_rest.call(null,seq__35556__$1);
var G__35565 = c__28854__auto__;
var G__35566 = cljs.core.count.call(null,c__28854__auto__);
var G__35567 = (0);
seq__35556 = G__35564;
chunk__35557 = G__35565;
count__35558 = G__35566;
i__35559 = G__35567;
continue;
} else {
var time = cljs.core.first.call(null,seq__35556__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/808_snare.wav",time),0.5));

var G__35568 = cljs.core.next.call(null,seq__35556__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__35556 = G__35568;
chunk__35557 = G__35569;
count__35558 = G__35570;
i__35559 = G__35571;
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
var seq__35574 = cljs.core.seq.call(null,pattern);
var chunk__35575 = null;
var count__35576 = (0);
var i__35577 = (0);
while(true){
if((i__35577 < count__35576)){
var pat = cljs.core._nth.call(null,chunk__35575,i__35577);
var pat_length_35586 = (bar_length * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pat));
var per_sample_offset_35587 = (pat_length_35586 * new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat));
var offsets_35588 = cljs.core.map.call(null,((function (seq__35574,chunk__35575,count__35576,i__35577,pat_length_35586,per_sample_offset_35587,pat,now,bar_length){
return (function (p1__35572_SHARP_){
return (per_sample_offset_35587 + (pat_length_35586 * p1__35572_SHARP_));
});})(seq__35574,chunk__35575,count__35576,i__35577,pat_length_35586,per_sample_offset_35587,pat,now,bar_length))
,cljs.core.range.call(null,(50)));
var times_35589 = cljs.core.map.call(null,((function (seq__35574,chunk__35575,count__35576,i__35577,pat_length_35586,per_sample_offset_35587,offsets_35588,pat,now,bar_length){
return (function (p1__35573_SHARP_){
return (now + p1__35573_SHARP_);
});})(seq__35574,chunk__35575,count__35576,i__35577,pat_length_35586,per_sample_offset_35587,offsets_35588,pat,now,bar_length))
,offsets_35588);
var seq__35578_35590 = cljs.core.seq.call(null,times_35589);
var chunk__35579_35591 = null;
var count__35580_35592 = (0);
var i__35581_35593 = (0);
while(true){
if((i__35581_35593 < count__35580_35592)){
var time_35594 = cljs.core._nth.call(null,chunk__35579_35591,i__35581_35593);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_35594),0.5));

var G__35595 = seq__35578_35590;
var G__35596 = chunk__35579_35591;
var G__35597 = count__35580_35592;
var G__35598 = (i__35581_35593 + (1));
seq__35578_35590 = G__35595;
chunk__35579_35591 = G__35596;
count__35580_35592 = G__35597;
i__35581_35593 = G__35598;
continue;
} else {
var temp__4657__auto___35599 = cljs.core.seq.call(null,seq__35578_35590);
if(temp__4657__auto___35599){
var seq__35578_35600__$1 = temp__4657__auto___35599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35578_35600__$1)){
var c__28854__auto___35601 = cljs.core.chunk_first.call(null,seq__35578_35600__$1);
var G__35602 = cljs.core.chunk_rest.call(null,seq__35578_35600__$1);
var G__35603 = c__28854__auto___35601;
var G__35604 = cljs.core.count.call(null,c__28854__auto___35601);
var G__35605 = (0);
seq__35578_35590 = G__35602;
chunk__35579_35591 = G__35603;
count__35580_35592 = G__35604;
i__35581_35593 = G__35605;
continue;
} else {
var time_35606 = cljs.core.first.call(null,seq__35578_35600__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_35606),0.5));

var G__35607 = cljs.core.next.call(null,seq__35578_35600__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35578_35590 = G__35607;
chunk__35579_35591 = G__35608;
count__35580_35592 = G__35609;
i__35581_35593 = G__35610;
continue;
}
} else {
}
}
break;
}

var G__35611 = seq__35574;
var G__35612 = chunk__35575;
var G__35613 = count__35576;
var G__35614 = (i__35577 + (1));
seq__35574 = G__35611;
chunk__35575 = G__35612;
count__35576 = G__35613;
i__35577 = G__35614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35574);
if(temp__4657__auto__){
var seq__35574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35574__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__35574__$1);
var G__35615 = cljs.core.chunk_rest.call(null,seq__35574__$1);
var G__35616 = c__28854__auto__;
var G__35617 = cljs.core.count.call(null,c__28854__auto__);
var G__35618 = (0);
seq__35574 = G__35615;
chunk__35575 = G__35616;
count__35576 = G__35617;
i__35577 = G__35618;
continue;
} else {
var pat = cljs.core.first.call(null,seq__35574__$1);
var pat_length_35619 = (bar_length * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(pat));
var per_sample_offset_35620 = (pat_length_35619 * new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat));
var offsets_35621 = cljs.core.map.call(null,((function (seq__35574,chunk__35575,count__35576,i__35577,pat_length_35619,per_sample_offset_35620,pat,seq__35574__$1,temp__4657__auto__,now,bar_length){
return (function (p1__35572_SHARP_){
return (per_sample_offset_35620 + (pat_length_35619 * p1__35572_SHARP_));
});})(seq__35574,chunk__35575,count__35576,i__35577,pat_length_35619,per_sample_offset_35620,pat,seq__35574__$1,temp__4657__auto__,now,bar_length))
,cljs.core.range.call(null,(50)));
var times_35622 = cljs.core.map.call(null,((function (seq__35574,chunk__35575,count__35576,i__35577,pat_length_35619,per_sample_offset_35620,offsets_35621,pat,seq__35574__$1,temp__4657__auto__,now,bar_length){
return (function (p1__35573_SHARP_){
return (now + p1__35573_SHARP_);
});})(seq__35574,chunk__35575,count__35576,i__35577,pat_length_35619,per_sample_offset_35620,offsets_35621,pat,seq__35574__$1,temp__4657__auto__,now,bar_length))
,offsets_35621);
var seq__35582_35623 = cljs.core.seq.call(null,times_35622);
var chunk__35583_35624 = null;
var count__35584_35625 = (0);
var i__35585_35626 = (0);
while(true){
if((i__35585_35626 < count__35584_35625)){
var time_35627 = cljs.core._nth.call(null,chunk__35583_35624,i__35585_35626);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_35627),0.5));

var G__35628 = seq__35582_35623;
var G__35629 = chunk__35583_35624;
var G__35630 = count__35584_35625;
var G__35631 = (i__35585_35626 + (1));
seq__35582_35623 = G__35628;
chunk__35583_35624 = G__35629;
count__35584_35625 = G__35630;
i__35585_35626 = G__35631;
continue;
} else {
var temp__4657__auto___35632__$1 = cljs.core.seq.call(null,seq__35582_35623);
if(temp__4657__auto___35632__$1){
var seq__35582_35633__$1 = temp__4657__auto___35632__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35582_35633__$1)){
var c__28854__auto___35634 = cljs.core.chunk_first.call(null,seq__35582_35633__$1);
var G__35635 = cljs.core.chunk_rest.call(null,seq__35582_35633__$1);
var G__35636 = c__28854__auto___35634;
var G__35637 = cljs.core.count.call(null,c__28854__auto___35634);
var G__35638 = (0);
seq__35582_35623 = G__35635;
chunk__35583_35624 = G__35636;
count__35584_35625 = G__35637;
i__35585_35626 = G__35638;
continue;
} else {
var time_35639 = cljs.core.first.call(null,seq__35582_35633__$1);
fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(pat),time_35639),0.5));

var G__35640 = cljs.core.next.call(null,seq__35582_35633__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__35582_35623 = G__35640;
chunk__35583_35624 = G__35641;
count__35584_35625 = G__35642;
i__35585_35626 = G__35643;
continue;
}
} else {
}
}
break;
}

var G__35644 = cljs.core.next.call(null,seq__35574__$1);
var G__35645 = null;
var G__35646 = (0);
var G__35647 = (0);
seq__35574 = G__35644;
chunk__35575 = G__35645;
count__35576 = G__35646;
i__35577 = G__35647;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue2.core.sample_map = new cljs.core.PersistentArrayMap(null, 2, [(44),"audio/808_snare.wav",(45),"audio/808_kick.wav"], null);
fugue2.core.sampler = (function fugue2$core$sampler(){
return fugue2.audio.out.call(null,audio.sample(fugue2.core.sample_map.call(null,midi.kb)));
});
fugue2.core.sequencer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_clap.wav",new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_kick_short.wav",new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(0),(0),(0),(0)], null)], null)], null);
fugue2.core.pattern = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_kick_short.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_snare.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"offset","offset",296498311),0.5], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sample","sample",79023601),"audio/808_hat_closed.wav",new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"offset","offset",296498311),0.5], null)], null);
fugue2.core.play_simple_sample_BANG_ = (function fugue2$core$play_simple_sample_BANG_(){
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sample.call(null,"audio/lcd.mp3"),0.5));
});
fugue2.core.start = (function fugue2$core$start(){
fugue2.core.key_tracked_osc.call(null);

return console.log("Started");
});
fugue2.core.stop = (function fugue2$core$stop(){
fugue2.audio.reset_audio_BANG_.call(null);

return console.log("Stopped");
});
fugue2.core.samples = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio/lcd.mp3","audio/808_kick_short.wav","audio/808_snare.wav","audio/808_hat_closed.wav"], null);
fugue2.core.load_samples = (function fugue2$core$load_samples(samples){
var seq__35648 = cljs.core.seq.call(null,samples);
var chunk__35649 = null;
var count__35650 = (0);
var i__35651 = (0);
while(true){
if((i__35651 < count__35650)){
var sample = cljs.core._nth.call(null,chunk__35649,i__35651);
fugue2.audio.load_sample.call(null,sample);

var G__35652 = seq__35648;
var G__35653 = chunk__35649;
var G__35654 = count__35650;
var G__35655 = (i__35651 + (1));
seq__35648 = G__35652;
chunk__35649 = G__35653;
count__35650 = G__35654;
i__35651 = G__35655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35648);
if(temp__4657__auto__){
var seq__35648__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35648__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__35648__$1);
var G__35656 = cljs.core.chunk_rest.call(null,seq__35648__$1);
var G__35657 = c__28854__auto__;
var G__35658 = cljs.core.count.call(null,c__28854__auto__);
var G__35659 = (0);
seq__35648 = G__35656;
chunk__35649 = G__35657;
count__35650 = G__35658;
i__35651 = G__35659;
continue;
} else {
var sample = cljs.core.first.call(null,seq__35648__$1);
fugue2.audio.load_sample.call(null,sample);

var G__35660 = cljs.core.next.call(null,seq__35648__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35648 = G__35660;
chunk__35649 = G__35661;
count__35650 = G__35662;
i__35651 = G__35663;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue2.core.setup_button_listeners = (function fugue2$core$setup_button_listeners(){
document.getElementById("start").addEventListener("click",fugue2.core.start);

return document.getElementById("stop").addEventListener("click",fugue2.core.stop);
});
fugue2.core.note__GT_hz = (function fugue2$core$note__GT_hz(note){
return (440.0 * Math.pow(2.0,((note - 69.0) / 12.0)));
});
fugue2.core.keymap = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(87),(83),(69),(68),(70),(84),(71),(89),(72),(85),(74),(75)], null),cljs.core.range.call(null));
fugue2.core.key_tracked_const = (function fugue2$core$key_tracked_const(){
var const_node = fugue2.audio.constant.call(null);
var hz_listener = ((function (const_node){
return (function (p1__35664_SHARP_){
return const_node.offset.value = p1__35664_SHARP_;
});})(const_node))
;
var event_listener = ((function (const_node,hz_listener){
return (function (p1__35665_SHARP_){
return hz_listener.call(null,fugue2.core.note__GT_hz.call(null,(fugue2.core.keymap.call(null,p1__35665_SHARP_.keyCode) + (40))));
});})(const_node,hz_listener))
;
document.addEventListener("keydown",event_listener);

return const_node;
});
fugue2.core.key_tracked_osc = (function fugue2$core$key_tracked_osc(){
return fugue2.audio.out.call(null,fugue2.audio.gain.call(null,fugue2.audio.sin_osc.call(null,fugue2.core.key_tracked_const.call(null)),0.05));
});
fugue2.core.test_key_tracking = (function fugue2$core$test_key_tracking(){
var c = fugue2.async.kb_midi_chan.call(null);
var c__35495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35495__auto__,c){
return (function (){
var f__35496__auto__ = (function (){var switch__35474__auto__ = ((function (c__35495__auto__,c){
return (function (state_35678){
var state_val_35679 = (state_35678[(1)]);
if((state_val_35679 === (1))){
var state_35678__$1 = state_35678;
var statearr_35680_35691 = state_35678__$1;
(statearr_35680_35691[(2)] = null);

(statearr_35680_35691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (2))){
var state_35678__$1 = state_35678;
var statearr_35681_35692 = state_35678__$1;
(statearr_35681_35692[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (3))){
var inst_35676 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35678__$1,inst_35676);
} else {
if((state_val_35679 === (4))){
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(7),c);
} else {
if((state_val_35679 === (5))){
var state_35678__$1 = state_35678;
var statearr_35683_35693 = state_35678__$1;
(statearr_35683_35693[(2)] = null);

(statearr_35683_35693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (6))){
var inst_35674 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35684_35694 = state_35678__$1;
(statearr_35684_35694[(2)] = inst_35674);

(statearr_35684_35694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (7))){
var inst_35669 = (state_35678[(2)]);
var inst_35670 = console.log(inst_35669);
var state_35678__$1 = (function (){var statearr_35685 = state_35678;
(statearr_35685[(7)] = inst_35670);

return statearr_35685;
})();
var statearr_35686_35695 = state_35678__$1;
(statearr_35686_35695[(2)] = null);

(statearr_35686_35695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__35495__auto__,c))
;
return ((function (switch__35474__auto__,c__35495__auto__,c){
return (function() {
var fugue2$core$test_key_tracking_$_state_machine__35475__auto__ = null;
var fugue2$core$test_key_tracking_$_state_machine__35475__auto____0 = (function (){
var statearr_35687 = [null,null,null,null,null,null,null,null];
(statearr_35687[(0)] = fugue2$core$test_key_tracking_$_state_machine__35475__auto__);

(statearr_35687[(1)] = (1));

return statearr_35687;
});
var fugue2$core$test_key_tracking_$_state_machine__35475__auto____1 = (function (state_35678){
while(true){
var ret_value__35476__auto__ = (function (){try{while(true){
var result__35477__auto__ = switch__35474__auto__.call(null,state_35678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35477__auto__;
}
break;
}
}catch (e35688){if((e35688 instanceof Object)){
var ex__35478__auto__ = e35688;
var statearr_35689_35696 = state_35678;
(statearr_35689_35696[(5)] = ex__35478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35697 = state_35678;
state_35678 = G__35697;
continue;
} else {
return ret_value__35476__auto__;
}
break;
}
});
fugue2$core$test_key_tracking_$_state_machine__35475__auto__ = function(state_35678){
switch(arguments.length){
case 0:
return fugue2$core$test_key_tracking_$_state_machine__35475__auto____0.call(this);
case 1:
return fugue2$core$test_key_tracking_$_state_machine__35475__auto____1.call(this,state_35678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fugue2$core$test_key_tracking_$_state_machine__35475__auto__.cljs$core$IFn$_invoke$arity$0 = fugue2$core$test_key_tracking_$_state_machine__35475__auto____0;
fugue2$core$test_key_tracking_$_state_machine__35475__auto__.cljs$core$IFn$_invoke$arity$1 = fugue2$core$test_key_tracking_$_state_machine__35475__auto____1;
return fugue2$core$test_key_tracking_$_state_machine__35475__auto__;
})()
;})(switch__35474__auto__,c__35495__auto__,c))
})();
var state__35497__auto__ = (function (){var statearr_35690 = f__35496__auto__.call(null);
(statearr_35690[(6)] = c__35495__auto__);

return statearr_35690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35497__auto__);
});})(c__35495__auto__,c))
);

return c__35495__auto__;
});
fugue2.core.main = (function fugue2$core$main(){
fugue2.audio.init_audio_BANG_.call(null);

fugue2.core.load_samples.call(null,fugue2.core.samples);

fugue2.core.setup_button_listeners.call(null);

return fugue2.core.test_key_tracking.call(null);
});
fugue2.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1527275302106
