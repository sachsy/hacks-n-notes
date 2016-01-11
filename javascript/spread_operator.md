# Spread operator


Spreads an array into its individual values.

```javascript
var a = [1, 2];
var b = returnTwo(a[0], a[1]); // [2, 1]
var c = returnTwo(...a); // [2, 1]
```

## concat arrays with spread

```javascript
let nums = [1, 2, 3];
let abcs = ['a', 'b', 'c'];

let alphanum = [ ...nums, ...abs ]; // [1, 2, 3, 'a', 'b', 'c']
```
