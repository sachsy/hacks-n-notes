# Git tags

## Listing Your Tags

- `git tag` will list all the tags in the repo
- `git tag -l 'v1.8.5*'` will use the wild card to list only the matches

## Creating Tags

### Types

- **lightweight tag:** is very much like a branch that doesn’t change – it’s just a pointer to a specific commit.
- **annotated tag:** are stored as full objects in the Git database.

#### Annotated tags

They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG).

