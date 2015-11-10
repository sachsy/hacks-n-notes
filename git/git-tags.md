# Git tags

## Listing Your Tags

- `git tag` will list all the tags in the repo
- `git tag -l 'v1.8.5*'` will use the wild card to list only the matches

## Creating Tags

### Types

- **lightweight tag:** is very much like a branch that doesn’t change – it’s just a pointer to a specific commit.
- **annotated tag:** are stored as full objects in the Git database. (recommended)

#### Lightweight tags

To create a lightweight tag, don’t supply the `-a`, `-s`, or `-m` option.
This is basically the commit checksum stored in a file – no other information is kept.

#### Annotated tags

They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG).

- You need to use `-a` flag eg. `git tag -a v1.4 -m 'my version 1.4'`

You can see the tag data along with the commit that was tagged by using the git `show` command:
eg. `git show v1.4`

That shows:
- the tagger information
- the date the commit was tagged
- the annotation message before showing the commit information.

### Tagging Later

Just add the commit hash at the end.





