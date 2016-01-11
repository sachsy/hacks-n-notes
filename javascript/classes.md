# Classes

```javascript
var monsterHealth = Symbol(); // Symbol() is a JS method that acts like a GUID generator
var monsterSpeed = Symbol();

class Monster {
  constructor(name, health, speed) {
    this.name = name;
    this[monsterHealth] = health;
    this[monsterSpeed] = speed;
  }
  // getter
  get isAlive() {
    return this[monsterHealth] > 0;
  }
  // setter
  set isAlive(alive) {
    if(!alive) this[monsterHealth] = 0;
  }
  // method
  attack(target) {
    console.log(this.name + ' attacks ' + target.name);
  }
}

var Jorge = new Monster('Jorge', 3);
Jorge.isAlive; // true   

jorge.isAlive = false;
console.log(jorge.isAlive); // false

```

### Classes gotchas

The following will fall in a cyclical death trap because the setter for name is already in the constructor.
```javascript

class Monster {
  constructor(name) {
    this.name = name;
  }
  // setter
  set name (name) {
    this.name = name;
  }
}

var Jorge = new Monster('Jorge', 3);

jorge.name = 'kevin';
```

Classes don't hoist.

### Extend classes

```javascript
class Godzilla extends Monster {
    constructor() {
        super('Godzilla', 10000);
    }
    
    attack(target) {
      super(target); // will call the Monster attack method
    }
}
```
