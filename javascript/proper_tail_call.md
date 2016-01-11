# Proper Tail Call

David Herman

*Proper Tail Call (PTC)* allows recursive calls without flooding the memory usage with garbage. 

The current limit of recursive calls is around **10k in Chrome** and **49k in FireFox**. *(Aug 2015)*

ES6 brings proper tail calls.

- Tail position equals the last instruction to fire before the return statement.
- Tail call equals calling another function from the tail position.
- Close call equals when the last instruction has to return to the method to do something.  eg. `return 1 + bar()`

> It only works on Strict Mode.
