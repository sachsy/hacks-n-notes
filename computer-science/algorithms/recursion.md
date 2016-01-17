# Recursion

Recursive algorithms call themselves indefinite times until they finish.

1. Each recursive call should be a smaller instance of the same problem.
2. The recursive calls must eventually reach a base case, which is solved without further recursion.

## Factorial function

A *factorial* is the product of the integers 1 through $$n$$.

For example: $$5! = 1 * 2 * 3 * 4 * 5 = 120$$

It is useful to calculate the amount of different combinations of a set. Specially useful when doing *permutations and combinations*.

### Iterative factorial

```javascript
var factorial = function(n) {
    var result = 1;
    
    for(var i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};
```

### Recursive factorial

We don't need to run a loop.

```javascript
var factorial = function(n) {
	// base case: 
	if (n === 0) {
	    return 1;
	}
	
	// recursive case:
	if (n > 1) {
	    return n * factorial(n - 1);    
	}
	
	return 1;
};
```

## Palindromes

> A *palindrome* is a word that it is spelled the same forward than backward. For example "*ROTOR*"

### Pseudo-code

1. If string has no letters or just one letter then it is a palindrome.
2. Otherwise, compare first and last letters of the string. If they differ it is not a palindrome.
3. Keep doing the same until you end up with one letter or 0

### Implementation

```javascript
// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true; 
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) { 
        return false; 
    }
    // recursive case
    return (firstCharacter(str) === lastCharacter(str)) && isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);

```

