// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35679){
var map__35680 = p__35679;
var map__35680__$1 = ((((!((map__35680 == null)))?((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35680):map__35680);
var m = map__35680__$1;
var n = cljs.core.get.call(null,map__35680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35682_35704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35683_35705 = null;
var count__35684_35706 = (0);
var i__35685_35707 = (0);
while(true){
if((i__35685_35707 < count__35684_35706)){
var f_35708 = cljs.core._nth.call(null,chunk__35683_35705,i__35685_35707);
cljs.core.println.call(null,"  ",f_35708);

var G__35709 = seq__35682_35704;
var G__35710 = chunk__35683_35705;
var G__35711 = count__35684_35706;
var G__35712 = (i__35685_35707 + (1));
seq__35682_35704 = G__35709;
chunk__35683_35705 = G__35710;
count__35684_35706 = G__35711;
i__35685_35707 = G__35712;
continue;
} else {
var temp__4657__auto___35713 = cljs.core.seq.call(null,seq__35682_35704);
if(temp__4657__auto___35713){
var seq__35682_35714__$1 = temp__4657__auto___35713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35682_35714__$1)){
var c__28854__auto___35715 = cljs.core.chunk_first.call(null,seq__35682_35714__$1);
var G__35716 = cljs.core.chunk_rest.call(null,seq__35682_35714__$1);
var G__35717 = c__28854__auto___35715;
var G__35718 = cljs.core.count.call(null,c__28854__auto___35715);
var G__35719 = (0);
seq__35682_35704 = G__35716;
chunk__35683_35705 = G__35717;
count__35684_35706 = G__35718;
i__35685_35707 = G__35719;
continue;
} else {
var f_35720 = cljs.core.first.call(null,seq__35682_35714__$1);
cljs.core.println.call(null,"  ",f_35720);

var G__35721 = cljs.core.next.call(null,seq__35682_35714__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__35682_35704 = G__35721;
chunk__35683_35705 = G__35722;
count__35684_35706 = G__35723;
i__35685_35707 = G__35724;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35725 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28015__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35725);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35725)))?cljs.core.second.call(null,arglists_35725):arglists_35725));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35686_35726 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35687_35727 = null;
var count__35688_35728 = (0);
var i__35689_35729 = (0);
while(true){
if((i__35689_35729 < count__35688_35728)){
var vec__35690_35730 = cljs.core._nth.call(null,chunk__35687_35727,i__35689_35729);
var name_35731 = cljs.core.nth.call(null,vec__35690_35730,(0),null);
var map__35693_35732 = cljs.core.nth.call(null,vec__35690_35730,(1),null);
var map__35693_35733__$1 = ((((!((map__35693_35732 == null)))?((((map__35693_35732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35693_35732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35693_35732):map__35693_35732);
var doc_35734 = cljs.core.get.call(null,map__35693_35733__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35735 = cljs.core.get.call(null,map__35693_35733__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35731);

cljs.core.println.call(null," ",arglists_35735);

if(cljs.core.truth_(doc_35734)){
cljs.core.println.call(null," ",doc_35734);
} else {
}

var G__35736 = seq__35686_35726;
var G__35737 = chunk__35687_35727;
var G__35738 = count__35688_35728;
var G__35739 = (i__35689_35729 + (1));
seq__35686_35726 = G__35736;
chunk__35687_35727 = G__35737;
count__35688_35728 = G__35738;
i__35689_35729 = G__35739;
continue;
} else {
var temp__4657__auto___35740 = cljs.core.seq.call(null,seq__35686_35726);
if(temp__4657__auto___35740){
var seq__35686_35741__$1 = temp__4657__auto___35740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35686_35741__$1)){
var c__28854__auto___35742 = cljs.core.chunk_first.call(null,seq__35686_35741__$1);
var G__35743 = cljs.core.chunk_rest.call(null,seq__35686_35741__$1);
var G__35744 = c__28854__auto___35742;
var G__35745 = cljs.core.count.call(null,c__28854__auto___35742);
var G__35746 = (0);
seq__35686_35726 = G__35743;
chunk__35687_35727 = G__35744;
count__35688_35728 = G__35745;
i__35689_35729 = G__35746;
continue;
} else {
var vec__35695_35747 = cljs.core.first.call(null,seq__35686_35741__$1);
var name_35748 = cljs.core.nth.call(null,vec__35695_35747,(0),null);
var map__35698_35749 = cljs.core.nth.call(null,vec__35695_35747,(1),null);
var map__35698_35750__$1 = ((((!((map__35698_35749 == null)))?((((map__35698_35749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35698_35749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35698_35749):map__35698_35749);
var doc_35751 = cljs.core.get.call(null,map__35698_35750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35752 = cljs.core.get.call(null,map__35698_35750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35748);

cljs.core.println.call(null," ",arglists_35752);

if(cljs.core.truth_(doc_35751)){
cljs.core.println.call(null," ",doc_35751);
} else {
}

var G__35753 = cljs.core.next.call(null,seq__35686_35741__$1);
var G__35754 = null;
var G__35755 = (0);
var G__35756 = (0);
seq__35686_35726 = G__35753;
chunk__35687_35727 = G__35754;
count__35688_35728 = G__35755;
i__35689_35729 = G__35756;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35700 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35701 = null;
var count__35702 = (0);
var i__35703 = (0);
while(true){
if((i__35703 < count__35702)){
var role = cljs.core._nth.call(null,chunk__35701,i__35703);
var temp__4657__auto___35757__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35757__$1)){
var spec_35758 = temp__4657__auto___35757__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35758));
} else {
}

var G__35759 = seq__35700;
var G__35760 = chunk__35701;
var G__35761 = count__35702;
var G__35762 = (i__35703 + (1));
seq__35700 = G__35759;
chunk__35701 = G__35760;
count__35702 = G__35761;
i__35703 = G__35762;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35700);
if(temp__4657__auto____$1){
var seq__35700__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35700__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__35700__$1);
var G__35763 = cljs.core.chunk_rest.call(null,seq__35700__$1);
var G__35764 = c__28854__auto__;
var G__35765 = cljs.core.count.call(null,c__28854__auto__);
var G__35766 = (0);
seq__35700 = G__35763;
chunk__35701 = G__35764;
count__35702 = G__35765;
i__35703 = G__35766;
continue;
} else {
var role = cljs.core.first.call(null,seq__35700__$1);
var temp__4657__auto___35767__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35767__$2)){
var spec_35768 = temp__4657__auto___35767__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35768));
} else {
}

var G__35769 = cljs.core.next.call(null,seq__35700__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35700 = G__35769;
chunk__35701 = G__35770;
count__35702 = G__35771;
i__35703 = G__35772;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521812299414
