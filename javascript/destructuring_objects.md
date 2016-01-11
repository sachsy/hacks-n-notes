# Destructuring objects

> Destructuring allows you to bind a set of variables to a corresponding set of values anywhere that you can normally bind a value to a single variable.

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
