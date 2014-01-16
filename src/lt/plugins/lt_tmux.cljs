(ns lt.plugins.tmux
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.objs.proc :as proc]
            [lt.objs.popup :as popup]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.util.js :refer [wait]]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn read-selected []
  (let [cm (editor/->cm-ed (pool/last-active))
        selected (.getSelection cm)]
    selected))

(defn set-tmux-buffer!
  "Sets the tmux buffer using proc/exec, needs an obj to place the proccess under"
  [obj text]
    (let [text (if (= "\n" (last text)) text (str text "\n"))]
      (proc/exec {:command "tmux"
                :args ["set-buffer" text]
                :obj obj})))

(defn paste-tmux-buffer!
  "Paste the buffer to a tmux session, needs an obj to place the proccess under"
  ([obj session-identifier-str]
   (proc/exec {:command "tmux"
               :args ["paste-buffer" "-t" session-identifier-str]
               :obj obj}))
  ([obj]
   (paste-tmux-buffer obj ":")))

(behavior ::on-out
           :triggers #{:proc.out}
           :reaction (fn [this data]
                       (console/log data)))

(behavior ::send-to-tmux
          :triggers #{::send-to-tmux}
          :reaction (fn [this data]
                      (let [{:keys [obj text]} data]
                        (set-tmux-buffer! obj text)
                        (paste-tmux-buffer! obj (get-in @this [:content :session-id] ":")))))

(behavior ::change-session-id
          :triggers #{:change!}
          :reaction (fn [this session-id]
                      (swap! this assoc-in [:content :session-id] session-id)))

(defui input [this]
  [:input {:type :text :placeholder (get-in @this [:content :session-id] ":")}]
  :keyup (fn [e]
           (this-as me
                    (object/raise this :change! (dom/val me)))))


(behavior ::prompt-user-for-session-identifier
          :triggers #{::prompt-session-identifier}
          :reaction (fn [this data]
                      (letfn [(read-input [popup] (dom/val (dom/$ :input (:content popup))))]
                        (def k-test this)
                        (let [popup (popup/popup! {:header "how you doing?"
                                                    :body [:span
                                                           [:p "looking good!"]
                                                           (input this)]
                                                    :buttons [{:label "thanks!"}]})
                              input (dom/$ :input (object/->content popup))]
                          (dom/focus input)
                          (.select input)))))

(behavior ::check-if-nil-session-id
         :triggers #{::send-to-tmux}
         :reaction (fn [this data]
                     (when-not (get-in @this [:content :session-id])
                       (object/raise this ::prompt-user-for-session-identifier nil))))

(object/object* ::lt-tmux
                :triggers []
                :behaviors [::on-out ::send-to-tmux ::prompt-user-for-session-identifier ::check-if-nil-session-id ::change-session-id])

(def lt-tmux (object/create ::lt-tmux))

(object/raise (pool/last-active) :editor.result "stay classy" {:line 42 :start-line 42})


(cmd/command {:command ::send-selected-text-to-tmux
              :desc "Send selected text to tmux"
              :exec (fn []
                      (object/raise lt-tmux ::send-to-tmux {:text (read-selected)
                                                            :obj lt-tmux}))})
(cmd/command {:command ::reset-session-id
              :desc "Change the current session id"
              :exec (fn []
                      (object/raise lt-tmux ::prompt-session-identifier nil))})

(comment
  (get-in @lt-tmux [:content :session-id] ":")
  )