// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28015__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28015__auto__){
return or__28015__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28015__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
var or__28015__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28015__auto____$1)){
return or__28015__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34205_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34205_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34206 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34207 = null;
var count__34208 = (0);
var i__34209 = (0);
while(true){
if((i__34209 < count__34208)){
var n = cljs.core._nth.call(null,chunk__34207,i__34209);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34210 = seq__34206;
var G__34211 = chunk__34207;
var G__34212 = count__34208;
var G__34213 = (i__34209 + (1));
seq__34206 = G__34210;
chunk__34207 = G__34211;
count__34208 = G__34212;
i__34209 = G__34213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34206);
if(temp__4657__auto__){
var seq__34206__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34206__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__34206__$1);
var G__34214 = cljs.core.chunk_rest.call(null,seq__34206__$1);
var G__34215 = c__28854__auto__;
var G__34216 = cljs.core.count.call(null,c__28854__auto__);
var G__34217 = (0);
seq__34206 = G__34214;
chunk__34207 = G__34215;
count__34208 = G__34216;
i__34209 = G__34217;
continue;
} else {
var n = cljs.core.first.call(null,seq__34206__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34218 = cljs.core.next.call(null,seq__34206__$1);
var G__34219 = null;
var G__34220 = (0);
var G__34221 = (0);
seq__34206 = G__34218;
chunk__34207 = G__34219;
count__34208 = G__34220;
i__34209 = G__34221;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34222){
var vec__34223 = p__34222;
var _ = cljs.core.nth.call(null,vec__34223,(0),null);
var v = cljs.core.nth.call(null,vec__34223,(1),null);
var and__28003__auto__ = v;
if(cljs.core.truth_(and__28003__auto__)){
return v.call(null,dep);
} else {
return and__28003__auto__;
}
}),cljs.core.filter.call(null,(function (p__34226){
var vec__34227 = p__34226;
var k = cljs.core.nth.call(null,vec__34227,(0),null);
var v = cljs.core.nth.call(null,vec__34227,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34239_34247 = cljs.core.seq.call(null,deps);
var chunk__34240_34248 = null;
var count__34241_34249 = (0);
var i__34242_34250 = (0);
while(true){
if((i__34242_34250 < count__34241_34249)){
var dep_34251 = cljs.core._nth.call(null,chunk__34240_34248,i__34242_34250);
if(cljs.core.truth_((function (){var and__28003__auto__ = dep_34251;
if(cljs.core.truth_(and__28003__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34251));
} else {
return and__28003__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34251,(depth + (1)),state);
} else {
}

var G__34252 = seq__34239_34247;
var G__34253 = chunk__34240_34248;
var G__34254 = count__34241_34249;
var G__34255 = (i__34242_34250 + (1));
seq__34239_34247 = G__34252;
chunk__34240_34248 = G__34253;
count__34241_34249 = G__34254;
i__34242_34250 = G__34255;
continue;
} else {
var temp__4657__auto___34256 = cljs.core.seq.call(null,seq__34239_34247);
if(temp__4657__auto___34256){
var seq__34239_34257__$1 = temp__4657__auto___34256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34239_34257__$1)){
var c__28854__auto___34258 = cljs.core.chunk_first.call(null,seq__34239_34257__$1);
var G__34259 = cljs.core.chunk_rest.call(null,seq__34239_34257__$1);
var G__34260 = c__28854__auto___34258;
var G__34261 = cljs.core.count.call(null,c__28854__auto___34258);
var G__34262 = (0);
seq__34239_34247 = G__34259;
chunk__34240_34248 = G__34260;
count__34241_34249 = G__34261;
i__34242_34250 = G__34262;
continue;
} else {
var dep_34263 = cljs.core.first.call(null,seq__34239_34257__$1);
if(cljs.core.truth_((function (){var and__28003__auto__ = dep_34263;
if(cljs.core.truth_(and__28003__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34263));
} else {
return and__28003__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34263,(depth + (1)),state);
} else {
}

var G__34264 = cljs.core.next.call(null,seq__34239_34257__$1);
var G__34265 = null;
var G__34266 = (0);
var G__34267 = (0);
seq__34239_34247 = G__34264;
chunk__34240_34248 = G__34265;
count__34241_34249 = G__34266;
i__34242_34250 = G__34267;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34243){
var vec__34244 = p__34243;
var seq__34245 = cljs.core.seq.call(null,vec__34244);
var first__34246 = cljs.core.first.call(null,seq__34245);
var seq__34245__$1 = cljs.core.next.call(null,seq__34245);
var x = first__34246;
var xs = seq__34245__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34244,seq__34245,first__34246,seq__34245__$1,x,xs,get_deps__$1){
return (function (p1__34230_SHARP_){
return clojure.set.difference.call(null,p1__34230_SHARP_,x);
});})(vec__34244,seq__34245,first__34246,seq__34245__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34268 = cljs.core.seq.call(null,provides);
var chunk__34269 = null;
var count__34270 = (0);
var i__34271 = (0);
while(true){
if((i__34271 < count__34270)){
var prov = cljs.core._nth.call(null,chunk__34269,i__34271);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34272_34280 = cljs.core.seq.call(null,requires);
var chunk__34273_34281 = null;
var count__34274_34282 = (0);
var i__34275_34283 = (0);
while(true){
if((i__34275_34283 < count__34274_34282)){
var req_34284 = cljs.core._nth.call(null,chunk__34273_34281,i__34275_34283);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34284,prov);

var G__34285 = seq__34272_34280;
var G__34286 = chunk__34273_34281;
var G__34287 = count__34274_34282;
var G__34288 = (i__34275_34283 + (1));
seq__34272_34280 = G__34285;
chunk__34273_34281 = G__34286;
count__34274_34282 = G__34287;
i__34275_34283 = G__34288;
continue;
} else {
var temp__4657__auto___34289 = cljs.core.seq.call(null,seq__34272_34280);
if(temp__4657__auto___34289){
var seq__34272_34290__$1 = temp__4657__auto___34289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34272_34290__$1)){
var c__28854__auto___34291 = cljs.core.chunk_first.call(null,seq__34272_34290__$1);
var G__34292 = cljs.core.chunk_rest.call(null,seq__34272_34290__$1);
var G__34293 = c__28854__auto___34291;
var G__34294 = cljs.core.count.call(null,c__28854__auto___34291);
var G__34295 = (0);
seq__34272_34280 = G__34292;
chunk__34273_34281 = G__34293;
count__34274_34282 = G__34294;
i__34275_34283 = G__34295;
continue;
} else {
var req_34296 = cljs.core.first.call(null,seq__34272_34290__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34296,prov);

var G__34297 = cljs.core.next.call(null,seq__34272_34290__$1);
var G__34298 = null;
var G__34299 = (0);
var G__34300 = (0);
seq__34272_34280 = G__34297;
chunk__34273_34281 = G__34298;
count__34274_34282 = G__34299;
i__34275_34283 = G__34300;
continue;
}
} else {
}
}
break;
}

var G__34301 = seq__34268;
var G__34302 = chunk__34269;
var G__34303 = count__34270;
var G__34304 = (i__34271 + (1));
seq__34268 = G__34301;
chunk__34269 = G__34302;
count__34270 = G__34303;
i__34271 = G__34304;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34268);
if(temp__4657__auto__){
var seq__34268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34268__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__34268__$1);
var G__34305 = cljs.core.chunk_rest.call(null,seq__34268__$1);
var G__34306 = c__28854__auto__;
var G__34307 = cljs.core.count.call(null,c__28854__auto__);
var G__34308 = (0);
seq__34268 = G__34305;
chunk__34269 = G__34306;
count__34270 = G__34307;
i__34271 = G__34308;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34268__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34276_34309 = cljs.core.seq.call(null,requires);
var chunk__34277_34310 = null;
var count__34278_34311 = (0);
var i__34279_34312 = (0);
while(true){
if((i__34279_34312 < count__34278_34311)){
var req_34313 = cljs.core._nth.call(null,chunk__34277_34310,i__34279_34312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34313,prov);

var G__34314 = seq__34276_34309;
var G__34315 = chunk__34277_34310;
var G__34316 = count__34278_34311;
var G__34317 = (i__34279_34312 + (1));
seq__34276_34309 = G__34314;
chunk__34277_34310 = G__34315;
count__34278_34311 = G__34316;
i__34279_34312 = G__34317;
continue;
} else {
var temp__4657__auto___34318__$1 = cljs.core.seq.call(null,seq__34276_34309);
if(temp__4657__auto___34318__$1){
var seq__34276_34319__$1 = temp__4657__auto___34318__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34276_34319__$1)){
var c__28854__auto___34320 = cljs.core.chunk_first.call(null,seq__34276_34319__$1);
var G__34321 = cljs.core.chunk_rest.call(null,seq__34276_34319__$1);
var G__34322 = c__28854__auto___34320;
var G__34323 = cljs.core.count.call(null,c__28854__auto___34320);
var G__34324 = (0);
seq__34276_34309 = G__34321;
chunk__34277_34310 = G__34322;
count__34278_34311 = G__34323;
i__34279_34312 = G__34324;
continue;
} else {
var req_34325 = cljs.core.first.call(null,seq__34276_34319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34325,prov);

var G__34326 = cljs.core.next.call(null,seq__34276_34319__$1);
var G__34327 = null;
var G__34328 = (0);
var G__34329 = (0);
seq__34276_34309 = G__34326;
chunk__34277_34310 = G__34327;
count__34278_34311 = G__34328;
i__34279_34312 = G__34329;
continue;
}
} else {
}
}
break;
}

var G__34330 = cljs.core.next.call(null,seq__34268__$1);
var G__34331 = null;
var G__34332 = (0);
var G__34333 = (0);
seq__34268 = G__34330;
chunk__34269 = G__34331;
count__34270 = G__34332;
i__34271 = G__34333;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34334_34338 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34335_34339 = null;
var count__34336_34340 = (0);
var i__34337_34341 = (0);
while(true){
if((i__34337_34341 < count__34336_34340)){
var ns_34342 = cljs.core._nth.call(null,chunk__34335_34339,i__34337_34341);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34342);

var G__34343 = seq__34334_34338;
var G__34344 = chunk__34335_34339;
var G__34345 = count__34336_34340;
var G__34346 = (i__34337_34341 + (1));
seq__34334_34338 = G__34343;
chunk__34335_34339 = G__34344;
count__34336_34340 = G__34345;
i__34337_34341 = G__34346;
continue;
} else {
var temp__4657__auto___34347 = cljs.core.seq.call(null,seq__34334_34338);
if(temp__4657__auto___34347){
var seq__34334_34348__$1 = temp__4657__auto___34347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34334_34348__$1)){
var c__28854__auto___34349 = cljs.core.chunk_first.call(null,seq__34334_34348__$1);
var G__34350 = cljs.core.chunk_rest.call(null,seq__34334_34348__$1);
var G__34351 = c__28854__auto___34349;
var G__34352 = cljs.core.count.call(null,c__28854__auto___34349);
var G__34353 = (0);
seq__34334_34338 = G__34350;
chunk__34335_34339 = G__34351;
count__34336_34340 = G__34352;
i__34337_34341 = G__34353;
continue;
} else {
var ns_34354 = cljs.core.first.call(null,seq__34334_34348__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34354);

var G__34355 = cljs.core.next.call(null,seq__34334_34348__$1);
var G__34356 = null;
var G__34357 = (0);
var G__34358 = (0);
seq__34334_34338 = G__34355;
chunk__34335_34339 = G__34356;
count__34336_34340 = G__34357;
i__34337_34341 = G__34358;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28015__auto__ = goog.require__;
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34359__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34360__i = 0, G__34360__a = new Array(arguments.length -  0);
while (G__34360__i < G__34360__a.length) {G__34360__a[G__34360__i] = arguments[G__34360__i + 0]; ++G__34360__i;}
  args = new cljs.core.IndexedSeq(G__34360__a,0,null);
} 
return G__34359__delegate.call(this,args);};
G__34359.cljs$lang$maxFixedArity = 0;
G__34359.cljs$lang$applyTo = (function (arglist__34361){
var args = cljs.core.seq(arglist__34361);
return G__34359__delegate(args);
});
G__34359.cljs$core$IFn$_invoke$arity$variadic = G__34359__delegate;
return G__34359;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34362_SHARP_,p2__34363_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34362_SHARP_)].join('')),p2__34363_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34364_SHARP_,p2__34365_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34364_SHARP_)].join(''),p2__34365_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34366 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34366.addCallback(((function (G__34366){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34366))
);

G__34366.addErrback(((function (G__34366){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34366))
);

return G__34366;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34367){if((e34367 instanceof Error)){
var e = e34367;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34367;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34368){if((e34368 instanceof Error)){
var e = e34368;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34368;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34369 = cljs.core._EQ_;
var expr__34370 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34369.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34370))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34369.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34370))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34369.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34370))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34369,expr__34370){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34369,expr__34370))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34372,callback){
var map__34373 = p__34372;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var file_msg = map__34373__$1;
var request_url = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28015__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34373,map__34373__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34373,map__34373__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__){
return (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34413_34439 = state_34411__$1;
(statearr_34413_34439[(2)] = inst_34407);

(statearr_34413_34439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34414_34440 = state_34411__$1;
(statearr_34414_34440[(2)] = null);

(statearr_34414_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34377 = (state_34411[(7)]);
var inst_34377__$1 = (state_34411[(2)]);
var state_34411__$1 = (function (){var statearr_34415 = state_34411;
(statearr_34415[(7)] = inst_34377__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34377__$1)){
var statearr_34416_34441 = state_34411__$1;
(statearr_34416_34441[(1)] = (5));

} else {
var statearr_34417_34442 = state_34411__$1;
(statearr_34417_34442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (15))){
var inst_34392 = (state_34411[(8)]);
var inst_34390 = (state_34411[(9)]);
var inst_34394 = inst_34392.call(null,inst_34390);
var state_34411__$1 = state_34411;
var statearr_34418_34443 = state_34411__$1;
(statearr_34418_34443[(2)] = inst_34394);

(statearr_34418_34443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var inst_34401 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34419_34444 = state_34411__$1;
(statearr_34419_34444[(2)] = inst_34401);

(statearr_34419_34444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var state_34411__$1 = state_34411;
var statearr_34420_34445 = state_34411__$1;
(statearr_34420_34445[(2)] = null);

(statearr_34420_34445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (17))){
var inst_34398 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34421_34446 = state_34411__$1;
(statearr_34421_34446[(2)] = inst_34398);

(statearr_34421_34446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34422_34447 = state_34411__$1;
(statearr_34422_34447[(2)] = null);

(statearr_34422_34447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34411__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34412 === (11))){
var inst_34382 = (state_34411[(10)]);
var inst_34388 = figwheel.client.file_reloading.blocking_load.call(null,inst_34382);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34411__$1,(14),inst_34388);
} else {
if((state_val_34412 === (9))){
var inst_34382 = (state_34411[(10)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34382)){
var statearr_34423_34448 = state_34411__$1;
(statearr_34423_34448[(1)] = (11));

} else {
var statearr_34424_34449 = state_34411__$1;
(statearr_34424_34449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var inst_34377 = (state_34411[(7)]);
var inst_34383 = (state_34411[(11)]);
var inst_34382 = cljs.core.nth.call(null,inst_34377,(0),null);
var inst_34383__$1 = cljs.core.nth.call(null,inst_34377,(1),null);
var state_34411__$1 = (function (){var statearr_34425 = state_34411;
(statearr_34425[(11)] = inst_34383__$1);

(statearr_34425[(10)] = inst_34382);

return statearr_34425;
})();
if(cljs.core.truth_(inst_34383__$1)){
var statearr_34426_34450 = state_34411__$1;
(statearr_34426_34450[(1)] = (8));

} else {
var statearr_34427_34451 = state_34411__$1;
(statearr_34427_34451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34392 = (state_34411[(8)]);
var inst_34382 = (state_34411[(10)]);
var inst_34390 = (state_34411[(2)]);
var inst_34391 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34392__$1 = cljs.core.get.call(null,inst_34391,inst_34382);
var state_34411__$1 = (function (){var statearr_34428 = state_34411;
(statearr_34428[(8)] = inst_34392__$1);

(statearr_34428[(9)] = inst_34390);

return statearr_34428;
})();
if(cljs.core.truth_(inst_34392__$1)){
var statearr_34429_34452 = state_34411__$1;
(statearr_34429_34452[(1)] = (15));

} else {
var statearr_34430_34453 = state_34411__$1;
(statearr_34430_34453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (16))){
var inst_34390 = (state_34411[(9)]);
var inst_34396 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34390);
var state_34411__$1 = state_34411;
var statearr_34431_34454 = state_34411__$1;
(statearr_34431_34454[(2)] = inst_34396);

(statearr_34431_34454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34403 = (state_34411[(2)]);
var state_34411__$1 = (function (){var statearr_34432 = state_34411;
(statearr_34432[(12)] = inst_34403);

return statearr_34432;
})();
var statearr_34433_34455 = state_34411__$1;
(statearr_34433_34455[(2)] = null);

(statearr_34433_34455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34383 = (state_34411[(11)]);
var inst_34385 = eval(inst_34383);
var state_34411__$1 = state_34411;
var statearr_34434_34456 = state_34411__$1;
(statearr_34434_34456[(2)] = inst_34385);

(statearr_34434_34456[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
});})(c__30958__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$state_machine__30447__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34435[(0)] = figwheel$client$file_reloading$state_machine__30447__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var figwheel$client$file_reloading$state_machine__30447__auto____1 = (function (state_34411){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_34411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__30450__auto__ = e34436;
var statearr_34437_34457 = state_34411;
(statearr_34437_34457[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34458 = state_34411;
state_34411 = G__34458;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30447__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30447__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30447__auto____0;
figwheel$client$file_reloading$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30447__auto____1;
return figwheel$client$file_reloading$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__))
})();
var state__30960__auto__ = (function (){var statearr_34438 = f__30959__auto__.call(null);
(statearr_34438[(6)] = c__30958__auto__);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__))
);

return c__30958__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34460 = arguments.length;
switch (G__34460) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34462,callback){
var map__34463 = p__34462;
var map__34463__$1 = ((((!((map__34463 == null)))?((((map__34463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34463):map__34463);
var file_msg = map__34463__$1;
var namespace = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34463,map__34463__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34463,map__34463__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34465){
var map__34466 = p__34465;
var map__34466__$1 = ((((!((map__34466 == null)))?((((map__34466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);
var file_msg = map__34466__$1;
var namespace = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34468){
var map__34469 = p__34468;
var map__34469__$1 = ((((!((map__34469 == null)))?((((map__34469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34469):map__34469);
var file_msg = map__34469__$1;
var namespace = cljs.core.get.call(null,map__34469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28003__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28003__auto__){
var or__28015__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
var or__28015__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28015__auto____$1)){
return or__28015__auto____$1;
} else {
var or__28015__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__28015__auto____$2)){
return or__28015__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__28003__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34471,callback){
var map__34472 = p__34471;
var map__34472__$1 = ((((!((map__34472 == null)))?((((map__34472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34472):map__34472);
var file_msg = map__34472__$1;
var request_url = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30958__auto___34522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___34522,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___34522,out){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (1))){
var inst_34481 = cljs.core.seq.call(null,files);
var inst_34482 = cljs.core.first.call(null,inst_34481);
var inst_34483 = cljs.core.next.call(null,inst_34481);
var inst_34484 = files;
var state_34507__$1 = (function (){var statearr_34509 = state_34507;
(statearr_34509[(7)] = inst_34484);

(statearr_34509[(8)] = inst_34483);

(statearr_34509[(9)] = inst_34482);

return statearr_34509;
})();
var statearr_34510_34523 = state_34507__$1;
(statearr_34510_34523[(2)] = null);

(statearr_34510_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var inst_34490 = (state_34507[(10)]);
var inst_34484 = (state_34507[(7)]);
var inst_34489 = cljs.core.seq.call(null,inst_34484);
var inst_34490__$1 = cljs.core.first.call(null,inst_34489);
var inst_34491 = cljs.core.next.call(null,inst_34489);
var inst_34492 = (inst_34490__$1 == null);
var inst_34493 = cljs.core.not.call(null,inst_34492);
var state_34507__$1 = (function (){var statearr_34511 = state_34507;
(statearr_34511[(10)] = inst_34490__$1);

(statearr_34511[(11)] = inst_34491);

return statearr_34511;
})();
if(inst_34493){
var statearr_34512_34524 = state_34507__$1;
(statearr_34512_34524[(1)] = (4));

} else {
var statearr_34513_34525 = state_34507__$1;
(statearr_34513_34525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (4))){
var inst_34490 = (state_34507[(10)]);
var inst_34495 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34490);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34507__$1,(7),inst_34495);
} else {
if((state_val_34508 === (5))){
var inst_34501 = cljs.core.async.close_BANG_.call(null,out);
var state_34507__$1 = state_34507;
var statearr_34514_34526 = state_34507__$1;
(statearr_34514_34526[(2)] = inst_34501);

(statearr_34514_34526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34515_34527 = state_34507__$1;
(statearr_34515_34527[(2)] = inst_34503);

(statearr_34515_34527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (7))){
var inst_34491 = (state_34507[(11)]);
var inst_34497 = (state_34507[(2)]);
var inst_34498 = cljs.core.async.put_BANG_.call(null,out,inst_34497);
var inst_34484 = inst_34491;
var state_34507__$1 = (function (){var statearr_34516 = state_34507;
(statearr_34516[(12)] = inst_34498);

(statearr_34516[(7)] = inst_34484);

return statearr_34516;
})();
var statearr_34517_34528 = state_34507__$1;
(statearr_34517_34528[(2)] = null);

(statearr_34517_34528[(1)] = (2));


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
});})(c__30958__auto___34522,out))
;
return ((function (switch__30446__auto__,c__30958__auto___34522,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0 = (function (){
var statearr_34518 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34518[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__);

(statearr_34518[(1)] = (1));

return statearr_34518;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1 = (function (state_34507){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_34507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e34519){if((e34519 instanceof Object)){
var ex__30450__auto__ = e34519;
var statearr_34520_34529 = state_34507;
(statearr_34520_34529[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_34507;
state_34507 = G__34530;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___34522,out))
})();
var state__30960__auto__ = (function (){var statearr_34521 = f__30959__auto__.call(null);
(statearr_34521[(6)] = c__30958__auto___34522);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___34522,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34531,opts){
var map__34532 = p__34531;
var map__34532__$1 = ((((!((map__34532 == null)))?((((map__34532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34532):map__34532);
var eval_body = cljs.core.get.call(null,map__34532__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34532__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28003__auto__ = eval_body;
if(cljs.core.truth_(and__28003__auto__)){
return typeof eval_body === 'string';
} else {
return and__28003__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34534){var e = e34534;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34535_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34535_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34536){
var vec__34537 = p__34536;
var k = cljs.core.nth.call(null,vec__34537,(0),null);
var v = cljs.core.nth.call(null,vec__34537,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34540){
var vec__34541 = p__34540;
var k = cljs.core.nth.call(null,vec__34541,(0),null);
var v = cljs.core.nth.call(null,vec__34541,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34547,p__34548){
var map__34549 = p__34547;
var map__34549__$1 = ((((!((map__34549 == null)))?((((map__34549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34549):map__34549);
var opts = map__34549__$1;
var before_jsload = cljs.core.get.call(null,map__34549__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34549__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34549__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34550 = p__34548;
var map__34550__$1 = ((((!((map__34550 == null)))?((((map__34550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34550):map__34550);
var msg = map__34550__$1;
var files = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34704){
var state_val_34705 = (state_34704[(1)]);
if((state_val_34705 === (7))){
var inst_34567 = (state_34704[(7)]);
var inst_34565 = (state_34704[(8)]);
var inst_34564 = (state_34704[(9)]);
var inst_34566 = (state_34704[(10)]);
var inst_34572 = cljs.core._nth.call(null,inst_34565,inst_34567);
var inst_34573 = figwheel.client.file_reloading.eval_body.call(null,inst_34572,opts);
var inst_34574 = (inst_34567 + (1));
var tmp34706 = inst_34565;
var tmp34707 = inst_34564;
var tmp34708 = inst_34566;
var inst_34564__$1 = tmp34707;
var inst_34565__$1 = tmp34706;
var inst_34566__$1 = tmp34708;
var inst_34567__$1 = inst_34574;
var state_34704__$1 = (function (){var statearr_34709 = state_34704;
(statearr_34709[(7)] = inst_34567__$1);

(statearr_34709[(8)] = inst_34565__$1);

(statearr_34709[(9)] = inst_34564__$1);

(statearr_34709[(11)] = inst_34573);

(statearr_34709[(10)] = inst_34566__$1);

return statearr_34709;
})();
var statearr_34710_34793 = state_34704__$1;
(statearr_34710_34793[(2)] = null);

(statearr_34710_34793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (20))){
var inst_34607 = (state_34704[(12)]);
var inst_34615 = figwheel.client.file_reloading.sort_files.call(null,inst_34607);
var state_34704__$1 = state_34704;
var statearr_34711_34794 = state_34704__$1;
(statearr_34711_34794[(2)] = inst_34615);

(statearr_34711_34794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (27))){
var state_34704__$1 = state_34704;
var statearr_34712_34795 = state_34704__$1;
(statearr_34712_34795[(2)] = null);

(statearr_34712_34795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (1))){
var inst_34556 = (state_34704[(13)]);
var inst_34553 = before_jsload.call(null,files);
var inst_34554 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34555 = (function (){return ((function (inst_34556,inst_34553,inst_34554,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34544_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34544_SHARP_);
});
;})(inst_34556,inst_34553,inst_34554,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34556__$1 = cljs.core.filter.call(null,inst_34555,files);
var inst_34557 = cljs.core.not_empty.call(null,inst_34556__$1);
var state_34704__$1 = (function (){var statearr_34713 = state_34704;
(statearr_34713[(14)] = inst_34554);

(statearr_34713[(15)] = inst_34553);

(statearr_34713[(13)] = inst_34556__$1);

return statearr_34713;
})();
if(cljs.core.truth_(inst_34557)){
var statearr_34714_34796 = state_34704__$1;
(statearr_34714_34796[(1)] = (2));

} else {
var statearr_34715_34797 = state_34704__$1;
(statearr_34715_34797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (24))){
var state_34704__$1 = state_34704;
var statearr_34716_34798 = state_34704__$1;
(statearr_34716_34798[(2)] = null);

(statearr_34716_34798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (39))){
var inst_34657 = (state_34704[(16)]);
var state_34704__$1 = state_34704;
var statearr_34717_34799 = state_34704__$1;
(statearr_34717_34799[(2)] = inst_34657);

(statearr_34717_34799[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (46))){
var inst_34699 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34718_34800 = state_34704__$1;
(statearr_34718_34800[(2)] = inst_34699);

(statearr_34718_34800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (4))){
var inst_34601 = (state_34704[(2)]);
var inst_34602 = cljs.core.List.EMPTY;
var inst_34603 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34602);
var inst_34604 = (function (){return ((function (inst_34601,inst_34602,inst_34603,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34545_SHARP_){
var and__28003__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34545_SHARP_);
if(cljs.core.truth_(and__28003__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34545_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34545_SHARP_)));
} else {
return and__28003__auto__;
}
});
;})(inst_34601,inst_34602,inst_34603,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34605 = cljs.core.filter.call(null,inst_34604,files);
var inst_34606 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34607 = cljs.core.concat.call(null,inst_34605,inst_34606);
var state_34704__$1 = (function (){var statearr_34719 = state_34704;
(statearr_34719[(17)] = inst_34601);

(statearr_34719[(18)] = inst_34603);

(statearr_34719[(12)] = inst_34607);

return statearr_34719;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34720_34801 = state_34704__$1;
(statearr_34720_34801[(1)] = (16));

} else {
var statearr_34721_34802 = state_34704__$1;
(statearr_34721_34802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (15))){
var inst_34591 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34722_34803 = state_34704__$1;
(statearr_34722_34803[(2)] = inst_34591);

(statearr_34722_34803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (21))){
var inst_34617 = (state_34704[(19)]);
var inst_34617__$1 = (state_34704[(2)]);
var inst_34618 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34617__$1);
var state_34704__$1 = (function (){var statearr_34723 = state_34704;
(statearr_34723[(19)] = inst_34617__$1);

return statearr_34723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34704__$1,(22),inst_34618);
} else {
if((state_val_34705 === (31))){
var inst_34702 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34704__$1,inst_34702);
} else {
if((state_val_34705 === (32))){
var inst_34657 = (state_34704[(16)]);
var inst_34662 = inst_34657.cljs$lang$protocol_mask$partition0$;
var inst_34663 = (inst_34662 & (64));
var inst_34664 = inst_34657.cljs$core$ISeq$;
var inst_34665 = (cljs.core.PROTOCOL_SENTINEL === inst_34664);
var inst_34666 = (inst_34663) || (inst_34665);
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34666)){
var statearr_34724_34804 = state_34704__$1;
(statearr_34724_34804[(1)] = (35));

} else {
var statearr_34725_34805 = state_34704__$1;
(statearr_34725_34805[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (40))){
var inst_34679 = (state_34704[(20)]);
var inst_34678 = (state_34704[(2)]);
var inst_34679__$1 = cljs.core.get.call(null,inst_34678,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34680 = cljs.core.get.call(null,inst_34678,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34681 = cljs.core.not_empty.call(null,inst_34679__$1);
var state_34704__$1 = (function (){var statearr_34726 = state_34704;
(statearr_34726[(20)] = inst_34679__$1);

(statearr_34726[(21)] = inst_34680);

return statearr_34726;
})();
if(cljs.core.truth_(inst_34681)){
var statearr_34727_34806 = state_34704__$1;
(statearr_34727_34806[(1)] = (41));

} else {
var statearr_34728_34807 = state_34704__$1;
(statearr_34728_34807[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (33))){
var state_34704__$1 = state_34704;
var statearr_34729_34808 = state_34704__$1;
(statearr_34729_34808[(2)] = false);

(statearr_34729_34808[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (13))){
var inst_34577 = (state_34704[(22)]);
var inst_34581 = cljs.core.chunk_first.call(null,inst_34577);
var inst_34582 = cljs.core.chunk_rest.call(null,inst_34577);
var inst_34583 = cljs.core.count.call(null,inst_34581);
var inst_34564 = inst_34582;
var inst_34565 = inst_34581;
var inst_34566 = inst_34583;
var inst_34567 = (0);
var state_34704__$1 = (function (){var statearr_34730 = state_34704;
(statearr_34730[(7)] = inst_34567);

(statearr_34730[(8)] = inst_34565);

(statearr_34730[(9)] = inst_34564);

(statearr_34730[(10)] = inst_34566);

return statearr_34730;
})();
var statearr_34731_34809 = state_34704__$1;
(statearr_34731_34809[(2)] = null);

(statearr_34731_34809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (22))){
var inst_34621 = (state_34704[(23)]);
var inst_34625 = (state_34704[(24)]);
var inst_34617 = (state_34704[(19)]);
var inst_34620 = (state_34704[(25)]);
var inst_34620__$1 = (state_34704[(2)]);
var inst_34621__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34620__$1);
var inst_34622 = (function (){var all_files = inst_34617;
var res_SINGLEQUOTE_ = inst_34620__$1;
var res = inst_34621__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34621,inst_34625,inst_34617,inst_34620,inst_34620__$1,inst_34621__$1,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34546_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34546_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34621,inst_34625,inst_34617,inst_34620,inst_34620__$1,inst_34621__$1,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34623 = cljs.core.filter.call(null,inst_34622,inst_34620__$1);
var inst_34624 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34625__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34624);
var inst_34626 = cljs.core.not_empty.call(null,inst_34625__$1);
var state_34704__$1 = (function (){var statearr_34732 = state_34704;
(statearr_34732[(23)] = inst_34621__$1);

(statearr_34732[(24)] = inst_34625__$1);

(statearr_34732[(25)] = inst_34620__$1);

(statearr_34732[(26)] = inst_34623);

return statearr_34732;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34733_34810 = state_34704__$1;
(statearr_34733_34810[(1)] = (23));

} else {
var statearr_34734_34811 = state_34704__$1;
(statearr_34734_34811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (36))){
var state_34704__$1 = state_34704;
var statearr_34735_34812 = state_34704__$1;
(statearr_34735_34812[(2)] = false);

(statearr_34735_34812[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (41))){
var inst_34679 = (state_34704[(20)]);
var inst_34683 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34684 = cljs.core.map.call(null,inst_34683,inst_34679);
var inst_34685 = cljs.core.pr_str.call(null,inst_34684);
var inst_34686 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34685)].join('');
var inst_34687 = figwheel.client.utils.log.call(null,inst_34686);
var state_34704__$1 = state_34704;
var statearr_34736_34813 = state_34704__$1;
(statearr_34736_34813[(2)] = inst_34687);

(statearr_34736_34813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (43))){
var inst_34680 = (state_34704[(21)]);
var inst_34690 = (state_34704[(2)]);
var inst_34691 = cljs.core.not_empty.call(null,inst_34680);
var state_34704__$1 = (function (){var statearr_34737 = state_34704;
(statearr_34737[(27)] = inst_34690);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34691)){
var statearr_34738_34814 = state_34704__$1;
(statearr_34738_34814[(1)] = (44));

} else {
var statearr_34739_34815 = state_34704__$1;
(statearr_34739_34815[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (29))){
var inst_34621 = (state_34704[(23)]);
var inst_34657 = (state_34704[(16)]);
var inst_34625 = (state_34704[(24)]);
var inst_34617 = (state_34704[(19)]);
var inst_34620 = (state_34704[(25)]);
var inst_34623 = (state_34704[(26)]);
var inst_34653 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34656 = (function (){var all_files = inst_34617;
var res_SINGLEQUOTE_ = inst_34620;
var res = inst_34621;
var files_not_loaded = inst_34623;
var dependencies_that_loaded = inst_34625;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34657,inst_34625,inst_34617,inst_34620,inst_34623,inst_34653,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34655){
var map__34740 = p__34655;
var map__34740__$1 = ((((!((map__34740 == null)))?((((map__34740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34740):map__34740);
var namespace = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34657,inst_34625,inst_34617,inst_34620,inst_34623,inst_34653,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34657__$1 = cljs.core.group_by.call(null,inst_34656,inst_34623);
var inst_34659 = (inst_34657__$1 == null);
var inst_34660 = cljs.core.not.call(null,inst_34659);
var state_34704__$1 = (function (){var statearr_34742 = state_34704;
(statearr_34742[(16)] = inst_34657__$1);

(statearr_34742[(28)] = inst_34653);

return statearr_34742;
})();
if(inst_34660){
var statearr_34743_34816 = state_34704__$1;
(statearr_34743_34816[(1)] = (32));

} else {
var statearr_34744_34817 = state_34704__$1;
(statearr_34744_34817[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (44))){
var inst_34680 = (state_34704[(21)]);
var inst_34693 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34680);
var inst_34694 = cljs.core.pr_str.call(null,inst_34693);
var inst_34695 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34694)].join('');
var inst_34696 = figwheel.client.utils.log.call(null,inst_34695);
var state_34704__$1 = state_34704;
var statearr_34745_34818 = state_34704__$1;
(statearr_34745_34818[(2)] = inst_34696);

(statearr_34745_34818[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (6))){
var inst_34598 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34746_34819 = state_34704__$1;
(statearr_34746_34819[(2)] = inst_34598);

(statearr_34746_34819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (28))){
var inst_34623 = (state_34704[(26)]);
var inst_34650 = (state_34704[(2)]);
var inst_34651 = cljs.core.not_empty.call(null,inst_34623);
var state_34704__$1 = (function (){var statearr_34747 = state_34704;
(statearr_34747[(29)] = inst_34650);

return statearr_34747;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34748_34820 = state_34704__$1;
(statearr_34748_34820[(1)] = (29));

} else {
var statearr_34749_34821 = state_34704__$1;
(statearr_34749_34821[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (25))){
var inst_34621 = (state_34704[(23)]);
var inst_34637 = (state_34704[(2)]);
var inst_34638 = cljs.core.not_empty.call(null,inst_34621);
var state_34704__$1 = (function (){var statearr_34750 = state_34704;
(statearr_34750[(30)] = inst_34637);

return statearr_34750;
})();
if(cljs.core.truth_(inst_34638)){
var statearr_34751_34822 = state_34704__$1;
(statearr_34751_34822[(1)] = (26));

} else {
var statearr_34752_34823 = state_34704__$1;
(statearr_34752_34823[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (34))){
var inst_34673 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34673)){
var statearr_34753_34824 = state_34704__$1;
(statearr_34753_34824[(1)] = (38));

} else {
var statearr_34754_34825 = state_34704__$1;
(statearr_34754_34825[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (17))){
var state_34704__$1 = state_34704;
var statearr_34755_34826 = state_34704__$1;
(statearr_34755_34826[(2)] = recompile_dependents);

(statearr_34755_34826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (3))){
var state_34704__$1 = state_34704;
var statearr_34756_34827 = state_34704__$1;
(statearr_34756_34827[(2)] = null);

(statearr_34756_34827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (12))){
var inst_34594 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34757_34828 = state_34704__$1;
(statearr_34757_34828[(2)] = inst_34594);

(statearr_34757_34828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (2))){
var inst_34556 = (state_34704[(13)]);
var inst_34563 = cljs.core.seq.call(null,inst_34556);
var inst_34564 = inst_34563;
var inst_34565 = null;
var inst_34566 = (0);
var inst_34567 = (0);
var state_34704__$1 = (function (){var statearr_34758 = state_34704;
(statearr_34758[(7)] = inst_34567);

(statearr_34758[(8)] = inst_34565);

(statearr_34758[(9)] = inst_34564);

(statearr_34758[(10)] = inst_34566);

return statearr_34758;
})();
var statearr_34759_34829 = state_34704__$1;
(statearr_34759_34829[(2)] = null);

(statearr_34759_34829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (23))){
var inst_34621 = (state_34704[(23)]);
var inst_34625 = (state_34704[(24)]);
var inst_34617 = (state_34704[(19)]);
var inst_34620 = (state_34704[(25)]);
var inst_34623 = (state_34704[(26)]);
var inst_34628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34630 = (function (){var all_files = inst_34617;
var res_SINGLEQUOTE_ = inst_34620;
var res = inst_34621;
var files_not_loaded = inst_34623;
var dependencies_that_loaded = inst_34625;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34628,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34629){
var map__34760 = p__34629;
var map__34760__$1 = ((((!((map__34760 == null)))?((((map__34760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34760):map__34760);
var request_url = cljs.core.get.call(null,map__34760__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34628,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34631 = cljs.core.reverse.call(null,inst_34625);
var inst_34632 = cljs.core.map.call(null,inst_34630,inst_34631);
var inst_34633 = cljs.core.pr_str.call(null,inst_34632);
var inst_34634 = figwheel.client.utils.log.call(null,inst_34633);
var state_34704__$1 = (function (){var statearr_34762 = state_34704;
(statearr_34762[(31)] = inst_34628);

return statearr_34762;
})();
var statearr_34763_34830 = state_34704__$1;
(statearr_34763_34830[(2)] = inst_34634);

(statearr_34763_34830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (35))){
var state_34704__$1 = state_34704;
var statearr_34764_34831 = state_34704__$1;
(statearr_34764_34831[(2)] = true);

(statearr_34764_34831[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (19))){
var inst_34607 = (state_34704[(12)]);
var inst_34613 = figwheel.client.file_reloading.expand_files.call(null,inst_34607);
var state_34704__$1 = state_34704;
var statearr_34765_34832 = state_34704__$1;
(statearr_34765_34832[(2)] = inst_34613);

(statearr_34765_34832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (11))){
var state_34704__$1 = state_34704;
var statearr_34766_34833 = state_34704__$1;
(statearr_34766_34833[(2)] = null);

(statearr_34766_34833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (9))){
var inst_34596 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34767_34834 = state_34704__$1;
(statearr_34767_34834[(2)] = inst_34596);

(statearr_34767_34834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (5))){
var inst_34567 = (state_34704[(7)]);
var inst_34566 = (state_34704[(10)]);
var inst_34569 = (inst_34567 < inst_34566);
var inst_34570 = inst_34569;
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34570)){
var statearr_34768_34835 = state_34704__$1;
(statearr_34768_34835[(1)] = (7));

} else {
var statearr_34769_34836 = state_34704__$1;
(statearr_34769_34836[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (14))){
var inst_34577 = (state_34704[(22)]);
var inst_34586 = cljs.core.first.call(null,inst_34577);
var inst_34587 = figwheel.client.file_reloading.eval_body.call(null,inst_34586,opts);
var inst_34588 = cljs.core.next.call(null,inst_34577);
var inst_34564 = inst_34588;
var inst_34565 = null;
var inst_34566 = (0);
var inst_34567 = (0);
var state_34704__$1 = (function (){var statearr_34770 = state_34704;
(statearr_34770[(7)] = inst_34567);

(statearr_34770[(8)] = inst_34565);

(statearr_34770[(9)] = inst_34564);

(statearr_34770[(32)] = inst_34587);

(statearr_34770[(10)] = inst_34566);

return statearr_34770;
})();
var statearr_34771_34837 = state_34704__$1;
(statearr_34771_34837[(2)] = null);

(statearr_34771_34837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (45))){
var state_34704__$1 = state_34704;
var statearr_34772_34838 = state_34704__$1;
(statearr_34772_34838[(2)] = null);

(statearr_34772_34838[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (26))){
var inst_34621 = (state_34704[(23)]);
var inst_34625 = (state_34704[(24)]);
var inst_34617 = (state_34704[(19)]);
var inst_34620 = (state_34704[(25)]);
var inst_34623 = (state_34704[(26)]);
var inst_34640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34642 = (function (){var all_files = inst_34617;
var res_SINGLEQUOTE_ = inst_34620;
var res = inst_34621;
var files_not_loaded = inst_34623;
var dependencies_that_loaded = inst_34625;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34640,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34641){
var map__34773 = p__34641;
var map__34773__$1 = ((((!((map__34773 == null)))?((((map__34773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34773):map__34773);
var namespace = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34640,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34643 = cljs.core.map.call(null,inst_34642,inst_34621);
var inst_34644 = cljs.core.pr_str.call(null,inst_34643);
var inst_34645 = figwheel.client.utils.log.call(null,inst_34644);
var inst_34646 = (function (){var all_files = inst_34617;
var res_SINGLEQUOTE_ = inst_34620;
var res = inst_34621;
var files_not_loaded = inst_34623;
var dependencies_that_loaded = inst_34625;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34640,inst_34642,inst_34643,inst_34644,inst_34645,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34621,inst_34625,inst_34617,inst_34620,inst_34623,inst_34640,inst_34642,inst_34643,inst_34644,inst_34645,state_val_34705,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34647 = setTimeout(inst_34646,(10));
var state_34704__$1 = (function (){var statearr_34775 = state_34704;
(statearr_34775[(33)] = inst_34645);

(statearr_34775[(34)] = inst_34640);

return statearr_34775;
})();
var statearr_34776_34839 = state_34704__$1;
(statearr_34776_34839[(2)] = inst_34647);

(statearr_34776_34839[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (16))){
var state_34704__$1 = state_34704;
var statearr_34777_34840 = state_34704__$1;
(statearr_34777_34840[(2)] = reload_dependents);

(statearr_34777_34840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (38))){
var inst_34657 = (state_34704[(16)]);
var inst_34675 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34657);
var state_34704__$1 = state_34704;
var statearr_34778_34841 = state_34704__$1;
(statearr_34778_34841[(2)] = inst_34675);

(statearr_34778_34841[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (30))){
var state_34704__$1 = state_34704;
var statearr_34779_34842 = state_34704__$1;
(statearr_34779_34842[(2)] = null);

(statearr_34779_34842[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (10))){
var inst_34577 = (state_34704[(22)]);
var inst_34579 = cljs.core.chunked_seq_QMARK_.call(null,inst_34577);
var state_34704__$1 = state_34704;
if(inst_34579){
var statearr_34780_34843 = state_34704__$1;
(statearr_34780_34843[(1)] = (13));

} else {
var statearr_34781_34844 = state_34704__$1;
(statearr_34781_34844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (18))){
var inst_34611 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
if(cljs.core.truth_(inst_34611)){
var statearr_34782_34845 = state_34704__$1;
(statearr_34782_34845[(1)] = (19));

} else {
var statearr_34783_34846 = state_34704__$1;
(statearr_34783_34846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (42))){
var state_34704__$1 = state_34704;
var statearr_34784_34847 = state_34704__$1;
(statearr_34784_34847[(2)] = null);

(statearr_34784_34847[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (37))){
var inst_34670 = (state_34704[(2)]);
var state_34704__$1 = state_34704;
var statearr_34785_34848 = state_34704__$1;
(statearr_34785_34848[(2)] = inst_34670);

(statearr_34785_34848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34705 === (8))){
var inst_34577 = (state_34704[(22)]);
var inst_34564 = (state_34704[(9)]);
var inst_34577__$1 = cljs.core.seq.call(null,inst_34564);
var state_34704__$1 = (function (){var statearr_34786 = state_34704;
(statearr_34786[(22)] = inst_34577__$1);

return statearr_34786;
})();
if(inst_34577__$1){
var statearr_34787_34849 = state_34704__$1;
(statearr_34787_34849[(1)] = (10));

} else {
var statearr_34788_34850 = state_34704__$1;
(statearr_34788_34850[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30446__auto__,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0 = (function (){
var statearr_34789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34789[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__);

(statearr_34789[(1)] = (1));

return statearr_34789;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1 = (function (state_34704){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_34704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e34790){if((e34790 instanceof Object)){
var ex__30450__auto__ = e34790;
var statearr_34791_34851 = state_34704;
(statearr_34791_34851[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34852 = state_34704;
state_34704 = G__34852;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__ = function(state_34704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1.call(this,state_34704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30960__auto__ = (function (){var statearr_34792 = f__30959__auto__.call(null);
(statearr_34792[(6)] = c__30958__auto__);

return statearr_34792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__,map__34549,map__34549__$1,opts,before_jsload,on_jsload,reload_dependents,map__34550,map__34550__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30958__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34855,link){
var map__34856 = p__34855;
var map__34856__$1 = ((((!((map__34856 == null)))?((((map__34856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34856):map__34856);
var file = cljs.core.get.call(null,map__34856__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34856,map__34856__$1,file){
return (function (p1__34853_SHARP_,p2__34854_SHARP_){
if(cljs.core._EQ_.call(null,p1__34853_SHARP_,p2__34854_SHARP_)){
return p1__34853_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34856,map__34856__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34859){
var map__34860 = p__34859;
var map__34860__$1 = ((((!((map__34860 == null)))?((((map__34860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34860):map__34860);
var match_length = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34858_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34858_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34862_SHARP_,p2__34863_SHARP_){
return cljs.core.assoc.call(null,p1__34862_SHARP_,cljs.core.get.call(null,p2__34863_SHARP_,key),p2__34863_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34864 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34864);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34864);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34865,p__34866){
var map__34867 = p__34865;
var map__34867__$1 = ((((!((map__34867 == null)))?((((map__34867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34867):map__34867);
var on_cssload = cljs.core.get.call(null,map__34867__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34868 = p__34866;
var map__34868__$1 = ((((!((map__34868 == null)))?((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var files_msg = map__34868__$1;
var files = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521812297839
