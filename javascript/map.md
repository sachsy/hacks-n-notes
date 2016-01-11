# Map

No typecasting in keys.

## Creating Maps

### Normal way

```javascript
const map = new Map();
map.set('name', 'Jorge');
map.get('name'); // Jorge
map.has('name'); // true
```

### With Arrays

```javascript
var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get("key1"); // returns "value1"
```

## Objects as keys
The key can be a function, a primitive, an object.. 
But it has to be exactly the same. If it is a copy or it is mutated, then it will stop working.

```javascript
const user = { name: 'Jorge', id: 1234 };

const userHobbyMap = new Map();
userHobbyMap.set(user, ['Ice Fishing', 'Family Outting']);
```
