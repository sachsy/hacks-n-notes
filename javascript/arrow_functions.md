# Arrow functions


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
You can't replace all functions with Arrow functions because it will mess up *this*.
