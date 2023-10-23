# Inheritance 

## Inddex

| Sr No. | Quations |
| :---:  | :--- | 
| 01 | What is inheritance in programming language | 
| 02 | what are the types of inheritance in JavaScript |
| 03 | What is mean by prototypal inheritance |
| 04 | Pseudo-classical inheritance |
| 05 | Functional inheritance |
| 06 | what are the ways of setting object prototype in JavaScript |
| 07 | What is behaviour delegation or prototypal inheritance |
| 08 | what is prototype chaining |
| 09 | What is prototype linkage |
|| How to add methods in JavaScript prototype object |
|| What is dunder proto in JavaScript |
|| How to get prototype likage in JavaSCript |


||What is object method |


### What is dunder proto in JavaScript

The __proto__ is pronounced as dunder proto. The __proto__ is an accessor property of the Object.prototype object. It exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed.

### What is object method 

### How to add methods in JavaScript prototype object

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}

### How to get prototype likage in JavaSCript

The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.

1. console.log(p1.__proto__ === Person.prototype); // true
2. console.log(p1.__proto__ === p2.__proto__); // true
3. p1.constructor.prototype


### what are the ways of setting object prototype in JavaScript

1. using Object.create()
2. using a constructor
1. 