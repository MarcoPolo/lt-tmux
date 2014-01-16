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

lt.plugins.tmux.__BEH__send_to_tmux = (function __BEH__send_to_tmux(this$,data){var map__8038 = data;var map__8038__$1 = ((cljs.core.seq_QMARK_.call(null,map__8038))?cljs.core.apply.call(null,cljs.core.hash_map,map__8038):map__8038);var text = cljs.core.get.call(null,map__8038__$1,new cljs.core.Keyword(null,"text","text",1017460895));var obj = cljs.core.get.call(null,map__8038__$1,new cljs.core.Keyword(null,"obj","obj",1014014057));lt.plugins.tmux.set_tmux_buffer_BANG_.call(null,obj,text);
return lt.plugins.tmux.paste_tmux_buffer_BANG_.call(null,obj,cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":"));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__send_to_tmux,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),null], null), null));

lt.plugins.tmux.__BEH__change_session_id = (function __BEH__change_session_id(this$,session_id){return cljs.core.swap_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),session_id);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","change-session-id","lt.plugins.tmux/change-session-id",2141264181),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__change_session_id,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change!","change!",1752847843),null], null), null));

lt.plugins.tmux.input = (function input(this$){var e__7149__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"session-id","session-id",2675709732)], null),":")], null)], null));var seq__8045_8051 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){var me = this;return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"change!","change!",1752847843),lt.util.dom.val.call(null,me));
})], null)));var chunk__8046_8052 = null;var count__8047_8053 = 0;var i__8048_8054 = 0;while(true){
if((i__8048_8054 < count__8047_8053))
{var vec__8049_8055 = cljs.core._nth.call(null,chunk__8046_8052,i__8048_8054);var ev__7150__auto___8056 = cljs.core.nth.call(null,vec__8049_8055,0,null);var func__7151__auto___8057 = cljs.core.nth.call(null,vec__8049_8055,1,null);lt.util.dom.on.call(null,e__7149__auto__,ev__7150__auto___8056,func__7151__auto___8057);
{
var G__8058 = seq__8045_8051;
var G__8059 = chunk__8046_8052;
var G__8060 = count__8047_8053;
var G__8061 = (i__8048_8054 + 1);
seq__8045_8051 = G__8058;
chunk__8046_8052 = G__8059;
count__8047_8053 = G__8060;
i__8048_8054 = G__8061;
continue;
}
} else
{var temp__4092__auto___8062 = cljs.core.seq.call(null,seq__8045_8051);if(temp__4092__auto___8062)
{var seq__8045_8063__$1 = temp__4092__auto___8062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045_8063__$1))
{var c__6528__auto___8064 = cljs.core.chunk_first.call(null,seq__8045_8063__$1);{
var G__8065 = cljs.core.chunk_rest.call(null,seq__8045_8063__$1);
var G__8066 = c__6528__auto___8064;
var G__8067 = cljs.core.count.call(null,c__6528__auto___8064);
var G__8068 = 0;
seq__8045_8051 = G__8065;
chunk__8046_8052 = G__8066;
count__8047_8053 = G__8067;
i__8048_8054 = G__8068;
continue;
}
} else
{var vec__8050_8069 = cljs.core.first.call(null,seq__8045_8063__$1);var ev__7150__auto___8070 = cljs.core.nth.call(null,vec__8050_8069,0,null);var func__7151__auto___8071 = cljs.core.nth.call(null,vec__8050_8069,1,null);lt.util.dom.on.call(null,e__7149__auto__,ev__7150__auto___8070,func__7151__auto___8071);
{
var G__8072 = cljs.core.next.call(null,seq__8045_8063__$1);
var G__8073 = null;
var G__8074 = 0;
var G__8075 = 0;
seq__8045_8051 = G__8072;
chunk__8046_8052 = G__8073;
count__8047_8053 = G__8074;
i__8048_8054 = G__8075;
continue;
}
}
} else
{}
}
break;
}
return e__7149__auto__;
});

lt.plugins.tmux.__BEH__prompt_user_for_session_identifier = (function __BEH__prompt_user_for_session_identifier(this$,data){var read_input = (function read_input(popup){return lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(popup)));
});
lt.plugins.tmux.k_test = this$;
var popup = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"how you doing?",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"looking good!"], null),lt.plugins.tmux.input.call(null,this$)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"thanks!"], null)], null)], null));var input = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),lt.object.__GT_content.call(null,popup));lt.util.dom.focus.call(null,input);
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