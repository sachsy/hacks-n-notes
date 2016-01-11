# Destructuring arrays



```javascript
var nums = [1, 2, 3, 4, 5];

var [first, second,,,,fifth] = nums;
log(first, second, fifth); // 1, 2, 5
```

### Swapping variables
how to swap variables without using a temp var
```javascript
var a = 1, b = 2;

// The Old Way
var temp = a, a = b, b = tmep;

// The New Way
[b, a] = [a, b];
```

### Method signature
```javascript
var nums = [1, 2, 3, 4];
doSomething(nums);

function doSomething([first, second, ...others]){
  log(first);   //logs 1
  log(second);  //logs 2
  log(others);  //logs [3, 4]
}
```

### Nested Destructuring Array
```javascript
var nums = [1, 2, [30, 40, [500, 600]]];

var [one,,[thirty,,[,sixhundert]]] = nums;
```

### Pattern Errors
```javascript
let [x] = [2, 3]    // x = 2
let [x] = {'0': 4}  // x = 4
let [x, y, z] = [1, 2]  // throw
```

### Refutable
```javascript
// Entire Pattern is Refutable
let ?[x, y, z] = [1, 2]  // x = 1, y = 2, z = undefined

// Only 'z' is Refutable
let [x, y, ?z] = [1, 2]  // z = 1, y = 2, z = undefined
```
