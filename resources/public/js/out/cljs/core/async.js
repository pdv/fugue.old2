// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31004 = arguments.length;
switch (G__31004) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31005 = (function (f,blockable,meta31006){
this.f = f;
this.blockable = blockable;
this.meta31006 = meta31006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31007,meta31006__$1){
var self__ = this;
var _31007__$1 = this;
return (new cljs.core.async.t_cljs$core$async31005(self__.f,self__.blockable,meta31006__$1));
});

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31007){
var self__ = this;
var _31007__$1 = this;
return self__.meta31006;
});

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31006","meta31006",-1888612374,null)], null);
});

cljs.core.async.t_cljs$core$async31005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31005";

cljs.core.async.t_cljs$core$async31005.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async31005");
});

cljs.core.async.__GT_t_cljs$core$async31005 = (function cljs$core$async$__GT_t_cljs$core$async31005(f__$1,blockable__$1,meta31006){
return (new cljs.core.async.t_cljs$core$async31005(f__$1,blockable__$1,meta31006));
});

}

return (new cljs.core.async.t_cljs$core$async31005(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31011 = arguments.length;
switch (G__31011) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31014 = arguments.length;
switch (G__31014) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31017 = arguments.length;
switch (G__31017) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31019 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31019);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31019,ret){
return (function (){
return fn1.call(null,val_31019);
});})(val_31019,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31021 = arguments.length;
switch (G__31021) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28962__auto___31023 = n;
var x_31024 = (0);
while(true){
if((x_31024 < n__28962__auto___31023)){
(a[x_31024] = (0));

var G__31025 = (x_31024 + (1));
x_31024 = G__31025;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31026 = (i + (1));
i = G__31026;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31027 = (function (flag,meta31028){
this.flag = flag;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new cljs.core.async.t_cljs$core$async31027(self__.flag,meta31028__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31028","meta31028",-303965076,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31027";

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async31027");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31027 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31027(flag__$1,meta31028){
return (new cljs.core.async.t_cljs$core$async31027(flag__$1,meta31028));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31027(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31030 = (function (flag,cb,meta31031){
this.flag = flag;
this.cb = cb;
this.meta31031 = meta31031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31032,meta31031__$1){
var self__ = this;
var _31032__$1 = this;
return (new cljs.core.async.t_cljs$core$async31030(self__.flag,self__.cb,meta31031__$1));
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31032){
var self__ = this;
var _31032__$1 = this;
return self__.meta31031;
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31031","meta31031",-1243835823,null)], null);
});

cljs.core.async.t_cljs$core$async31030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31030";

cljs.core.async.t_cljs$core$async31030.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async31030");
});

cljs.core.async.__GT_t_cljs$core$async31030 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31030(flag__$1,cb__$1,meta31031){
return (new cljs.core.async.t_cljs$core$async31030(flag__$1,cb__$1,meta31031));
});

}

return (new cljs.core.async.t_cljs$core$async31030(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31033_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31034_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31034_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28015__auto__ = wport;
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31035 = (i + (1));
i = G__31035;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28015__auto__ = ret;
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28003__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28003__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28003__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29193__auto__ = [];
var len__29186__auto___31041 = arguments.length;
var i__29187__auto___31042 = (0);
while(true){
if((i__29187__auto___31042 < len__29186__auto___31041)){
args__29193__auto__.push((arguments[i__29187__auto___31042]));

var G__31043 = (i__29187__auto___31042 + (1));
i__29187__auto___31042 = G__31043;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((1) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29194__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31038){
var map__31039 = p__31038;
var map__31039__$1 = ((((!((map__31039 == null)))?((((map__31039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);
var opts = map__31039__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31036){
var G__31037 = cljs.core.first.call(null,seq31036);
var seq31036__$1 = cljs.core.next.call(null,seq31036);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31037,seq31036__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31045 = arguments.length;
switch (G__31045) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30958__auto___31091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___31091){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___31091){
return (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (7))){
var inst_31065 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31071_31092 = state_31069__$1;
(statearr_31071_31092[(2)] = inst_31065);

(statearr_31071_31092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (1))){
var state_31069__$1 = state_31069;
var statearr_31072_31093 = state_31069__$1;
(statearr_31072_31093[(2)] = null);

(statearr_31072_31093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (4))){
var inst_31048 = (state_31069[(7)]);
var inst_31048__$1 = (state_31069[(2)]);
var inst_31049 = (inst_31048__$1 == null);
var state_31069__$1 = (function (){var statearr_31073 = state_31069;
(statearr_31073[(7)] = inst_31048__$1);

return statearr_31073;
})();
if(cljs.core.truth_(inst_31049)){
var statearr_31074_31094 = state_31069__$1;
(statearr_31074_31094[(1)] = (5));

} else {
var statearr_31075_31095 = state_31069__$1;
(statearr_31075_31095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (13))){
var state_31069__$1 = state_31069;
var statearr_31076_31096 = state_31069__$1;
(statearr_31076_31096[(2)] = null);

(statearr_31076_31096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (6))){
var inst_31048 = (state_31069[(7)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31069__$1,(11),to,inst_31048);
} else {
if((state_val_31070 === (3))){
var inst_31067 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31069__$1,inst_31067);
} else {
if((state_val_31070 === (12))){
var state_31069__$1 = state_31069;
var statearr_31077_31097 = state_31069__$1;
(statearr_31077_31097[(2)] = null);

(statearr_31077_31097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (2))){
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31069__$1,(4),from);
} else {
if((state_val_31070 === (11))){
var inst_31058 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_31058)){
var statearr_31078_31098 = state_31069__$1;
(statearr_31078_31098[(1)] = (12));

} else {
var statearr_31079_31099 = state_31069__$1;
(statearr_31079_31099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (9))){
var state_31069__$1 = state_31069;
var statearr_31080_31100 = state_31069__$1;
(statearr_31080_31100[(2)] = null);

(statearr_31080_31100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (5))){
var state_31069__$1 = state_31069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31081_31101 = state_31069__$1;
(statearr_31081_31101[(1)] = (8));

} else {
var statearr_31082_31102 = state_31069__$1;
(statearr_31082_31102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (14))){
var inst_31063 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31083_31103 = state_31069__$1;
(statearr_31083_31103[(2)] = inst_31063);

(statearr_31083_31103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (10))){
var inst_31055 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31084_31104 = state_31069__$1;
(statearr_31084_31104[(2)] = inst_31055);

(statearr_31084_31104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (8))){
var inst_31052 = cljs.core.async.close_BANG_.call(null,to);
var state_31069__$1 = state_31069;
var statearr_31085_31105 = state_31069__$1;
(statearr_31085_31105[(2)] = inst_31052);

(statearr_31085_31105[(1)] = (10));


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
});})(c__30958__auto___31091))
;
return ((function (switch__30446__auto__,c__30958__auto___31091){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_31069){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__30450__auto__ = e31087;
var statearr_31088_31106 = state_31069;
(statearr_31088_31106[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31107 = state_31069;
state_31069 = G__31107;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___31091))
})();
var state__30960__auto__ = (function (){var statearr_31089 = f__30959__auto__.call(null);
(statearr_31089[(6)] = c__30958__auto___31091);

return statearr_31089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___31091))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31108){
var vec__31109 = p__31108;
var v = cljs.core.nth.call(null,vec__31109,(0),null);
var p = cljs.core.nth.call(null,vec__31109,(1),null);
var job = vec__31109;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30958__auto___31280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results){
return (function (state_31116){
var state_val_31117 = (state_31116[(1)]);
if((state_val_31117 === (1))){
var state_31116__$1 = state_31116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31116__$1,(2),res,v);
} else {
if((state_val_31117 === (2))){
var inst_31113 = (state_31116[(2)]);
var inst_31114 = cljs.core.async.close_BANG_.call(null,res);
var state_31116__$1 = (function (){var statearr_31118 = state_31116;
(statearr_31118[(7)] = inst_31113);

return statearr_31118;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31116__$1,inst_31114);
} else {
return null;
}
}
});})(c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results))
;
return ((function (switch__30446__auto__,c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null,null];
(statearr_31119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_31116){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object)){
var ex__30450__auto__ = e31120;
var statearr_31121_31281 = state_31116;
(statearr_31121_31281[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31282 = state_31116;
state_31116 = G__31282;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_31116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_31116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results))
})();
var state__30960__auto__ = (function (){var statearr_31122 = f__30959__auto__.call(null);
(statearr_31122[(6)] = c__30958__auto___31280);

return statearr_31122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___31280,res,vec__31109,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31123){
var vec__31124 = p__31123;
var v = cljs.core.nth.call(null,vec__31124,(0),null);
var p = cljs.core.nth.call(null,vec__31124,(1),null);
var job = vec__31124;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28962__auto___31283 = n;
var __31284 = (0);
while(true){
if((__31284 < n__28962__auto___31283)){
var G__31127_31285 = type;
var G__31127_31286__$1 = (((G__31127_31285 instanceof cljs.core.Keyword))?G__31127_31285.fqn:null);
switch (G__31127_31286__$1) {
case "compute":
var c__30958__auto___31288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31284,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (__31284,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function (state_31140){
var state_val_31141 = (state_31140[(1)]);
if((state_val_31141 === (1))){
var state_31140__$1 = state_31140;
var statearr_31142_31289 = state_31140__$1;
(statearr_31142_31289[(2)] = null);

(statearr_31142_31289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (2))){
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31140__$1,(4),jobs);
} else {
if((state_val_31141 === (3))){
var inst_31138 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else {
if((state_val_31141 === (4))){
var inst_31130 = (state_31140[(2)]);
var inst_31131 = process.call(null,inst_31130);
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31131)){
var statearr_31143_31290 = state_31140__$1;
(statearr_31143_31290[(1)] = (5));

} else {
var statearr_31144_31291 = state_31140__$1;
(statearr_31144_31291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (5))){
var state_31140__$1 = state_31140;
var statearr_31145_31292 = state_31140__$1;
(statearr_31145_31292[(2)] = null);

(statearr_31145_31292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (6))){
var state_31140__$1 = state_31140;
var statearr_31146_31293 = state_31140__$1;
(statearr_31146_31293[(2)] = null);

(statearr_31146_31293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (7))){
var inst_31136 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31147_31294 = state_31140__$1;
(statearr_31147_31294[(2)] = inst_31136);

(statearr_31147_31294[(1)] = (3));


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
});})(__31284,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
;
return ((function (__31284,switch__30446__auto__,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_31148 = [null,null,null,null,null,null,null];
(statearr_31148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_31148[(1)] = (1));

return statearr_31148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_31140){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31149){if((e31149 instanceof Object)){
var ex__30450__auto__ = e31149;
var statearr_31150_31295 = state_31140;
(statearr_31150_31295[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31296 = state_31140;
state_31140 = G__31296;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(__31284,switch__30446__auto__,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
})();
var state__30960__auto__ = (function (){var statearr_31151 = f__30959__auto__.call(null);
(statearr_31151[(6)] = c__30958__auto___31288);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(__31284,c__30958__auto___31288,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
);


break;
case "async":
var c__30958__auto___31297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31284,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (__31284,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (1))){
var state_31164__$1 = state_31164;
var statearr_31166_31298 = state_31164__$1;
(statearr_31166_31298[(2)] = null);

(statearr_31166_31298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (2))){
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31164__$1,(4),jobs);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (4))){
var inst_31154 = (state_31164[(2)]);
var inst_31155 = async.call(null,inst_31154);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31155)){
var statearr_31167_31299 = state_31164__$1;
(statearr_31167_31299[(1)] = (5));

} else {
var statearr_31168_31300 = state_31164__$1;
(statearr_31168_31300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (5))){
var state_31164__$1 = state_31164;
var statearr_31169_31301 = state_31164__$1;
(statearr_31169_31301[(2)] = null);

(statearr_31169_31301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var state_31164__$1 = state_31164;
var statearr_31170_31302 = state_31164__$1;
(statearr_31170_31302[(2)] = null);

(statearr_31170_31302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (7))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31171_31303 = state_31164__$1;
(statearr_31171_31303[(2)] = inst_31160);

(statearr_31171_31303[(1)] = (3));


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
});})(__31284,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
;
return ((function (__31284,switch__30446__auto__,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_31172 = [null,null,null,null,null,null,null];
(statearr_31172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_31172[(1)] = (1));

return statearr_31172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_31164){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31173){if((e31173 instanceof Object)){
var ex__30450__auto__ = e31173;
var statearr_31174_31304 = state_31164;
(statearr_31174_31304[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31305 = state_31164;
state_31164 = G__31305;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(__31284,switch__30446__auto__,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
})();
var state__30960__auto__ = (function (){var statearr_31175 = f__30959__auto__.call(null);
(statearr_31175[(6)] = c__30958__auto___31297);

return statearr_31175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(__31284,c__30958__auto___31297,G__31127_31285,G__31127_31286__$1,n__28962__auto___31283,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31127_31286__$1)].join('')));

}

var G__31306 = (__31284 + (1));
__31284 = G__31306;
continue;
} else {
}
break;
}

var c__30958__auto___31307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___31307,jobs,results,process,async){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___31307,jobs,results,process,async){
return (function (state_31197){
var state_val_31198 = (state_31197[(1)]);
if((state_val_31198 === (1))){
var state_31197__$1 = state_31197;
var statearr_31199_31308 = state_31197__$1;
(statearr_31199_31308[(2)] = null);

(statearr_31199_31308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (2))){
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31197__$1,(4),from);
} else {
if((state_val_31198 === (3))){
var inst_31195 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31197__$1,inst_31195);
} else {
if((state_val_31198 === (4))){
var inst_31178 = (state_31197[(7)]);
var inst_31178__$1 = (state_31197[(2)]);
var inst_31179 = (inst_31178__$1 == null);
var state_31197__$1 = (function (){var statearr_31200 = state_31197;
(statearr_31200[(7)] = inst_31178__$1);

return statearr_31200;
})();
if(cljs.core.truth_(inst_31179)){
var statearr_31201_31309 = state_31197__$1;
(statearr_31201_31309[(1)] = (5));

} else {
var statearr_31202_31310 = state_31197__$1;
(statearr_31202_31310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (5))){
var inst_31181 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31197__$1 = state_31197;
var statearr_31203_31311 = state_31197__$1;
(statearr_31203_31311[(2)] = inst_31181);

(statearr_31203_31311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (6))){
var inst_31183 = (state_31197[(8)]);
var inst_31178 = (state_31197[(7)]);
var inst_31183__$1 = cljs.core.async.chan.call(null,(1));
var inst_31184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31185 = [inst_31178,inst_31183__$1];
var inst_31186 = (new cljs.core.PersistentVector(null,2,(5),inst_31184,inst_31185,null));
var state_31197__$1 = (function (){var statearr_31204 = state_31197;
(statearr_31204[(8)] = inst_31183__$1);

return statearr_31204;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31197__$1,(8),jobs,inst_31186);
} else {
if((state_val_31198 === (7))){
var inst_31193 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31205_31312 = state_31197__$1;
(statearr_31205_31312[(2)] = inst_31193);

(statearr_31205_31312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (8))){
var inst_31183 = (state_31197[(8)]);
var inst_31188 = (state_31197[(2)]);
var state_31197__$1 = (function (){var statearr_31206 = state_31197;
(statearr_31206[(9)] = inst_31188);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31197__$1,(9),results,inst_31183);
} else {
if((state_val_31198 === (9))){
var inst_31190 = (state_31197[(2)]);
var state_31197__$1 = (function (){var statearr_31207 = state_31197;
(statearr_31207[(10)] = inst_31190);

return statearr_31207;
})();
var statearr_31208_31313 = state_31197__$1;
(statearr_31208_31313[(2)] = null);

(statearr_31208_31313[(1)] = (2));


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
});})(c__30958__auto___31307,jobs,results,process,async))
;
return ((function (switch__30446__auto__,c__30958__auto___31307,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_31209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_31209[(1)] = (1));

return statearr_31209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_31197){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31210){if((e31210 instanceof Object)){
var ex__30450__auto__ = e31210;
var statearr_31211_31314 = state_31197;
(statearr_31211_31314[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31315 = state_31197;
state_31197 = G__31315;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_31197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_31197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___31307,jobs,results,process,async))
})();
var state__30960__auto__ = (function (){var statearr_31212 = f__30959__auto__.call(null);
(statearr_31212[(6)] = c__30958__auto___31307);

return statearr_31212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___31307,jobs,results,process,async))
);


var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__,jobs,results,process,async){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__,jobs,results,process,async){
return (function (state_31250){
var state_val_31251 = (state_31250[(1)]);
if((state_val_31251 === (7))){
var inst_31246 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31252_31316 = state_31250__$1;
(statearr_31252_31316[(2)] = inst_31246);

(statearr_31252_31316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (20))){
var state_31250__$1 = state_31250;
var statearr_31253_31317 = state_31250__$1;
(statearr_31253_31317[(2)] = null);

(statearr_31253_31317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (1))){
var state_31250__$1 = state_31250;
var statearr_31254_31318 = state_31250__$1;
(statearr_31254_31318[(2)] = null);

(statearr_31254_31318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (4))){
var inst_31215 = (state_31250[(7)]);
var inst_31215__$1 = (state_31250[(2)]);
var inst_31216 = (inst_31215__$1 == null);
var state_31250__$1 = (function (){var statearr_31255 = state_31250;
(statearr_31255[(7)] = inst_31215__$1);

return statearr_31255;
})();
if(cljs.core.truth_(inst_31216)){
var statearr_31256_31319 = state_31250__$1;
(statearr_31256_31319[(1)] = (5));

} else {
var statearr_31257_31320 = state_31250__$1;
(statearr_31257_31320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (15))){
var inst_31228 = (state_31250[(8)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31250__$1,(18),to,inst_31228);
} else {
if((state_val_31251 === (21))){
var inst_31241 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31258_31321 = state_31250__$1;
(statearr_31258_31321[(2)] = inst_31241);

(statearr_31258_31321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (13))){
var inst_31243 = (state_31250[(2)]);
var state_31250__$1 = (function (){var statearr_31259 = state_31250;
(statearr_31259[(9)] = inst_31243);

return statearr_31259;
})();
var statearr_31260_31322 = state_31250__$1;
(statearr_31260_31322[(2)] = null);

(statearr_31260_31322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (6))){
var inst_31215 = (state_31250[(7)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31250__$1,(11),inst_31215);
} else {
if((state_val_31251 === (17))){
var inst_31236 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
if(cljs.core.truth_(inst_31236)){
var statearr_31261_31323 = state_31250__$1;
(statearr_31261_31323[(1)] = (19));

} else {
var statearr_31262_31324 = state_31250__$1;
(statearr_31262_31324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (3))){
var inst_31248 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31250__$1,inst_31248);
} else {
if((state_val_31251 === (12))){
var inst_31225 = (state_31250[(10)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31250__$1,(14),inst_31225);
} else {
if((state_val_31251 === (2))){
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31250__$1,(4),results);
} else {
if((state_val_31251 === (19))){
var state_31250__$1 = state_31250;
var statearr_31263_31325 = state_31250__$1;
(statearr_31263_31325[(2)] = null);

(statearr_31263_31325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (11))){
var inst_31225 = (state_31250[(2)]);
var state_31250__$1 = (function (){var statearr_31264 = state_31250;
(statearr_31264[(10)] = inst_31225);

return statearr_31264;
})();
var statearr_31265_31326 = state_31250__$1;
(statearr_31265_31326[(2)] = null);

(statearr_31265_31326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (9))){
var state_31250__$1 = state_31250;
var statearr_31266_31327 = state_31250__$1;
(statearr_31266_31327[(2)] = null);

(statearr_31266_31327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (5))){
var state_31250__$1 = state_31250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31267_31328 = state_31250__$1;
(statearr_31267_31328[(1)] = (8));

} else {
var statearr_31268_31329 = state_31250__$1;
(statearr_31268_31329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (14))){
var inst_31228 = (state_31250[(8)]);
var inst_31230 = (state_31250[(11)]);
var inst_31228__$1 = (state_31250[(2)]);
var inst_31229 = (inst_31228__$1 == null);
var inst_31230__$1 = cljs.core.not.call(null,inst_31229);
var state_31250__$1 = (function (){var statearr_31269 = state_31250;
(statearr_31269[(8)] = inst_31228__$1);

(statearr_31269[(11)] = inst_31230__$1);

return statearr_31269;
})();
if(inst_31230__$1){
var statearr_31270_31330 = state_31250__$1;
(statearr_31270_31330[(1)] = (15));

} else {
var statearr_31271_31331 = state_31250__$1;
(statearr_31271_31331[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (16))){
var inst_31230 = (state_31250[(11)]);
var state_31250__$1 = state_31250;
var statearr_31272_31332 = state_31250__$1;
(statearr_31272_31332[(2)] = inst_31230);

(statearr_31272_31332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (10))){
var inst_31222 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31273_31333 = state_31250__$1;
(statearr_31273_31333[(2)] = inst_31222);

(statearr_31273_31333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (18))){
var inst_31233 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31274_31334 = state_31250__$1;
(statearr_31274_31334[(2)] = inst_31233);

(statearr_31274_31334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (8))){
var inst_31219 = cljs.core.async.close_BANG_.call(null,to);
var state_31250__$1 = state_31250;
var statearr_31275_31335 = state_31250__$1;
(statearr_31275_31335[(2)] = inst_31219);

(statearr_31275_31335[(1)] = (10));


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
});})(c__30958__auto__,jobs,results,process,async))
;
return ((function (switch__30446__auto__,c__30958__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_31276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__);

(statearr_31276[(1)] = (1));

return statearr_31276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1 = (function (state_31250){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31277){if((e31277 instanceof Object)){
var ex__30450__auto__ = e31277;
var statearr_31278_31336 = state_31250;
(statearr_31278_31336[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31337 = state_31250;
state_31250 = G__31337;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__ = function(state_31250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1.call(this,state_31250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__,jobs,results,process,async))
})();
var state__30960__auto__ = (function (){var statearr_31279 = f__30959__auto__.call(null);
(statearr_31279[(6)] = c__30958__auto__);

return statearr_31279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__,jobs,results,process,async))
);

return c__30958__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31339 = arguments.length;
switch (G__31339) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31342 = arguments.length;
switch (G__31342) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31345 = arguments.length;
switch (G__31345) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30958__auto___31394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___31394,tc,fc){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___31394,tc,fc){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (7))){
var inst_31367 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31373_31395 = state_31371__$1;
(statearr_31373_31395[(2)] = inst_31367);

(statearr_31373_31395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (1))){
var state_31371__$1 = state_31371;
var statearr_31374_31396 = state_31371__$1;
(statearr_31374_31396[(2)] = null);

(statearr_31374_31396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (4))){
var inst_31348 = (state_31371[(7)]);
var inst_31348__$1 = (state_31371[(2)]);
var inst_31349 = (inst_31348__$1 == null);
var state_31371__$1 = (function (){var statearr_31375 = state_31371;
(statearr_31375[(7)] = inst_31348__$1);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31349)){
var statearr_31376_31397 = state_31371__$1;
(statearr_31376_31397[(1)] = (5));

} else {
var statearr_31377_31398 = state_31371__$1;
(statearr_31377_31398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (13))){
var state_31371__$1 = state_31371;
var statearr_31378_31399 = state_31371__$1;
(statearr_31378_31399[(2)] = null);

(statearr_31378_31399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var inst_31348 = (state_31371[(7)]);
var inst_31354 = p.call(null,inst_31348);
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31354)){
var statearr_31379_31400 = state_31371__$1;
(statearr_31379_31400[(1)] = (9));

} else {
var statearr_31380_31401 = state_31371__$1;
(statearr_31380_31401[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (3))){
var inst_31369 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (12))){
var state_31371__$1 = state_31371;
var statearr_31381_31402 = state_31371__$1;
(statearr_31381_31402[(2)] = null);

(statearr_31381_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (2))){
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(4),ch);
} else {
if((state_val_31372 === (11))){
var inst_31348 = (state_31371[(7)]);
var inst_31358 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(8),inst_31358,inst_31348);
} else {
if((state_val_31372 === (9))){
var state_31371__$1 = state_31371;
var statearr_31382_31403 = state_31371__$1;
(statearr_31382_31403[(2)] = tc);

(statearr_31382_31403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (5))){
var inst_31351 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31352 = cljs.core.async.close_BANG_.call(null,fc);
var state_31371__$1 = (function (){var statearr_31383 = state_31371;
(statearr_31383[(8)] = inst_31351);

return statearr_31383;
})();
var statearr_31384_31404 = state_31371__$1;
(statearr_31384_31404[(2)] = inst_31352);

(statearr_31384_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (14))){
var inst_31365 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31385_31405 = state_31371__$1;
(statearr_31385_31405[(2)] = inst_31365);

(statearr_31385_31405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (10))){
var state_31371__$1 = state_31371;
var statearr_31386_31406 = state_31371__$1;
(statearr_31386_31406[(2)] = fc);

(statearr_31386_31406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31360 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31360)){
var statearr_31387_31407 = state_31371__$1;
(statearr_31387_31407[(1)] = (12));

} else {
var statearr_31388_31408 = state_31371__$1;
(statearr_31388_31408[(1)] = (13));

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
});})(c__30958__auto___31394,tc,fc))
;
return ((function (switch__30446__auto__,c__30958__auto___31394,tc,fc){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_31371){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__30450__auto__ = e31390;
var statearr_31391_31409 = state_31371;
(statearr_31391_31409[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31410 = state_31371;
state_31371 = G__31410;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___31394,tc,fc))
})();
var state__30960__auto__ = (function (){var statearr_31392 = f__30959__auto__.call(null);
(statearr_31392[(6)] = c__30958__auto___31394);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___31394,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__){
return (function (state_31431){
var state_val_31432 = (state_31431[(1)]);
if((state_val_31432 === (7))){
var inst_31427 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
var statearr_31433_31451 = state_31431__$1;
(statearr_31433_31451[(2)] = inst_31427);

(statearr_31433_31451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (1))){
var inst_31411 = init;
var state_31431__$1 = (function (){var statearr_31434 = state_31431;
(statearr_31434[(7)] = inst_31411);

return statearr_31434;
})();
var statearr_31435_31452 = state_31431__$1;
(statearr_31435_31452[(2)] = null);

(statearr_31435_31452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (4))){
var inst_31414 = (state_31431[(8)]);
var inst_31414__$1 = (state_31431[(2)]);
var inst_31415 = (inst_31414__$1 == null);
var state_31431__$1 = (function (){var statearr_31436 = state_31431;
(statearr_31436[(8)] = inst_31414__$1);

return statearr_31436;
})();
if(cljs.core.truth_(inst_31415)){
var statearr_31437_31453 = state_31431__$1;
(statearr_31437_31453[(1)] = (5));

} else {
var statearr_31438_31454 = state_31431__$1;
(statearr_31438_31454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (6))){
var inst_31418 = (state_31431[(9)]);
var inst_31414 = (state_31431[(8)]);
var inst_31411 = (state_31431[(7)]);
var inst_31418__$1 = f.call(null,inst_31411,inst_31414);
var inst_31419 = cljs.core.reduced_QMARK_.call(null,inst_31418__$1);
var state_31431__$1 = (function (){var statearr_31439 = state_31431;
(statearr_31439[(9)] = inst_31418__$1);

return statearr_31439;
})();
if(inst_31419){
var statearr_31440_31455 = state_31431__$1;
(statearr_31440_31455[(1)] = (8));

} else {
var statearr_31441_31456 = state_31431__$1;
(statearr_31441_31456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (3))){
var inst_31429 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31431__$1,inst_31429);
} else {
if((state_val_31432 === (2))){
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31431__$1,(4),ch);
} else {
if((state_val_31432 === (9))){
var inst_31418 = (state_31431[(9)]);
var inst_31411 = inst_31418;
var state_31431__$1 = (function (){var statearr_31442 = state_31431;
(statearr_31442[(7)] = inst_31411);

return statearr_31442;
})();
var statearr_31443_31457 = state_31431__$1;
(statearr_31443_31457[(2)] = null);

(statearr_31443_31457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (5))){
var inst_31411 = (state_31431[(7)]);
var state_31431__$1 = state_31431;
var statearr_31444_31458 = state_31431__$1;
(statearr_31444_31458[(2)] = inst_31411);

(statearr_31444_31458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (10))){
var inst_31425 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
var statearr_31445_31459 = state_31431__$1;
(statearr_31445_31459[(2)] = inst_31425);

(statearr_31445_31459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31432 === (8))){
var inst_31418 = (state_31431[(9)]);
var inst_31421 = cljs.core.deref.call(null,inst_31418);
var state_31431__$1 = state_31431;
var statearr_31446_31460 = state_31431__$1;
(statearr_31446_31460[(2)] = inst_31421);

(statearr_31446_31460[(1)] = (10));


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
});})(c__30958__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30447__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30447__auto____0 = (function (){
var statearr_31447 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31447[(0)] = cljs$core$async$reduce_$_state_machine__30447__auto__);

(statearr_31447[(1)] = (1));

return statearr_31447;
});
var cljs$core$async$reduce_$_state_machine__30447__auto____1 = (function (state_31431){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31448){if((e31448 instanceof Object)){
var ex__30450__auto__ = e31448;
var statearr_31449_31461 = state_31431;
(statearr_31449_31461[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31462 = state_31431;
state_31431 = G__31462;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30447__auto__ = function(state_31431){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30447__auto____1.call(this,state_31431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30447__auto____0;
cljs$core$async$reduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30447__auto____1;
return cljs$core$async$reduce_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__))
})();
var state__30960__auto__ = (function (){var statearr_31450 = f__30959__auto__.call(null);
(statearr_31450[(6)] = c__30958__auto__);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__))
);

return c__30958__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__,f__$1){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__,f__$1){
return (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (1))){
var inst_31463 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(2),inst_31463);
} else {
if((state_val_31469 === (2))){
var inst_31465 = (state_31468[(2)]);
var inst_31466 = f__$1.call(null,inst_31465);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31468__$1,inst_31466);
} else {
return null;
}
}
});})(c__30958__auto__,f__$1))
;
return ((function (switch__30446__auto__,c__30958__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30447__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30447__auto____0 = (function (){
var statearr_31470 = [null,null,null,null,null,null,null];
(statearr_31470[(0)] = cljs$core$async$transduce_$_state_machine__30447__auto__);

(statearr_31470[(1)] = (1));

return statearr_31470;
});
var cljs$core$async$transduce_$_state_machine__30447__auto____1 = (function (state_31468){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31471){if((e31471 instanceof Object)){
var ex__30450__auto__ = e31471;
var statearr_31472_31474 = state_31468;
(statearr_31472_31474[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31475 = state_31468;
state_31468 = G__31475;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30447__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30447__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30447__auto____0;
cljs$core$async$transduce_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30447__auto____1;
return cljs$core$async$transduce_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__,f__$1))
})();
var state__30960__auto__ = (function (){var statearr_31473 = f__30959__auto__.call(null);
(statearr_31473[(6)] = c__30958__auto__);

return statearr_31473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__,f__$1))
);

return c__30958__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31477 = arguments.length;
switch (G__31477) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__){
return (function (state_31502){
var state_val_31503 = (state_31502[(1)]);
if((state_val_31503 === (7))){
var inst_31484 = (state_31502[(2)]);
var state_31502__$1 = state_31502;
var statearr_31504_31525 = state_31502__$1;
(statearr_31504_31525[(2)] = inst_31484);

(statearr_31504_31525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (1))){
var inst_31478 = cljs.core.seq.call(null,coll);
var inst_31479 = inst_31478;
var state_31502__$1 = (function (){var statearr_31505 = state_31502;
(statearr_31505[(7)] = inst_31479);

return statearr_31505;
})();
var statearr_31506_31526 = state_31502__$1;
(statearr_31506_31526[(2)] = null);

(statearr_31506_31526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (4))){
var inst_31479 = (state_31502[(7)]);
var inst_31482 = cljs.core.first.call(null,inst_31479);
var state_31502__$1 = state_31502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31502__$1,(7),ch,inst_31482);
} else {
if((state_val_31503 === (13))){
var inst_31496 = (state_31502[(2)]);
var state_31502__$1 = state_31502;
var statearr_31507_31527 = state_31502__$1;
(statearr_31507_31527[(2)] = inst_31496);

(statearr_31507_31527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (6))){
var inst_31487 = (state_31502[(2)]);
var state_31502__$1 = state_31502;
if(cljs.core.truth_(inst_31487)){
var statearr_31508_31528 = state_31502__$1;
(statearr_31508_31528[(1)] = (8));

} else {
var statearr_31509_31529 = state_31502__$1;
(statearr_31509_31529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (3))){
var inst_31500 = (state_31502[(2)]);
var state_31502__$1 = state_31502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31502__$1,inst_31500);
} else {
if((state_val_31503 === (12))){
var state_31502__$1 = state_31502;
var statearr_31510_31530 = state_31502__$1;
(statearr_31510_31530[(2)] = null);

(statearr_31510_31530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (2))){
var inst_31479 = (state_31502[(7)]);
var state_31502__$1 = state_31502;
if(cljs.core.truth_(inst_31479)){
var statearr_31511_31531 = state_31502__$1;
(statearr_31511_31531[(1)] = (4));

} else {
var statearr_31512_31532 = state_31502__$1;
(statearr_31512_31532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (11))){
var inst_31493 = cljs.core.async.close_BANG_.call(null,ch);
var state_31502__$1 = state_31502;
var statearr_31513_31533 = state_31502__$1;
(statearr_31513_31533[(2)] = inst_31493);

(statearr_31513_31533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (9))){
var state_31502__$1 = state_31502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31514_31534 = state_31502__$1;
(statearr_31514_31534[(1)] = (11));

} else {
var statearr_31515_31535 = state_31502__$1;
(statearr_31515_31535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (5))){
var inst_31479 = (state_31502[(7)]);
var state_31502__$1 = state_31502;
var statearr_31516_31536 = state_31502__$1;
(statearr_31516_31536[(2)] = inst_31479);

(statearr_31516_31536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (10))){
var inst_31498 = (state_31502[(2)]);
var state_31502__$1 = state_31502;
var statearr_31517_31537 = state_31502__$1;
(statearr_31517_31537[(2)] = inst_31498);

(statearr_31517_31537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31503 === (8))){
var inst_31479 = (state_31502[(7)]);
var inst_31489 = cljs.core.next.call(null,inst_31479);
var inst_31479__$1 = inst_31489;
var state_31502__$1 = (function (){var statearr_31518 = state_31502;
(statearr_31518[(7)] = inst_31479__$1);

return statearr_31518;
})();
var statearr_31519_31538 = state_31502__$1;
(statearr_31519_31538[(2)] = null);

(statearr_31519_31538[(1)] = (2));


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
});})(c__30958__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_31520 = [null,null,null,null,null,null,null,null];
(statearr_31520[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_31520[(1)] = (1));

return statearr_31520;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_31502){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31521){if((e31521 instanceof Object)){
var ex__30450__auto__ = e31521;
var statearr_31522_31539 = state_31502;
(statearr_31522_31539[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31540 = state_31502;
state_31502 = G__31540;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_31502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_31502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__))
})();
var state__30960__auto__ = (function (){var statearr_31523 = f__30959__auto__.call(null);
(statearr_31523[(6)] = c__30958__auto__);

return statearr_31523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__))
);

return c__30958__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28698__auto__ = (((_ == null))?null:_);
var m__28699__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,_);
} else {
var m__28699__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28699__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,ch);
} else {
var m__28699__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m);
} else {
var m__28699__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31541 = (function (ch,cs,meta31542){
this.ch = ch;
this.cs = cs;
this.meta31542 = meta31542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31543,meta31542__$1){
var self__ = this;
var _31543__$1 = this;
return (new cljs.core.async.t_cljs$core$async31541(self__.ch,self__.cs,meta31542__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31543){
var self__ = this;
var _31543__$1 = this;
return self__.meta31542;
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31542","meta31542",173895790,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31541";

cljs.core.async.t_cljs$core$async31541.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async31541");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31541 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31541(ch__$1,cs__$1,meta31542){
return (new cljs.core.async.t_cljs$core$async31541(ch__$1,cs__$1,meta31542));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31541(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30958__auto___31763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___31763,cs,m,dchan,dctr,done){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___31763,cs,m,dchan,dctr,done){
return (function (state_31678){
var state_val_31679 = (state_31678[(1)]);
if((state_val_31679 === (7))){
var inst_31674 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31680_31764 = state_31678__$1;
(statearr_31680_31764[(2)] = inst_31674);

(statearr_31680_31764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (20))){
var inst_31577 = (state_31678[(7)]);
var inst_31589 = cljs.core.first.call(null,inst_31577);
var inst_31590 = cljs.core.nth.call(null,inst_31589,(0),null);
var inst_31591 = cljs.core.nth.call(null,inst_31589,(1),null);
var state_31678__$1 = (function (){var statearr_31681 = state_31678;
(statearr_31681[(8)] = inst_31590);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31591)){
var statearr_31682_31765 = state_31678__$1;
(statearr_31682_31765[(1)] = (22));

} else {
var statearr_31683_31766 = state_31678__$1;
(statearr_31683_31766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (27))){
var inst_31621 = (state_31678[(9)]);
var inst_31619 = (state_31678[(10)]);
var inst_31546 = (state_31678[(11)]);
var inst_31626 = (state_31678[(12)]);
var inst_31626__$1 = cljs.core._nth.call(null,inst_31619,inst_31621);
var inst_31627 = cljs.core.async.put_BANG_.call(null,inst_31626__$1,inst_31546,done);
var state_31678__$1 = (function (){var statearr_31684 = state_31678;
(statearr_31684[(12)] = inst_31626__$1);

return statearr_31684;
})();
if(cljs.core.truth_(inst_31627)){
var statearr_31685_31767 = state_31678__$1;
(statearr_31685_31767[(1)] = (30));

} else {
var statearr_31686_31768 = state_31678__$1;
(statearr_31686_31768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (1))){
var state_31678__$1 = state_31678;
var statearr_31687_31769 = state_31678__$1;
(statearr_31687_31769[(2)] = null);

(statearr_31687_31769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (24))){
var inst_31577 = (state_31678[(7)]);
var inst_31596 = (state_31678[(2)]);
var inst_31597 = cljs.core.next.call(null,inst_31577);
var inst_31555 = inst_31597;
var inst_31556 = null;
var inst_31557 = (0);
var inst_31558 = (0);
var state_31678__$1 = (function (){var statearr_31688 = state_31678;
(statearr_31688[(13)] = inst_31557);

(statearr_31688[(14)] = inst_31555);

(statearr_31688[(15)] = inst_31596);

(statearr_31688[(16)] = inst_31558);

(statearr_31688[(17)] = inst_31556);

return statearr_31688;
})();
var statearr_31689_31770 = state_31678__$1;
(statearr_31689_31770[(2)] = null);

(statearr_31689_31770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (39))){
var state_31678__$1 = state_31678;
var statearr_31693_31771 = state_31678__$1;
(statearr_31693_31771[(2)] = null);

(statearr_31693_31771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (4))){
var inst_31546 = (state_31678[(11)]);
var inst_31546__$1 = (state_31678[(2)]);
var inst_31547 = (inst_31546__$1 == null);
var state_31678__$1 = (function (){var statearr_31694 = state_31678;
(statearr_31694[(11)] = inst_31546__$1);

return statearr_31694;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31695_31772 = state_31678__$1;
(statearr_31695_31772[(1)] = (5));

} else {
var statearr_31696_31773 = state_31678__$1;
(statearr_31696_31773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (15))){
var inst_31557 = (state_31678[(13)]);
var inst_31555 = (state_31678[(14)]);
var inst_31558 = (state_31678[(16)]);
var inst_31556 = (state_31678[(17)]);
var inst_31573 = (state_31678[(2)]);
var inst_31574 = (inst_31558 + (1));
var tmp31690 = inst_31557;
var tmp31691 = inst_31555;
var tmp31692 = inst_31556;
var inst_31555__$1 = tmp31691;
var inst_31556__$1 = tmp31692;
var inst_31557__$1 = tmp31690;
var inst_31558__$1 = inst_31574;
var state_31678__$1 = (function (){var statearr_31697 = state_31678;
(statearr_31697[(13)] = inst_31557__$1);

(statearr_31697[(14)] = inst_31555__$1);

(statearr_31697[(16)] = inst_31558__$1);

(statearr_31697[(18)] = inst_31573);

(statearr_31697[(17)] = inst_31556__$1);

return statearr_31697;
})();
var statearr_31698_31774 = state_31678__$1;
(statearr_31698_31774[(2)] = null);

(statearr_31698_31774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (21))){
var inst_31600 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31702_31775 = state_31678__$1;
(statearr_31702_31775[(2)] = inst_31600);

(statearr_31702_31775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (31))){
var inst_31626 = (state_31678[(12)]);
var inst_31630 = done.call(null,null);
var inst_31631 = cljs.core.async.untap_STAR_.call(null,m,inst_31626);
var state_31678__$1 = (function (){var statearr_31703 = state_31678;
(statearr_31703[(19)] = inst_31630);

return statearr_31703;
})();
var statearr_31704_31776 = state_31678__$1;
(statearr_31704_31776[(2)] = inst_31631);

(statearr_31704_31776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (32))){
var inst_31621 = (state_31678[(9)]);
var inst_31619 = (state_31678[(10)]);
var inst_31618 = (state_31678[(20)]);
var inst_31620 = (state_31678[(21)]);
var inst_31633 = (state_31678[(2)]);
var inst_31634 = (inst_31621 + (1));
var tmp31699 = inst_31619;
var tmp31700 = inst_31618;
var tmp31701 = inst_31620;
var inst_31618__$1 = tmp31700;
var inst_31619__$1 = tmp31699;
var inst_31620__$1 = tmp31701;
var inst_31621__$1 = inst_31634;
var state_31678__$1 = (function (){var statearr_31705 = state_31678;
(statearr_31705[(9)] = inst_31621__$1);

(statearr_31705[(10)] = inst_31619__$1);

(statearr_31705[(20)] = inst_31618__$1);

(statearr_31705[(22)] = inst_31633);

(statearr_31705[(21)] = inst_31620__$1);

return statearr_31705;
})();
var statearr_31706_31777 = state_31678__$1;
(statearr_31706_31777[(2)] = null);

(statearr_31706_31777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (40))){
var inst_31646 = (state_31678[(23)]);
var inst_31650 = done.call(null,null);
var inst_31651 = cljs.core.async.untap_STAR_.call(null,m,inst_31646);
var state_31678__$1 = (function (){var statearr_31707 = state_31678;
(statearr_31707[(24)] = inst_31650);

return statearr_31707;
})();
var statearr_31708_31778 = state_31678__$1;
(statearr_31708_31778[(2)] = inst_31651);

(statearr_31708_31778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (33))){
var inst_31637 = (state_31678[(25)]);
var inst_31639 = cljs.core.chunked_seq_QMARK_.call(null,inst_31637);
var state_31678__$1 = state_31678;
if(inst_31639){
var statearr_31709_31779 = state_31678__$1;
(statearr_31709_31779[(1)] = (36));

} else {
var statearr_31710_31780 = state_31678__$1;
(statearr_31710_31780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (13))){
var inst_31567 = (state_31678[(26)]);
var inst_31570 = cljs.core.async.close_BANG_.call(null,inst_31567);
var state_31678__$1 = state_31678;
var statearr_31711_31781 = state_31678__$1;
(statearr_31711_31781[(2)] = inst_31570);

(statearr_31711_31781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (22))){
var inst_31590 = (state_31678[(8)]);
var inst_31593 = cljs.core.async.close_BANG_.call(null,inst_31590);
var state_31678__$1 = state_31678;
var statearr_31712_31782 = state_31678__$1;
(statearr_31712_31782[(2)] = inst_31593);

(statearr_31712_31782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (36))){
var inst_31637 = (state_31678[(25)]);
var inst_31641 = cljs.core.chunk_first.call(null,inst_31637);
var inst_31642 = cljs.core.chunk_rest.call(null,inst_31637);
var inst_31643 = cljs.core.count.call(null,inst_31641);
var inst_31618 = inst_31642;
var inst_31619 = inst_31641;
var inst_31620 = inst_31643;
var inst_31621 = (0);
var state_31678__$1 = (function (){var statearr_31713 = state_31678;
(statearr_31713[(9)] = inst_31621);

(statearr_31713[(10)] = inst_31619);

(statearr_31713[(20)] = inst_31618);

(statearr_31713[(21)] = inst_31620);

return statearr_31713;
})();
var statearr_31714_31783 = state_31678__$1;
(statearr_31714_31783[(2)] = null);

(statearr_31714_31783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (41))){
var inst_31637 = (state_31678[(25)]);
var inst_31653 = (state_31678[(2)]);
var inst_31654 = cljs.core.next.call(null,inst_31637);
var inst_31618 = inst_31654;
var inst_31619 = null;
var inst_31620 = (0);
var inst_31621 = (0);
var state_31678__$1 = (function (){var statearr_31715 = state_31678;
(statearr_31715[(9)] = inst_31621);

(statearr_31715[(10)] = inst_31619);

(statearr_31715[(20)] = inst_31618);

(statearr_31715[(21)] = inst_31620);

(statearr_31715[(27)] = inst_31653);

return statearr_31715;
})();
var statearr_31716_31784 = state_31678__$1;
(statearr_31716_31784[(2)] = null);

(statearr_31716_31784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (43))){
var state_31678__$1 = state_31678;
var statearr_31717_31785 = state_31678__$1;
(statearr_31717_31785[(2)] = null);

(statearr_31717_31785[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (29))){
var inst_31662 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31718_31786 = state_31678__$1;
(statearr_31718_31786[(2)] = inst_31662);

(statearr_31718_31786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (44))){
var inst_31671 = (state_31678[(2)]);
var state_31678__$1 = (function (){var statearr_31719 = state_31678;
(statearr_31719[(28)] = inst_31671);

return statearr_31719;
})();
var statearr_31720_31787 = state_31678__$1;
(statearr_31720_31787[(2)] = null);

(statearr_31720_31787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (6))){
var inst_31610 = (state_31678[(29)]);
var inst_31609 = cljs.core.deref.call(null,cs);
var inst_31610__$1 = cljs.core.keys.call(null,inst_31609);
var inst_31611 = cljs.core.count.call(null,inst_31610__$1);
var inst_31612 = cljs.core.reset_BANG_.call(null,dctr,inst_31611);
var inst_31617 = cljs.core.seq.call(null,inst_31610__$1);
var inst_31618 = inst_31617;
var inst_31619 = null;
var inst_31620 = (0);
var inst_31621 = (0);
var state_31678__$1 = (function (){var statearr_31721 = state_31678;
(statearr_31721[(9)] = inst_31621);

(statearr_31721[(29)] = inst_31610__$1);

(statearr_31721[(10)] = inst_31619);

(statearr_31721[(20)] = inst_31618);

(statearr_31721[(30)] = inst_31612);

(statearr_31721[(21)] = inst_31620);

return statearr_31721;
})();
var statearr_31722_31788 = state_31678__$1;
(statearr_31722_31788[(2)] = null);

(statearr_31722_31788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (28))){
var inst_31618 = (state_31678[(20)]);
var inst_31637 = (state_31678[(25)]);
var inst_31637__$1 = cljs.core.seq.call(null,inst_31618);
var state_31678__$1 = (function (){var statearr_31723 = state_31678;
(statearr_31723[(25)] = inst_31637__$1);

return statearr_31723;
})();
if(inst_31637__$1){
var statearr_31724_31789 = state_31678__$1;
(statearr_31724_31789[(1)] = (33));

} else {
var statearr_31725_31790 = state_31678__$1;
(statearr_31725_31790[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (25))){
var inst_31621 = (state_31678[(9)]);
var inst_31620 = (state_31678[(21)]);
var inst_31623 = (inst_31621 < inst_31620);
var inst_31624 = inst_31623;
var state_31678__$1 = state_31678;
if(cljs.core.truth_(inst_31624)){
var statearr_31726_31791 = state_31678__$1;
(statearr_31726_31791[(1)] = (27));

} else {
var statearr_31727_31792 = state_31678__$1;
(statearr_31727_31792[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (34))){
var state_31678__$1 = state_31678;
var statearr_31728_31793 = state_31678__$1;
(statearr_31728_31793[(2)] = null);

(statearr_31728_31793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (17))){
var state_31678__$1 = state_31678;
var statearr_31729_31794 = state_31678__$1;
(statearr_31729_31794[(2)] = null);

(statearr_31729_31794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (3))){
var inst_31676 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31678__$1,inst_31676);
} else {
if((state_val_31679 === (12))){
var inst_31605 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31730_31795 = state_31678__$1;
(statearr_31730_31795[(2)] = inst_31605);

(statearr_31730_31795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (2))){
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31678__$1,(4),ch);
} else {
if((state_val_31679 === (23))){
var state_31678__$1 = state_31678;
var statearr_31731_31796 = state_31678__$1;
(statearr_31731_31796[(2)] = null);

(statearr_31731_31796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (35))){
var inst_31660 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31732_31797 = state_31678__$1;
(statearr_31732_31797[(2)] = inst_31660);

(statearr_31732_31797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (19))){
var inst_31577 = (state_31678[(7)]);
var inst_31581 = cljs.core.chunk_first.call(null,inst_31577);
var inst_31582 = cljs.core.chunk_rest.call(null,inst_31577);
var inst_31583 = cljs.core.count.call(null,inst_31581);
var inst_31555 = inst_31582;
var inst_31556 = inst_31581;
var inst_31557 = inst_31583;
var inst_31558 = (0);
var state_31678__$1 = (function (){var statearr_31733 = state_31678;
(statearr_31733[(13)] = inst_31557);

(statearr_31733[(14)] = inst_31555);

(statearr_31733[(16)] = inst_31558);

(statearr_31733[(17)] = inst_31556);

return statearr_31733;
})();
var statearr_31734_31798 = state_31678__$1;
(statearr_31734_31798[(2)] = null);

(statearr_31734_31798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (11))){
var inst_31577 = (state_31678[(7)]);
var inst_31555 = (state_31678[(14)]);
var inst_31577__$1 = cljs.core.seq.call(null,inst_31555);
var state_31678__$1 = (function (){var statearr_31735 = state_31678;
(statearr_31735[(7)] = inst_31577__$1);

return statearr_31735;
})();
if(inst_31577__$1){
var statearr_31736_31799 = state_31678__$1;
(statearr_31736_31799[(1)] = (16));

} else {
var statearr_31737_31800 = state_31678__$1;
(statearr_31737_31800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (9))){
var inst_31607 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31738_31801 = state_31678__$1;
(statearr_31738_31801[(2)] = inst_31607);

(statearr_31738_31801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (5))){
var inst_31553 = cljs.core.deref.call(null,cs);
var inst_31554 = cljs.core.seq.call(null,inst_31553);
var inst_31555 = inst_31554;
var inst_31556 = null;
var inst_31557 = (0);
var inst_31558 = (0);
var state_31678__$1 = (function (){var statearr_31739 = state_31678;
(statearr_31739[(13)] = inst_31557);

(statearr_31739[(14)] = inst_31555);

(statearr_31739[(16)] = inst_31558);

(statearr_31739[(17)] = inst_31556);

return statearr_31739;
})();
var statearr_31740_31802 = state_31678__$1;
(statearr_31740_31802[(2)] = null);

(statearr_31740_31802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (14))){
var state_31678__$1 = state_31678;
var statearr_31741_31803 = state_31678__$1;
(statearr_31741_31803[(2)] = null);

(statearr_31741_31803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (45))){
var inst_31668 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31742_31804 = state_31678__$1;
(statearr_31742_31804[(2)] = inst_31668);

(statearr_31742_31804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (26))){
var inst_31610 = (state_31678[(29)]);
var inst_31664 = (state_31678[(2)]);
var inst_31665 = cljs.core.seq.call(null,inst_31610);
var state_31678__$1 = (function (){var statearr_31743 = state_31678;
(statearr_31743[(31)] = inst_31664);

return statearr_31743;
})();
if(inst_31665){
var statearr_31744_31805 = state_31678__$1;
(statearr_31744_31805[(1)] = (42));

} else {
var statearr_31745_31806 = state_31678__$1;
(statearr_31745_31806[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (16))){
var inst_31577 = (state_31678[(7)]);
var inst_31579 = cljs.core.chunked_seq_QMARK_.call(null,inst_31577);
var state_31678__$1 = state_31678;
if(inst_31579){
var statearr_31746_31807 = state_31678__$1;
(statearr_31746_31807[(1)] = (19));

} else {
var statearr_31747_31808 = state_31678__$1;
(statearr_31747_31808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (38))){
var inst_31657 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31748_31809 = state_31678__$1;
(statearr_31748_31809[(2)] = inst_31657);

(statearr_31748_31809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (30))){
var state_31678__$1 = state_31678;
var statearr_31749_31810 = state_31678__$1;
(statearr_31749_31810[(2)] = null);

(statearr_31749_31810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (10))){
var inst_31558 = (state_31678[(16)]);
var inst_31556 = (state_31678[(17)]);
var inst_31566 = cljs.core._nth.call(null,inst_31556,inst_31558);
var inst_31567 = cljs.core.nth.call(null,inst_31566,(0),null);
var inst_31568 = cljs.core.nth.call(null,inst_31566,(1),null);
var state_31678__$1 = (function (){var statearr_31750 = state_31678;
(statearr_31750[(26)] = inst_31567);

return statearr_31750;
})();
if(cljs.core.truth_(inst_31568)){
var statearr_31751_31811 = state_31678__$1;
(statearr_31751_31811[(1)] = (13));

} else {
var statearr_31752_31812 = state_31678__$1;
(statearr_31752_31812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (18))){
var inst_31603 = (state_31678[(2)]);
var state_31678__$1 = state_31678;
var statearr_31753_31813 = state_31678__$1;
(statearr_31753_31813[(2)] = inst_31603);

(statearr_31753_31813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (42))){
var state_31678__$1 = state_31678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31678__$1,(45),dchan);
} else {
if((state_val_31679 === (37))){
var inst_31546 = (state_31678[(11)]);
var inst_31646 = (state_31678[(23)]);
var inst_31637 = (state_31678[(25)]);
var inst_31646__$1 = cljs.core.first.call(null,inst_31637);
var inst_31647 = cljs.core.async.put_BANG_.call(null,inst_31646__$1,inst_31546,done);
var state_31678__$1 = (function (){var statearr_31754 = state_31678;
(statearr_31754[(23)] = inst_31646__$1);

return statearr_31754;
})();
if(cljs.core.truth_(inst_31647)){
var statearr_31755_31814 = state_31678__$1;
(statearr_31755_31814[(1)] = (39));

} else {
var statearr_31756_31815 = state_31678__$1;
(statearr_31756_31815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31679 === (8))){
var inst_31557 = (state_31678[(13)]);
var inst_31558 = (state_31678[(16)]);
var inst_31560 = (inst_31558 < inst_31557);
var inst_31561 = inst_31560;
var state_31678__$1 = state_31678;
if(cljs.core.truth_(inst_31561)){
var statearr_31757_31816 = state_31678__$1;
(statearr_31757_31816[(1)] = (10));

} else {
var statearr_31758_31817 = state_31678__$1;
(statearr_31758_31817[(1)] = (11));

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
});})(c__30958__auto___31763,cs,m,dchan,dctr,done))
;
return ((function (switch__30446__auto__,c__30958__auto___31763,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30447__auto__ = null;
var cljs$core$async$mult_$_state_machine__30447__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$mult_$_state_machine__30447__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$mult_$_state_machine__30447__auto____1 = (function (state_31678){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object)){
var ex__30450__auto__ = e31760;
var statearr_31761_31818 = state_31678;
(statearr_31761_31818[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31678;
state_31678 = G__31819;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30447__auto__ = function(state_31678){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30447__auto____1.call(this,state_31678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30447__auto____0;
cljs$core$async$mult_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30447__auto____1;
return cljs$core$async$mult_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___31763,cs,m,dchan,dctr,done))
})();
var state__30960__auto__ = (function (){var statearr_31762 = f__30959__auto__.call(null);
(statearr_31762[(6)] = c__30958__auto___31763);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___31763,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31821 = arguments.length;
switch (G__31821) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,ch);
} else {
var m__28699__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,ch);
} else {
var m__28699__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m);
} else {
var m__28699__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,state_map);
} else {
var m__28699__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28698__auto__ = (((m == null))?null:m);
var m__28699__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,m,mode);
} else {
var m__28699__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29193__auto__ = [];
var len__29186__auto___31833 = arguments.length;
var i__29187__auto___31834 = (0);
while(true){
if((i__29187__auto___31834 < len__29186__auto___31833)){
args__29193__auto__.push((arguments[i__29187__auto___31834]));

var G__31835 = (i__29187__auto___31834 + (1));
i__29187__auto___31834 = G__31835;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((3) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29194__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31827){
var map__31828 = p__31827;
var map__31828__$1 = ((((!((map__31828 == null)))?((((map__31828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31828):map__31828);
var opts = map__31828__$1;
var statearr_31830_31836 = state;
(statearr_31830_31836[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31828,map__31828__$1,opts){
return (function (val){
var statearr_31831_31837 = state;
(statearr_31831_31837[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31828,map__31828__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31832_31838 = state;
(statearr_31832_31838[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31823){
var G__31824 = cljs.core.first.call(null,seq31823);
var seq31823__$1 = cljs.core.next.call(null,seq31823);
var G__31825 = cljs.core.first.call(null,seq31823__$1);
var seq31823__$2 = cljs.core.next.call(null,seq31823__$1);
var G__31826 = cljs.core.first.call(null,seq31823__$2);
var seq31823__$3 = cljs.core.next.call(null,seq31823__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31824,G__31825,G__31826,seq31823__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31839 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31840){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31840 = meta31840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31841,meta31840__$1){
var self__ = this;
var _31841__$1 = this;
return (new cljs.core.async.t_cljs$core$async31839(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31840__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31841){
var self__ = this;
var _31841__$1 = this;
return self__.meta31840;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31840","meta31840",1806493287,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31839";

cljs.core.async.t_cljs$core$async31839.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async31839");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31839 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31839(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31840){
return (new cljs.core.async.t_cljs$core$async31839(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31840));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31839(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30958__auto___32003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31943){
var state_val_31944 = (state_31943[(1)]);
if((state_val_31944 === (7))){
var inst_31858 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31945_32004 = state_31943__$1;
(statearr_31945_32004[(2)] = inst_31858);

(statearr_31945_32004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (20))){
var inst_31870 = (state_31943[(7)]);
var state_31943__$1 = state_31943;
var statearr_31946_32005 = state_31943__$1;
(statearr_31946_32005[(2)] = inst_31870);

(statearr_31946_32005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (27))){
var state_31943__$1 = state_31943;
var statearr_31947_32006 = state_31943__$1;
(statearr_31947_32006[(2)] = null);

(statearr_31947_32006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (1))){
var inst_31845 = (state_31943[(8)]);
var inst_31845__$1 = calc_state.call(null);
var inst_31847 = (inst_31845__$1 == null);
var inst_31848 = cljs.core.not.call(null,inst_31847);
var state_31943__$1 = (function (){var statearr_31948 = state_31943;
(statearr_31948[(8)] = inst_31845__$1);

return statearr_31948;
})();
if(inst_31848){
var statearr_31949_32007 = state_31943__$1;
(statearr_31949_32007[(1)] = (2));

} else {
var statearr_31950_32008 = state_31943__$1;
(statearr_31950_32008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (24))){
var inst_31903 = (state_31943[(9)]);
var inst_31894 = (state_31943[(10)]);
var inst_31917 = (state_31943[(11)]);
var inst_31917__$1 = inst_31894.call(null,inst_31903);
var state_31943__$1 = (function (){var statearr_31951 = state_31943;
(statearr_31951[(11)] = inst_31917__$1);

return statearr_31951;
})();
if(cljs.core.truth_(inst_31917__$1)){
var statearr_31952_32009 = state_31943__$1;
(statearr_31952_32009[(1)] = (29));

} else {
var statearr_31953_32010 = state_31943__$1;
(statearr_31953_32010[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (4))){
var inst_31861 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31861)){
var statearr_31954_32011 = state_31943__$1;
(statearr_31954_32011[(1)] = (8));

} else {
var statearr_31955_32012 = state_31943__$1;
(statearr_31955_32012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (15))){
var inst_31888 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31888)){
var statearr_31956_32013 = state_31943__$1;
(statearr_31956_32013[(1)] = (19));

} else {
var statearr_31957_32014 = state_31943__$1;
(statearr_31957_32014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (21))){
var inst_31893 = (state_31943[(12)]);
var inst_31893__$1 = (state_31943[(2)]);
var inst_31894 = cljs.core.get.call(null,inst_31893__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31895 = cljs.core.get.call(null,inst_31893__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31896 = cljs.core.get.call(null,inst_31893__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31943__$1 = (function (){var statearr_31958 = state_31943;
(statearr_31958[(12)] = inst_31893__$1);

(statearr_31958[(10)] = inst_31894);

(statearr_31958[(13)] = inst_31895);

return statearr_31958;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31943__$1,(22),inst_31896);
} else {
if((state_val_31944 === (31))){
var inst_31925 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31925)){
var statearr_31959_32015 = state_31943__$1;
(statearr_31959_32015[(1)] = (32));

} else {
var statearr_31960_32016 = state_31943__$1;
(statearr_31960_32016[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (32))){
var inst_31902 = (state_31943[(14)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31943__$1,(35),out,inst_31902);
} else {
if((state_val_31944 === (33))){
var inst_31893 = (state_31943[(12)]);
var inst_31870 = inst_31893;
var state_31943__$1 = (function (){var statearr_31961 = state_31943;
(statearr_31961[(7)] = inst_31870);

return statearr_31961;
})();
var statearr_31962_32017 = state_31943__$1;
(statearr_31962_32017[(2)] = null);

(statearr_31962_32017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (13))){
var inst_31870 = (state_31943[(7)]);
var inst_31877 = inst_31870.cljs$lang$protocol_mask$partition0$;
var inst_31878 = (inst_31877 & (64));
var inst_31879 = inst_31870.cljs$core$ISeq$;
var inst_31880 = (cljs.core.PROTOCOL_SENTINEL === inst_31879);
var inst_31881 = (inst_31878) || (inst_31880);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31881)){
var statearr_31963_32018 = state_31943__$1;
(statearr_31963_32018[(1)] = (16));

} else {
var statearr_31964_32019 = state_31943__$1;
(statearr_31964_32019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (22))){
var inst_31903 = (state_31943[(9)]);
var inst_31902 = (state_31943[(14)]);
var inst_31901 = (state_31943[(2)]);
var inst_31902__$1 = cljs.core.nth.call(null,inst_31901,(0),null);
var inst_31903__$1 = cljs.core.nth.call(null,inst_31901,(1),null);
var inst_31904 = (inst_31902__$1 == null);
var inst_31905 = cljs.core._EQ_.call(null,inst_31903__$1,change);
var inst_31906 = (inst_31904) || (inst_31905);
var state_31943__$1 = (function (){var statearr_31965 = state_31943;
(statearr_31965[(9)] = inst_31903__$1);

(statearr_31965[(14)] = inst_31902__$1);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31906)){
var statearr_31966_32020 = state_31943__$1;
(statearr_31966_32020[(1)] = (23));

} else {
var statearr_31967_32021 = state_31943__$1;
(statearr_31967_32021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (36))){
var inst_31893 = (state_31943[(12)]);
var inst_31870 = inst_31893;
var state_31943__$1 = (function (){var statearr_31968 = state_31943;
(statearr_31968[(7)] = inst_31870);

return statearr_31968;
})();
var statearr_31969_32022 = state_31943__$1;
(statearr_31969_32022[(2)] = null);

(statearr_31969_32022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (29))){
var inst_31917 = (state_31943[(11)]);
var state_31943__$1 = state_31943;
var statearr_31970_32023 = state_31943__$1;
(statearr_31970_32023[(2)] = inst_31917);

(statearr_31970_32023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (6))){
var state_31943__$1 = state_31943;
var statearr_31971_32024 = state_31943__$1;
(statearr_31971_32024[(2)] = false);

(statearr_31971_32024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (28))){
var inst_31913 = (state_31943[(2)]);
var inst_31914 = calc_state.call(null);
var inst_31870 = inst_31914;
var state_31943__$1 = (function (){var statearr_31972 = state_31943;
(statearr_31972[(7)] = inst_31870);

(statearr_31972[(15)] = inst_31913);

return statearr_31972;
})();
var statearr_31973_32025 = state_31943__$1;
(statearr_31973_32025[(2)] = null);

(statearr_31973_32025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (25))){
var inst_31939 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31974_32026 = state_31943__$1;
(statearr_31974_32026[(2)] = inst_31939);

(statearr_31974_32026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (34))){
var inst_31937 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31975_32027 = state_31943__$1;
(statearr_31975_32027[(2)] = inst_31937);

(statearr_31975_32027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (17))){
var state_31943__$1 = state_31943;
var statearr_31976_32028 = state_31943__$1;
(statearr_31976_32028[(2)] = false);

(statearr_31976_32028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (3))){
var state_31943__$1 = state_31943;
var statearr_31977_32029 = state_31943__$1;
(statearr_31977_32029[(2)] = false);

(statearr_31977_32029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (12))){
var inst_31941 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31943__$1,inst_31941);
} else {
if((state_val_31944 === (2))){
var inst_31845 = (state_31943[(8)]);
var inst_31850 = inst_31845.cljs$lang$protocol_mask$partition0$;
var inst_31851 = (inst_31850 & (64));
var inst_31852 = inst_31845.cljs$core$ISeq$;
var inst_31853 = (cljs.core.PROTOCOL_SENTINEL === inst_31852);
var inst_31854 = (inst_31851) || (inst_31853);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31854)){
var statearr_31978_32030 = state_31943__$1;
(statearr_31978_32030[(1)] = (5));

} else {
var statearr_31979_32031 = state_31943__$1;
(statearr_31979_32031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (23))){
var inst_31902 = (state_31943[(14)]);
var inst_31908 = (inst_31902 == null);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31908)){
var statearr_31980_32032 = state_31943__$1;
(statearr_31980_32032[(1)] = (26));

} else {
var statearr_31981_32033 = state_31943__$1;
(statearr_31981_32033[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (35))){
var inst_31928 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31928)){
var statearr_31982_32034 = state_31943__$1;
(statearr_31982_32034[(1)] = (36));

} else {
var statearr_31983_32035 = state_31943__$1;
(statearr_31983_32035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (19))){
var inst_31870 = (state_31943[(7)]);
var inst_31890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31870);
var state_31943__$1 = state_31943;
var statearr_31984_32036 = state_31943__$1;
(statearr_31984_32036[(2)] = inst_31890);

(statearr_31984_32036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (11))){
var inst_31870 = (state_31943[(7)]);
var inst_31874 = (inst_31870 == null);
var inst_31875 = cljs.core.not.call(null,inst_31874);
var state_31943__$1 = state_31943;
if(inst_31875){
var statearr_31985_32037 = state_31943__$1;
(statearr_31985_32037[(1)] = (13));

} else {
var statearr_31986_32038 = state_31943__$1;
(statearr_31986_32038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (9))){
var inst_31845 = (state_31943[(8)]);
var state_31943__$1 = state_31943;
var statearr_31987_32039 = state_31943__$1;
(statearr_31987_32039[(2)] = inst_31845);

(statearr_31987_32039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (5))){
var state_31943__$1 = state_31943;
var statearr_31988_32040 = state_31943__$1;
(statearr_31988_32040[(2)] = true);

(statearr_31988_32040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (14))){
var state_31943__$1 = state_31943;
var statearr_31989_32041 = state_31943__$1;
(statearr_31989_32041[(2)] = false);

(statearr_31989_32041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (26))){
var inst_31903 = (state_31943[(9)]);
var inst_31910 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31903);
var state_31943__$1 = state_31943;
var statearr_31990_32042 = state_31943__$1;
(statearr_31990_32042[(2)] = inst_31910);

(statearr_31990_32042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (16))){
var state_31943__$1 = state_31943;
var statearr_31991_32043 = state_31943__$1;
(statearr_31991_32043[(2)] = true);

(statearr_31991_32043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (38))){
var inst_31933 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31992_32044 = state_31943__$1;
(statearr_31992_32044[(2)] = inst_31933);

(statearr_31992_32044[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (30))){
var inst_31903 = (state_31943[(9)]);
var inst_31894 = (state_31943[(10)]);
var inst_31895 = (state_31943[(13)]);
var inst_31920 = cljs.core.empty_QMARK_.call(null,inst_31894);
var inst_31921 = inst_31895.call(null,inst_31903);
var inst_31922 = cljs.core.not.call(null,inst_31921);
var inst_31923 = (inst_31920) && (inst_31922);
var state_31943__$1 = state_31943;
var statearr_31993_32045 = state_31943__$1;
(statearr_31993_32045[(2)] = inst_31923);

(statearr_31993_32045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (10))){
var inst_31845 = (state_31943[(8)]);
var inst_31866 = (state_31943[(2)]);
var inst_31867 = cljs.core.get.call(null,inst_31866,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31868 = cljs.core.get.call(null,inst_31866,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31869 = cljs.core.get.call(null,inst_31866,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31870 = inst_31845;
var state_31943__$1 = (function (){var statearr_31994 = state_31943;
(statearr_31994[(16)] = inst_31869);

(statearr_31994[(17)] = inst_31867);

(statearr_31994[(7)] = inst_31870);

(statearr_31994[(18)] = inst_31868);

return statearr_31994;
})();
var statearr_31995_32046 = state_31943__$1;
(statearr_31995_32046[(2)] = null);

(statearr_31995_32046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (18))){
var inst_31885 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31996_32047 = state_31943__$1;
(statearr_31996_32047[(2)] = inst_31885);

(statearr_31996_32047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (37))){
var state_31943__$1 = state_31943;
var statearr_31997_32048 = state_31943__$1;
(statearr_31997_32048[(2)] = null);

(statearr_31997_32048[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (8))){
var inst_31845 = (state_31943[(8)]);
var inst_31863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31845);
var state_31943__$1 = state_31943;
var statearr_31998_32049 = state_31943__$1;
(statearr_31998_32049[(2)] = inst_31863);

(statearr_31998_32049[(1)] = (10));


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
});})(c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30446__auto__,c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30447__auto__ = null;
var cljs$core$async$mix_$_state_machine__30447__auto____0 = (function (){
var statearr_31999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31999[(0)] = cljs$core$async$mix_$_state_machine__30447__auto__);

(statearr_31999[(1)] = (1));

return statearr_31999;
});
var cljs$core$async$mix_$_state_machine__30447__auto____1 = (function (state_31943){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_31943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32000){if((e32000 instanceof Object)){
var ex__30450__auto__ = e32000;
var statearr_32001_32050 = state_31943;
(statearr_32001_32050[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32051 = state_31943;
state_31943 = G__32051;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30447__auto__ = function(state_31943){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30447__auto____1.call(this,state_31943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30447__auto____0;
cljs$core$async$mix_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30447__auto____1;
return cljs$core$async$mix_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30960__auto__ = (function (){var statearr_32002 = f__30959__auto__.call(null);
(statearr_32002[(6)] = c__30958__auto___32003);

return statearr_32002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32003,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28698__auto__ = (((p == null))?null:p);
var m__28699__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28699__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28698__auto__ = (((p == null))?null:p);
var m__28699__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,p,v,ch);
} else {
var m__28699__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32053 = arguments.length;
switch (G__32053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28698__auto__ = (((p == null))?null:p);
var m__28699__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,p);
} else {
var m__28699__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28698__auto__ = (((p == null))?null:p);
var m__28699__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28698__auto__)]);
if(!((m__28699__auto__ == null))){
return m__28699__auto__.call(null,p,v);
} else {
var m__28699__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28699__auto____$1 == null))){
return m__28699__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32057 = arguments.length;
switch (G__32057) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28015__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28015__auto__,mults){
return (function (p1__32055_SHARP_){
if(cljs.core.truth_(p1__32055_SHARP_.call(null,topic))){
return p1__32055_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32055_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28015__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32059 = meta32059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32060,meta32059__$1){
var self__ = this;
var _32060__$1 = this;
return (new cljs.core.async.t_cljs$core$async32058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32060){
var self__ = this;
var _32060__$1 = this;
return self__.meta32059;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32059","meta32059",-910596446,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32058";

cljs.core.async.t_cljs$core$async32058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async32058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32058 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32059){
return (new cljs.core.async.t_cljs$core$async32058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30958__auto___32178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32178,mults,ensure_mult,p){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32178,mults,ensure_mult,p){
return (function (state_32132){
var state_val_32133 = (state_32132[(1)]);
if((state_val_32133 === (7))){
var inst_32128 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32134_32179 = state_32132__$1;
(statearr_32134_32179[(2)] = inst_32128);

(statearr_32134_32179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (20))){
var state_32132__$1 = state_32132;
var statearr_32135_32180 = state_32132__$1;
(statearr_32135_32180[(2)] = null);

(statearr_32135_32180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (1))){
var state_32132__$1 = state_32132;
var statearr_32136_32181 = state_32132__$1;
(statearr_32136_32181[(2)] = null);

(statearr_32136_32181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (24))){
var inst_32111 = (state_32132[(7)]);
var inst_32120 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32111);
var state_32132__$1 = state_32132;
var statearr_32137_32182 = state_32132__$1;
(statearr_32137_32182[(2)] = inst_32120);

(statearr_32137_32182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (4))){
var inst_32063 = (state_32132[(8)]);
var inst_32063__$1 = (state_32132[(2)]);
var inst_32064 = (inst_32063__$1 == null);
var state_32132__$1 = (function (){var statearr_32138 = state_32132;
(statearr_32138[(8)] = inst_32063__$1);

return statearr_32138;
})();
if(cljs.core.truth_(inst_32064)){
var statearr_32139_32183 = state_32132__$1;
(statearr_32139_32183[(1)] = (5));

} else {
var statearr_32140_32184 = state_32132__$1;
(statearr_32140_32184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (15))){
var inst_32105 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32141_32185 = state_32132__$1;
(statearr_32141_32185[(2)] = inst_32105);

(statearr_32141_32185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (21))){
var inst_32125 = (state_32132[(2)]);
var state_32132__$1 = (function (){var statearr_32142 = state_32132;
(statearr_32142[(9)] = inst_32125);

return statearr_32142;
})();
var statearr_32143_32186 = state_32132__$1;
(statearr_32143_32186[(2)] = null);

(statearr_32143_32186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (13))){
var inst_32087 = (state_32132[(10)]);
var inst_32089 = cljs.core.chunked_seq_QMARK_.call(null,inst_32087);
var state_32132__$1 = state_32132;
if(inst_32089){
var statearr_32144_32187 = state_32132__$1;
(statearr_32144_32187[(1)] = (16));

} else {
var statearr_32145_32188 = state_32132__$1;
(statearr_32145_32188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (22))){
var inst_32117 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
if(cljs.core.truth_(inst_32117)){
var statearr_32146_32189 = state_32132__$1;
(statearr_32146_32189[(1)] = (23));

} else {
var statearr_32147_32190 = state_32132__$1;
(statearr_32147_32190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (6))){
var inst_32113 = (state_32132[(11)]);
var inst_32111 = (state_32132[(7)]);
var inst_32063 = (state_32132[(8)]);
var inst_32111__$1 = topic_fn.call(null,inst_32063);
var inst_32112 = cljs.core.deref.call(null,mults);
var inst_32113__$1 = cljs.core.get.call(null,inst_32112,inst_32111__$1);
var state_32132__$1 = (function (){var statearr_32148 = state_32132;
(statearr_32148[(11)] = inst_32113__$1);

(statearr_32148[(7)] = inst_32111__$1);

return statearr_32148;
})();
if(cljs.core.truth_(inst_32113__$1)){
var statearr_32149_32191 = state_32132__$1;
(statearr_32149_32191[(1)] = (19));

} else {
var statearr_32150_32192 = state_32132__$1;
(statearr_32150_32192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (25))){
var inst_32122 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32151_32193 = state_32132__$1;
(statearr_32151_32193[(2)] = inst_32122);

(statearr_32151_32193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (17))){
var inst_32087 = (state_32132[(10)]);
var inst_32096 = cljs.core.first.call(null,inst_32087);
var inst_32097 = cljs.core.async.muxch_STAR_.call(null,inst_32096);
var inst_32098 = cljs.core.async.close_BANG_.call(null,inst_32097);
var inst_32099 = cljs.core.next.call(null,inst_32087);
var inst_32073 = inst_32099;
var inst_32074 = null;
var inst_32075 = (0);
var inst_32076 = (0);
var state_32132__$1 = (function (){var statearr_32152 = state_32132;
(statearr_32152[(12)] = inst_32098);

(statearr_32152[(13)] = inst_32074);

(statearr_32152[(14)] = inst_32075);

(statearr_32152[(15)] = inst_32076);

(statearr_32152[(16)] = inst_32073);

return statearr_32152;
})();
var statearr_32153_32194 = state_32132__$1;
(statearr_32153_32194[(2)] = null);

(statearr_32153_32194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (3))){
var inst_32130 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32132__$1,inst_32130);
} else {
if((state_val_32133 === (12))){
var inst_32107 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32154_32195 = state_32132__$1;
(statearr_32154_32195[(2)] = inst_32107);

(statearr_32154_32195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (2))){
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32132__$1,(4),ch);
} else {
if((state_val_32133 === (23))){
var state_32132__$1 = state_32132;
var statearr_32155_32196 = state_32132__$1;
(statearr_32155_32196[(2)] = null);

(statearr_32155_32196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (19))){
var inst_32113 = (state_32132[(11)]);
var inst_32063 = (state_32132[(8)]);
var inst_32115 = cljs.core.async.muxch_STAR_.call(null,inst_32113);
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32132__$1,(22),inst_32115,inst_32063);
} else {
if((state_val_32133 === (11))){
var inst_32087 = (state_32132[(10)]);
var inst_32073 = (state_32132[(16)]);
var inst_32087__$1 = cljs.core.seq.call(null,inst_32073);
var state_32132__$1 = (function (){var statearr_32156 = state_32132;
(statearr_32156[(10)] = inst_32087__$1);

return statearr_32156;
})();
if(inst_32087__$1){
var statearr_32157_32197 = state_32132__$1;
(statearr_32157_32197[(1)] = (13));

} else {
var statearr_32158_32198 = state_32132__$1;
(statearr_32158_32198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (9))){
var inst_32109 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32159_32199 = state_32132__$1;
(statearr_32159_32199[(2)] = inst_32109);

(statearr_32159_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (5))){
var inst_32070 = cljs.core.deref.call(null,mults);
var inst_32071 = cljs.core.vals.call(null,inst_32070);
var inst_32072 = cljs.core.seq.call(null,inst_32071);
var inst_32073 = inst_32072;
var inst_32074 = null;
var inst_32075 = (0);
var inst_32076 = (0);
var state_32132__$1 = (function (){var statearr_32160 = state_32132;
(statearr_32160[(13)] = inst_32074);

(statearr_32160[(14)] = inst_32075);

(statearr_32160[(15)] = inst_32076);

(statearr_32160[(16)] = inst_32073);

return statearr_32160;
})();
var statearr_32161_32200 = state_32132__$1;
(statearr_32161_32200[(2)] = null);

(statearr_32161_32200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (14))){
var state_32132__$1 = state_32132;
var statearr_32165_32201 = state_32132__$1;
(statearr_32165_32201[(2)] = null);

(statearr_32165_32201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (16))){
var inst_32087 = (state_32132[(10)]);
var inst_32091 = cljs.core.chunk_first.call(null,inst_32087);
var inst_32092 = cljs.core.chunk_rest.call(null,inst_32087);
var inst_32093 = cljs.core.count.call(null,inst_32091);
var inst_32073 = inst_32092;
var inst_32074 = inst_32091;
var inst_32075 = inst_32093;
var inst_32076 = (0);
var state_32132__$1 = (function (){var statearr_32166 = state_32132;
(statearr_32166[(13)] = inst_32074);

(statearr_32166[(14)] = inst_32075);

(statearr_32166[(15)] = inst_32076);

(statearr_32166[(16)] = inst_32073);

return statearr_32166;
})();
var statearr_32167_32202 = state_32132__$1;
(statearr_32167_32202[(2)] = null);

(statearr_32167_32202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (10))){
var inst_32074 = (state_32132[(13)]);
var inst_32075 = (state_32132[(14)]);
var inst_32076 = (state_32132[(15)]);
var inst_32073 = (state_32132[(16)]);
var inst_32081 = cljs.core._nth.call(null,inst_32074,inst_32076);
var inst_32082 = cljs.core.async.muxch_STAR_.call(null,inst_32081);
var inst_32083 = cljs.core.async.close_BANG_.call(null,inst_32082);
var inst_32084 = (inst_32076 + (1));
var tmp32162 = inst_32074;
var tmp32163 = inst_32075;
var tmp32164 = inst_32073;
var inst_32073__$1 = tmp32164;
var inst_32074__$1 = tmp32162;
var inst_32075__$1 = tmp32163;
var inst_32076__$1 = inst_32084;
var state_32132__$1 = (function (){var statearr_32168 = state_32132;
(statearr_32168[(13)] = inst_32074__$1);

(statearr_32168[(14)] = inst_32075__$1);

(statearr_32168[(15)] = inst_32076__$1);

(statearr_32168[(16)] = inst_32073__$1);

(statearr_32168[(17)] = inst_32083);

return statearr_32168;
})();
var statearr_32169_32203 = state_32132__$1;
(statearr_32169_32203[(2)] = null);

(statearr_32169_32203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (18))){
var inst_32102 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32170_32204 = state_32132__$1;
(statearr_32170_32204[(2)] = inst_32102);

(statearr_32170_32204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (8))){
var inst_32075 = (state_32132[(14)]);
var inst_32076 = (state_32132[(15)]);
var inst_32078 = (inst_32076 < inst_32075);
var inst_32079 = inst_32078;
var state_32132__$1 = state_32132;
if(cljs.core.truth_(inst_32079)){
var statearr_32171_32205 = state_32132__$1;
(statearr_32171_32205[(1)] = (10));

} else {
var statearr_32172_32206 = state_32132__$1;
(statearr_32172_32206[(1)] = (11));

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
});})(c__30958__auto___32178,mults,ensure_mult,p))
;
return ((function (switch__30446__auto__,c__30958__auto___32178,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32173[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32173[(1)] = (1));

return statearr_32173;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32132){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32174){if((e32174 instanceof Object)){
var ex__30450__auto__ = e32174;
var statearr_32175_32207 = state_32132;
(statearr_32175_32207[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32208 = state_32132;
state_32132 = G__32208;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32178,mults,ensure_mult,p))
})();
var state__30960__auto__ = (function (){var statearr_32176 = f__30959__auto__.call(null);
(statearr_32176[(6)] = c__30958__auto___32178);

return statearr_32176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32178,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32210 = arguments.length;
switch (G__32210) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32213 = arguments.length;
switch (G__32213) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32216 = arguments.length;
switch (G__32216) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30958__auto___32283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var state_32255__$1 = state_32255;
var statearr_32257_32284 = state_32255__$1;
(statearr_32257_32284[(2)] = null);

(statearr_32257_32284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (1))){
var state_32255__$1 = state_32255;
var statearr_32258_32285 = state_32255__$1;
(statearr_32258_32285[(2)] = null);

(statearr_32258_32285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32219 = (state_32255[(7)]);
var inst_32221 = (inst_32219 < cnt);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32221)){
var statearr_32259_32286 = state_32255__$1;
(statearr_32259_32286[(1)] = (6));

} else {
var statearr_32260_32287 = state_32255__$1;
(statearr_32260_32287[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (15))){
var inst_32251 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32261_32288 = state_32255__$1;
(statearr_32261_32288[(2)] = inst_32251);

(statearr_32261_32288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (13))){
var inst_32244 = cljs.core.async.close_BANG_.call(null,out);
var state_32255__$1 = state_32255;
var statearr_32262_32289 = state_32255__$1;
(statearr_32262_32289[(2)] = inst_32244);

(statearr_32262_32289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var state_32255__$1 = state_32255;
var statearr_32263_32290 = state_32255__$1;
(statearr_32263_32290[(2)] = null);

(statearr_32263_32290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (3))){
var inst_32253 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32255__$1,inst_32253);
} else {
if((state_val_32256 === (12))){
var inst_32241 = (state_32255[(8)]);
var inst_32241__$1 = (state_32255[(2)]);
var inst_32242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32241__$1);
var state_32255__$1 = (function (){var statearr_32264 = state_32255;
(statearr_32264[(8)] = inst_32241__$1);

return statearr_32264;
})();
if(cljs.core.truth_(inst_32242)){
var statearr_32265_32291 = state_32255__$1;
(statearr_32265_32291[(1)] = (13));

} else {
var statearr_32266_32292 = state_32255__$1;
(statearr_32266_32292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (2))){
var inst_32218 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32219 = (0);
var state_32255__$1 = (function (){var statearr_32267 = state_32255;
(statearr_32267[(9)] = inst_32218);

(statearr_32267[(7)] = inst_32219);

return statearr_32267;
})();
var statearr_32268_32293 = state_32255__$1;
(statearr_32268_32293[(2)] = null);

(statearr_32268_32293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (11))){
var inst_32219 = (state_32255[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32255,(10),Object,null,(9));
var inst_32228 = chs__$1.call(null,inst_32219);
var inst_32229 = done.call(null,inst_32219);
var inst_32230 = cljs.core.async.take_BANG_.call(null,inst_32228,inst_32229);
var state_32255__$1 = state_32255;
var statearr_32269_32294 = state_32255__$1;
(statearr_32269_32294[(2)] = inst_32230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (9))){
var inst_32219 = (state_32255[(7)]);
var inst_32232 = (state_32255[(2)]);
var inst_32233 = (inst_32219 + (1));
var inst_32219__$1 = inst_32233;
var state_32255__$1 = (function (){var statearr_32270 = state_32255;
(statearr_32270[(10)] = inst_32232);

(statearr_32270[(7)] = inst_32219__$1);

return statearr_32270;
})();
var statearr_32271_32295 = state_32255__$1;
(statearr_32271_32295[(2)] = null);

(statearr_32271_32295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (5))){
var inst_32239 = (state_32255[(2)]);
var state_32255__$1 = (function (){var statearr_32272 = state_32255;
(statearr_32272[(11)] = inst_32239);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32255__$1,(12),dchan);
} else {
if((state_val_32256 === (14))){
var inst_32241 = (state_32255[(8)]);
var inst_32246 = cljs.core.apply.call(null,f,inst_32241);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32255__$1,(16),out,inst_32246);
} else {
if((state_val_32256 === (16))){
var inst_32248 = (state_32255[(2)]);
var state_32255__$1 = (function (){var statearr_32273 = state_32255;
(statearr_32273[(12)] = inst_32248);

return statearr_32273;
})();
var statearr_32274_32296 = state_32255__$1;
(statearr_32274_32296[(2)] = null);

(statearr_32274_32296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (10))){
var inst_32223 = (state_32255[(2)]);
var inst_32224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32255__$1 = (function (){var statearr_32275 = state_32255;
(statearr_32275[(13)] = inst_32223);

return statearr_32275;
})();
var statearr_32276_32297 = state_32255__$1;
(statearr_32276_32297[(2)] = inst_32224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (8))){
var inst_32237 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32277_32298 = state_32255__$1;
(statearr_32277_32298[(2)] = inst_32237);

(statearr_32277_32298[(1)] = (5));


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
});})(c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30446__auto__,c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32278[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32278[(1)] = (1));

return statearr_32278;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32255){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32279){if((e32279 instanceof Object)){
var ex__30450__auto__ = e32279;
var statearr_32280_32299 = state_32255;
(statearr_32280_32299[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32300 = state_32255;
state_32255 = G__32300;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30960__auto__ = (function (){var statearr_32281 = f__30959__auto__.call(null);
(statearr_32281[(6)] = c__30958__auto___32283);

return statearr_32281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32283,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32303 = arguments.length;
switch (G__32303) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32357,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32357,out){
return (function (state_32335){
var state_val_32336 = (state_32335[(1)]);
if((state_val_32336 === (7))){
var inst_32315 = (state_32335[(7)]);
var inst_32314 = (state_32335[(8)]);
var inst_32314__$1 = (state_32335[(2)]);
var inst_32315__$1 = cljs.core.nth.call(null,inst_32314__$1,(0),null);
var inst_32316 = cljs.core.nth.call(null,inst_32314__$1,(1),null);
var inst_32317 = (inst_32315__$1 == null);
var state_32335__$1 = (function (){var statearr_32337 = state_32335;
(statearr_32337[(9)] = inst_32316);

(statearr_32337[(7)] = inst_32315__$1);

(statearr_32337[(8)] = inst_32314__$1);

return statearr_32337;
})();
if(cljs.core.truth_(inst_32317)){
var statearr_32338_32358 = state_32335__$1;
(statearr_32338_32358[(1)] = (8));

} else {
var statearr_32339_32359 = state_32335__$1;
(statearr_32339_32359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (1))){
var inst_32304 = cljs.core.vec.call(null,chs);
var inst_32305 = inst_32304;
var state_32335__$1 = (function (){var statearr_32340 = state_32335;
(statearr_32340[(10)] = inst_32305);

return statearr_32340;
})();
var statearr_32341_32360 = state_32335__$1;
(statearr_32341_32360[(2)] = null);

(statearr_32341_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (4))){
var inst_32305 = (state_32335[(10)]);
var state_32335__$1 = state_32335;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32335__$1,(7),inst_32305);
} else {
if((state_val_32336 === (6))){
var inst_32331 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32342_32361 = state_32335__$1;
(statearr_32342_32361[(2)] = inst_32331);

(statearr_32342_32361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (3))){
var inst_32333 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32335__$1,inst_32333);
} else {
if((state_val_32336 === (2))){
var inst_32305 = (state_32335[(10)]);
var inst_32307 = cljs.core.count.call(null,inst_32305);
var inst_32308 = (inst_32307 > (0));
var state_32335__$1 = state_32335;
if(cljs.core.truth_(inst_32308)){
var statearr_32344_32362 = state_32335__$1;
(statearr_32344_32362[(1)] = (4));

} else {
var statearr_32345_32363 = state_32335__$1;
(statearr_32345_32363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (11))){
var inst_32305 = (state_32335[(10)]);
var inst_32324 = (state_32335[(2)]);
var tmp32343 = inst_32305;
var inst_32305__$1 = tmp32343;
var state_32335__$1 = (function (){var statearr_32346 = state_32335;
(statearr_32346[(11)] = inst_32324);

(statearr_32346[(10)] = inst_32305__$1);

return statearr_32346;
})();
var statearr_32347_32364 = state_32335__$1;
(statearr_32347_32364[(2)] = null);

(statearr_32347_32364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (9))){
var inst_32315 = (state_32335[(7)]);
var state_32335__$1 = state_32335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32335__$1,(11),out,inst_32315);
} else {
if((state_val_32336 === (5))){
var inst_32329 = cljs.core.async.close_BANG_.call(null,out);
var state_32335__$1 = state_32335;
var statearr_32348_32365 = state_32335__$1;
(statearr_32348_32365[(2)] = inst_32329);

(statearr_32348_32365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (10))){
var inst_32327 = (state_32335[(2)]);
var state_32335__$1 = state_32335;
var statearr_32349_32366 = state_32335__$1;
(statearr_32349_32366[(2)] = inst_32327);

(statearr_32349_32366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32336 === (8))){
var inst_32316 = (state_32335[(9)]);
var inst_32315 = (state_32335[(7)]);
var inst_32314 = (state_32335[(8)]);
var inst_32305 = (state_32335[(10)]);
var inst_32319 = (function (){var cs = inst_32305;
var vec__32310 = inst_32314;
var v = inst_32315;
var c = inst_32316;
return ((function (cs,vec__32310,v,c,inst_32316,inst_32315,inst_32314,inst_32305,state_val_32336,c__30958__auto___32357,out){
return (function (p1__32301_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32301_SHARP_);
});
;})(cs,vec__32310,v,c,inst_32316,inst_32315,inst_32314,inst_32305,state_val_32336,c__30958__auto___32357,out))
})();
var inst_32320 = cljs.core.filterv.call(null,inst_32319,inst_32305);
var inst_32305__$1 = inst_32320;
var state_32335__$1 = (function (){var statearr_32350 = state_32335;
(statearr_32350[(10)] = inst_32305__$1);

return statearr_32350;
})();
var statearr_32351_32367 = state_32335__$1;
(statearr_32351_32367[(2)] = null);

(statearr_32351_32367[(1)] = (2));


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
});})(c__30958__auto___32357,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32357,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32352[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32352[(1)] = (1));

return statearr_32352;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32335){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32353){if((e32353 instanceof Object)){
var ex__30450__auto__ = e32353;
var statearr_32354_32368 = state_32335;
(statearr_32354_32368[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32369 = state_32335;
state_32335 = G__32369;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32357,out))
})();
var state__30960__auto__ = (function (){var statearr_32355 = f__30959__auto__.call(null);
(statearr_32355[(6)] = c__30958__auto___32357);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32357,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32371 = arguments.length;
switch (G__32371) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32416,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32416,out){
return (function (state_32395){
var state_val_32396 = (state_32395[(1)]);
if((state_val_32396 === (7))){
var inst_32377 = (state_32395[(7)]);
var inst_32377__$1 = (state_32395[(2)]);
var inst_32378 = (inst_32377__$1 == null);
var inst_32379 = cljs.core.not.call(null,inst_32378);
var state_32395__$1 = (function (){var statearr_32397 = state_32395;
(statearr_32397[(7)] = inst_32377__$1);

return statearr_32397;
})();
if(inst_32379){
var statearr_32398_32417 = state_32395__$1;
(statearr_32398_32417[(1)] = (8));

} else {
var statearr_32399_32418 = state_32395__$1;
(statearr_32399_32418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (1))){
var inst_32372 = (0);
var state_32395__$1 = (function (){var statearr_32400 = state_32395;
(statearr_32400[(8)] = inst_32372);

return statearr_32400;
})();
var statearr_32401_32419 = state_32395__$1;
(statearr_32401_32419[(2)] = null);

(statearr_32401_32419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (4))){
var state_32395__$1 = state_32395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32395__$1,(7),ch);
} else {
if((state_val_32396 === (6))){
var inst_32390 = (state_32395[(2)]);
var state_32395__$1 = state_32395;
var statearr_32402_32420 = state_32395__$1;
(statearr_32402_32420[(2)] = inst_32390);

(statearr_32402_32420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (3))){
var inst_32392 = (state_32395[(2)]);
var inst_32393 = cljs.core.async.close_BANG_.call(null,out);
var state_32395__$1 = (function (){var statearr_32403 = state_32395;
(statearr_32403[(9)] = inst_32392);

return statearr_32403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32395__$1,inst_32393);
} else {
if((state_val_32396 === (2))){
var inst_32372 = (state_32395[(8)]);
var inst_32374 = (inst_32372 < n);
var state_32395__$1 = state_32395;
if(cljs.core.truth_(inst_32374)){
var statearr_32404_32421 = state_32395__$1;
(statearr_32404_32421[(1)] = (4));

} else {
var statearr_32405_32422 = state_32395__$1;
(statearr_32405_32422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (11))){
var inst_32372 = (state_32395[(8)]);
var inst_32382 = (state_32395[(2)]);
var inst_32383 = (inst_32372 + (1));
var inst_32372__$1 = inst_32383;
var state_32395__$1 = (function (){var statearr_32406 = state_32395;
(statearr_32406[(10)] = inst_32382);

(statearr_32406[(8)] = inst_32372__$1);

return statearr_32406;
})();
var statearr_32407_32423 = state_32395__$1;
(statearr_32407_32423[(2)] = null);

(statearr_32407_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (9))){
var state_32395__$1 = state_32395;
var statearr_32408_32424 = state_32395__$1;
(statearr_32408_32424[(2)] = null);

(statearr_32408_32424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (5))){
var state_32395__$1 = state_32395;
var statearr_32409_32425 = state_32395__$1;
(statearr_32409_32425[(2)] = null);

(statearr_32409_32425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (10))){
var inst_32387 = (state_32395[(2)]);
var state_32395__$1 = state_32395;
var statearr_32410_32426 = state_32395__$1;
(statearr_32410_32426[(2)] = inst_32387);

(statearr_32410_32426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32396 === (8))){
var inst_32377 = (state_32395[(7)]);
var state_32395__$1 = state_32395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32395__$1,(11),out,inst_32377);
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
});})(c__30958__auto___32416,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32416,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32411[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32411[(1)] = (1));

return statearr_32411;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32395){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32412){if((e32412 instanceof Object)){
var ex__30450__auto__ = e32412;
var statearr_32413_32427 = state_32395;
(statearr_32413_32427[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_32395;
state_32395 = G__32428;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32416,out))
})();
var state__30960__auto__ = (function (){var statearr_32414 = f__30959__auto__.call(null);
(statearr_32414[(6)] = c__30958__auto___32416);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32416,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32430 = (function (f,ch,meta32431){
this.f = f;
this.ch = ch;
this.meta32431 = meta32431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32432,meta32431__$1){
var self__ = this;
var _32432__$1 = this;
return (new cljs.core.async.t_cljs$core$async32430(self__.f,self__.ch,meta32431__$1));
});

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32432){
var self__ = this;
var _32432__$1 = this;
return self__.meta32431;
});

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32433 = (function (f,ch,meta32431,_,fn1,meta32434){
this.f = f;
this.ch = ch;
this.meta32431 = meta32431;
this._ = _;
this.fn1 = fn1;
this.meta32434 = meta32434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32435,meta32434__$1){
var self__ = this;
var _32435__$1 = this;
return (new cljs.core.async.t_cljs$core$async32433(self__.f,self__.ch,self__.meta32431,self__._,self__.fn1,meta32434__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32435){
var self__ = this;
var _32435__$1 = this;
return self__.meta32434;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32429_SHARP_){
return f1.call(null,(((p1__32429_SHARP_ == null))?null:self__.f.call(null,p1__32429_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32431","meta32431",1370769961,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32430","cljs.core.async/t_cljs$core$async32430",-1690306274,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32434","meta32434",288556393,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32433";

cljs.core.async.t_cljs$core$async32433.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async32433");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32433 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32433(f__$1,ch__$1,meta32431__$1,___$2,fn1__$1,meta32434){
return (new cljs.core.async.t_cljs$core$async32433(f__$1,ch__$1,meta32431__$1,___$2,fn1__$1,meta32434));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32433(self__.f,self__.ch,self__.meta32431,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28003__auto__ = ret;
if(cljs.core.truth_(and__28003__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28003__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32431","meta32431",1370769961,null)], null);
});

cljs.core.async.t_cljs$core$async32430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32430";

cljs.core.async.t_cljs$core$async32430.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async32430");
});

cljs.core.async.__GT_t_cljs$core$async32430 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32430(f__$1,ch__$1,meta32431){
return (new cljs.core.async.t_cljs$core$async32430(f__$1,ch__$1,meta32431));
});

}

return (new cljs.core.async.t_cljs$core$async32430(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32436 = (function (f,ch,meta32437){
this.f = f;
this.ch = ch;
this.meta32437 = meta32437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32438,meta32437__$1){
var self__ = this;
var _32438__$1 = this;
return (new cljs.core.async.t_cljs$core$async32436(self__.f,self__.ch,meta32437__$1));
});

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32438){
var self__ = this;
var _32438__$1 = this;
return self__.meta32437;
});

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32437","meta32437",1701426406,null)], null);
});

cljs.core.async.t_cljs$core$async32436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32436";

cljs.core.async.t_cljs$core$async32436.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async32436");
});

cljs.core.async.__GT_t_cljs$core$async32436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32436(f__$1,ch__$1,meta32437){
return (new cljs.core.async.t_cljs$core$async32436(f__$1,ch__$1,meta32437));
});

}

return (new cljs.core.async.t_cljs$core$async32436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32439 = (function (p,ch,meta32440){
this.p = p;
this.ch = ch;
this.meta32440 = meta32440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32441,meta32440__$1){
var self__ = this;
var _32441__$1 = this;
return (new cljs.core.async.t_cljs$core$async32439(self__.p,self__.ch,meta32440__$1));
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32441){
var self__ = this;
var _32441__$1 = this;
return self__.meta32440;
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32440","meta32440",-1264590006,null)], null);
});

cljs.core.async.t_cljs$core$async32439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32439";

cljs.core.async.t_cljs$core$async32439.cljs$lang$ctorPrWriter = (function (this__28640__auto__,writer__28641__auto__,opt__28642__auto__){
return cljs.core._write.call(null,writer__28641__auto__,"cljs.core.async/t_cljs$core$async32439");
});

cljs.core.async.__GT_t_cljs$core$async32439 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32439(p__$1,ch__$1,meta32440){
return (new cljs.core.async.t_cljs$core$async32439(p__$1,ch__$1,meta32440));
});

}

return (new cljs.core.async.t_cljs$core$async32439(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32443 = arguments.length;
switch (G__32443) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32483,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32483,out){
return (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32460 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32466_32484 = state_32464__$1;
(statearr_32466_32484[(2)] = inst_32460);

(statearr_32466_32484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var state_32464__$1 = state_32464;
var statearr_32467_32485 = state_32464__$1;
(statearr_32467_32485[(2)] = null);

(statearr_32467_32485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32446 = (state_32464[(7)]);
var inst_32446__$1 = (state_32464[(2)]);
var inst_32447 = (inst_32446__$1 == null);
var state_32464__$1 = (function (){var statearr_32468 = state_32464;
(statearr_32468[(7)] = inst_32446__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32447)){
var statearr_32469_32486 = state_32464__$1;
(statearr_32469_32486[(1)] = (5));

} else {
var statearr_32470_32487 = state_32464__$1;
(statearr_32470_32487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var inst_32446 = (state_32464[(7)]);
var inst_32451 = p.call(null,inst_32446);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32451)){
var statearr_32471_32488 = state_32464__$1;
(statearr_32471_32488[(1)] = (8));

} else {
var statearr_32472_32489 = state_32464__$1;
(statearr_32472_32489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var inst_32462 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32464__$1,inst_32462);
} else {
if((state_val_32465 === (2))){
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(4),ch);
} else {
if((state_val_32465 === (11))){
var inst_32454 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32473_32490 = state_32464__$1;
(statearr_32473_32490[(2)] = inst_32454);

(statearr_32473_32490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var state_32464__$1 = state_32464;
var statearr_32474_32491 = state_32464__$1;
(statearr_32474_32491[(2)] = null);

(statearr_32474_32491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (5))){
var inst_32449 = cljs.core.async.close_BANG_.call(null,out);
var state_32464__$1 = state_32464;
var statearr_32475_32492 = state_32464__$1;
(statearr_32475_32492[(2)] = inst_32449);

(statearr_32475_32492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (10))){
var inst_32457 = (state_32464[(2)]);
var state_32464__$1 = (function (){var statearr_32476 = state_32464;
(statearr_32476[(8)] = inst_32457);

return statearr_32476;
})();
var statearr_32477_32493 = state_32464__$1;
(statearr_32477_32493[(2)] = null);

(statearr_32477_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (8))){
var inst_32446 = (state_32464[(7)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32464__$1,(11),out,inst_32446);
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
});})(c__30958__auto___32483,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32483,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32478 = [null,null,null,null,null,null,null,null,null];
(statearr_32478[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32478[(1)] = (1));

return statearr_32478;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32464){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32479){if((e32479 instanceof Object)){
var ex__30450__auto__ = e32479;
var statearr_32480_32494 = state_32464;
(statearr_32480_32494[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32495 = state_32464;
state_32464 = G__32495;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32483,out))
})();
var state__30960__auto__ = (function (){var statearr_32481 = f__30959__auto__.call(null);
(statearr_32481[(6)] = c__30958__auto___32483);

return statearr_32481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32483,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32497 = arguments.length;
switch (G__32497) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__){
return (function (state_32560){
var state_val_32561 = (state_32560[(1)]);
if((state_val_32561 === (7))){
var inst_32556 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32562_32600 = state_32560__$1;
(statearr_32562_32600[(2)] = inst_32556);

(statearr_32562_32600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (20))){
var inst_32526 = (state_32560[(7)]);
var inst_32537 = (state_32560[(2)]);
var inst_32538 = cljs.core.next.call(null,inst_32526);
var inst_32512 = inst_32538;
var inst_32513 = null;
var inst_32514 = (0);
var inst_32515 = (0);
var state_32560__$1 = (function (){var statearr_32563 = state_32560;
(statearr_32563[(8)] = inst_32515);

(statearr_32563[(9)] = inst_32537);

(statearr_32563[(10)] = inst_32514);

(statearr_32563[(11)] = inst_32512);

(statearr_32563[(12)] = inst_32513);

return statearr_32563;
})();
var statearr_32564_32601 = state_32560__$1;
(statearr_32564_32601[(2)] = null);

(statearr_32564_32601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (1))){
var state_32560__$1 = state_32560;
var statearr_32565_32602 = state_32560__$1;
(statearr_32565_32602[(2)] = null);

(statearr_32565_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (4))){
var inst_32501 = (state_32560[(13)]);
var inst_32501__$1 = (state_32560[(2)]);
var inst_32502 = (inst_32501__$1 == null);
var state_32560__$1 = (function (){var statearr_32566 = state_32560;
(statearr_32566[(13)] = inst_32501__$1);

return statearr_32566;
})();
if(cljs.core.truth_(inst_32502)){
var statearr_32567_32603 = state_32560__$1;
(statearr_32567_32603[(1)] = (5));

} else {
var statearr_32568_32604 = state_32560__$1;
(statearr_32568_32604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (15))){
var state_32560__$1 = state_32560;
var statearr_32572_32605 = state_32560__$1;
(statearr_32572_32605[(2)] = null);

(statearr_32572_32605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (21))){
var state_32560__$1 = state_32560;
var statearr_32573_32606 = state_32560__$1;
(statearr_32573_32606[(2)] = null);

(statearr_32573_32606[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (13))){
var inst_32515 = (state_32560[(8)]);
var inst_32514 = (state_32560[(10)]);
var inst_32512 = (state_32560[(11)]);
var inst_32513 = (state_32560[(12)]);
var inst_32522 = (state_32560[(2)]);
var inst_32523 = (inst_32515 + (1));
var tmp32569 = inst_32514;
var tmp32570 = inst_32512;
var tmp32571 = inst_32513;
var inst_32512__$1 = tmp32570;
var inst_32513__$1 = tmp32571;
var inst_32514__$1 = tmp32569;
var inst_32515__$1 = inst_32523;
var state_32560__$1 = (function (){var statearr_32574 = state_32560;
(statearr_32574[(8)] = inst_32515__$1);

(statearr_32574[(14)] = inst_32522);

(statearr_32574[(10)] = inst_32514__$1);

(statearr_32574[(11)] = inst_32512__$1);

(statearr_32574[(12)] = inst_32513__$1);

return statearr_32574;
})();
var statearr_32575_32607 = state_32560__$1;
(statearr_32575_32607[(2)] = null);

(statearr_32575_32607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (22))){
var state_32560__$1 = state_32560;
var statearr_32576_32608 = state_32560__$1;
(statearr_32576_32608[(2)] = null);

(statearr_32576_32608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (6))){
var inst_32501 = (state_32560[(13)]);
var inst_32510 = f.call(null,inst_32501);
var inst_32511 = cljs.core.seq.call(null,inst_32510);
var inst_32512 = inst_32511;
var inst_32513 = null;
var inst_32514 = (0);
var inst_32515 = (0);
var state_32560__$1 = (function (){var statearr_32577 = state_32560;
(statearr_32577[(8)] = inst_32515);

(statearr_32577[(10)] = inst_32514);

(statearr_32577[(11)] = inst_32512);

(statearr_32577[(12)] = inst_32513);

return statearr_32577;
})();
var statearr_32578_32609 = state_32560__$1;
(statearr_32578_32609[(2)] = null);

(statearr_32578_32609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (17))){
var inst_32526 = (state_32560[(7)]);
var inst_32530 = cljs.core.chunk_first.call(null,inst_32526);
var inst_32531 = cljs.core.chunk_rest.call(null,inst_32526);
var inst_32532 = cljs.core.count.call(null,inst_32530);
var inst_32512 = inst_32531;
var inst_32513 = inst_32530;
var inst_32514 = inst_32532;
var inst_32515 = (0);
var state_32560__$1 = (function (){var statearr_32579 = state_32560;
(statearr_32579[(8)] = inst_32515);

(statearr_32579[(10)] = inst_32514);

(statearr_32579[(11)] = inst_32512);

(statearr_32579[(12)] = inst_32513);

return statearr_32579;
})();
var statearr_32580_32610 = state_32560__$1;
(statearr_32580_32610[(2)] = null);

(statearr_32580_32610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (3))){
var inst_32558 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32560__$1,inst_32558);
} else {
if((state_val_32561 === (12))){
var inst_32546 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32581_32611 = state_32560__$1;
(statearr_32581_32611[(2)] = inst_32546);

(statearr_32581_32611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (2))){
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32560__$1,(4),in$);
} else {
if((state_val_32561 === (23))){
var inst_32554 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32582_32612 = state_32560__$1;
(statearr_32582_32612[(2)] = inst_32554);

(statearr_32582_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (19))){
var inst_32541 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32583_32613 = state_32560__$1;
(statearr_32583_32613[(2)] = inst_32541);

(statearr_32583_32613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (11))){
var inst_32526 = (state_32560[(7)]);
var inst_32512 = (state_32560[(11)]);
var inst_32526__$1 = cljs.core.seq.call(null,inst_32512);
var state_32560__$1 = (function (){var statearr_32584 = state_32560;
(statearr_32584[(7)] = inst_32526__$1);

return statearr_32584;
})();
if(inst_32526__$1){
var statearr_32585_32614 = state_32560__$1;
(statearr_32585_32614[(1)] = (14));

} else {
var statearr_32586_32615 = state_32560__$1;
(statearr_32586_32615[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (9))){
var inst_32548 = (state_32560[(2)]);
var inst_32549 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32560__$1 = (function (){var statearr_32587 = state_32560;
(statearr_32587[(15)] = inst_32548);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32549)){
var statearr_32588_32616 = state_32560__$1;
(statearr_32588_32616[(1)] = (21));

} else {
var statearr_32589_32617 = state_32560__$1;
(statearr_32589_32617[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (5))){
var inst_32504 = cljs.core.async.close_BANG_.call(null,out);
var state_32560__$1 = state_32560;
var statearr_32590_32618 = state_32560__$1;
(statearr_32590_32618[(2)] = inst_32504);

(statearr_32590_32618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (14))){
var inst_32526 = (state_32560[(7)]);
var inst_32528 = cljs.core.chunked_seq_QMARK_.call(null,inst_32526);
var state_32560__$1 = state_32560;
if(inst_32528){
var statearr_32591_32619 = state_32560__$1;
(statearr_32591_32619[(1)] = (17));

} else {
var statearr_32592_32620 = state_32560__$1;
(statearr_32592_32620[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (16))){
var inst_32544 = (state_32560[(2)]);
var state_32560__$1 = state_32560;
var statearr_32593_32621 = state_32560__$1;
(statearr_32593_32621[(2)] = inst_32544);

(statearr_32593_32621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32561 === (10))){
var inst_32515 = (state_32560[(8)]);
var inst_32513 = (state_32560[(12)]);
var inst_32520 = cljs.core._nth.call(null,inst_32513,inst_32515);
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32560__$1,(13),out,inst_32520);
} else {
if((state_val_32561 === (18))){
var inst_32526 = (state_32560[(7)]);
var inst_32535 = cljs.core.first.call(null,inst_32526);
var state_32560__$1 = state_32560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32560__$1,(20),out,inst_32535);
} else {
if((state_val_32561 === (8))){
var inst_32515 = (state_32560[(8)]);
var inst_32514 = (state_32560[(10)]);
var inst_32517 = (inst_32515 < inst_32514);
var inst_32518 = inst_32517;
var state_32560__$1 = state_32560;
if(cljs.core.truth_(inst_32518)){
var statearr_32594_32622 = state_32560__$1;
(statearr_32594_32622[(1)] = (10));

} else {
var statearr_32595_32623 = state_32560__$1;
(statearr_32595_32623[(1)] = (11));

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
});})(c__30958__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0 = (function (){
var statearr_32596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32596[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__);

(statearr_32596[(1)] = (1));

return statearr_32596;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1 = (function (state_32560){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32597){if((e32597 instanceof Object)){
var ex__30450__auto__ = e32597;
var statearr_32598_32624 = state_32560;
(statearr_32598_32624[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32625 = state_32560;
state_32560 = G__32625;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__ = function(state_32560){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1.call(this,state_32560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30447__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__))
})();
var state__30960__auto__ = (function (){var statearr_32599 = f__30959__auto__.call(null);
(statearr_32599[(6)] = c__30958__auto__);

return statearr_32599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__))
);

return c__30958__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32630 = arguments.length;
switch (G__32630) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32680,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32680,out){
return (function (state_32657){
var state_val_32658 = (state_32657[(1)]);
if((state_val_32658 === (7))){
var inst_32652 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32659_32681 = state_32657__$1;
(statearr_32659_32681[(2)] = inst_32652);

(statearr_32659_32681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (1))){
var inst_32634 = null;
var state_32657__$1 = (function (){var statearr_32660 = state_32657;
(statearr_32660[(7)] = inst_32634);

return statearr_32660;
})();
var statearr_32661_32682 = state_32657__$1;
(statearr_32661_32682[(2)] = null);

(statearr_32661_32682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (4))){
var inst_32637 = (state_32657[(8)]);
var inst_32637__$1 = (state_32657[(2)]);
var inst_32638 = (inst_32637__$1 == null);
var inst_32639 = cljs.core.not.call(null,inst_32638);
var state_32657__$1 = (function (){var statearr_32662 = state_32657;
(statearr_32662[(8)] = inst_32637__$1);

return statearr_32662;
})();
if(inst_32639){
var statearr_32663_32683 = state_32657__$1;
(statearr_32663_32683[(1)] = (5));

} else {
var statearr_32664_32684 = state_32657__$1;
(statearr_32664_32684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (6))){
var state_32657__$1 = state_32657;
var statearr_32665_32685 = state_32657__$1;
(statearr_32665_32685[(2)] = null);

(statearr_32665_32685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (3))){
var inst_32654 = (state_32657[(2)]);
var inst_32655 = cljs.core.async.close_BANG_.call(null,out);
var state_32657__$1 = (function (){var statearr_32666 = state_32657;
(statearr_32666[(9)] = inst_32654);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32657__$1,inst_32655);
} else {
if((state_val_32658 === (2))){
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32657__$1,(4),ch);
} else {
if((state_val_32658 === (11))){
var inst_32637 = (state_32657[(8)]);
var inst_32646 = (state_32657[(2)]);
var inst_32634 = inst_32637;
var state_32657__$1 = (function (){var statearr_32667 = state_32657;
(statearr_32667[(7)] = inst_32634);

(statearr_32667[(10)] = inst_32646);

return statearr_32667;
})();
var statearr_32668_32686 = state_32657__$1;
(statearr_32668_32686[(2)] = null);

(statearr_32668_32686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (9))){
var inst_32637 = (state_32657[(8)]);
var state_32657__$1 = state_32657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32657__$1,(11),out,inst_32637);
} else {
if((state_val_32658 === (5))){
var inst_32634 = (state_32657[(7)]);
var inst_32637 = (state_32657[(8)]);
var inst_32641 = cljs.core._EQ_.call(null,inst_32637,inst_32634);
var state_32657__$1 = state_32657;
if(inst_32641){
var statearr_32670_32687 = state_32657__$1;
(statearr_32670_32687[(1)] = (8));

} else {
var statearr_32671_32688 = state_32657__$1;
(statearr_32671_32688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (10))){
var inst_32649 = (state_32657[(2)]);
var state_32657__$1 = state_32657;
var statearr_32672_32689 = state_32657__$1;
(statearr_32672_32689[(2)] = inst_32649);

(statearr_32672_32689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32658 === (8))){
var inst_32634 = (state_32657[(7)]);
var tmp32669 = inst_32634;
var inst_32634__$1 = tmp32669;
var state_32657__$1 = (function (){var statearr_32673 = state_32657;
(statearr_32673[(7)] = inst_32634__$1);

return statearr_32673;
})();
var statearr_32674_32690 = state_32657__$1;
(statearr_32674_32690[(2)] = null);

(statearr_32674_32690[(1)] = (2));


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
});})(c__30958__auto___32680,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32680,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32675[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32675[(1)] = (1));

return statearr_32675;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32657){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32676){if((e32676 instanceof Object)){
var ex__30450__auto__ = e32676;
var statearr_32677_32691 = state_32657;
(statearr_32677_32691[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32692 = state_32657;
state_32657 = G__32692;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32680,out))
})();
var state__30960__auto__ = (function (){var statearr_32678 = f__30959__auto__.call(null);
(statearr_32678[(6)] = c__30958__auto___32680);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32680,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32694 = arguments.length;
switch (G__32694) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32760,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32760,out){
return (function (state_32732){
var state_val_32733 = (state_32732[(1)]);
if((state_val_32733 === (7))){
var inst_32728 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32734_32761 = state_32732__$1;
(statearr_32734_32761[(2)] = inst_32728);

(statearr_32734_32761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (1))){
var inst_32695 = (new Array(n));
var inst_32696 = inst_32695;
var inst_32697 = (0);
var state_32732__$1 = (function (){var statearr_32735 = state_32732;
(statearr_32735[(7)] = inst_32697);

(statearr_32735[(8)] = inst_32696);

return statearr_32735;
})();
var statearr_32736_32762 = state_32732__$1;
(statearr_32736_32762[(2)] = null);

(statearr_32736_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (4))){
var inst_32700 = (state_32732[(9)]);
var inst_32700__$1 = (state_32732[(2)]);
var inst_32701 = (inst_32700__$1 == null);
var inst_32702 = cljs.core.not.call(null,inst_32701);
var state_32732__$1 = (function (){var statearr_32737 = state_32732;
(statearr_32737[(9)] = inst_32700__$1);

return statearr_32737;
})();
if(inst_32702){
var statearr_32738_32763 = state_32732__$1;
(statearr_32738_32763[(1)] = (5));

} else {
var statearr_32739_32764 = state_32732__$1;
(statearr_32739_32764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (15))){
var inst_32722 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32740_32765 = state_32732__$1;
(statearr_32740_32765[(2)] = inst_32722);

(statearr_32740_32765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (13))){
var state_32732__$1 = state_32732;
var statearr_32741_32766 = state_32732__$1;
(statearr_32741_32766[(2)] = null);

(statearr_32741_32766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (6))){
var inst_32697 = (state_32732[(7)]);
var inst_32718 = (inst_32697 > (0));
var state_32732__$1 = state_32732;
if(cljs.core.truth_(inst_32718)){
var statearr_32742_32767 = state_32732__$1;
(statearr_32742_32767[(1)] = (12));

} else {
var statearr_32743_32768 = state_32732__$1;
(statearr_32743_32768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (3))){
var inst_32730 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32732__$1,inst_32730);
} else {
if((state_val_32733 === (12))){
var inst_32696 = (state_32732[(8)]);
var inst_32720 = cljs.core.vec.call(null,inst_32696);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32732__$1,(15),out,inst_32720);
} else {
if((state_val_32733 === (2))){
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32732__$1,(4),ch);
} else {
if((state_val_32733 === (11))){
var inst_32712 = (state_32732[(2)]);
var inst_32713 = (new Array(n));
var inst_32696 = inst_32713;
var inst_32697 = (0);
var state_32732__$1 = (function (){var statearr_32744 = state_32732;
(statearr_32744[(7)] = inst_32697);

(statearr_32744[(8)] = inst_32696);

(statearr_32744[(10)] = inst_32712);

return statearr_32744;
})();
var statearr_32745_32769 = state_32732__$1;
(statearr_32745_32769[(2)] = null);

(statearr_32745_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (9))){
var inst_32696 = (state_32732[(8)]);
var inst_32710 = cljs.core.vec.call(null,inst_32696);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32732__$1,(11),out,inst_32710);
} else {
if((state_val_32733 === (5))){
var inst_32705 = (state_32732[(11)]);
var inst_32700 = (state_32732[(9)]);
var inst_32697 = (state_32732[(7)]);
var inst_32696 = (state_32732[(8)]);
var inst_32704 = (inst_32696[inst_32697] = inst_32700);
var inst_32705__$1 = (inst_32697 + (1));
var inst_32706 = (inst_32705__$1 < n);
var state_32732__$1 = (function (){var statearr_32746 = state_32732;
(statearr_32746[(11)] = inst_32705__$1);

(statearr_32746[(12)] = inst_32704);

return statearr_32746;
})();
if(cljs.core.truth_(inst_32706)){
var statearr_32747_32770 = state_32732__$1;
(statearr_32747_32770[(1)] = (8));

} else {
var statearr_32748_32771 = state_32732__$1;
(statearr_32748_32771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (14))){
var inst_32725 = (state_32732[(2)]);
var inst_32726 = cljs.core.async.close_BANG_.call(null,out);
var state_32732__$1 = (function (){var statearr_32750 = state_32732;
(statearr_32750[(13)] = inst_32725);

return statearr_32750;
})();
var statearr_32751_32772 = state_32732__$1;
(statearr_32751_32772[(2)] = inst_32726);

(statearr_32751_32772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (10))){
var inst_32716 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32752_32773 = state_32732__$1;
(statearr_32752_32773[(2)] = inst_32716);

(statearr_32752_32773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (8))){
var inst_32705 = (state_32732[(11)]);
var inst_32696 = (state_32732[(8)]);
var tmp32749 = inst_32696;
var inst_32696__$1 = tmp32749;
var inst_32697 = inst_32705;
var state_32732__$1 = (function (){var statearr_32753 = state_32732;
(statearr_32753[(7)] = inst_32697);

(statearr_32753[(8)] = inst_32696__$1);

return statearr_32753;
})();
var statearr_32754_32774 = state_32732__$1;
(statearr_32754_32774[(2)] = null);

(statearr_32754_32774[(1)] = (2));


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
});})(c__30958__auto___32760,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32760,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32755[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32755[(1)] = (1));

return statearr_32755;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32732){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32756){if((e32756 instanceof Object)){
var ex__30450__auto__ = e32756;
var statearr_32757_32775 = state_32732;
(statearr_32757_32775[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32776 = state_32732;
state_32732 = G__32776;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32760,out))
})();
var state__30960__auto__ = (function (){var statearr_32758 = f__30959__auto__.call(null);
(statearr_32758[(6)] = c__30958__auto___32760);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32760,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30958__auto___32848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___32848,out){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___32848,out){
return (function (state_32820){
var state_val_32821 = (state_32820[(1)]);
if((state_val_32821 === (7))){
var inst_32816 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32822_32849 = state_32820__$1;
(statearr_32822_32849[(2)] = inst_32816);

(statearr_32822_32849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (1))){
var inst_32779 = [];
var inst_32780 = inst_32779;
var inst_32781 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32820__$1 = (function (){var statearr_32823 = state_32820;
(statearr_32823[(7)] = inst_32780);

(statearr_32823[(8)] = inst_32781);

return statearr_32823;
})();
var statearr_32824_32850 = state_32820__$1;
(statearr_32824_32850[(2)] = null);

(statearr_32824_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (4))){
var inst_32784 = (state_32820[(9)]);
var inst_32784__$1 = (state_32820[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var inst_32786 = cljs.core.not.call(null,inst_32785);
var state_32820__$1 = (function (){var statearr_32825 = state_32820;
(statearr_32825[(9)] = inst_32784__$1);

return statearr_32825;
})();
if(inst_32786){
var statearr_32826_32851 = state_32820__$1;
(statearr_32826_32851[(1)] = (5));

} else {
var statearr_32827_32852 = state_32820__$1;
(statearr_32827_32852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (15))){
var inst_32810 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32828_32853 = state_32820__$1;
(statearr_32828_32853[(2)] = inst_32810);

(statearr_32828_32853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (13))){
var state_32820__$1 = state_32820;
var statearr_32829_32854 = state_32820__$1;
(statearr_32829_32854[(2)] = null);

(statearr_32829_32854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (6))){
var inst_32780 = (state_32820[(7)]);
var inst_32805 = inst_32780.length;
var inst_32806 = (inst_32805 > (0));
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32806)){
var statearr_32830_32855 = state_32820__$1;
(statearr_32830_32855[(1)] = (12));

} else {
var statearr_32831_32856 = state_32820__$1;
(statearr_32831_32856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (3))){
var inst_32818 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32820__$1,inst_32818);
} else {
if((state_val_32821 === (12))){
var inst_32780 = (state_32820[(7)]);
var inst_32808 = cljs.core.vec.call(null,inst_32780);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32820__$1,(15),out,inst_32808);
} else {
if((state_val_32821 === (2))){
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32820__$1,(4),ch);
} else {
if((state_val_32821 === (11))){
var inst_32784 = (state_32820[(9)]);
var inst_32788 = (state_32820[(10)]);
var inst_32798 = (state_32820[(2)]);
var inst_32799 = [];
var inst_32800 = inst_32799.push(inst_32784);
var inst_32780 = inst_32799;
var inst_32781 = inst_32788;
var state_32820__$1 = (function (){var statearr_32832 = state_32820;
(statearr_32832[(7)] = inst_32780);

(statearr_32832[(11)] = inst_32798);

(statearr_32832[(8)] = inst_32781);

(statearr_32832[(12)] = inst_32800);

return statearr_32832;
})();
var statearr_32833_32857 = state_32820__$1;
(statearr_32833_32857[(2)] = null);

(statearr_32833_32857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (9))){
var inst_32780 = (state_32820[(7)]);
var inst_32796 = cljs.core.vec.call(null,inst_32780);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32820__$1,(11),out,inst_32796);
} else {
if((state_val_32821 === (5))){
var inst_32784 = (state_32820[(9)]);
var inst_32781 = (state_32820[(8)]);
var inst_32788 = (state_32820[(10)]);
var inst_32788__$1 = f.call(null,inst_32784);
var inst_32789 = cljs.core._EQ_.call(null,inst_32788__$1,inst_32781);
var inst_32790 = cljs.core.keyword_identical_QMARK_.call(null,inst_32781,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32791 = (inst_32789) || (inst_32790);
var state_32820__$1 = (function (){var statearr_32834 = state_32820;
(statearr_32834[(10)] = inst_32788__$1);

return statearr_32834;
})();
if(cljs.core.truth_(inst_32791)){
var statearr_32835_32858 = state_32820__$1;
(statearr_32835_32858[(1)] = (8));

} else {
var statearr_32836_32859 = state_32820__$1;
(statearr_32836_32859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (14))){
var inst_32813 = (state_32820[(2)]);
var inst_32814 = cljs.core.async.close_BANG_.call(null,out);
var state_32820__$1 = (function (){var statearr_32838 = state_32820;
(statearr_32838[(13)] = inst_32813);

return statearr_32838;
})();
var statearr_32839_32860 = state_32820__$1;
(statearr_32839_32860[(2)] = inst_32814);

(statearr_32839_32860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (10))){
var inst_32803 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32840_32861 = state_32820__$1;
(statearr_32840_32861[(2)] = inst_32803);

(statearr_32840_32861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (8))){
var inst_32780 = (state_32820[(7)]);
var inst_32784 = (state_32820[(9)]);
var inst_32788 = (state_32820[(10)]);
var inst_32793 = inst_32780.push(inst_32784);
var tmp32837 = inst_32780;
var inst_32780__$1 = tmp32837;
var inst_32781 = inst_32788;
var state_32820__$1 = (function (){var statearr_32841 = state_32820;
(statearr_32841[(14)] = inst_32793);

(statearr_32841[(7)] = inst_32780__$1);

(statearr_32841[(8)] = inst_32781);

return statearr_32841;
})();
var statearr_32842_32862 = state_32820__$1;
(statearr_32842_32862[(2)] = null);

(statearr_32842_32862[(1)] = (2));


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
});})(c__30958__auto___32848,out))
;
return ((function (switch__30446__auto__,c__30958__auto___32848,out){
return (function() {
var cljs$core$async$state_machine__30447__auto__ = null;
var cljs$core$async$state_machine__30447__auto____0 = (function (){
var statearr_32843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32843[(0)] = cljs$core$async$state_machine__30447__auto__);

(statearr_32843[(1)] = (1));

return statearr_32843;
});
var cljs$core$async$state_machine__30447__auto____1 = (function (state_32820){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_32820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e32844){if((e32844 instanceof Object)){
var ex__30450__auto__ = e32844;
var statearr_32845_32863 = state_32820;
(statearr_32845_32863[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32864 = state_32820;
state_32820 = G__32864;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
cljs$core$async$state_machine__30447__auto__ = function(state_32820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30447__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30447__auto____1.call(this,state_32820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30447__auto____0;
cljs$core$async$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30447__auto____1;
return cljs$core$async$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___32848,out))
})();
var state__30960__auto__ = (function (){var statearr_32846 = f__30959__auto__.call(null);
(statearr_32846[(6)] = c__30958__auto___32848);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___32848,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521812295360
