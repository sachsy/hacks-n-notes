## Diff

`git diff` allows you to compare different versions of a file against each other.

- On its own, `git diff` compares the working directory to the staged version of the file.
- `git diff --staged` compares the staged version to the most recent commited version.
- `git diff HEAD` combines the changes in your working and staged versions of the file, and compares them to the version of the file designated as HEAD (most often, the most recent commit).
- `git diff --color-words` displays a word-by-word comparision rather than a line-by-line comparison, helpful for small changes.

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
