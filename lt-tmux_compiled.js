if(!lt.util.load.provided_QMARK_('lt.plugins.tmux')) {
goog.provide('lt.plugins.tmux');
goog.require('cljs.core');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.proc');
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

lt.plugins.tmux.__BEH__inline_result = (function __BEH__inline_result(editor,res){var start_8187 = {"ch": 0, "line": 48};var end_8188 = {"ch": 18, "line": 48};lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),end_8188,new cljs.core.Keyword(null,"start-line","start-line",3689311729),start_8187], null));
return lt.objs.console.log.call(null,"Triggered this behavior",editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","inline-result","lt.plugins.tmux/inline-result",4611665175),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__inline_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","show-inline","lt.plugins.tmux/show-inline",3284538543),null], null), null));

lt.plugins.tmux.__BEH__on_out = (function __BEH__on_out(this$,data){lt.objs.console.log.call(null,"hey we got something");
lt.objs.console.log.call(null,data);
return lt.objs.console.log.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","on-out","lt.plugins.tmux/on-out",3448010118),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.tmux.__BEH__send_to_tmux = (function __BEH__send_to_tmux(this$,data){var map__8186 = data;var map__8186__$1 = ((cljs.core.seq_QMARK_.call(null,map__8186))?cljs.core.apply.call(null,cljs.core.hash_map,map__8186):map__8186);var text = cljs.core.get.call(null,map__8186__$1,new cljs.core.Keyword(null,"text","text",1017460895));var obj = cljs.core.get.call(null,map__8186__$1,new cljs.core.Keyword(null,"obj","obj",1014014057));lt.objs.console.log.call(null,[cljs.core.str("I'm going to send "),cljs.core.str(text),cljs.core.str(" to tmux")].join(''));
lt.plugins.tmux.set_tmux_buffer_BANG_.call(null,obj,text);
return lt.plugins.tmux.paste_tmux_buffer_BANG_.call(null,obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tmux.__BEH__send_to_tmux,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tmux","lt-tmux","lt.plugins.tmux/lt-tmux",3824284455),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.tmux","inline-result","lt.plugins.tmux/inline-result",4611665175),new cljs.core.Keyword("lt.plugins.tmux","on-out","lt.plugins.tmux/on-out",3448010118),new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839)], null));

lt.plugins.tmux.lt_tmux = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tmux","lt-tmux","lt.plugins.tmux/lt-tmux",3824284455));

lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"stay classy",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),42,new cljs.core.Keyword(null,"start-line","start-line",3689311729),42], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tmux","print-line-text","lt.plugins.tmux/print-line-text",4488312716),new cljs.core.Keyword(null,"desc","desc",1016984067),"Prints the current line to the console",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.console.log.call(null,lt.plugins.tmux.read_selected.call(null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tmux","trigger-inline","lt.plugins.tmux/trigger-inline",3516997524),new cljs.core.Keyword(null,"desc","desc",1016984067),"triggers lt-tmux inline",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.tmux","show-inline","lt.plugins.tmux/show-inline",3284538543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),"stay classy"], null));
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tmux","send-selected-text-to-tmux","lt.plugins.tmux/send-selected-text-to-tmux",1414204129),new cljs.core.Keyword(null,"desc","desc",1016984067),"Send selected text to tmux",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.tmux.lt_tmux,new cljs.core.Keyword("lt.plugins.tmux","send-to-tmux","lt.plugins.tmux/send-to-tmux",4030873839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.tmux.read_selected.call(null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.tmux.lt_tmux], null));
})], null));


}

//# sourceMappingURL=