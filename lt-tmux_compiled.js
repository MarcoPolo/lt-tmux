if(!lt.util.load.provided_QMARK_('lt.plugins.lt-tmux')) {
goog.provide('lt.plugins.lt_tmux');
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

lt.plugins.lt_tmux.read_selected = (function read_selected(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var selected = cm.getSelection();return selected;
});

/**
* Sets the tmux buffer using proc/exec, needs an obj to place the proccess under
*/
lt.plugins.lt_tmux.set_tmux_buffer_BANG_ = (function set_tmux_buffer_BANG_(obj,text){var text__$1 = ((cljs.core._EQ_.call(null,"\n",cljs.core.last.call(null,text)))?text:[cljs.core.str(text),cljs.core.str("\n")].join(''));return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"tmux",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-buffer",text__$1], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});

/**
* Paste the buffer to a tmux session, needs an obj to place the proccess under
*/
lt.plugins.lt_tmux.paste_tmux_buffer_BANG_ = (function() {
var paste_tmux_buffer_BANG_ = null;
var paste_tmux_buffer_BANG___1 = (function (obj){return lt.plugins.lt_tmux.paste_tmux_buffer.call(null,obj,":");
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

lt.plugins.lt_tmux.__BEH__on_out = (function __BEH__on_out(this$,data){return lt.objs.console.log.call(null,data);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","on-out","lt.plugins.lt-tmux/on-out",3617551898),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_tmux.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.lt_tmux.__BEH__send_to_tmux = (function __BEH__send_to_tmux(this$,data){var map__8381 = data;var map__8381__$1 = ((cljs.core.seq_QMARK_.call(null,map__8381))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);var text = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"text","text",1017460895));var obj = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"obj","obj",1014014057));lt.plugins.lt_tmux.set_tmux_buffer_BANG_.call(null,obj,text);
return lt.plugins.lt_tmux.paste_tmux_buffer_BANG_.call(null,obj,cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":"));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","send-to-tmux","lt.plugins.lt-tmux/send-to-tmux",4443122417),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_tmux.__BEH__send_to_tmux,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-tmux","send-to-tmux","lt.plugins.lt-tmux/send-to-tmux",4443122417),null], null), null));

lt.plugins.lt_tmux.__BEH__change_session_id = (function __BEH__change_session_id(this$,session_id){return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),session_id);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","change-session-id","lt.plugins.lt-tmux/change-session-id",2645709743),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_tmux.__BEH__change_session_id,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change!","change!",1752847843),null], null), null));

lt.plugins.lt_tmux.input = (function input(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":")], null)], null));var seq__8388_8394 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"change!","change!",1752847843),lt.util.dom.val.call(null,me));
})], null)));var chunk__8389_8395 = null;var count__8390_8396 = 0;var i__8391_8397 = 0;while(true){
if((i__8391_8397 < count__8390_8396))
{var vec__8392_8398 = cljs.core._nth.call(null,chunk__8389_8395,i__8391_8397);var ev__8082__auto___8399 = cljs.core.nth.call(null,vec__8392_8398,0,null);var func__8083__auto___8400 = cljs.core.nth.call(null,vec__8392_8398,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8399,func__8083__auto___8400);
{
var G__8401 = seq__8388_8394;
var G__8402 = chunk__8389_8395;
var G__8403 = count__8390_8396;
var G__8404 = (i__8391_8397 + 1);
seq__8388_8394 = G__8401;
chunk__8389_8395 = G__8402;
count__8390_8396 = G__8403;
i__8391_8397 = G__8404;
continue;
}
} else
{var temp__4092__auto___8405 = cljs.core.seq.call(null,seq__8388_8394);if(temp__4092__auto___8405)
{var seq__8388_8406__$1 = temp__4092__auto___8405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388_8406__$1))
{var c__7470__auto___8407 = cljs.core.chunk_first.call(null,seq__8388_8406__$1);{
var G__8408 = cljs.core.chunk_rest.call(null,seq__8388_8406__$1);
var G__8409 = c__7470__auto___8407;
var G__8410 = cljs.core.count.call(null,c__7470__auto___8407);
var G__8411 = 0;
seq__8388_8394 = G__8408;
chunk__8389_8395 = G__8409;
count__8390_8396 = G__8410;
i__8391_8397 = G__8411;
continue;
}
} else
{var vec__8393_8412 = cljs.core.first.call(null,seq__8388_8406__$1);var ev__8082__auto___8413 = cljs.core.nth.call(null,vec__8393_8412,0,null);var func__8083__auto___8414 = cljs.core.nth.call(null,vec__8393_8412,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8413,func__8083__auto___8414);
{
var G__8415 = cljs.core.next.call(null,seq__8388_8406__$1);
var G__8416 = null;
var G__8417 = 0;
var G__8418 = 0;
seq__8388_8394 = G__8415;
chunk__8389_8395 = G__8416;
count__8390_8396 = G__8417;
i__8391_8397 = G__8418;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.plugins.lt_tmux.__BEH__prompt_user_for_session_identifier = (function __BEH__prompt_user_for_session_identifier(this$,data){var read_input = (function read_input(popup){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(popup)));
});
lt.plugins.lt_tmux.k_test = this$;
var popup = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Specify your tmux session identifier",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"for example: mysession:mywindow.1.  If the pane index is omitted,\n                                                             the currently active pane in the specified window is used.  If neither a colon nor period\n                                                             appears, tmux first attempts to use the argument as a pane index; if that\n                                                             fails, it is looked up as for target-window.  A `+' or `-' indicate the\n                                                             next or previous pane index, respectively.  One of the strings top,\n                                                             bottom, left, right, top-left, top-right, bottom-left or bottom-right may\n                                                             be used instead of a pane index."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"The special characters `+' and `-' may be followed by an offset, for\n                                                           example:\n\n                                                                 select-window -t:+2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"If you aren't sure just put a colon, :"], null),lt.plugins.lt_tmux.input.call(null,this$)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Done"], null)], null)], null));var input = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),lt.object.__GT_content.call(null,popup));lt.util.dom.focus.call(null,input);
return input.select();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","prompt-user-for-session-identifier","lt.plugins.lt-tmux/prompt-user-for-session-identifier",4250892893),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_tmux.__BEH__prompt_user_for_session_identifier,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-tmux","prompt-session-identifier","lt.plugins.lt-tmux/prompt-session-identifier",4298600721),null], null), null));

lt.plugins.lt_tmux.__BEH__check_if_nil_session_id = (function __BEH__check_if_nil_session_id(this$,data){if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null))))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.lt-tmux","prompt-user-for-session-identifier","lt.plugins.lt-tmux/prompt-user-for-session-identifier",4250892893),null);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","check-if-nil-session-id","lt.plugins.lt-tmux/check-if-nil-session-id",3276172129),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_tmux.__BEH__check_if_nil_session_id,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-tmux","send-to-tmux","lt.plugins.lt-tmux/send-to-tmux",4443122417),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","lt-tmux","lt.plugins.lt-tmux/lt-tmux",4318360889),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-tmux","on-out","lt.plugins.lt-tmux/on-out",3617551898),new cljs.core.Keyword("lt.plugins.lt-tmux","send-to-tmux","lt.plugins.lt-tmux/send-to-tmux",4443122417),new cljs.core.Keyword("lt.plugins.lt-tmux","prompt-user-for-session-identifier","lt.plugins.lt-tmux/prompt-user-for-session-identifier",4250892893),new cljs.core.Keyword("lt.plugins.lt-tmux","check-if-nil-session-id","lt.plugins.lt-tmux/check-if-nil-session-id",3276172129),new cljs.core.Keyword("lt.plugins.lt-tmux","change-session-id","lt.plugins.lt-tmux/change-session-id",2645709743)], null));

lt.plugins.lt_tmux.lt_tmux = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-tmux","lt-tmux","lt.plugins.lt-tmux/lt-tmux",4318360889));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-tmux","send-selected-text-to-tmux","lt.plugins.lt-tmux/send-selected-text-to-tmux",750534019),new cljs.core.Keyword(null,"desc","desc",1016984067),"Send selected text to tmux",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.lt_tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.lt-tmux","send-to-tmux","lt.plugins.lt-tmux/send-to-tmux",4443122417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.lt_tmux.read_selected.call(null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.lt_tmux.lt_tmux], null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-tmux","reset-session-id","lt.plugins.lt-tmux/reset-session-id",2525570730),new cljs.core.Keyword(null,"desc","desc",1016984067),"Change the current session id",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.lt_tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.lt-tmux","prompt-session-identifier","lt.plugins.lt-tmux/prompt-session-identifier",4298600721),null);
})], null));

}

//# sourceMappingURL=