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


