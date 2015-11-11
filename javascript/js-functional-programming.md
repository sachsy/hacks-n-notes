# Functional Programming

## Omit needless names

Functions have to get its input from the arguments to make them predictable. If they pull in data from other resources during their
process, then it becomes very difficult to mock those hidden inputs for testing.

http://output.jsbin.com/yoyip

```javascript
// Bad practice
function daysThisMonth () {
 var date  = new Date(),
    y     = date.getFullYear(),
    m     = date.getMonth(),
    start = new Date(y, m, 1),
    end   = new Date(y, m + 1, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}
// Good practice
function daysInMonth (y, m) {
  var start = new Date(y, m - 1, 1)
  , end = new Date(y, m, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}
```

## Separate mutation from calculation. 
Functions should be so specific that they can be easily unit tested without having to do complex mocks.

## Pure Functions

Functions that don't change anything, they just compute and return a result.
Characteristics:
- easy to unit test
- portable: can be used on client and on server
- memoizable: it caches the results so its faster the next time they run the function with the same input.
- parellalizable: you can run them in parallel with other functions since they won't mutate anything.
- The dependencies and inputs must be pure too, otherwise it will pollute the function. (eg. injecting a console through the arguments to be able to do console.log).

## Separate Functions from Rules

A function is a single-valued collection of pairs. For each input (domain) case there will be only one outcome (range) and will always be the same.

e.g.

domain | range
------ | -----
-2 | -1
0 | 0
2 | 1

### Arity

[Arity](https://en.wikipedia.org/wiki/Arity) - The ability to accept n amount of arguments. 
- Nullary
- Binary
- Ternary
- n-ary
- variable arity

## Currying

### Function to curry

```javascript
function curry(fn) {
 return function() {
  if(fn.length > arguments.length) {
   var slice = Array.prototype.slice;
   var args = slice.apply(arguments);
   return function() {
    return fn.apply(
     null, args.concat(slice.apply(arguments))
    );
   }
  }
  return fn.apply(null, arguments);
 };
}
```
[Ramda](http://ramdajs.com/) - Curry library way better than underscorejs or lowdashjs

### Curry example

```javascript
function curry(fn) {
 console.log('starting curry with', fn);
 return function () {
  if (fn.length > arguments.length) {
   console.log('if fn.l > a.l');
   var slice = Array.prototype.slice;
   var args = slice.apply(arguments);
   console.log('args');
   console.log(args);
   return function () {
    return fn.apply(
     null, args.concat(slice.apply(arguments)));
   }
  }
  
  console.log('arguments', arguments);
   return fn.apply(null, arguments);
 };
}

// We've got a nice multiply function.
// It takes two arguments.
function multiply(a, b) {
 console.log('multiplying', a, b);
 return a * b;
}

// But it has been secretly curried already 
// so we can feed it fewer arguments and it 
// will return a new function.
var curryMultiply = curry(multiply);

// How about making a function to double a 
// value? Done. 
var double = curryMultiply(2);

console.log(double(5)) // 10
```

### Easier currying

```javascript
// Example without currying
let dragons = [
 {name: 'fluffykins', element: 'lightning' },
 {name: 'noomi', element: 'lightning' },
 {name: 'karo', element: 'timewarp' },
 {name: 'doomer', element: 'fire' },
]

let hasElement = (element, obj) => obj.element === element;

let lightningDragons = dragons.filter(x => hasElement('lightning', x))

console.log(lightningDragons) 
// [ {name: 'fluffykins', element: 'lightning' }, {name: 'noomi', element: 'lightning' },]

// make it curryiable with lodash

import _ from 'lodash'

hasElement = _.curry((element, obj) => obj.element === element);

lightningDragons = dragons.filter(hasElement('lightning'));

console.log(lightningDragons) 
```

An example without lodash

```javascript
let dragon =
 name =>
  size =>
   element =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';
    
 let output = dragon('Karo')('large')('ice');
 
 console.log(output);
```

## Composition

Is like using unix pipe

## Point free

aka Argument free

## The real definition of MAP

Map is not limited to iteratable objects. Map is whenever a method gets applied inside the object.

## Functor

> An object or structure you can map over

If it has a map function, it is a functor

### Maybe Functor

```javascript
var _Maybe.prototype.map = function(f) {
 return this.val ? Maybe(f(this.val)) : Maybe(null);
};

map(capitalize, Maybe(null)); 
// => Maybe(null)

// eg

var firstMatch = compose(first, match(/cat/g));
firstMatch('dogsup); // breaks

// instead do
var firstMatch = compoase(map(first), Maybe, match(/cat/g));
firstMatch('dogsup); // => Maybe(null)
```

### Identity functor

It is the easiest functor. Just wraps a value in a container.

## Theories

### Category Theory

#### Category Laws

You need an identity function 

```
// Left identity
compose(id, f) == f

// Right identity
compose(f, id) == f

// Associativity
compose(compose(f, g), h) == compose(f, compose(g, h))


```

## High Order Functions

Are functions that accept other functions as arguments.

Eg. `[].filter()`

### Composition
When you pass another function to the high order function you are composing. Making a more complex function out of two simple functions. This is easier to reason about and to debug than having everything in a single function.

### Reduce is awesome

Array.reduce is not only to get the sum of an array of numbers. It can also be used to compose an object.

eg. set an object of customers coming from an array of lines

```javascript
const output = file
 .split('\n')
 .trim()
 .map(x => x.split('\t'))
 .reduce((customers, line) => {
   customers[line[0]] = customers[line[0]] || [];
   customers[line[0]].push({price: line[1]})
   return customers;
 }, {});
```

## Reference
- Hardcore Functional Programming - Frontend Masters
