# tmux

**tmux** is a screen manager for Unix.

#### Pros

- Can be helpful to split screens and add tabs to your terminal. 

#### Cons
- The shortcuts feel EMACS-ish
- Might be more convenient to just use *iTerm* split screen instead.


## Shortcuts

Key-binding | Action
---------- | ------ 
`ctrl-b "` | Split panes horizontal
`ctrl-b %` | Split window vertical in two panes
`ctrl-b arrows` | To move between panes
`ctrl-b z` | Toggles full-screen view
`ctrl-b c` | Create window
`ctrl-b ,` | Renames window
`ctrl-b number` | Hops to window
`ctrl-b d` | Dettaches session
`tmux  ls` | List sessions
`tmux attach -t 0` | To reattach session with name `0`
`tmux kill-session -t 0` | To kill session `0`
`ctrl-b :select-layout even-horizontal` | To resize equally the panes

