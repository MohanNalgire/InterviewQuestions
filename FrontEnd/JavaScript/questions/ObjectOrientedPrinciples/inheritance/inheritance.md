# Inheritance

## Index

| Sr.No.| Questions |
| :---: | :--- |
|| What is inheritance in JavaScript |
|| what are types of inheritance in JavaScript |
|| What are the patterns of JavaScript inheritance |

### What are the patterns of JavaScript inheritance

Following are the JavaScript inheritance patters
>
    1. prototypal inheritance
    2. functional inhertiance
    3. Functional-shared inheritance
    4. Pseudoclassical inhetiance

1. **prototypal inheritance**

 1) which adds new properties & new methods
 2) use object.prototype or **proto** for this purpose
Example:

```JavaScript
    let Car = {
      color: "Red",
    };
    let BMW = {
      make: "BMW",
    };
    
    BMW.__proto__ = Car;
    
    // we can find both properties in BMW now:
    console.log("This is a " + BMW.color + " " + BMW.make);
```

2. **Functional inheritance**
Functional inheritance involves inheriting features with the use of an augumenting function to an object instance.

```javascript
function Person(data) {
  var that = {};
  that.name = data.name;
  return that;
}

// Create a child object, to inherit from the base Person
function Employee(data) {
  var that = Person(data);
  that.sayHello = function () {
    return "Hello, I'm " + that.name;
  };
  return that;
}

var myEmployee = Employee({ name: "Rufi" });
console.log(myEmployee.sayHello());
```

3. **Functional-shared inheritance**

- A slightly improved version of the functional pattern involves eliminating that redundant memory cost mentioned above.
- Instead of defining a function on each instance of the class, the methods can be defined in some form of method holder for each instance to point at.

```javascript
var makeAnimal = function(name, color) { // no change to this
  var animal = {};
  animal.name = name;
  animal.color = color;
  return animal;
}

var bearMethods = { // the holder of all methods that bears should have
  growl: function() {
    console.log('grrr');
  }
}

var makeBear = function(name, color, type) {
  var bear = makeAnimal(name, color);
  bear.type = type;
  bear.growl = bearMethods.growl; // point at same function as bearMethods.growl
  return bear;
}

var yogi = makeBear('yogi', 'brown', 'thief');
var pooh = makeBear('winnie', 'yellow', 'honey');

yogi.growl(); // logs 'grrr'
yogi.growl === pooh.growl; // true
```

4. **Pseudoclassical inhetiance**

- Similar to prototypal inheritance
- emulates classical inheritnace using prototypal inheritance.
- If ES5 is used for programming then the use of psuedoclassical inheritance isn't encouraged since you can use conventional classes (the class keyword).
- In pseudoclassical inheritance, we try to create a class with a function that is intended to be called with the new ketword.
Example:

```javascript
function Car(make, color, speed) {
  this.make = make;
  this.color = color;
  this.speed = speed;
}
var Toyota = new Car ("Toyota", "Red", "100mph");
var Bentley = new Car ("Bentley", "White", "120mph");
var BMW = new Car ("BMW", "Green", "90mph");

// new function
Car.prototype.dialogue = function () {
  console.log(
    "I am a " +
      this.color +
      "  " +
      this.make +
      " with  " +
      this.speed +
      "  speed "
  );
};
console.log(Toyota.dialogue());
console.log(BMW.dialogue());
console.log(Bentley.dialogue());
```
