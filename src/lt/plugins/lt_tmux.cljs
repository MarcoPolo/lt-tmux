(ns lt.plugins.tmux
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.console :as console]
            [lt.object :as object]
            [lt.objs.proc :as proc]
            [lt.objs.popup :as popup]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

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

(behavior ::inline-result
          :triggers #{::show-inline}
          :reaction (fn [editor res]
                      (let [start #js {:line 48 :ch 0}
                            end  #js {:line 48 :ch 18}]
                        (object/raise editor :editor.result (:result res) {:line end
                                                                           :start-line start}))
                      (console/log "Triggered this behavior" editor res)))

(behavior ::on-out
           :triggers #{:proc.out}
           :reaction (fn [this data]
                       (console/log "hey we got something")
                       (console/log data)
                       (console/log this)))

(behavior ::send-to-tmux
          :triggers #{::send-to-tmux}
          :reaction (fn [this data]
                      (let [{:keys [obj text]} data]
                        (console/log (str "I'm going to send " text " to tmux"))
                        (set-tmux-buffer! obj text)
                        (paste-tmux-buffer! obj))))

(object/object* ::lt-tmux
                :triggers []
                :behaviors [::inline-result ::on-out ::send-to-tmux])

(def lt-tmux (object/create ::lt-tmux))

(object/raise (pool/last-active) :editor.result "stay classy" {:line 42 :start-line 42})


(cmd/command {:command ::print-line-text
              :desc "Prints the current line to the console"
              :exec #(console/log (read-selected))})

(cmd/command {:command ::trigger-inline
              :desc "triggers lt-tmux inline"
              :exec (fn []
                      (object/raise lt-tmux ::show-inline {:result "stay classy"}) )})

(cmd/command {:command ::send-selected-text-to-tmux
              :desc "Send selected text to tmux"
              :exec (fn []
                      (object/raise lt-tmux ::send-to-tmux {:text (read-selected)
                                                            :obj lt-tmux}))})

(defn prompt-for-session-identifier!
  "Prompts the user for an alternate session session identifer"
  [obj]
  )

(comment

  (proc/exec {:command "tmux"
              :args ["set-buffer" "pwd\n"]
              :obj tslime})

  (proc/exec {:command "tmux"
              :args ["paste-buffer" "-t" ":"]
              :obj tslime})

  (set-tmux-buffer! lt-tmux "pwd")
  (paste-tmux-buffer! lt-tmux)

  pwd
  ls

  (= "\n" (last "pwd\n"))

  (def popup
    @(popup/popup! {:header "how you doing?"
                    :body [:span
                           [:p "looking good!"]
                           [:input {:type :text :placeholder ":"}]]
                    :buttons [{:label "thanks!"}]}))

    (dom/val (dom/$ :input (:content popup)))
  popup

  )
