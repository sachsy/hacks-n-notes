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

## Undo

- `git revert <commit_hash>` to revert your last commit
- `git commit -amend` to fix the last commit's message or add more files to that commit.

### Unstaging Files

`git reset HEAD <filename>` will remove a file from the staging area, putting it back in your working directory.

### Git Reset Modes

The three modes for git reset are: `--soft`, `--mixed`, and `--hard`. For these examples, assume that we have a "clean" working directory, i.e. there are no uncommited changes.

#### Soft

`git reset --soft <my-branch> <other-commit>` moves `<my-branch>` to point at `<other-commit>`. However, the working directory and staging area remain untouched. Since the snapshot that `<my-branch>` points to now differs from the index's snapshot, this command effectively stages all differences between those snapshots. This is a good command to use when you have made a large number of small commits and you would like to regroup them into a single commit.

```
git reset --soft HEAD~2 # indicates you want to go back two commits.
```

Then if you recommit these changes you will stage the commits, leaving a cleaner history.

#### Mixed (default)

With the `--mixed` option, Git makes `<my-branch>` and the staging area look like the `<other-commit>` snapshot. This is the default mode: if you don't include a mode flag, Git will assume you want `--mixed`. `--mixed` is useful if you want to keep all of your changes in the working directory, but change whether and how you commit those changes.

#### Hard
`--hard` is the most drastic option. With this, Git will now make all 3 snapshots -- , the staging area, and your working directory -- look like they did at `<other-commit>`. This can be dangerous! We've assumed so far that our working directory is clean. If it is not, and you have uncommited changes, `git reset --hard` will delete all of those changes. Even with a clean working directory, use `--hard` only if you're sure you want to completely undo earlier changes.



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
