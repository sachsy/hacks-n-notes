<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [FrontEnd Masters - ES6 notes](#frontend-masters---es6-notes)
  - [Proper Tail Call (PTC)](#proper-tail-call-ptc)
  - [Function Hoisting](#function-hoisting)
  - [Variables](#variables)
    - [Temporal Dead Zone](#temporal-dead-zone)
  - [Rest Parameters](#rest-parameters)
    - [rules](#rules)
  - [Spread Operator](#spread-operator)
    - [concat arrays with spread](#concat-arrays-with-spread)
  - [Descructuring](#descructuring)
    - [Alias](#alias)
    - [Simpler way](#simpler-way)
    - [Default values](#default-values)
    - [Irrefutable pattern](#irrefutable-pattern)
    - [All patterns](#all-patterns)
    - [Patterns w/ Default Values](#patterns-w-default-values)
    - [Patterns - Nested](#patterns---nested)
  - [Destructuring Arrays](#destructuring-arrays)
    - [Swapping variables](#swapping-variables)
    - [Method signature](#method-signature)
    - [Nested Destructuring Array](#nested-destructuring-array)
    - [Pattern Errors](#pattern-errors)
    - [Refutable](#refutable)
  - [Arrow Functions](#arrow-functions)
    - [Parenthesis-Parameter Rules](#parenthesis-parameter-rules)
    - [REAL benefit: lexical binding of 'this'](#real-benefit-lexical-binding-of-this)
  - [Classes](#classes)
    - [Classes gotchas](#classes-gotchas)
    - [Extend classes](#extend-classes)
  - [Collections](#collections)
    - [SET](#set)
    - [MAP](#map)
      - [Objects as keys](#objects-as-keys)
    - [WEAKMAP](#weakmap)
  - [Modules](#modules)
    - [Default export](#default-export)
    - [Multiple exports.](#multiple-exports)
    - [Export as](#export-as)
    - [Cyclical Dependencies](#cyclical-dependencies)
    - [More importing](#more-importing)
    - [More Exporting](#more-exporting)
    - [Re-exporting](#re-exporting)
  - [Modules - Programatic Loading API](#modules---programatic-loading-api)
    - [System.import API](#systemimport-api)
      - [Load All](#load-all)
    - [System "Module" functions](#system-module-functions)
    - [Module HTML Tag](#module-html-tag)
  - [Promises](#promises)
    - [Promise Constructor](#promise-constructor)
    - [Promise Instance](#promise-instance)
    - [Catch](#catch)
    - [All](#all)
    - [Static Promise Methods](#static-promise-methods)
  - [Generators](#generators)
    - [Basic Syntax](#basic-syntax)
    - [Yield](#yield)
    - [Iterating on Generators](#iterating-on-generators)
    - [Generator with arguments](#generator-with-arguments)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# FrontEnd Masters - ES6 notes

[Slides](https://github.com/aaronfrost/es6-femasters-slides)

* ECMAScript is now EcmaScript. Which is a standard for the API JavaScript and other languages use.
* TC39 stands for Technical Committee which regulate the EcmaScript API.
* ES.Next is a pointer to the next version of ES
* ES Harmony is the backlog of the new stuff coming to ES and the versions in development.
 


## Proper Tail Call (PTC)

David Herman

Proper Tail Call (PTC) allows recursive calls without flooding the memory usage with garbage. 
The current limit of recursive calls is around 10k in Chrome and 49k in FF.

ES6 brings proper tail calls.

Tail position = the last instruction to fire before the return statement
Tail call = calling another function from the tail position
Close call = when the last instruction has to return to the method to do something.  eg.  return 1 + bar()

Only works on Strict Mode

## Function Hoisting

```javascript
// Function Declaration
function foo() {
  // code here
}
// Function Expression
var bar = function() {
  // code here
}
```
Function declaration gets hoisted to the top, while Function Expression does not.

## Variables

- var: gets hoisted
- let: lives within block (curly braces)
- const: constant.. also lives within blocks

### Temporal Dead Zone

```javascript
function doSomething() {
  console.log(a); // should cause an error
  let a = 1;
  console.log(a);
}
```

## Rest Parameters

Treats arguments as an array
```javascript
function foo(...bar) {
  console.log(bar.join(' ')); // Logs 'I can haz teh arguments'
}
foo('I', 'can', 'haz', 'teh', 'arguments');
```

### rules

1. It is similar to `arguments` but the rest params are a real array.
1. You just can have one rest param per function and has to be in the last position.
1. You can't use arguments


## Spread Operator

Spreads an array into its individual values.

```javascript
var a = [1, 2];
var b = returnTwo(a[0], a[1]); // [2, 1]
var c = returnTwo(...a); // [2, 1]
```

### concat arrays with spread

```javascript
let nums = [1, 2, 3];
let abcs = ['a', 'b', 'c'];

let alphanum = [ ...nums, ...abs ]; // [1, 2, 3, 'a', 'b', 'c']
```

## Object short-hand

```javascript
const x = 4;
const y = 2;

const o = { x, y, z: x * y }; // { x: 4, y: 2, z: 8 }
```

## Descructuring

"Destructuring allows you to bind a set of variables to a corresponding set of values anywhere that you can normally bind a value to a single variable."

It helps pull incoming objects apart.

```javascript
var address = {
  city: "Costa Mesa",
  state: "CA",
  zip: 92444
};
let {city, state, zip} = address;

log(city); // 'Costa Mesa'
log(state); // 'CA'
log(zip); // 92442
```

### Alias

or we can use alias

```javascript
var address = {
  city: "Costa Mesa",
  state: "CA",
  zip: 92444
};
let {city: c, state: s, zip: z} = address;

log(c, s, z); // 'Costa Mesa CA 92444'
```

### Simpler way

You can also use it like 
```javascript
var person = {name: 'Aaron', age: 35};
displayPerson(person);

function displayPerson({name, age}) {
  // do something with name and age to display them
}
```

### Default values

You can pass default values
```javascript
var person = {name: 'Aaron', age: 35};
displayPerson(person);

function displayPerson({name = "No Name provided", age = 0}) {
  // do something with name and age to display them
}
```

### Irrefutable pattern

The destructuring must match the object or else it will throw an error.
```javascript
var person = {name: 'Aaron', age: 35};
let {name, age, address} = person; // throws! (irrefutable)
let {name, age, ?address} = person; // is ok because we specified address as undefineable (refutable)
let ?{name, age, address} = person; // Forgives the whole pattern
```

### All patterns
```javascript
let {a: x} = {}   // throw
let ?{a: x} = {}  // x = undefined
let ?{a: x} = 0   // x = undefined
let {?a: x} = {}  // x = undefined
let {?a: x} = 0   // throw
```

### Patterns w/ Default Values
```javascript
let ?{a: x = 1} = undefined   // x = 1
let {?a: x = 1} = undefined   // throw
let {?a: x = 1} = {}          // x = 1
```

### Patterns - Nested
```javascript
let person = {
  name: "Aaron",
  age: "35",
  address: {
    city: "Salt Lake City",
    state: "UT",
    zip: 84115
  }
};

let {name, age, address: {city, state, zip}} = person; // this won't create address, but will create city, state, zip
```

## Destructuring Arrays

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

## Arrow Functions

They can't be use with `new` because of how they bind `this`.

```javascript
var fn1 = function() {return 2;};
var fn2 = () => 2; // Here you can omit curly braces. It means return 2. If you add curly braces then you have to put the word 'return'.
```

### Parenthesis-Parameter Rules
```javascript
var x;
x = () => {};       // No parameters, MUST HAVE PARENS
x = (val) => {};    // One parameter w/ parens, OPTIONAL
x = val => {};      // One parameter w/o parens, OPTIONAL
x = (y, z) => {};   // Two or more parameters, MUST HAVE PARENS
x = y, z => {};     // Syntax Error: must wrap with parens when using multiple params
```

### REAL benefit: lexical binding of 'this'
You don't need to bind(this) or var _this = this.

```javascript
var widget = {
  init: function() {
    document.addEventListener("click", (event) => {
      this.doSomething(event.type);
    }, false);
  },
  doSomething: function(type) {
    console.log("Handling " + type + " event");
  }
};
Widget.init();
```
You can't replace all functions with Arrow functions because it will mess up `this`.

## Classes

```javascript
var monsterHealth = Symbol(); // Symbol() is a JS method that acts like a GUID generator
var monsterSpeed = Symbol();

class Monster {
  constructor(name, health, speed) {
    this.name = name;
    this[monsterHealth] = health;
    this[monsterSpeed] = speed;
  }
  // getter
  get isAlive() {
    return this[monsterHealth] > 0;
  }
  // setter
  set isAlive(alive) {
    if(!alive) this[monsterHealth] = 0;
  }
  // method
  attack(target) {
    console.log(this.name + ' attacks ' + target.name);
  }
}

var Jorge = new Monster('Jorge', 3);
Jorge.isAlive; // true   

jorge.isAlive = false;
console.log(jorge.isAlive); // false

```

### Classes gotchas

The following will fall in a cyclical death trap because the setter for name is already in the constructor.
```javascript

class Monster {
  constructor(name) {
    this.name = name;
  }
  // setter
  set name (name) {
    this.name = name;
  }
}

var Jorge = new Monster('Jorge', 3);

jorge.name = 'kevin';
```

Classes don't hoist.

### Extend classes

```javascript
class Godzilla extends Monster {
    constructor() {
        super('Godzilla', 10000);
    }
    
    attack(target) {
      super(target); // will call the Monster attack method
    }
}
```

## Collections

### SET

SETs are similar to Arrays. 
The difference is they force unique values.
No typecasting in keys.

```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.size; // logs 3. It is like Array.prototype.length
set.has(2); // true
set.clear(); // deletes all values
set.delete(2); // deletes value 2
```

Another way to create a Set
```javascript
var set = new Set([1, 2, 3, 5]);
```

A new loop
```javascript
var set = new Set([1, 2, 3, 5]);

for (let num of set) {
  console.log(num); // logs 1, 2, 3, 5
}
```

### MAP

No typecasting in keys.

```javascript
var map = new Map();
map.set('name', 'Jorge');
map.get('name'); // Jorge
map.has('name'); // true
```

#### Objects as keys
The key can be a function, a primitive, an object.. 
But it has to be exactly the same. If it is a copy or it is mutated, then it will stop working.

```javascript
var user = { name: 'Jorge', id: 1234 };
var userHobbyMap = new Map();
userHobbyMap.set(user, ['Ice Fishing', 'Family Outting']);
```

### WEAKMAP

Like a map 
but it doesn't has a size 
and no primitive keys.

It will not hold to a key that is not used by any other element.
This is useful to prevent unlimited garbage. 
eg. when using a DOM element as a key in a map, then the DOM element gets deleted, the weakmap will delete that key-value as well.

A weakmap holds only a weak reference to a key, which means the reference inside of the weakmap doesn't prevent garbage collection of that object.

## Modules
Like CommonJS

### Default export
The default means will import the default export.
```javascript
// MyClass.js
class MyClass{
  constructor() {}
}
export default MyClass;

// Main.js
import MyClass from 'MyClass';
```

### Multiple exports. 
You can call just the exports you need from a specific module.
```javascript
// lib.js
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

// main.js
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// second.js
// or you can call them with '*'
// but then you have to prefix the exports with
// the module name

import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

### Export as

```javascript
// lib.js
class MyClass {
  //...
}

// main.js
import { Dude as Bro } from 'lib';
var bro = new Bro(); // instanceof MyClass  
```

### Cyclical Dependencies

The following would be allowed
```javascript
// lib.js
import Main from 'main';
var lib = {message: "This Is A Lib"};
export { lib as Lib };

// main.js
import { Lib } from 'lib';
export default class Main { 
  // ....
}
```

### More importing

```javascript
// lib.js
// Default exports and named exports
import theDefault, { named1, named2 } from 'src/mylib';
import theDefault from 'src/mylib';
import { named1, named2 } from 'src/mylib';

// Renaming: import named1 as myNamed1
import { named1 as myNamed1, named2 } from 'src/mylib';

// Importing the module as an object
// (with one property per named export)
import * as mylib from 'src/mylib';

// Only load the module, don't import anything
import 'src/mylib';
```

### More Exporting

```javascript
export var myVar = ...;
export let myVar = ...;
export const MY_CONST = ...;

export function myFunc() {
  ...
}
export function* myGeneratorFunc() {
  ...
}
export class MyClass {
  ...
}
```

### Re-exporting
This is for exporting something you are importing.
```javascript
export * from 'src/other_module';
export { foo, bar } form 'src/other_module';

// Export other_module's foo as myFoo
export { foo as myFoo, bar } from 'src/other_module';
```

## Modules - Programatic Loading API

### System.import API
This method will return a promise
```javascript
System.import('some_module')
.then(some_module => {
  ...
})
.catch(error => {
  ...
});
```

#### Load All
```javascript
  Promise.all(
    ['module1', 'module2', 'module3']
    .map(x => System.import(x)))
  .then(function ([module1, module2, module3]) {
    // my code...
  });
```

### System "Module" functions

```javascript
System.import(source);
// Returns module via Promise

System.module(source, options);
// Returns module via Promise

System.set(name, module);
// Inline register a new module

System.define(name, source, options?);
// Eval code and register module
```

### Module HTML Tag

To load module in the html
```html
<head>
  <module import="my-module.js"></module>
</head>
```

```html
<head>
  <module>
    import $ from 'lib/jquery';
    console.log('$' in this); // false becaue it won't attach the import to the window global
    // globals trapped in module
    
    // Other JS here
    console.log(window); // Still can call window
    
    // let x = 1;
    Module Tag is force strict mode
  </module>
</head>
```

## Promises
Like using `Q`

### Promise Constructor
```javascript
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then...
  
  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});
return promise; 
```

### Promise Instance
A `promise` can be in 1 of 4 states
- fulfilled: successfully resolved (1)
- rejected: rejected (2)
- pending: hasn't resolved or rejected yet (undefined)
- settled: fulfilled or rejected (1 or 2)

### Catch
You can use .catch instead of second handler in .then
```javascript
get('users.all')
  .then(function(users) {
    myController.users = users;
  })
  .catch(function() {
    delete myController.users;
  });
```

### All

```javascript
var usersPromise = get('users.all');
var postsPromise = get('ports.everyone');

// Wait until BOTH are settled
Promise.all([usersPromise, postsPromise])
.then(function(results) {
  myController.users = results[0];
  myController.posts = results[1];
}, function() {
  delete myController.users;
  delete myController.posts;
});
```

### Static Promise Methods

- Promise.all(iterable); // Wait until all settle
- Promise.race(iterable); // Wait until 1 settles
- Promise.reject(reason); // Create a promise that is already rejected
- Promise.resolve(value); // Create a promise that is already resolved
 
## Generators

Generators are functions which can be exited and later re-entered. Useful for long iteration functions, so they can be paused to prevent blocking other functions for too long.

### Basic Syntax

```javascript
function* myGen() { }
// or 
function *myGen() { }

```

### Yield
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

### Iterating on Generators
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

### Generator with arguments

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

## HTML Templates

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings


[More info](https://github.com/lukehoban/es6features)
 


