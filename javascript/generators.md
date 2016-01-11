# Generators

Generators are functions which can be exited and later re-entered. Useful for long iteration functions, so they can be paused to prevent blocking other functions for too long.

## Basic Syntax

```javascript
function* myGen() { }
// or 
function *myGen() { }

```

## Yield
```javascript
function *three() {
  yield 1;
  yield 2;
  return 3;
}

var geni = three(); // starts the generator but doesn't run it
geni.next(); // runs the function for one iteration. Returns { value: 1, done: false }
geni.next(); // Returns { value: 2, done: false }
geni.next(); // Returns { value: 3, done: true }. This ends the generator. 
geni.next(); // Returns { value: undefined, done: true }
```

## Iterating on Generators
It iterates while done = false.
```javascript
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (var v of foo()) {
  console.log(v);
}
// Logs 1, 2, 3, 4, 5
```

## Generator with arguments

```javascript
function *foo(x) {
  var y = 2 * (yield (x + 1)); 
  var z = yield (y / 3);
  return (x + y + z); // 5 + 24 + 13
}

var genit = foo(5);

console.log(genit.next()); // { value: 6, done: false }
console.log(genit.next(12)); // { value: 8, done: false }
console.log(genit.next(13)); // { value: 42, done: true }
```
