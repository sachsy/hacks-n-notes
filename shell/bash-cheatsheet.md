# Bash CheatSheet
Reference [Lynda.com - Up and running Bash Scripting](http://www.lynda.com/Bash-tutorials/Up-Running-Bash-Scripting/142989-2.htm)

## Basics

### Brace expansion

```bash
echo {1..10} # 1 2 3 4 5 6 7 8 9 10
echo {1..10..3} # 1 4 7 10
touch {file1, file2, file3}; ls # file1 file2 file3

touch file_{1..10}; ls # file1 file2 file3 ... file10
```
[top](#)

### Padding with zero
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
[top](#)

### Redirect
use `>`:
- `1` is stdout
- `2` is sterr
- `&` is stdout and sterr

[top](#)

### Search

`grep`

#### Enable color
`grep --color=auto jorge auth.log`

To enable it all the time use:
`export GREP_OPTIONS='--color=auto'`

#### Exclude directory

`grep -R --exclude-dir=node_modules 'some pattern' /path/to/search`

#### Include lines after the find
```
grep -A2 textToSearch jsx/
```

`-A2` will return the two lines after.
`-B2` will return the two previous lines.
`-C2` will return two lines before and after.

#### `awk` Command
This will print only the 12th word on every sentence:
```bash
grep -i break-in auth.log | awk {'print $12'}
```

Another useful command: `sed`

[top](#)

## Bash script syntax
To run like bash script.
```bash
#!/bin/bash
```
Comments
```bash
# comment
```

Use extension `.sh` for shell and bash files.

To run a bash file use:
`bash myscript.sh`

To make the script executable without the bash command use:
```bash
chmod +x myscript.sh
./myscript.sh
```

[top](#)

## Echo
To print empty line.
```bash
  echo
```
To print all as strings. Escape special characters with a `\`.
```bash
  greeting="hello"
  
  # No quotes
  echo $greeting, world \(planet\)!  # hello, world (planet)!
  
  # Single quotes
  echo '$greeting, world (planet)!'  # $greeting, world (planet)!
  
  # Double quotes
  echo "$greeting, world (planet)!"  # $hello, world (planet)!
  
  # Double quotes escaped variables
  echo "\$greeting, world (planet)!"  # $greeting, world (planet)!
```
[top](#)

## Variables

Must not have whitespaces next to the equal sign.

Call them with a `$`.

```bash
  a=Hello
  b="Good Morning"
  c=16
  
  echo $a
  echo $b
  echo $c
  
  echo "$b! I have $c apples."
```
[top](#)

### Special attributes
Declare vars with special attributes

```bash
  declare -i d=123        # d is an integer
  declare -r e=456        # e is read-only
  declare -l f="LOLCats"  # f is lolcats
  declare -u g="LOLCats"  # g is LOLCATS
```
[top](#)

### Special Variables

```bash
  echo $PWD # Returns current directory
  echo $HOME  # Returns home directory
  echo $MACHTYPE  # Returns machine type eg. Mac x86_64-apple-darwin12
  echo $HOSTNAME # Host name
  echo $BASH_VERSION
  echo $SECONDS # seconds of the session open
```

Run commands inside variables.
```bash
  a=$(pwd) 
  
  echo $a # current directory
```
[top](#)

## Arithmetic
To do arithmetic operations we need to wrap into `(( ))`.

:boom: Only integers are supported.

Operation | Operator
--------- | --------
Exponentiation | `$a ** $b`
Multiplication | `$a * $b`
Division | `$a / $b`
Modulo | `$a % $b`
Addition | `$a + $b`
Subtraction | `$a - $b`

```bash
  echo $((2+3)) # 5
  d=2
  e=$((d+2)) # 4
  ((e++)) # 5
  ((e+=4))
```
[top](#)

## Comparison operations

`[[ expression ]]` to run comparison expressions

Result is 
- `0`: TRUE
- `1`: FALSE

### Non-numeric comparison

The following work for non-numeric values:

Operation | Operator
--------- | --------
Less than | `[[ $a < $b ]]`
Greater than | `[[ $a > $b ]]`
Less than or equal to | `[[ $a <= $b ]]`
Greater than or equal to | `[[ $a >= $b ]]`
Equal | `[[ $a == $b ]]`
Not equal | `[[ $a != $b ]]`
 
Compare strings
```bash
#!/bin/bash
# this is a bash script
echo working with Comparison operators
[[ "cat" == "cat" ]]
echo $? 
# 0

```

[top](#)

### Integer comparison

For working with Integers use the following:

Operation | Operator
--------- | --------
Less than | `[[ $a -lt $b ]]`
Greater than | `[[ $a -gt $b ]]`
Less than or equal to | `[[ $a -le $b ]]`
Greater than or equal to | `[[ $a -ge $b ]]`
Equal | `[[ $a -eq $b ]]`
Not equal | `[[ $a -ne $b ]]`

Compare integers
```bash
[[ 10 -gt 2 ]]
echo $? 
# 0
```

[top](#)

### Logic Operators

Operation | Operator
--------- | --------
Logical AND | `[[ $a && $b ]]`
Logical OR | <code> [[ $a &#124;&#124; $b ]]</code>
Logical NOT | `[[ ! $a ]]`

[top](#)

### String Null Value

Operation | Operator
--------- | --------
String is null | `[[ -z $a ]]`.
String is not null | `[[ -n $a ]]`.

Check if string is null
```bash
echo is string null?
a=""
b="cat"
[[ -z $a ]]
echo $?
[[ -z $b ]]
echo $?
```

[top](#)

### File operators

Operator | Operation | Example
--------- | -------- | -------
`-L` | is symlink | `[[ -L $file ]]`
`-h` | is symlink | `[[ -h $file ]]`
`-d` | is directory | `[[ -d $file ]]`
`-e` | is archive | `[[ - $file ]]`
`-f` | is file | `[[ - $file ]]`
`-r` | is readable file | `[[ -r $file ]]`
`-w` | is writeable file | `[[ -w $file ]]`
`-x` | is executable file | `[[ -x $file ]]`
`-s` | is file size > 0 | `[[ -s $file ]]`

[More operators](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html)
 
[top](#)
 
## Working with Strings

### Concat strings

```bash
#!/bin/bash
# this is a bash script
echo Working with Strings
echo
echo Concat strings
a="hello"
b="world"
c=$a$b
echo $c # helloworld
```
[top](#)

### Length of strings

```bash
echo 'Length of strings use #'
echo ${#a} # 5
echo
```
[top](#)

### Substring

```bash
echo Get the substring 
d=${c:3} # specify the starting point for the substring
echo $d # loworld
``` 
[top](#)

#### With certain length

```bash
echo Get substring with certain length
e=${c:3:4} # in this case 4 is the length of the substring
echo $e # lowo
```
[top](#)

#### Starting from the end
```bash
echo Get substring starting from the end of the string
f=${c: -4} # get the last 4 chars of the string
echo $f # orld

echo Now get the first 3 letters of the last 4 letters
g=${c: -4:3} 
echo $g # orl
echo
```
[top](#)

### Replace string

```bash
echo Replace string
fruits="apple banana kiwi cherry"
echo ${fruits/banana/melon} # replace banana with melon
```
[top](#)

## Coloring and Styling text

### Styled text `tput`
`tput` is a command that allows styling and coloring text

#### Styles

Style | Command
--------- | --------
Foreground | `tput setaf [0-7]`
Background | `tput setab [0-7]`
No Style | `tput sgr0`
Bold | `tput bold`
Low Intensity | `tput dim`
Underline | `tput smul`
Blinking | `tput blink`
Reverse | `tput rev`

[top](#)

#### Colors

Color | setaf | setab
----- | ----- | -----
Black | `0` | `0`
Red | `1` | `1`
Green | `2` | `2`
Yellow | `3` | `3`
Blue | `4` | `4`
Magenta | `5` | `5`
Cyan | `6` | `6`
White | `7` | `7`

[top](#)

#### Example script

```bash
#!/bin/bash
# this is a bash script
echo 'Colors & Styles'
echo

flashred=$(tput setab 7; tput setaf 1; tput blink)
red=$(tput setaf 1)
none=$(tput sgr0)

echo $flashred"ERROR:"$none$red" Something went wrong."$none
```

:boom: To see a list of tput commands type `man terminfo`

[top](#)

## Date
Date is not part of bash but it ships with Unix

```bash
#!/bin/bash
# this is a bash script
echo 'DATE'
echo

echo 'Use the operator + to specify the date format'

date +"%d-%m-%Y" # 30-may-1980 (day month year)
date +"%H-%M-%S" # 20-40-24 (hour minutes seconds)
```

[top](#)

## Printf
It is like `echo` but with more features
Printf comes with Unix, not bash, so you can save it with `-v` to a variable and print it with `echo`.

```bash
#!/bin/bash
# this is a bash script
echo 'Printf'
echo

printf "Name:\t%s\nID:\t%04d\n" "Jorge" "27"
# Name:   Jorge
# ID:     0027

echo
echo

# %s and %04d indicate where to print the values Jorge and 27

today=$(date +"%d-%m-%Y")
time=$(date +"%H:%M:%S")

printf -v d "Current User:\t%s\nDate:\t\t%s @ %s\n" $USER $today $time
echo "$d"

# Current User: user
# Date:         20-03-2015 @ 10:23:42
```

[top](#)

## Arrays
Arrays don't need commas.
They are initialized with `()` and called with `[]`.

These arrays behave like JavaScript where the size is flexible.

```bash
#!/bin/bash
# This is a bash script
echo 'Arrays'
echo

a=()
b=("apples" "bananas" "lemons")
echo ${b[2]} # lemons

b[5]="kiwi"
echo ${b[@]} # apples bananas lemons kiwi

b+=("oranges") # add at the end of the array

echo ${b[@] : -1} # show the last element in the array

```

[top](#)

### Associative Arrays
This type of arrays is more like the object literals in JavaScript where the keys are strings instead of numbers.

```bash
#!/bin/bash
# This is a bash script
echo 'Associative Arrays'
echo

# NOTE: This just works for Bash version > 4.0
declare -A peopleAges
peopleAges[John]=50
peopleAges["John Wayne"]=79

echo ${peopleAges["John Wayne"]}

```
[top](#)

## Reading and writing text files

```bash
#!/bin/bash
# This is a bash script
echo 'Text Files'
echo

echo "Some Text" > file.txt # creates or overwrites file.txt with the string "Some Text"

echo "Add this text" >> file.txt # Appends the string to the end of file.txt

> file.txt  # empties file.txt

echo "Add this text" >> file.txt # Appends the string to the end of file.txt
echo "text2" >> file.txt 
echo "text3" >> file.txt 

# this loop reads each line in file.txt
while read f; do
	echo $f
done < file.txt

```
[top](#)

### Using a text file as an input for a command

ftp.txt
```bash
open mirrors.xmission.com
user anonymous nothinghere
ascii
cd gutenberg
get GUTINDEX.00
```

Using the file.txt as input
```bash
#!/bin/bash
# This is a bash script
echo 'Text File as input for a command'
echo

echo 'You can use cat to read a file'
cat < file.txt

echo
echo 'You can use any command and use input from a file.'

ftp -n < ftp.txt 
ls # you should see the GUTINDEX.00 file in your current directory 

```
[top](#)

## Here document
You can specify the start and end of an text as input to a command with a keyword.
In the following script you can see that it uses a text blob for cat and then another one for ftp.

 ```bash
 #!/bin/bash
# This is a bash script
echo 'Here documents'
echo
echo 'Using here document to know until when to print cat.'

cat << EndOfText
This is a 
multiline 
text string
EndOfText
# cat will use input until it sees EndOfText #

echo
echo 'Using tabs with the dash flag'

ftp -n <<- DoneWithTheUpdate
	open mirrors.xmission.com
	user anonymous nothinghere
	ascii
	cd gutenberg
	get GUTINDEX.01
	bye
DoneWithTheUpdate
# this marks the end of the input for the command ftp #

```
[top](#)
 
## The `if` statement

```bash
#!/bin/bash
# The if statement

echo 'if statement'

a=2000

if [ $a -gt 1000 ]
then
	echo $a is greater than 1000!
else
	echo $a is not greater than 1000
fi

```
[top](#)

### The `if` statement using regular expressions.

```bash

echo 'if statement using regular expressions'

s="This is 1 string!"

if [[ $s =~ [0-9]+ ]]; then     # Note the double square brackets are used because Regex also uses them.
	echo "There are some numbers in the string: $s"
else
	echo "There are no numbers in the string: $s"
fi

```

[top](#)

## The `while` loop

```bash
#!/bin/bash
# The while loop

i=0

while [ $i -le 9 ] ; do
	echo i:$i
	((i+=1))
done

# result
# i:0
# i:1
# i:2
# i:3
# i:4
# i:5
# i:6
# i:7
# i:8
# i:9

```
[top](#)


## The `until` loop

The oposite of the `while` loop.

```bash
# the Until loop

j=0
until [ $j -ge 10 ]; do
	echo j:$j
	((j+=1))
done

# result
# j:0
# j:1
# j:2
# j:3
# j:4
# j:5
# j:6
# j:7
# j:8
# j:9

```
[top](#)


## The `for` loop

```bash
for i in 1 2 3
do
	echo $i
done
```
[top](#)

### With brace expansion

```bash
for j in {1..20}
do
	echo $j
done
```
[top](#)

### Like in C languages

```bash
for (( i=1; i<=10; i++))
do
	echo $i
done
```
[top](#)

### Looping through an array

```bash
arr=("apple" "banana" "lemon")

for i in ${arr[@]}
do
	echo $i
done
```
[top](#)

### Use the output of a command

```bash
for i in $(ls)
do
	echo $i
done

```
[top](#)

## Switch case

```bash
#!/bin/bash 

a="dog"

case $a in
	cat) echo "Feline";;
	dog|puppy) echo "Canine";; # dog or puppy
	*) echo "No match!";;      # default case
esac

```

[top](#)

## Functions

```bash
#!/bin/bash
# Function

function greet {
	echo "Hello $1 good $2"
}

echo "And now meeting"
greet Jorge morning
 
You can exit the function with `return` or exit the script with `exit 0`
```
[top](#)

### With unspecified parameters

```bash
function listallthings {
	i=0
	for f in $@; do
		echo $i: $f
		((i+=1))
	done
}

listallthings $(ls)
```
[top](#)

## Arguments

Operator | meaning
-------- | -------
`$1` | First argument
`$@` | Array of all arguments
`$#` | Count of arguments

```bash
for i in $@; do
	echo $i
done

echo "there are $# arguments"
```
[top](#)

## Flags

The colon after the flag means that the flag is required.
The first colon means that any unknown flag will be passed too.
In the following case it says that the flags `u` and `p` are required. The `a` and `b` are optional.

```bash
#!/bin/bash
# Flags

while getopts :u:p:ab option; do
	case $option in
		u) user=$OPTARG;;
		p) pass=$OPTARG;;
		a) echo "Got the A flag";;
		b) echo "Got the B flag";;
		?) echo "Unknown flag";;
	esac
done

echo "User $user password $pass"

```
[top](#)

## Input during execution

[More flads for read command](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_08_02.html)

```bash
#!/bin/bash
echo "What is your name?"
read name

echo "What is your password?"
read -s pass  # -s is secret mode so it won't display the input

read -p "What is your favorite animal? " animal  # -p   allows to use inline input

echo name: $name pass: $pass animal: $animal

```

[top](#)

## Input with Select

Similar to HTML Select/option. It only accepts numbers as input.

```bash
#!/bin/bash
# Select

select option in "cat" "dog" "quit"
do
	case $option in
		cat) echo "Cats like to sleep";;
		dog) echo "Dogs like to play";;
		quit) break;;
		*) echo "Unknown command";;
	esac
done

```
[top](#)

## Ensuring a response

Patterns to ensure a response from the user

### Requiring a minimum of arguments

```bash
if [ $# -lt 3 ] ; then
	cat <<- EOM
	This command requires three arguments:
	username, userid and favorite number.
	EOM
else
	# the program goes here
	echo "Username: $1"
	echo "UserID: $2"
	echo "Favorite Number: $3"
fi

```

[top](#)

### Requiring an input

```bash
#!/bin/bash
# Ensuring - pattern 2

read -p "Favorite animal? " a

while [[ -z $a ]] ; do
	read -p "I need an answer! " a
done

echo "$a was selected"

```

[top](#)

### Validating input with regular expressions

```bash
#!/bin/bash
# Ensuring - pattern 3

read -p "What year? [nnnn] " a

while [[ ! $a =~ [0-9]{4} ]]; do
	read -p "A year, please! [nnnn] " a
done

echo "Selected year: $a"

```

[top](#)

## Import files

In this case we are importing config/colors.sh

```bash
source config/colors.sh
```

## Find directories
```bash
find / -type d -name 'httpdocs
```
The first parameter `/` is where to look 

`-name` could be `-iname` to ignore case

also `-type` is not mandatory
 


[top](#)

[Return to blog](https://github.com/vasco3/Blog/wiki)
