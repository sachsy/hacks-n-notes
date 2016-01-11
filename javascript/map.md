# Map

No typecasting in keys.

```javascript
var map = new Map();
map.set('name', 'Jorge');
map.get('name'); // Jorge
map.has('name'); // true
```

## Objects as keys
The key can be a function, a primitive, an object.. 
But it has to be exactly the same. If it is a copy or it is mutated, then it will stop working.

```javascript
var user = { name: 'Jorge', id: 1234 };
var userHobbyMap = new Map();
userHobbyMap.set(user, ['Ice Fishing', 'Family Outting']);
```
