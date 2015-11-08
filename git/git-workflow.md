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
- `git checkout --<filename>` is the syntax. The `--` lets Git know you're talking about a file. This will revert the file to the version found in the last commit.

### Unstaging Files

`git reset HEAD <filename>` will remove a file from the staging area, putting it back in your working directory.

### Git Reset Modes

The three modes for git reset are: `--soft`, `--mixed`, and `--hard`.

- `git revert` reverts a specific commit. `git reset` resets git to a specific commit.
- `git reset --soft <to_commit>` resets git to a specific commit, and puts the commits you're resetting into the staging area where they can be easily re-committed.
- `git reset --mixed <to_commit>` resets git to a specific commit, and puts the commits you're resetting into the working directory so you can edit them directly.
- `git reset --hard <to_commit>` resets git to a specific commit, and deletes the commits you're resetting.
- Just like with git revert you can use the commit ID, or you can use the syntax `HEAD~<mumber>`. The number you put will be the number of commits backwards from the current HEAD that git will move the new HEAD to.
 
##### TIP

```
git reset --soft HEAD~2 # indicates you want to go back two commits.
```

Then if you recommit these changes you will stage the commits, leaving a cleaner history.


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
