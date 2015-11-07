## Diff

`git diff` allows you to compare different versions of a file against each other.

- On its own, `git diff` compares the working directory to the staged version of the file.
- `git diff --staged` compares the staged version to the most recent commited version.
- `git diff HEAD` combines the changes in your working and staged versions of the file, and compares them to the version of the file designated as HEAD (most often, the most recent commit).
- `git diff --color-words` displays a word-by-word comparision rather than a line-by-line comparison, helpful for small changes.

## Log

Viewing Project History

- `git log` provides a list of all of the commits on the current branch, with the most recent commit first. Up and down arrows navigate, enter cycles through log entries, and q quits log viewing screen.
- `git log --oneline` shows a smaller version of the log.
- `git log --oneline --graph` shows a graph of the changes along with the one-line log.
- `git log --oneline --graph --decorate` includes information about the branches and the head.
- `git log --oneline --graph --decorate --all` also includes unmerged branches.
- `git log --stat` tells you which files were included in each commit.
- `git log --patch` shows the actual changes that were made in each commit as diffs

## Keywords for closing issues

The following keywords will close an issue via commit message:

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved
