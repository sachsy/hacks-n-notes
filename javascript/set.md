# Set

*Sets* are like *arrays*.

The difference is they force unique values.

> No typecasting in keys.

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

### Another way to create a Set
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
