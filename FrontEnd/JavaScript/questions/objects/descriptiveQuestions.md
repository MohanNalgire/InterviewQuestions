# Object

## Index

| Sr. No.: | Quesitons |
| :---: | :--- |
| conceopt | object |
| 01 | What is object in JavaScript |
| 02 | What is premitive and non-premetive data types |
| 03 | what is the type of function |
| 04 | What is the type of array |
| 05 | How to create object |
| 06 | Is it mandetory in object to define properties at start |
| 07 | how to create a object by using object constructor method |
| 08 | what is object litral in JavaScript |
| 09 | how to create a object by using object literal method |
| 10 | Write all types of ways of creating object in JavaScript |
| 11 | What are the all kind of JavaScript objects |
| concept | Object property |
| 12 | what is property in object |
| 13 | what is key/name/identifier in object |
| 14 | what are the object property name limitations in JavaScript |
| 15 | what is value in object |
| 16 | How to add properties to object? |
| 17 | How to iterate over object properties for keys of object |
| 18 | What is the use of for...in loop in object |
| 19 | What are the all ways of adding properties to object |
| 20 | how to add multi word properties to object |
|   | how to access multi word properties of object |
|   | what is computed properties concept |
|   | how to assign dynamic keys in object |
|   | how to add some string at end of each property key in object |
|   | What are the rules of accessing property of object |
|   | what is 'trailing comma' / 'hanging comma' in Object |
|   | how to access object properties values |
|   | how to test property exist on object in JavaScript |
| 0 | What are the all ways of accessing properties of object |
|   | how to delete object properties |
| | what are the kinds of object properties |
| concept | Object properties value, writable, enumerable, configurable |
|   | |
| concept | Object method |
| 0 | how to define methods in object? |
|   | how to use method with object? |
| 0 | |
|   | When we said a function as object method in JavaScript |
|   | |
| concept | Object sort for properties & object |
|   | How to convert integer value to non-integer in JavaScript Object |
|   | How to Sort JavaScript Object by Key |
|   | How to Sort JavaScript Object by values |

### question and answers

#### what are the kinds of object properties

In JavaScript, there are two kinds of object properties:

1) Data properties - 
2) Accessor properties - In JavaScript, accessor properties are methods that get or set the value of an object. 

1. Data property

```javascript
const student = {

    // data property
    firstName: 'Monica';
};
```

2. Accessor Property
>
In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value

```javascript
const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
```

#### When we said a function as object method in JavaScript

When the value is a function, the property becomes a method. Typically, you use methods to describe the object’s behaviors.
Example 1:

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
/*
person is a object and greet is person objects property
This is a exprssion function where the assigned value is function so here greet is a person objects method.
*/
person.greet = function () {
    console.log('Hello!');
}

person.greet();
```

Example 2

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}

person.greet = greet;

person.greet();
```

EXample 3

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
};

ES6 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};

person.greet();
```