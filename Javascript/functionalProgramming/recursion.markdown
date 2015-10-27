# Recursion

### Example

```javascript
let categories = [
];

let makeTree = (categories, parent) => {
  let node = {};
  
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id));
      
  return node;
}

console.log(
  JSON.stringify(
  );
);
```
