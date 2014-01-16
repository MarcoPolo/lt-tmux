# lt-tmux

A plugin for lighttable that allows arbitrary text to be sent
to a tmux session

# Usage

Simply highlight text and run the command `Send selected text to tmux`.

For maximum awesome, consider adding the following to your user keymap:
```clojure
  :editor.shell {"pmeta-enter" [:lt.plugins.tmux/send-selected-text-to-tmux]}
```

Which will give you an eval ability inside shell files.

You can essentially eval anything that has a REPL/interpreter on the commandline: sql, matlab, etc...

# Configuration

By default the target is ":" which is the last active tmux session (I think).
If you need to change it just use the `Change the current session id` command.

# Contributing
Please