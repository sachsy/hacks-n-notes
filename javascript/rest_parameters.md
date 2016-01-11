# Rest parameters

Treats arguments as an array

```javascript
function foo(...bar) {
  console.log(bar.join(' ')); // Logs 'I can haz teh arguments'
}
foo('I', 'can', 'haz', 'teh', 'arguments');
```

## rules

1. It is similar to `arguments` but the rest params are a real array.
1. You just can have one rest param per function and has to be in the last position.
1. You can't use arguments

