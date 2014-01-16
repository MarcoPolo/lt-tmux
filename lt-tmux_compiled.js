if(!lt.util.load.provided_QMARK_('lt.plugins.tmux')) {
goog.provide('lt.plugins.tmux');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.tmux.read_selected = (function read_selected(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var selected = cm.getSelection();return selected;
});

/**
* Sets the tmux buffer using proc/exec, needs an obj to place the proccess under
*/
lt.plugins.tmux.set_tmux_buffer_BANG_ = (function set_tmux_buffer_BANG_(obj,text){var text__$1 = ((cljs.core._EQ_.call(null,"\n",cljs.core.last.call(null,text)))?text:[cljs.core.str(text),cljs.core.str("\n")].join(''));return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"tmux",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-buffer",text__$1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});

/**
* Paste the buffer to a tmux session, needs an obj to place the proccess under
*/
lt.plugins.tmux.paste_tmux_buffer_BANG_ = (function() {
var paste_tmux_buffer_BANG_ = null;
var paste_tmux_buffer_BANG___1 = (function (obj){return lt.plugins.tmux.paste_tmux_buffer.call(null,obj,":");
});
var paste_tmux_buffer_BANG___2 = (function (obj,session_identifier_str){return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"tmux",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paste-buffer","-t",session_identifier_str], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
paste_tmux_buffer_BANG_ = function(obj,session_identifier_str){
switch(arguments.length){
case 1:
return paste_tmux_buffer_BANG___1.call(this,obj);
case 2:
return paste_tmux_buffer_BANG___2.call(this,obj,session_identifier_str);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
paste_tmux_buffer_BANG_.cljs$core$IFn$_invoke$arity$1 = paste_tmux_buffer_BANG___1;
paste_tmux_buffer_BANG_.cljs$core$IFn$_invoke$arity$2 = paste_tmux_buffer_BANG___2;
return paste_tmux_buffer_BANG_;
})()
;

lt.plugins.tmux.__BEH__on_out = (function __BEH__on_out(this$,data){return lt.objs.console.log.call(null,data);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","on-out","lt.plugins.tmux/on-out",3448010118),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.tmux.__BEH__send_to_tmux = (function __BEH__send_to_tmux(this$,data){var map__7365 = data;var map__7365__$1 = ((cljs.core.seq_QMARK_.call(null,map__7365))?cljs.core.apply.call(null,cljs.core.hash_map,map__7365):map__7365);var text = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"text","text",1017460895));var obj = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"obj","obj",1014014057));lt.plugins.tmux.set_tmux_buffer_BANG_.call(null,obj,text);
return lt.plugins.tmux.paste_tmux_buffer_BANG_.call(null,obj,cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":"));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__send_to_tmux,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),null], null), null));

lt.plugins.tmux.__BEH__change_session_id = (function __BEH__change_session_id(this$,session_id){return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),session_id);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","change-session-id","lt.plugins.tmux/change-session-id",2141264181),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__change_session_id,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change!","change!",1752847843),null], null), null));

lt.plugins.tmux.input = (function input(this$){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":")], null)], null));var seq__7372_7378 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"change!","change!",1752847843),lt.util.dom.val.call(null,me));
})], null)));var chunk__7373_7379 = null;var count__7374_7380 = 0;var i__7375_7381 = 0;while(true){
if((i__7375_7381 < count__7374_7380))
{var vec__7376_7382 = cljs.core._nth.call(null,chunk__7373_7379,i__7375_7381);var ev__7140__auto___7383 = cljs.core.nth.call(null,vec__7376_7382,0,null);var func__7141__auto___7384 = cljs.core.nth.call(null,vec__7376_7382,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7383,func__7141__auto___7384);
{
var G__7385 = seq__7372_7378;
var G__7386 = chunk__7373_7379;
var G__7387 = count__7374_7380;
var G__7388 = (i__7375_7381 + 1);
seq__7372_7378 = G__7385;
chunk__7373_7379 = G__7386;
count__7374_7380 = G__7387;
i__7375_7381 = G__7388;
continue;
}
} else
{var temp__4092__auto___7389 = cljs.core.seq.call(null,seq__7372_7378);if(temp__4092__auto___7389)
{var seq__7372_7390__$1 = temp__4092__auto___7389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7372_7390__$1))
{var c__6528__auto___7391 = cljs.core.chunk_first.call(null,seq__7372_7390__$1);{
var G__7392 = cljs.core.chunk_rest.call(null,seq__7372_7390__$1);
var G__7393 = c__6528__auto___7391;
var G__7394 = cljs.core.count.call(null,c__6528__auto___7391);
var G__7395 = 0;
seq__7372_7378 = G__7392;
chunk__7373_7379 = G__7393;
count__7374_7380 = G__7394;
i__7375_7381 = G__7395;
continue;
}
} else
{var vec__7377_7396 = cljs.core.first.call(null,seq__7372_7390__$1);var ev__7140__auto___7397 = cljs.core.nth.call(null,vec__7377_7396,0,null);var func__7141__auto___7398 = cljs.core.nth.call(null,vec__7377_7396,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7397,func__7141__auto___7398);
{
var G__7399 = cljs.core.next.call(null,seq__7372_7390__$1);
var G__7400 = null;
var G__7401 = 0;
var G__7402 = 0;
seq__7372_7378 = G__7399;
chunk__7373_7379 = G__7400;
count__7374_7380 = G__7401;
i__7375_7381 = G__7402;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.tmux.__BEH__prompt_user_for_session_identifier = (function __BEH__prompt_user_for_session_identifier(this$,data){var read_input = (function read_input(popup){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(popup)));
});
lt.plugins.tmux.k_test = this$;
var popup = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Specify your tmux session identifier",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"for example: mysession:mywindow.1.  If the pane index is omitted,\n                                                             the currently active pane in the specified window is used.  If neither a colon nor period\n                                                             appears, tmux first attempts to use the argument as a pane index; if that\n                                                             fails, it is looked up as for target-window.  A `+' or `-' indicate the\n                                                             next or previous pane index, respectively.  One of the strings top,\n                                                             bottom, left, right, top-left, top-right, bottom-left or bottom-right may\n                                                             be used instead of a pane index."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"The special characters `+' and `-' may be followed by an offset, for\n                                                           example:\n\n                                                                 select-window -t:+2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"If you aren't sure just put a colon, :"], null),lt.plugins.tmux.input.call(null,this$)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));var input = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),lt.object.__GT_content.call(null,popup));lt.util.dom.focus.call(null,input);
return input.select();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","prompt-user-for-session-identifier","lt.plugins.tmux/prompt-user-for-session-identifier",2683785283),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__prompt_user_for_session_identifier,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","prompt-session-identifier","lt.plugins.tmux/prompt-session-identifier",3810293903),null], null), null));

lt.plugins.tmux.__BEH__check_if_nil_session_id = (function __BEH__check_if_nil_session_id(this$,data){if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null))))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.tmux","prompt-user-for-session-identifier","lt.plugins.tmux/prompt-user-for-session-identifier",2683785283),null);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","check-if-nil-session-id","lt.plugins.tmux/check-if-nil-session-id",3117220159),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__check_if_nil_session_id,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","lt-tmux","lt.plugins.tmux/lt-tmux",3824284455),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.tmux","on-out","lt.plugins.tmux/on-out",3448010118),new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.Keyword("lt.plugins.tmux","prompt-user-for-session-identifier","lt.plugins.tmux/prompt-user-for-session-identifier",2683785283),new cljs.core.Keyword("lt.plugins.tmux","check-if-nil-session-id","lt.plugins.tmux/check-if-nil-session-id",3117220159),new cljs.core.Keyword("lt.plugins.tmux","change-session-id","lt.plugins.tmux/change-session-id",2141264181)], null));

lt.plugins.tmux.lt_tmux = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tmux","lt-tmux","lt.plugins.tmux/lt-tmux",3824284455));

lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"stay classy",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),42,new cljs.core.Keyword(null,"start-line","start-line",3689311729),42], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tmux","send-selected-text-to-tmux","lt.plugins.tmux/send-selected-text-to-tmux",1414204129),new cljs.core.Keyword(null,"desc","desc",1016984067),"Send selected text to tmux",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.tmux.read_selected.call(null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.tmux.lt_tmux], null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tmux","reset-session-id","lt.plugins.tmux/reset-session-id",2323522614),new cljs.core.Keyword(null,"desc","desc",1016984067),"Change the current session id",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.tmux","prompt-session-identifier","lt.plugins.tmux/prompt-session-identifier",3810293903),null);
})], null));


}

//# sourceMappingURL=