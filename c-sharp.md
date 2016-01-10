# From JS to C# #

> A guide for JavaScript developers who want to understand C#

A guide for JavaScript developers who want to understand C#.
These notes are from a perspective of a JavaScript developer trying to deeply understand the similarities and differences between JS and C#. 

## Dictionary

A Dictionary is similar to storing key and values in an object literal
example:
```javascript
var colorValues = {
  "blue": "#00F",
  "red": "#F00"
}
```

The difference is that in JavaScript the key is always a string and you can have different type of objects in the same dictionary. 

_Note: In C# the key types are mostly **strings** or **ints**. I wonder if there is any other type useful for a Dictionary. I could think of Enums._

JS Arrays are like C# Dictionaries with key-value type of int.

## HashSet
This looks like a *List* but it is un-ordered and has better performance. It would be like a JS Array but instead of *Int* key types it uses unique *enums*.

## Anonymous Types
They look somewhat similar to JS literal objects and they work similar but they are commonly used for *LINQ* notation or similar.

Example of anonymous types from [MSDN](https://msdn.microsoft.com/en-us/library/bb397696.aspx)

```C#
var v = new { Amount = 108, Message = "Hello" };

Console.WriteLine(v.Amount + v.Message);
```

## Lists
Lists are a wrapper on Array to make it usable as the JS Array.



---


