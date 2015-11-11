# Recursion

Recursion is a function that calls itself until it doesn't.

It is better than loops when you have to do multiple nested iterations. 
If you would do it with loops you would need to keep track of the index on each nested loop
and gets more complicated to reason about.

### Example

```javascript
let categories = [
  {id: 'animals', 'parent': null },
  {id: 'mammals', 'parent': 'animals' },
  {id: 'cats', 'parent': 'mammals' },
  {id: 'dogs', 'parent': 'mammals' },
  {id: 'chihuahua', 'parent': 'dogs' },
  {id: 'labrador', 'parent': 'dogs' },
  {id: 'persian', 'parent': 'cats' },
  {id: 'siamese', 'parent': 'cats' },
  
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
    makeTree(categories, null), 
    null, 2
  )
);

// Result
/*
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}
*/
```
