// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34884 = arguments.length;
var i__29187__auto___34885 = (0);
while(true){
if((i__29187__auto___34885 < len__29186__auto___34884)){
args__29193__auto__.push((arguments[i__29187__auto___34885]));

var G__34886 = (i__29187__auto___34885 + (1));
i__29187__auto___34885 = G__34886;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq34883){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34883));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34888 = arguments.length;
var i__29187__auto___34889 = (0);
while(true){
if((i__29187__auto___34889 < len__29186__auto___34888)){
args__29193__auto__.push((arguments[i__29187__auto___34889]));

var G__34890 = (i__29187__auto___34889 + (1));
i__29187__auto___34889 = G__34890;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq34887){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34887));
});

var g_QMARK__34891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_34892 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34891){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__34891))
,null));
var mkg_34893 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34891,g_34892){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__34891,g_34892))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__34891,g_34892,mkg_34893){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34891).call(null,x);
});})(g_QMARK__34891,g_34892,mkg_34893))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__34891,g_34892,mkg_34893){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_34893).call(null,gfn);
});})(g_QMARK__34891,g_34892,mkg_34893))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__34891,g_34892,mkg_34893){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_34892).call(null,generator);
});})(g_QMARK__34891,g_34892,mkg_34893))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29279__auto___34913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29279__auto___34913){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34914 = arguments.length;
var i__29187__auto___34915 = (0);
while(true){
if((i__29187__auto___34915 < len__29186__auto___34914)){
args__29193__auto__.push((arguments[i__29187__auto___34915]));

var G__34916 = (i__29187__auto___34915 + (1));
i__29187__auto___34915 = G__34916;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34913))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34913),args);
});})(g__29279__auto___34913))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29279__auto___34913){
return (function (seq34894){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34894));
});})(g__29279__auto___34913))
;


var g__29279__auto___34917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29279__auto___34917){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34918 = arguments.length;
var i__29187__auto___34919 = (0);
while(true){
if((i__29187__auto___34919 < len__29186__auto___34918)){
args__29193__auto__.push((arguments[i__29187__auto___34919]));

var G__34920 = (i__29187__auto___34919 + (1));
i__29187__auto___34919 = G__34920;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34917))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34917),args);
});})(g__29279__auto___34917))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29279__auto___34917){
return (function (seq34895){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34895));
});})(g__29279__auto___34917))
;


var g__29279__auto___34921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29279__auto___34921){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34922 = arguments.length;
var i__29187__auto___34923 = (0);
while(true){
if((i__29187__auto___34923 < len__29186__auto___34922)){
args__29193__auto__.push((arguments[i__29187__auto___34923]));

var G__34924 = (i__29187__auto___34923 + (1));
i__29187__auto___34923 = G__34924;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34921))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34921),args);
});})(g__29279__auto___34921))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29279__auto___34921){
return (function (seq34896){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34896));
});})(g__29279__auto___34921))
;


var g__29279__auto___34925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29279__auto___34925){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34926 = arguments.length;
var i__29187__auto___34927 = (0);
while(true){
if((i__29187__auto___34927 < len__29186__auto___34926)){
args__29193__auto__.push((arguments[i__29187__auto___34927]));

var G__34928 = (i__29187__auto___34927 + (1));
i__29187__auto___34927 = G__34928;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34925))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34925){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34925),args);
});})(g__29279__auto___34925))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29279__auto___34925){
return (function (seq34897){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34897));
});})(g__29279__auto___34925))
;


var g__29279__auto___34929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29279__auto___34929){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34930 = arguments.length;
var i__29187__auto___34931 = (0);
while(true){
if((i__29187__auto___34931 < len__29186__auto___34930)){
args__29193__auto__.push((arguments[i__29187__auto___34931]));

var G__34932 = (i__29187__auto___34931 + (1));
i__29187__auto___34931 = G__34932;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34929))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34929){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34929),args);
});})(g__29279__auto___34929))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29279__auto___34929){
return (function (seq34898){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34898));
});})(g__29279__auto___34929))
;


var g__29279__auto___34933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29279__auto___34933){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34934 = arguments.length;
var i__29187__auto___34935 = (0);
while(true){
if((i__29187__auto___34935 < len__29186__auto___34934)){
args__29193__auto__.push((arguments[i__29187__auto___34935]));

var G__34936 = (i__29187__auto___34935 + (1));
i__29187__auto___34935 = G__34936;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34933))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34933){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34933),args);
});})(g__29279__auto___34933))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29279__auto___34933){
return (function (seq34899){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34899));
});})(g__29279__auto___34933))
;


var g__29279__auto___34937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29279__auto___34937){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34938 = arguments.length;
var i__29187__auto___34939 = (0);
while(true){
if((i__29187__auto___34939 < len__29186__auto___34938)){
args__29193__auto__.push((arguments[i__29187__auto___34939]));

var G__34940 = (i__29187__auto___34939 + (1));
i__29187__auto___34939 = G__34940;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34937))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34937){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34937),args);
});})(g__29279__auto___34937))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29279__auto___34937){
return (function (seq34900){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34900));
});})(g__29279__auto___34937))
;


var g__29279__auto___34941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29279__auto___34941){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34942 = arguments.length;
var i__29187__auto___34943 = (0);
while(true){
if((i__29187__auto___34943 < len__29186__auto___34942)){
args__29193__auto__.push((arguments[i__29187__auto___34943]));

var G__34944 = (i__29187__auto___34943 + (1));
i__29187__auto___34943 = G__34944;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34941))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34941){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34941),args);
});})(g__29279__auto___34941))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29279__auto___34941){
return (function (seq34901){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34901));
});})(g__29279__auto___34941))
;


var g__29279__auto___34945 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29279__auto___34945){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34946 = arguments.length;
var i__29187__auto___34947 = (0);
while(true){
if((i__29187__auto___34947 < len__29186__auto___34946)){
args__29193__auto__.push((arguments[i__29187__auto___34947]));

var G__34948 = (i__29187__auto___34947 + (1));
i__29187__auto___34947 = G__34948;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34945))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34945){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34945),args);
});})(g__29279__auto___34945))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29279__auto___34945){
return (function (seq34902){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34902));
});})(g__29279__auto___34945))
;


var g__29279__auto___34949 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29279__auto___34949){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34950 = arguments.length;
var i__29187__auto___34951 = (0);
while(true){
if((i__29187__auto___34951 < len__29186__auto___34950)){
args__29193__auto__.push((arguments[i__29187__auto___34951]));

var G__34952 = (i__29187__auto___34951 + (1));
i__29187__auto___34951 = G__34952;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34949))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34949){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34949),args);
});})(g__29279__auto___34949))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29279__auto___34949){
return (function (seq34903){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34903));
});})(g__29279__auto___34949))
;


var g__29279__auto___34953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29279__auto___34953){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34954 = arguments.length;
var i__29187__auto___34955 = (0);
while(true){
if((i__29187__auto___34955 < len__29186__auto___34954)){
args__29193__auto__.push((arguments[i__29187__auto___34955]));

var G__34956 = (i__29187__auto___34955 + (1));
i__29187__auto___34955 = G__34956;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34953))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34953){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34953),args);
});})(g__29279__auto___34953))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29279__auto___34953){
return (function (seq34904){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34904));
});})(g__29279__auto___34953))
;


var g__29279__auto___34957 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29279__auto___34957){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34958 = arguments.length;
var i__29187__auto___34959 = (0);
while(true){
if((i__29187__auto___34959 < len__29186__auto___34958)){
args__29193__auto__.push((arguments[i__29187__auto___34959]));

var G__34960 = (i__29187__auto___34959 + (1));
i__29187__auto___34959 = G__34960;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34957))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34957){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34957),args);
});})(g__29279__auto___34957))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29279__auto___34957){
return (function (seq34905){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34905));
});})(g__29279__auto___34957))
;


var g__29279__auto___34961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29279__auto___34961){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34962 = arguments.length;
var i__29187__auto___34963 = (0);
while(true){
if((i__29187__auto___34963 < len__29186__auto___34962)){
args__29193__auto__.push((arguments[i__29187__auto___34963]));

var G__34964 = (i__29187__auto___34963 + (1));
i__29187__auto___34963 = G__34964;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34961))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34961),args);
});})(g__29279__auto___34961))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29279__auto___34961){
return (function (seq34906){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34906));
});})(g__29279__auto___34961))
;


var g__29279__auto___34965 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29279__auto___34965){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34966 = arguments.length;
var i__29187__auto___34967 = (0);
while(true){
if((i__29187__auto___34967 < len__29186__auto___34966)){
args__29193__auto__.push((arguments[i__29187__auto___34967]));

var G__34968 = (i__29187__auto___34967 + (1));
i__29187__auto___34967 = G__34968;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34965))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34965),args);
});})(g__29279__auto___34965))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29279__auto___34965){
return (function (seq34907){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34907));
});})(g__29279__auto___34965))
;


var g__29279__auto___34969 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29279__auto___34969){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34970 = arguments.length;
var i__29187__auto___34971 = (0);
while(true){
if((i__29187__auto___34971 < len__29186__auto___34970)){
args__29193__auto__.push((arguments[i__29187__auto___34971]));

var G__34972 = (i__29187__auto___34971 + (1));
i__29187__auto___34971 = G__34972;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34969))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34969),args);
});})(g__29279__auto___34969))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29279__auto___34969){
return (function (seq34908){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34908));
});})(g__29279__auto___34969))
;


var g__29279__auto___34973 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29279__auto___34973){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34974 = arguments.length;
var i__29187__auto___34975 = (0);
while(true){
if((i__29187__auto___34975 < len__29186__auto___34974)){
args__29193__auto__.push((arguments[i__29187__auto___34975]));

var G__34976 = (i__29187__auto___34975 + (1));
i__29187__auto___34975 = G__34976;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34973))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34973),args);
});})(g__29279__auto___34973))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29279__auto___34973){
return (function (seq34909){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34909));
});})(g__29279__auto___34973))
;


var g__29279__auto___34977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29279__auto___34977){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34978 = arguments.length;
var i__29187__auto___34979 = (0);
while(true){
if((i__29187__auto___34979 < len__29186__auto___34978)){
args__29193__auto__.push((arguments[i__29187__auto___34979]));

var G__34980 = (i__29187__auto___34979 + (1));
i__29187__auto___34979 = G__34980;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34977))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34977),args);
});})(g__29279__auto___34977))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29279__auto___34977){
return (function (seq34910){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34910));
});})(g__29279__auto___34977))
;


var g__29279__auto___34981 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29279__auto___34981){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34982 = arguments.length;
var i__29187__auto___34983 = (0);
while(true){
if((i__29187__auto___34983 < len__29186__auto___34982)){
args__29193__auto__.push((arguments[i__29187__auto___34983]));

var G__34984 = (i__29187__auto___34983 + (1));
i__29187__auto___34983 = G__34984;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34981))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34981),args);
});})(g__29279__auto___34981))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29279__auto___34981){
return (function (seq34911){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34911));
});})(g__29279__auto___34981))
;


var g__29279__auto___34985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29279__auto___34985){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29193__auto__ = [];
var len__29186__auto___34986 = arguments.length;
var i__29187__auto___34987 = (0);
while(true){
if((i__29187__auto___34987 < len__29186__auto___34986)){
args__29193__auto__.push((arguments[i__29187__auto___34987]));

var G__34988 = (i__29187__auto___34987 + (1));
i__29187__auto___34987 = G__34988;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29279__auto___34985))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29279__auto___34985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29279__auto___34985),args);
});})(g__29279__auto___34985))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29279__auto___34985){
return (function (seq34912){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34912));
});})(g__29279__auto___34985))
;

var g__29292__auto___35010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29292__auto___35010){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35011 = arguments.length;
var i__29187__auto___35012 = (0);
while(true){
if((i__29187__auto___35012 < len__29186__auto___35011)){
args__29193__auto__.push((arguments[i__29187__auto___35012]));

var G__35013 = (i__29187__auto___35012 + (1));
i__29187__auto___35012 = G__35013;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35010))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35010){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35010);
});})(g__29292__auto___35010))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29292__auto___35010){
return (function (seq34989){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34989));
});})(g__29292__auto___35010))
;


var g__29292__auto___35014 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29292__auto___35014){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35015 = arguments.length;
var i__29187__auto___35016 = (0);
while(true){
if((i__29187__auto___35016 < len__29186__auto___35015)){
args__29193__auto__.push((arguments[i__29187__auto___35016]));

var G__35017 = (i__29187__auto___35016 + (1));
i__29187__auto___35016 = G__35017;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35014))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35014){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35014);
});})(g__29292__auto___35014))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29292__auto___35014){
return (function (seq34990){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34990));
});})(g__29292__auto___35014))
;


var g__29292__auto___35018 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29292__auto___35018){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35019 = arguments.length;
var i__29187__auto___35020 = (0);
while(true){
if((i__29187__auto___35020 < len__29186__auto___35019)){
args__29193__auto__.push((arguments[i__29187__auto___35020]));

var G__35021 = (i__29187__auto___35020 + (1));
i__29187__auto___35020 = G__35021;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35018))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35018){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35018);
});})(g__29292__auto___35018))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29292__auto___35018){
return (function (seq34991){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34991));
});})(g__29292__auto___35018))
;


var g__29292__auto___35022 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29292__auto___35022){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35023 = arguments.length;
var i__29187__auto___35024 = (0);
while(true){
if((i__29187__auto___35024 < len__29186__auto___35023)){
args__29193__auto__.push((arguments[i__29187__auto___35024]));

var G__35025 = (i__29187__auto___35024 + (1));
i__29187__auto___35024 = G__35025;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35022))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35022){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35022);
});})(g__29292__auto___35022))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29292__auto___35022){
return (function (seq34992){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34992));
});})(g__29292__auto___35022))
;


var g__29292__auto___35026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29292__auto___35026){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35027 = arguments.length;
var i__29187__auto___35028 = (0);
while(true){
if((i__29187__auto___35028 < len__29186__auto___35027)){
args__29193__auto__.push((arguments[i__29187__auto___35028]));

var G__35029 = (i__29187__auto___35028 + (1));
i__29187__auto___35028 = G__35029;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35026))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35026){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35026);
});})(g__29292__auto___35026))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29292__auto___35026){
return (function (seq34993){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34993));
});})(g__29292__auto___35026))
;


var g__29292__auto___35030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29292__auto___35030){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35031 = arguments.length;
var i__29187__auto___35032 = (0);
while(true){
if((i__29187__auto___35032 < len__29186__auto___35031)){
args__29193__auto__.push((arguments[i__29187__auto___35032]));

var G__35033 = (i__29187__auto___35032 + (1));
i__29187__auto___35032 = G__35033;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35030))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35030){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35030);
});})(g__29292__auto___35030))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29292__auto___35030){
return (function (seq34994){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34994));
});})(g__29292__auto___35030))
;


var g__29292__auto___35034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29292__auto___35034){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35035 = arguments.length;
var i__29187__auto___35036 = (0);
while(true){
if((i__29187__auto___35036 < len__29186__auto___35035)){
args__29193__auto__.push((arguments[i__29187__auto___35036]));

var G__35037 = (i__29187__auto___35036 + (1));
i__29187__auto___35036 = G__35037;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35034))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35034){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35034);
});})(g__29292__auto___35034))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29292__auto___35034){
return (function (seq34995){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34995));
});})(g__29292__auto___35034))
;


var g__29292__auto___35038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29292__auto___35038){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35039 = arguments.length;
var i__29187__auto___35040 = (0);
while(true){
if((i__29187__auto___35040 < len__29186__auto___35039)){
args__29193__auto__.push((arguments[i__29187__auto___35040]));

var G__35041 = (i__29187__auto___35040 + (1));
i__29187__auto___35040 = G__35041;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35038))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35038){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35038);
});})(g__29292__auto___35038))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29292__auto___35038){
return (function (seq34996){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34996));
});})(g__29292__auto___35038))
;


var g__29292__auto___35042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29292__auto___35042){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35043 = arguments.length;
var i__29187__auto___35044 = (0);
while(true){
if((i__29187__auto___35044 < len__29186__auto___35043)){
args__29193__auto__.push((arguments[i__29187__auto___35044]));

var G__35045 = (i__29187__auto___35044 + (1));
i__29187__auto___35044 = G__35045;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35042))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35042){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35042);
});})(g__29292__auto___35042))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29292__auto___35042){
return (function (seq34997){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34997));
});})(g__29292__auto___35042))
;


var g__29292__auto___35046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29292__auto___35046){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35047 = arguments.length;
var i__29187__auto___35048 = (0);
while(true){
if((i__29187__auto___35048 < len__29186__auto___35047)){
args__29193__auto__.push((arguments[i__29187__auto___35048]));

var G__35049 = (i__29187__auto___35048 + (1));
i__29187__auto___35048 = G__35049;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35046))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35046){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35046);
});})(g__29292__auto___35046))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29292__auto___35046){
return (function (seq34998){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34998));
});})(g__29292__auto___35046))
;


var g__29292__auto___35050 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29292__auto___35050){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35051 = arguments.length;
var i__29187__auto___35052 = (0);
while(true){
if((i__29187__auto___35052 < len__29186__auto___35051)){
args__29193__auto__.push((arguments[i__29187__auto___35052]));

var G__35053 = (i__29187__auto___35052 + (1));
i__29187__auto___35052 = G__35053;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35050))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35050){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35050);
});})(g__29292__auto___35050))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29292__auto___35050){
return (function (seq34999){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34999));
});})(g__29292__auto___35050))
;


var g__29292__auto___35054 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29292__auto___35054){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35055 = arguments.length;
var i__29187__auto___35056 = (0);
while(true){
if((i__29187__auto___35056 < len__29186__auto___35055)){
args__29193__auto__.push((arguments[i__29187__auto___35056]));

var G__35057 = (i__29187__auto___35056 + (1));
i__29187__auto___35056 = G__35057;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35054))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35054){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35054);
});})(g__29292__auto___35054))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29292__auto___35054){
return (function (seq35000){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35000));
});})(g__29292__auto___35054))
;


var g__29292__auto___35058 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29292__auto___35058){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35059 = arguments.length;
var i__29187__auto___35060 = (0);
while(true){
if((i__29187__auto___35060 < len__29186__auto___35059)){
args__29193__auto__.push((arguments[i__29187__auto___35060]));

var G__35061 = (i__29187__auto___35060 + (1));
i__29187__auto___35060 = G__35061;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35058))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35058){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35058);
});})(g__29292__auto___35058))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29292__auto___35058){
return (function (seq35001){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35001));
});})(g__29292__auto___35058))
;


var g__29292__auto___35062 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29292__auto___35062){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35063 = arguments.length;
var i__29187__auto___35064 = (0);
while(true){
if((i__29187__auto___35064 < len__29186__auto___35063)){
args__29193__auto__.push((arguments[i__29187__auto___35064]));

var G__35065 = (i__29187__auto___35064 + (1));
i__29187__auto___35064 = G__35065;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35062))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35062){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35062);
});})(g__29292__auto___35062))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29292__auto___35062){
return (function (seq35002){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35002));
});})(g__29292__auto___35062))
;


var g__29292__auto___35066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29292__auto___35066){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35067 = arguments.length;
var i__29187__auto___35068 = (0);
while(true){
if((i__29187__auto___35068 < len__29186__auto___35067)){
args__29193__auto__.push((arguments[i__29187__auto___35068]));

var G__35069 = (i__29187__auto___35068 + (1));
i__29187__auto___35068 = G__35069;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35066))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35066){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35066);
});})(g__29292__auto___35066))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29292__auto___35066){
return (function (seq35003){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35003));
});})(g__29292__auto___35066))
;


var g__29292__auto___35070 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29292__auto___35070){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35071 = arguments.length;
var i__29187__auto___35072 = (0);
while(true){
if((i__29187__auto___35072 < len__29186__auto___35071)){
args__29193__auto__.push((arguments[i__29187__auto___35072]));

var G__35073 = (i__29187__auto___35072 + (1));
i__29187__auto___35072 = G__35073;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35070))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35070){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35070);
});})(g__29292__auto___35070))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29292__auto___35070){
return (function (seq35004){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35004));
});})(g__29292__auto___35070))
;


var g__29292__auto___35074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29292__auto___35074){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35075 = arguments.length;
var i__29187__auto___35076 = (0);
while(true){
if((i__29187__auto___35076 < len__29186__auto___35075)){
args__29193__auto__.push((arguments[i__29187__auto___35076]));

var G__35077 = (i__29187__auto___35076 + (1));
i__29187__auto___35076 = G__35077;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35074))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35074){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35074);
});})(g__29292__auto___35074))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29292__auto___35074){
return (function (seq35005){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35005));
});})(g__29292__auto___35074))
;


var g__29292__auto___35078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29292__auto___35078){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35079 = arguments.length;
var i__29187__auto___35080 = (0);
while(true){
if((i__29187__auto___35080 < len__29186__auto___35079)){
args__29193__auto__.push((arguments[i__29187__auto___35080]));

var G__35081 = (i__29187__auto___35080 + (1));
i__29187__auto___35080 = G__35081;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35078))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35078){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35078);
});})(g__29292__auto___35078))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29292__auto___35078){
return (function (seq35006){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35006));
});})(g__29292__auto___35078))
;


var g__29292__auto___35082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29292__auto___35082){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35083 = arguments.length;
var i__29187__auto___35084 = (0);
while(true){
if((i__29187__auto___35084 < len__29186__auto___35083)){
args__29193__auto__.push((arguments[i__29187__auto___35084]));

var G__35085 = (i__29187__auto___35084 + (1));
i__29187__auto___35084 = G__35085;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35082))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35082){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35082);
});})(g__29292__auto___35082))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29292__auto___35082){
return (function (seq35007){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35007));
});})(g__29292__auto___35082))
;


var g__29292__auto___35086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29292__auto___35086){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35087 = arguments.length;
var i__29187__auto___35088 = (0);
while(true){
if((i__29187__auto___35088 < len__29186__auto___35087)){
args__29193__auto__.push((arguments[i__29187__auto___35088]));

var G__35089 = (i__29187__auto___35088 + (1));
i__29187__auto___35088 = G__35089;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35086))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35086){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35086);
});})(g__29292__auto___35086))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29292__auto___35086){
return (function (seq35008){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35008));
});})(g__29292__auto___35086))
;


var g__29292__auto___35090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29292__auto___35090){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35091 = arguments.length;
var i__29187__auto___35092 = (0);
while(true){
if((i__29187__auto___35092 < len__29186__auto___35091)){
args__29193__auto__.push((arguments[i__29187__auto___35092]));

var G__35093 = (i__29187__auto___35092 + (1));
i__29187__auto___35092 = G__35093;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});})(g__29292__auto___35090))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29292__auto___35090){
return (function (args){
return cljs.core.deref.call(null,g__29292__auto___35090);
});})(g__29292__auto___35090))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29292__auto___35090){
return (function (seq35009){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35009));
});})(g__29292__auto___35090))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35096 = arguments.length;
var i__29187__auto___35097 = (0);
while(true){
if((i__29187__auto___35097 < len__29186__auto___35096)){
args__29193__auto__.push((arguments[i__29187__auto___35097]));

var G__35098 = (i__29187__auto___35097 + (1));
i__29187__auto___35097 = G__35098;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35094_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35094_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35095){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35095));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35099_SHARP_){
return (new Date(p1__35099_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521812298217
