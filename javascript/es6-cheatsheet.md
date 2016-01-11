
# ES6 notes

[Slides](https://github.com/aaronfrost/es6-femasters-slides)

* **ECMAScript** is now **EcmaScript**. Which is a standard for the API JavaScript and other languages use.
* **TC39** stands for Technical Committee which regulate the **EcmaScript API**.
* **ES.Next** is a pointer to the next version of ES
* **ES Harmony** is the backlog of the new stuff coming to ES and the versions in development.
 

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

- `var` Gets hoisted
- `let` Lives within block (curly braces)
- `const` Also lives within blocks

### Temporal Dead Zone

```javascript
function doSomething() {
  console.log(a); // should cause an error
  let a = 1;
  console.log(a);
}
```


## HTML Templates

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings


[More info](https://github.com/lukehoban/es6features)
 


