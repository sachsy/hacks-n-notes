
# ES6 notes

[Slides](https://github.com/aaronfrost/es6-femasters-slides)

* **ECMAScript** is now **EcmaScript**. Which is a standard for the API JavaScript and other languages use.
* **TC39** stands for Technical Committee which regulate the **EcmaScript API**.
* **ES.Next** is a pointer to the next version of ES
* **ES Harmony** is the backlog of the new stuff coming to ES and the versions in development.
 

## Function Hoisting

```javascript
// Function Declaration
function foo() {
  // code here
}
// Function Expression
var bar = function() {
  // code here
}
```
Function declaration gets hoisted to the top, while Function Expression does not.

## Variables

- `var` Gets hoisted
- `let` Lives within block (curly braces)
- `const` Also lives within blocks

### Temporal Dead Zone

```javascript
function doSomething() {
  console.log(a); // should cause an error
  let a = 1;
  console.log(a);
}
```



## Promises
Like using `Q`

### Promise Constructor
```javascript
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then...
  
  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});
return promise; 
```

### Promise Instance
A `promise` can be in 1 of 4 states
- fulfilled: successfully resolved (1)
- rejected: rejected (2)
- pending: hasn't resolved or rejected yet (undefined)
- settled: fulfilled or rejected (1 or 2)

### Catch
You can use .catch instead of second handler in .then
```javascript
get('users.all')
  .then(function(users) {
    myController.users = users;
  })
  .catch(function() {
    delete myController.users;
  });
```

### All

```javascript
var usersPromise = get('users.all');
var postsPromise = get('ports.everyone');

// Wait until BOTH are settled
Promise.all([usersPromise, postsPromise])
.then(function(results) {
  myController.users = results[0];
  myController.posts = results[1];
}, function() {
  delete myController.users;
  delete myController.posts;
});
```

### Static Promise Methods

- Promise.all(iterable); // Wait until all settle
- Promise.race(iterable); // Wait until 1 settles
- Promise.reject(reason); // Create a promise that is already rejected
- Promise.resolve(value); // Create a promise that is already resolved
 
### Use case: Promise to make an HTTP call

```javascript
function createRabbit(url, name, isActive = true) {
    return new Promise((resolve, reject) => {
    
        if (!name) {
            log.error('ERROR createRabbit name missing');
            reject(new Error('Name missing'));
            return this;
        }
        request
            .post(url)
            .send({ name, isActive})
            .set('Accept', 'application/json')
            .set('User-Agent', USER_AGENT)
            .end((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                const {rabbitId} = result.body;

                if (rabbitId) {
                    log.info('createRabbit success', {rabbitId});
                    resolve(rabbitId);
                } else {
                    log.info('FAILED createRabbit', {body: result.body});
                    reject(new Error('Unable to create rabbit.'));
                }
            });
    });
}
```

## HTML Templates

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings


[More info](https://github.com/lukehoban/es6features)
 


