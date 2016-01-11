# Basics

## Brace expansion

```bash
echo {1..10} # 1 2 3 4 5 6 7 8 9 10
echo {1..10..3} # 1 4 7 10
touch {file1, file2, file3}; ls # file1 file2 file3

touch file_{1..10}; ls # file1 file2 file3 ... file10
```

## Padding with zero
```bash
touch file_{01..100}; ls # file01 file02 .. file100 
```
```bash
ls -l | wc -l  # wordcount all the files
```

`more` is `cat` with pagination.
```bash
ls -l | more
```

## Redirect

use `>`:
- `1` is stdout
- `2` is sterr
- `&` is stdout and sterr


## Search

`grep`

### Enable color
`grep --color=auto jorge auth.log`

To enable it all the time use:
`export GREP_OPTIONS='--color=auto'`

### Exclude directory

`grep -R --exclude-dir=node_modules 'some pattern' /path/to/search`

### Include lines after the find
```
grep -A2 textToSearch jsx/
```

`-A2` will return the two lines after.
`-B2` will return the two previous lines.
`-C2` will return two lines before and after.

### `awk` Command
This will print only the 12th word on every sentence:
```bash
grep -i break-in auth.log | awk {'print $12'}
```

Another useful command: `sed`

