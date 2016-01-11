# Weak map

- It is like a *map*
- Has no *size*
- Has no *primitive keys*.

It will not hold to a key that is not used by any other element.
This is useful to prevent unlimited garbage. 
eg. when using a DOM element as a key in a map, then the DOM element gets deleted, the weakmap will delete that key-value as well.

A weakmap holds only a weak reference to a key, which means the reference inside of the weakmap doesn't prevent garbage collection of that object.
