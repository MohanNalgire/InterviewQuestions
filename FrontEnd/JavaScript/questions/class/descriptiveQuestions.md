# class

## Question Index

| Sr.No. | Questions |
| :---: | :--- |
| | [What is class](#what-is-class)|
| | [How to declare class properties in JavaScript](#how-to-declare-class-properties-in-javascript)|
| | [what is class constructor](#what-is-class-constructor)|
| | [How to write protected class](#how-to-write-protected-class)|
| | [If JavaScript support funciton overloading](#if-javascript-support-funciton-overloading)|
| | [If JavaScript support method overloading](#if-javascript-support-funciton-overloading)|
| | [If JavaScript support multiple constructors or not](#if-javascript-support-multiple-constructors-or-not)|
| | [can-you-make-multiple-constructors-in-es6-and-up](#can-you-make-multiple-constructors-in-es6-and-up)|

||How ES6 class declarations are hoisted |
||Why ES6 class expressions are not hoisted |
||why Es6 classes are first class citizens |
||why ES6 classes are executed in strict mode |

### What is class

### How to declare class properties in JavaScript

### what is class constructor

### How to write protected class

### If JavaScript support funciton overloading

### If JavaScript support metod overloading

### If JavaScript support multiple constructors or not
>
NO
Why?
Having multiple constructors in any other language that define classes involves overloading. JavaScript doesn't support function or method overloading so it doesn't support multiple constructors.

### can-you-make-multiple-constructors-in-es6-and-up
>
Javascript does not support defining multiple constructors. It appears you're just trying to do function overloading.

In Javascript, you don't do it this way. Instead, you declare the version with the maximum number of parameters you expect and you dynamically test for what the OP passed and adjust your behavior based on what was or wasn't passed.

You can see a general description of function overloading in Javascript here:

How to overload functions in javascript?

If you have widely varying versions of the constructor, then you can change it to take exactly one object and then just assign the desired properties to the object before calling the function. Your code will then interrogate the object and see what was passed and adjust its behavior accordingly.

#### Reference

1. ES6 to ES5 => <https://jstool.gitlab.io/babel-es6-to-es5/>
