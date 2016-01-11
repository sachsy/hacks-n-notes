# Modules

Like CommonJS

## Default export
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

## Multiple exports. 
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

## Export as

```javascript
// lib.js
class MyClass {
  //...
}

// main.js
import { Dude as Bro } from 'lib';
var bro = new Bro(); // instanceof MyClass  
```

## Cyclical Dependencies

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

## More importing

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

## More Exporting

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

## Re-exporting
This is for exporting something you are importing.
```javascript
export * from 'src/other_module';
export { foo, bar } form 'src/other_module';

// Export other_module's foo as myFoo
export { foo as myFoo, bar } from 'src/other_module';
```


---


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
