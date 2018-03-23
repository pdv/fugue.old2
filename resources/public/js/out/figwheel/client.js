// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35967){if((e35967 instanceof Error)){
var e = e35967;
return "Error: Unable to stringify";
} else {
throw e35967;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35970 = arguments.length;
switch (G__35970) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35968_SHARP_){
if(typeof p1__35968_SHARP_ === 'string'){
return p1__35968_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35968_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35973 = arguments.length;
var i__29187__auto___35974 = (0);
while(true){
if((i__29187__auto___35974 < len__29186__auto___35973)){
args__29193__auto__.push((arguments[i__29187__auto___35974]));

var G__35975 = (i__29187__auto___35974 + (1));
i__29187__auto___35974 = G__35975;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35972){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35972));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29193__auto__ = [];
var len__29186__auto___35977 = arguments.length;
var i__29187__auto___35978 = (0);
while(true){
if((i__29187__auto___35978 < len__29186__auto___35977)){
args__29193__auto__.push((arguments[i__29187__auto___35978]));

var G__35979 = (i__29187__auto___35978 + (1));
i__29187__auto___35978 = G__35979;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35976){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35976));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35980){
var map__35981 = p__35980;
var map__35981__$1 = ((((!((map__35981 == null)))?((((map__35981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35981):map__35981);
var message = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28015__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28015__auto__)){
return or__28015__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28003__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28003__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28003__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30958__auto___36060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___36060,ch){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___36060,ch){
return (function (state_36032){
var state_val_36033 = (state_36032[(1)]);
if((state_val_36033 === (7))){
var inst_36028 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36034_36061 = state_36032__$1;
(statearr_36034_36061[(2)] = inst_36028);

(statearr_36034_36061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (1))){
var state_36032__$1 = state_36032;
var statearr_36035_36062 = state_36032__$1;
(statearr_36035_36062[(2)] = null);

(statearr_36035_36062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (4))){
var inst_35985 = (state_36032[(7)]);
var inst_35985__$1 = (state_36032[(2)]);
var state_36032__$1 = (function (){var statearr_36036 = state_36032;
(statearr_36036[(7)] = inst_35985__$1);

return statearr_36036;
})();
if(cljs.core.truth_(inst_35985__$1)){
var statearr_36037_36063 = state_36032__$1;
(statearr_36037_36063[(1)] = (5));

} else {
var statearr_36038_36064 = state_36032__$1;
(statearr_36038_36064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (15))){
var inst_35992 = (state_36032[(8)]);
var inst_36007 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35992);
var inst_36008 = cljs.core.first.call(null,inst_36007);
var inst_36009 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36008);
var inst_36010 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36009)].join('');
var inst_36011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36010);
var state_36032__$1 = state_36032;
var statearr_36039_36065 = state_36032__$1;
(statearr_36039_36065[(2)] = inst_36011);

(statearr_36039_36065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (13))){
var inst_36016 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36040_36066 = state_36032__$1;
(statearr_36040_36066[(2)] = inst_36016);

(statearr_36040_36066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (6))){
var state_36032__$1 = state_36032;
var statearr_36041_36067 = state_36032__$1;
(statearr_36041_36067[(2)] = null);

(statearr_36041_36067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (17))){
var inst_36014 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36042_36068 = state_36032__$1;
(statearr_36042_36068[(2)] = inst_36014);

(statearr_36042_36068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (3))){
var inst_36030 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36032__$1,inst_36030);
} else {
if((state_val_36033 === (12))){
var inst_35991 = (state_36032[(9)]);
var inst_36005 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35991,opts);
var state_36032__$1 = state_36032;
if(cljs.core.truth_(inst_36005)){
var statearr_36043_36069 = state_36032__$1;
(statearr_36043_36069[(1)] = (15));

} else {
var statearr_36044_36070 = state_36032__$1;
(statearr_36044_36070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (2))){
var state_36032__$1 = state_36032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36032__$1,(4),ch);
} else {
if((state_val_36033 === (11))){
var inst_35992 = (state_36032[(8)]);
var inst_35997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35998 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35992);
var inst_35999 = cljs.core.async.timeout.call(null,(1000));
var inst_36000 = [inst_35998,inst_35999];
var inst_36001 = (new cljs.core.PersistentVector(null,2,(5),inst_35997,inst_36000,null));
var state_36032__$1 = state_36032;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36032__$1,(14),inst_36001);
} else {
if((state_val_36033 === (9))){
var inst_35992 = (state_36032[(8)]);
var inst_36018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36019 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35992);
var inst_36020 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36019);
var inst_36021 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36020)].join('');
var inst_36022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36021);
var state_36032__$1 = (function (){var statearr_36045 = state_36032;
(statearr_36045[(10)] = inst_36018);

return statearr_36045;
})();
var statearr_36046_36071 = state_36032__$1;
(statearr_36046_36071[(2)] = inst_36022);

(statearr_36046_36071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (5))){
var inst_35985 = (state_36032[(7)]);
var inst_35987 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35988 = (new cljs.core.PersistentArrayMap(null,2,inst_35987,null));
var inst_35989 = (new cljs.core.PersistentHashSet(null,inst_35988,null));
var inst_35990 = figwheel.client.focus_msgs.call(null,inst_35989,inst_35985);
var inst_35991 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35990);
var inst_35992 = cljs.core.first.call(null,inst_35990);
var inst_35993 = figwheel.client.autoload_QMARK_.call(null);
var state_36032__$1 = (function (){var statearr_36047 = state_36032;
(statearr_36047[(8)] = inst_35992);

(statearr_36047[(9)] = inst_35991);

return statearr_36047;
})();
if(cljs.core.truth_(inst_35993)){
var statearr_36048_36072 = state_36032__$1;
(statearr_36048_36072[(1)] = (8));

} else {
var statearr_36049_36073 = state_36032__$1;
(statearr_36049_36073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (14))){
var inst_36003 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36050_36074 = state_36032__$1;
(statearr_36050_36074[(2)] = inst_36003);

(statearr_36050_36074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (16))){
var state_36032__$1 = state_36032;
var statearr_36051_36075 = state_36032__$1;
(statearr_36051_36075[(2)] = null);

(statearr_36051_36075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (10))){
var inst_36024 = (state_36032[(2)]);
var state_36032__$1 = (function (){var statearr_36052 = state_36032;
(statearr_36052[(11)] = inst_36024);

return statearr_36052;
})();
var statearr_36053_36076 = state_36032__$1;
(statearr_36053_36076[(2)] = null);

(statearr_36053_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (8))){
var inst_35991 = (state_36032[(9)]);
var inst_35995 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35991,opts);
var state_36032__$1 = state_36032;
if(cljs.core.truth_(inst_35995)){
var statearr_36054_36077 = state_36032__$1;
(statearr_36054_36077[(1)] = (11));

} else {
var statearr_36055_36078 = state_36032__$1;
(statearr_36055_36078[(1)] = (12));

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
});})(c__30958__auto___36060,ch))
;
return ((function (switch__30446__auto__,c__30958__auto___36060,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_36056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36056[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__);

(statearr_36056[(1)] = (1));

return statearr_36056;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1 = (function (state_36032){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_36032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e36057){if((e36057 instanceof Object)){
var ex__30450__auto__ = e36057;
var statearr_36058_36079 = state_36032;
(statearr_36058_36079[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36080 = state_36032;
state_36032 = G__36080;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__ = function(state_36032){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1.call(this,state_36032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30447__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___36060,ch))
})();
var state__30960__auto__ = (function (){var statearr_36059 = f__30959__auto__.call(null);
(statearr_36059[(6)] = c__30958__auto___36060);

return statearr_36059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___36060,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36081_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36081_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36085 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36085){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36084 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36083,_STAR_print_fn_STAR_36084,sb,base_path_36085){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_36083,_STAR_print_fn_STAR_36084,sb,base_path_36085))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36084;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36083;
}}catch (e36082){if((e36082 instanceof Error)){
var e = e36082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36085], null));
} else {
var e = e36082;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36085))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36086){
var map__36087 = p__36086;
var map__36087__$1 = ((((!((map__36087 == null)))?((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36087):map__36087);
var opts = map__36087__$1;
var build_id = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36087,map__36087__$1,opts,build_id){
return (function (p__36089){
var vec__36090 = p__36089;
var seq__36091 = cljs.core.seq.call(null,vec__36090);
var first__36092 = cljs.core.first.call(null,seq__36091);
var seq__36091__$1 = cljs.core.next.call(null,seq__36091);
var map__36093 = first__36092;
var map__36093__$1 = ((((!((map__36093 == null)))?((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36093):map__36093);
var msg = map__36093__$1;
var msg_name = cljs.core.get.call(null,map__36093__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36091__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36090,seq__36091,first__36092,seq__36091__$1,map__36093,map__36093__$1,msg,msg_name,_,map__36087,map__36087__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36090,seq__36091,first__36092,seq__36091__$1,map__36093,map__36093__$1,msg,msg_name,_,map__36087,map__36087__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36087,map__36087__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36095){
var vec__36096 = p__36095;
var seq__36097 = cljs.core.seq.call(null,vec__36096);
var first__36098 = cljs.core.first.call(null,seq__36097);
var seq__36097__$1 = cljs.core.next.call(null,seq__36097);
var map__36099 = first__36098;
var map__36099__$1 = ((((!((map__36099 == null)))?((((map__36099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36099):map__36099);
var msg = map__36099__$1;
var msg_name = cljs.core.get.call(null,map__36099__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36097__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36101){
var map__36102 = p__36101;
var map__36102__$1 = ((((!((map__36102 == null)))?((((map__36102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36102):map__36102);
var on_compile_warning = cljs.core.get.call(null,map__36102__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36102__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36102,map__36102__$1,on_compile_warning,on_compile_fail){
return (function (p__36104){
var vec__36105 = p__36104;
var seq__36106 = cljs.core.seq.call(null,vec__36105);
var first__36107 = cljs.core.first.call(null,seq__36106);
var seq__36106__$1 = cljs.core.next.call(null,seq__36106);
var map__36108 = first__36107;
var map__36108__$1 = ((((!((map__36108 == null)))?((((map__36108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36108):map__36108);
var msg = map__36108__$1;
var msg_name = cljs.core.get.call(null,map__36108__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36106__$1;
var pred__36110 = cljs.core._EQ_;
var expr__36111 = msg_name;
if(cljs.core.truth_(pred__36110.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36111))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36110.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36111))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36102,map__36102__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__,msg_hist,msg_names,msg){
return (function (state_36200){
var state_val_36201 = (state_36200[(1)]);
if((state_val_36201 === (7))){
var inst_36120 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36120)){
var statearr_36202_36249 = state_36200__$1;
(statearr_36202_36249[(1)] = (8));

} else {
var statearr_36203_36250 = state_36200__$1;
(statearr_36203_36250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (20))){
var inst_36194 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36204_36251 = state_36200__$1;
(statearr_36204_36251[(2)] = inst_36194);

(statearr_36204_36251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (27))){
var inst_36190 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36205_36252 = state_36200__$1;
(statearr_36205_36252[(2)] = inst_36190);

(statearr_36205_36252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (1))){
var inst_36113 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36113)){
var statearr_36206_36253 = state_36200__$1;
(statearr_36206_36253[(1)] = (2));

} else {
var statearr_36207_36254 = state_36200__$1;
(statearr_36207_36254[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (24))){
var inst_36192 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36208_36255 = state_36200__$1;
(statearr_36208_36255[(2)] = inst_36192);

(statearr_36208_36255[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (4))){
var inst_36198 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36200__$1,inst_36198);
} else {
if((state_val_36201 === (15))){
var inst_36196 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36209_36256 = state_36200__$1;
(statearr_36209_36256[(2)] = inst_36196);

(statearr_36209_36256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (21))){
var inst_36149 = (state_36200[(2)]);
var inst_36150 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36151 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36150);
var state_36200__$1 = (function (){var statearr_36210 = state_36200;
(statearr_36210[(7)] = inst_36149);

return statearr_36210;
})();
var statearr_36211_36257 = state_36200__$1;
(statearr_36211_36257[(2)] = inst_36151);

(statearr_36211_36257[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (31))){
var inst_36179 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36179)){
var statearr_36212_36258 = state_36200__$1;
(statearr_36212_36258[(1)] = (34));

} else {
var statearr_36213_36259 = state_36200__$1;
(statearr_36213_36259[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (32))){
var inst_36188 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36214_36260 = state_36200__$1;
(statearr_36214_36260[(2)] = inst_36188);

(statearr_36214_36260[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (33))){
var inst_36175 = (state_36200[(2)]);
var inst_36176 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36177 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36176);
var state_36200__$1 = (function (){var statearr_36215 = state_36200;
(statearr_36215[(8)] = inst_36175);

return statearr_36215;
})();
var statearr_36216_36261 = state_36200__$1;
(statearr_36216_36261[(2)] = inst_36177);

(statearr_36216_36261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (13))){
var inst_36134 = figwheel.client.heads_up.clear.call(null);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(16),inst_36134);
} else {
if((state_val_36201 === (22))){
var inst_36155 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36156 = figwheel.client.heads_up.append_warning_message.call(null,inst_36155);
var state_36200__$1 = state_36200;
var statearr_36217_36262 = state_36200__$1;
(statearr_36217_36262[(2)] = inst_36156);

(statearr_36217_36262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (36))){
var inst_36186 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36218_36263 = state_36200__$1;
(statearr_36218_36263[(2)] = inst_36186);

(statearr_36218_36263[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (29))){
var inst_36166 = (state_36200[(2)]);
var inst_36167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36168 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36167);
var state_36200__$1 = (function (){var statearr_36219 = state_36200;
(statearr_36219[(9)] = inst_36166);

return statearr_36219;
})();
var statearr_36220_36264 = state_36200__$1;
(statearr_36220_36264[(2)] = inst_36168);

(statearr_36220_36264[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (6))){
var inst_36115 = (state_36200[(10)]);
var state_36200__$1 = state_36200;
var statearr_36221_36265 = state_36200__$1;
(statearr_36221_36265[(2)] = inst_36115);

(statearr_36221_36265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (28))){
var inst_36162 = (state_36200[(2)]);
var inst_36163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36164 = figwheel.client.heads_up.display_warning.call(null,inst_36163);
var state_36200__$1 = (function (){var statearr_36222 = state_36200;
(statearr_36222[(11)] = inst_36162);

return statearr_36222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(29),inst_36164);
} else {
if((state_val_36201 === (25))){
var inst_36160 = figwheel.client.heads_up.clear.call(null);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(28),inst_36160);
} else {
if((state_val_36201 === (34))){
var inst_36181 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(37),inst_36181);
} else {
if((state_val_36201 === (17))){
var inst_36140 = (state_36200[(2)]);
var inst_36141 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36142 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36141);
var state_36200__$1 = (function (){var statearr_36223 = state_36200;
(statearr_36223[(12)] = inst_36140);

return statearr_36223;
})();
var statearr_36224_36266 = state_36200__$1;
(statearr_36224_36266[(2)] = inst_36142);

(statearr_36224_36266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (3))){
var inst_36132 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36132)){
var statearr_36225_36267 = state_36200__$1;
(statearr_36225_36267[(1)] = (13));

} else {
var statearr_36226_36268 = state_36200__$1;
(statearr_36226_36268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (12))){
var inst_36128 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36227_36269 = state_36200__$1;
(statearr_36227_36269[(2)] = inst_36128);

(statearr_36227_36269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (2))){
var inst_36115 = (state_36200[(10)]);
var inst_36115__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36200__$1 = (function (){var statearr_36228 = state_36200;
(statearr_36228[(10)] = inst_36115__$1);

return statearr_36228;
})();
if(cljs.core.truth_(inst_36115__$1)){
var statearr_36229_36270 = state_36200__$1;
(statearr_36229_36270[(1)] = (5));

} else {
var statearr_36230_36271 = state_36200__$1;
(statearr_36230_36271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (23))){
var inst_36158 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36158)){
var statearr_36231_36272 = state_36200__$1;
(statearr_36231_36272[(1)] = (25));

} else {
var statearr_36232_36273 = state_36200__$1;
(statearr_36232_36273[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (35))){
var state_36200__$1 = state_36200;
var statearr_36233_36274 = state_36200__$1;
(statearr_36233_36274[(2)] = null);

(statearr_36233_36274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (19))){
var inst_36153 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36153)){
var statearr_36234_36275 = state_36200__$1;
(statearr_36234_36275[(1)] = (22));

} else {
var statearr_36235_36276 = state_36200__$1;
(statearr_36235_36276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (11))){
var inst_36124 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36236_36277 = state_36200__$1;
(statearr_36236_36277[(2)] = inst_36124);

(statearr_36236_36277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (9))){
var inst_36126 = figwheel.client.heads_up.clear.call(null);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(12),inst_36126);
} else {
if((state_val_36201 === (5))){
var inst_36117 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36200__$1 = state_36200;
var statearr_36237_36278 = state_36200__$1;
(statearr_36237_36278[(2)] = inst_36117);

(statearr_36237_36278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (14))){
var inst_36144 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36144)){
var statearr_36238_36279 = state_36200__$1;
(statearr_36238_36279[(1)] = (18));

} else {
var statearr_36239_36280 = state_36200__$1;
(statearr_36239_36280[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (26))){
var inst_36170 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36200__$1 = state_36200;
if(cljs.core.truth_(inst_36170)){
var statearr_36240_36281 = state_36200__$1;
(statearr_36240_36281[(1)] = (30));

} else {
var statearr_36241_36282 = state_36200__$1;
(statearr_36241_36282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (16))){
var inst_36136 = (state_36200[(2)]);
var inst_36137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36138 = figwheel.client.heads_up.display_exception.call(null,inst_36137);
var state_36200__$1 = (function (){var statearr_36242 = state_36200;
(statearr_36242[(13)] = inst_36136);

return statearr_36242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(17),inst_36138);
} else {
if((state_val_36201 === (30))){
var inst_36172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36173 = figwheel.client.heads_up.display_warning.call(null,inst_36172);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(33),inst_36173);
} else {
if((state_val_36201 === (10))){
var inst_36130 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36243_36283 = state_36200__$1;
(statearr_36243_36283[(2)] = inst_36130);

(statearr_36243_36283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (18))){
var inst_36146 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36147 = figwheel.client.heads_up.display_exception.call(null,inst_36146);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(21),inst_36147);
} else {
if((state_val_36201 === (37))){
var inst_36183 = (state_36200[(2)]);
var state_36200__$1 = state_36200;
var statearr_36244_36284 = state_36200__$1;
(statearr_36244_36284[(2)] = inst_36183);

(statearr_36244_36284[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36201 === (8))){
var inst_36122 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36200__$1 = state_36200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36200__$1,(11),inst_36122);
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
});})(c__30958__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30446__auto__,c__30958__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0 = (function (){
var statearr_36245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36245[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__);

(statearr_36245[(1)] = (1));

return statearr_36245;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1 = (function (state_36200){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_36200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e36246){if((e36246 instanceof Object)){
var ex__30450__auto__ = e36246;
var statearr_36247_36285 = state_36200;
(statearr_36247_36285[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36286 = state_36200;
state_36200 = G__36286;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__ = function(state_36200){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1.call(this,state_36200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__,msg_hist,msg_names,msg))
})();
var state__30960__auto__ = (function (){var statearr_36248 = f__30959__auto__.call(null);
(statearr_36248[(6)] = c__30958__auto__);

return statearr_36248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__,msg_hist,msg_names,msg))
);

return c__30958__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30958__auto___36315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto___36315,ch){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto___36315,ch){
return (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (1))){
var state_36301__$1 = state_36301;
var statearr_36303_36316 = state_36301__$1;
(statearr_36303_36316[(2)] = null);

(statearr_36303_36316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (2))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36301__$1,(4),ch);
} else {
if((state_val_36302 === (3))){
var inst_36299 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36301__$1,inst_36299);
} else {
if((state_val_36302 === (4))){
var inst_36289 = (state_36301[(7)]);
var inst_36289__$1 = (state_36301[(2)]);
var state_36301__$1 = (function (){var statearr_36304 = state_36301;
(statearr_36304[(7)] = inst_36289__$1);

return statearr_36304;
})();
if(cljs.core.truth_(inst_36289__$1)){
var statearr_36305_36317 = state_36301__$1;
(statearr_36305_36317[(1)] = (5));

} else {
var statearr_36306_36318 = state_36301__$1;
(statearr_36306_36318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var inst_36289 = (state_36301[(7)]);
var inst_36291 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36289);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36301__$1,(8),inst_36291);
} else {
if((state_val_36302 === (6))){
var state_36301__$1 = state_36301;
var statearr_36307_36319 = state_36301__$1;
(statearr_36307_36319[(2)] = null);

(statearr_36307_36319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (7))){
var inst_36297 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36308_36320 = state_36301__$1;
(statearr_36308_36320[(2)] = inst_36297);

(statearr_36308_36320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (8))){
var inst_36293 = (state_36301[(2)]);
var state_36301__$1 = (function (){var statearr_36309 = state_36301;
(statearr_36309[(8)] = inst_36293);

return statearr_36309;
})();
var statearr_36310_36321 = state_36301__$1;
(statearr_36310_36321[(2)] = null);

(statearr_36310_36321[(1)] = (2));


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
});})(c__30958__auto___36315,ch))
;
return ((function (switch__30446__auto__,c__30958__auto___36315,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_36311 = [null,null,null,null,null,null,null,null,null];
(statearr_36311[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30447__auto__);

(statearr_36311[(1)] = (1));

return statearr_36311;
});
var figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1 = (function (state_36301){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_36301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e36312){if((e36312 instanceof Object)){
var ex__30450__auto__ = e36312;
var statearr_36313_36322 = state_36301;
(statearr_36313_36322[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36323 = state_36301;
state_36301 = G__36323;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__ = function(state_36301){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1.call(this,state_36301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30447__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30447__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto___36315,ch))
})();
var state__30960__auto__ = (function (){var statearr_36314 = f__30959__auto__.call(null);
(statearr_36314[(6)] = c__30958__auto___36315);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto___36315,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__){
return (function (state_36329){
var state_val_36330 = (state_36329[(1)]);
if((state_val_36330 === (1))){
var inst_36324 = cljs.core.async.timeout.call(null,(3000));
var state_36329__$1 = state_36329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36329__$1,(2),inst_36324);
} else {
if((state_val_36330 === (2))){
var inst_36326 = (state_36329[(2)]);
var inst_36327 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36329__$1 = (function (){var statearr_36331 = state_36329;
(statearr_36331[(7)] = inst_36326);

return statearr_36331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36329__$1,inst_36327);
} else {
return null;
}
}
});})(c__30958__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_36332 = [null,null,null,null,null,null,null,null];
(statearr_36332[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__);

(statearr_36332[(1)] = (1));

return statearr_36332;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1 = (function (state_36329){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_36329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e36333){if((e36333 instanceof Object)){
var ex__30450__auto__ = e36333;
var statearr_36334_36336 = state_36329;
(statearr_36334_36336[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36337 = state_36329;
state_36329 = G__36337;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__ = function(state_36329){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1.call(this,state_36329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30447__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__))
})();
var state__30960__auto__ = (function (){var statearr_36335 = f__30959__auto__.call(null);
(statearr_36335[(6)] = c__30958__auto__);

return statearr_36335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__))
);

return c__30958__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30958__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30959__auto__ = (function (){var switch__30446__auto__ = ((function (c__30958__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36344){
var state_val_36345 = (state_36344[(1)]);
if((state_val_36345 === (1))){
var inst_36338 = cljs.core.async.timeout.call(null,(2000));
var state_36344__$1 = state_36344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36344__$1,(2),inst_36338);
} else {
if((state_val_36345 === (2))){
var inst_36340 = (state_36344[(2)]);
var inst_36341 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36342 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36341);
var state_36344__$1 = (function (){var statearr_36346 = state_36344;
(statearr_36346[(7)] = inst_36340);

return statearr_36346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36344__$1,inst_36342);
} else {
return null;
}
}
});})(c__30958__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30446__auto__,c__30958__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0 = (function (){
var statearr_36347 = [null,null,null,null,null,null,null,null];
(statearr_36347[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__);

(statearr_36347[(1)] = (1));

return statearr_36347;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1 = (function (state_36344){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_36344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e36348){if((e36348 instanceof Object)){
var ex__30450__auto__ = e36348;
var statearr_36349_36351 = state_36344;
(statearr_36349_36351[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36352 = state_36344;
state_36344 = G__36352;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__ = function(state_36344){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1.call(this,state_36344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30958__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30960__auto__ = (function (){var statearr_36350 = f__30959__auto__.call(null);
(statearr_36350[(6)] = c__30958__auto__);

return statearr_36350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30960__auto__);
});})(c__30958__auto__,figwheel_version,temp__4657__auto__))
);

return c__30958__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36353){
var map__36354 = p__36353;
var map__36354__$1 = ((((!((map__36354 == null)))?((((map__36354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36354):map__36354);
var file = cljs.core.get.call(null,map__36354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36354__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36354__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36356 = "";
var G__36356__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36356),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36356);
var G__36356__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36356__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36356__$1);
if(cljs.core.truth_((function (){var and__28003__auto__ = line;
if(cljs.core.truth_(and__28003__auto__)){
return column;
} else {
return and__28003__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36356__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36356__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36357){
var map__36358 = p__36357;
var map__36358__$1 = ((((!((map__36358 == null)))?((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36358):map__36358);
var ed = map__36358__$1;
var formatted_exception = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36358__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36360_36364 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36361_36365 = null;
var count__36362_36366 = (0);
var i__36363_36367 = (0);
while(true){
if((i__36363_36367 < count__36362_36366)){
var msg_36368 = cljs.core._nth.call(null,chunk__36361_36365,i__36363_36367);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36368);

var G__36369 = seq__36360_36364;
var G__36370 = chunk__36361_36365;
var G__36371 = count__36362_36366;
var G__36372 = (i__36363_36367 + (1));
seq__36360_36364 = G__36369;
chunk__36361_36365 = G__36370;
count__36362_36366 = G__36371;
i__36363_36367 = G__36372;
continue;
} else {
var temp__4657__auto___36373 = cljs.core.seq.call(null,seq__36360_36364);
if(temp__4657__auto___36373){
var seq__36360_36374__$1 = temp__4657__auto___36373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36360_36374__$1)){
var c__28854__auto___36375 = cljs.core.chunk_first.call(null,seq__36360_36374__$1);
var G__36376 = cljs.core.chunk_rest.call(null,seq__36360_36374__$1);
var G__36377 = c__28854__auto___36375;
var G__36378 = cljs.core.count.call(null,c__28854__auto___36375);
var G__36379 = (0);
seq__36360_36364 = G__36376;
chunk__36361_36365 = G__36377;
count__36362_36366 = G__36378;
i__36363_36367 = G__36379;
continue;
} else {
var msg_36380 = cljs.core.first.call(null,seq__36360_36374__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36380);

var G__36381 = cljs.core.next.call(null,seq__36360_36374__$1);
var G__36382 = null;
var G__36383 = (0);
var G__36384 = (0);
seq__36360_36364 = G__36381;
chunk__36361_36365 = G__36382;
count__36362_36366 = G__36383;
i__36363_36367 = G__36384;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36385){
var map__36386 = p__36385;
var map__36386__$1 = ((((!((map__36386 == null)))?((((map__36386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36386):map__36386);
var w = map__36386__$1;
var message = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28003__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28003__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28003__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36388 = cljs.core.seq.call(null,plugins);
var chunk__36389 = null;
var count__36390 = (0);
var i__36391 = (0);
while(true){
if((i__36391 < count__36390)){
var vec__36392 = cljs.core._nth.call(null,chunk__36389,i__36391);
var k = cljs.core.nth.call(null,vec__36392,(0),null);
var plugin = cljs.core.nth.call(null,vec__36392,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36398 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36388,chunk__36389,count__36390,i__36391,pl_36398,vec__36392,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36398.call(null,msg_hist);
});})(seq__36388,chunk__36389,count__36390,i__36391,pl_36398,vec__36392,k,plugin))
);
} else {
}

var G__36399 = seq__36388;
var G__36400 = chunk__36389;
var G__36401 = count__36390;
var G__36402 = (i__36391 + (1));
seq__36388 = G__36399;
chunk__36389 = G__36400;
count__36390 = G__36401;
i__36391 = G__36402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36388);
if(temp__4657__auto__){
var seq__36388__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36388__$1)){
var c__28854__auto__ = cljs.core.chunk_first.call(null,seq__36388__$1);
var G__36403 = cljs.core.chunk_rest.call(null,seq__36388__$1);
var G__36404 = c__28854__auto__;
var G__36405 = cljs.core.count.call(null,c__28854__auto__);
var G__36406 = (0);
seq__36388 = G__36403;
chunk__36389 = G__36404;
count__36390 = G__36405;
i__36391 = G__36406;
continue;
} else {
var vec__36395 = cljs.core.first.call(null,seq__36388__$1);
var k = cljs.core.nth.call(null,vec__36395,(0),null);
var plugin = cljs.core.nth.call(null,vec__36395,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36407 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36388,chunk__36389,count__36390,i__36391,pl_36407,vec__36395,k,plugin,seq__36388__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36407.call(null,msg_hist);
});})(seq__36388,chunk__36389,count__36390,i__36391,pl_36407,vec__36395,k,plugin,seq__36388__$1,temp__4657__auto__))
);
} else {
}

var G__36408 = cljs.core.next.call(null,seq__36388__$1);
var G__36409 = null;
var G__36410 = (0);
var G__36411 = (0);
seq__36388 = G__36408;
chunk__36389 = G__36409;
count__36390 = G__36410;
i__36391 = G__36411;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36413 = arguments.length;
switch (G__36413) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36414_36419 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36415_36420 = null;
var count__36416_36421 = (0);
var i__36417_36422 = (0);
while(true){
if((i__36417_36422 < count__36416_36421)){
var msg_36423 = cljs.core._nth.call(null,chunk__36415_36420,i__36417_36422);
figwheel.client.socket.handle_incoming_message.call(null,msg_36423);

var G__36424 = seq__36414_36419;
var G__36425 = chunk__36415_36420;
var G__36426 = count__36416_36421;
var G__36427 = (i__36417_36422 + (1));
seq__36414_36419 = G__36424;
chunk__36415_36420 = G__36425;
count__36416_36421 = G__36426;
i__36417_36422 = G__36427;
continue;
} else {
var temp__4657__auto___36428 = cljs.core.seq.call(null,seq__36414_36419);
if(temp__4657__auto___36428){
var seq__36414_36429__$1 = temp__4657__auto___36428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36414_36429__$1)){
var c__28854__auto___36430 = cljs.core.chunk_first.call(null,seq__36414_36429__$1);
var G__36431 = cljs.core.chunk_rest.call(null,seq__36414_36429__$1);
var G__36432 = c__28854__auto___36430;
var G__36433 = cljs.core.count.call(null,c__28854__auto___36430);
var G__36434 = (0);
seq__36414_36419 = G__36431;
chunk__36415_36420 = G__36432;
count__36416_36421 = G__36433;
i__36417_36422 = G__36434;
continue;
} else {
var msg_36435 = cljs.core.first.call(null,seq__36414_36429__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36435);

var G__36436 = cljs.core.next.call(null,seq__36414_36429__$1);
var G__36437 = null;
var G__36438 = (0);
var G__36439 = (0);
seq__36414_36419 = G__36436;
chunk__36415_36420 = G__36437;
count__36416_36421 = G__36438;
i__36417_36422 = G__36439;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29193__auto__ = [];
var len__29186__auto___36444 = arguments.length;
var i__29187__auto___36445 = (0);
while(true){
if((i__29187__auto___36445 < len__29186__auto___36444)){
args__29193__auto__.push((arguments[i__29187__auto___36445]));

var G__36446 = (i__29187__auto___36445 + (1));
i__29187__auto___36445 = G__36446;
continue;
} else {
}
break;
}

var argseq__29194__auto__ = ((((0) < args__29193__auto__.length))?(new cljs.core.IndexedSeq(args__29193__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29194__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36441){
var map__36442 = p__36441;
var map__36442__$1 = ((((!((map__36442 == null)))?((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var opts = map__36442__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36440){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36440));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36447){if((e36447 instanceof Error)){
var e = e36447;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36447;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36448){
var map__36449 = p__36448;
var map__36449__$1 = ((((!((map__36449 == null)))?((((map__36449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36449):map__36449);
var msg_name = cljs.core.get.call(null,map__36449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521812299957
