# Weak map

- It is like a *map*
- Has no *size*
- Has no *primitive keys*.

It will not hold to a key that is not used by any other element.
This is useful to prevent unlimited garbage. 

**eg.** when using a Document Object Model (DOM) element as a key in a map, then the DOM element gets deleted, the *weak map* will delete that *key-value* as well.


A *weak map* holds a weak reference to a key. That means that the reference inside of the *weak map* doesn't prevent garbage collection of that object.
