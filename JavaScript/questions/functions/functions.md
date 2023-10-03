# Function

## Index

| Sr No. | Questions |
| :---: | :--- |
| 01 | [What is function](#what-is-function) |
| 02 | [How to declare a function in JavaScript](#how-to-declare-a-function-in-javascript) |
| 03 | [How to call a function in JavaScript](#how-to-call-a-function-in-javascript) |
| 04 | [How to return a function in JavaScript](#how-to-return-a-function-in-javascript) |
| 05 | [How to pass paramter to a function in JavaScript](#how-to-pass-paramter-to-a-function-in-javascript) |
| 06 | [What are the functions types in JavaScript](#what-are-the-functions-types-in-javascript) |
| 07 | [What is named funcitons in JavaScript](#what-is-named-funcitons-in-javascript) |
| 08 | [What is anonimous function in JavaScript](#what-is-anonimous-function-in-javascript) |
| 09 | [what is arrow function in JavaScript](#what-is-arrow-function-in-javascript) |
| 10 | [What is a nested function in JavaScript](#what-is-a-nested-function-in-javascript) |
| 11 | [How variable scope works in nested functions in JavaScript](#how-variable-scope-works-in-nested-functions-in-javascript) |
| 12 | [What is a closure in JavaScript](#what-is-a-closure-in-javascript) |
| 13 | [how to count function arguments in JavaScript](#how-to-count-function-arguments-in-javascript) |
| 14 | [How to get all function arguments names in JavaScript](#how-to-get-all-function-arguments-names-in-javascript) |
| 15 | [What is IIFE (Immedicately Invoked Function Expression)](#what-is-iife-immedicately-invoked-function-expression) |
| 16 | [What is recursive function in JavaScript](#what-is-recursive-function-in-javascript) |
| 17 | [Can we define functions in other functions in JavaScript](#can-we-define-functions-in-other-functions-in-javascript) |
| 18 | [What is closure in JavaScript](#what-is-closure-in-javascript) |
| 19 | [What are the 2 additional paramters passed to JavaScript functions](#what-are-the-2-additional-paramters-passed-to-javascript-functions) |
| 20 | [how to use the functions arguments object](#how-to-use-the-functions-arguments-object) |
| 21 | [What are the function parameter types](#what-are-the-function-parameter-types) |
| 22 | [What is promise in JavaScript] |
| 23 | [What are the states in promise] |
| 24 | [Write promise prototype details ] |
| 25 | [What is promise chaining] |
| 26 | [What are the 4 static methods] |
| 27 | [What is call back ] |
| 28 | [Which internal properties are available to the promise object returned by the new Promise constructor]

|    | **References** |
| 01 | JavaScript: The Good Parts by Douglas Crockford |

### Question & Answers

01. #### What is function

02. #### How to declare a function in JavaScript

03. #### How to call a function in JavaScript

04. #### How to return a function in JavaScript

05. #### How to pass paramter to a function in JavaScript

06. #### What are the functions types in JavaScript

07. #### What is named funcitons in JavaScript

08. #### What is anonimous function in JavaScript

09. #### what is arrow function in JavaScript

10. #### What is a nested function in JavaScript

11. #### How variable scope works in nested functions in JavaScript

12. #### What is a closure in JavaScript

13. #### how to count function arguments in JavaScript

14. #### How to get all function arguments names in JavaScript

15. #### What is IIFE (Immedicately Invoked Function Expression)

16. #### What is recursive function in JavaScript

17. #### Can we define functions in other functions in JavaScript

18. #### What is closure in JavaScript

19. #### What are the 2 additional paramters passed to JavaScript functions

20. #### how to use the functions arguments object

21. #### What are the function parameter types

   There are two special kinds of parameter syntax
    1. default parameters and
    2. rest parameters.

22. ### What is promise in JavaScript

23. ### What are the states in promise  

24. ### Write promise prototype details

25. ### What is promise chaining

26. ### What are the 4 static methods

27. ### What is call back

28. ### Which internal properties are available to the promise object returned by the new Promise constructor

--

| Sr No. | Write a program questions |
| :---: | :--- |
| 01 | write a program with arrow function for summation of 2 numbers. |
| 02 | write a program with anonimous function for summation of 2 numbers and stoe to a variable. |
| 03 | write a function declaration for a function call ***multiplication(4,5)*** |
| 04 | write a program with function for summation 2 numbers. |
| 05 | Write a function declaration for function call ***multiplication(4)(5)(6);*** |
| 07 | Write a function declaration for function call ***summation(4)(5)(6);*** |

---

1. Convert following funtion into curring function.

```Javascript
function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); 
```

2. What is the output

```javascript
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

curry(4)(5)(6);

```

3. What is the output

```javascript
function outerFunc(a, b) {
  function innerFunc(a, b) {
    return a + b;
  }

  const result = innerFunc(a, b);

  return result;
}
oupterFunc(4,5);

```

4. What is the output

```javascript
function outerFunc() {
  const num1 = 5;
  const num2 = 10;

  // 👇️ call inner function before it's declared
  const result = innerFunc();

  function innerFunc() {
    return num1 + num2;
  }

  return result;
}

console.log(outerFunc());
```

5. What is the output

```Javascript
function outerFunc() {
  function innerFunc(a, b) {
    return a + b;
  }

  return innerFunc;
}

const innerFunc = outerFunc();

console.log(innerFunc(2, 3));
console.log(innerFunc(3, 3));
```

6. What is the output

```javascript
function outerFunc() {
  const z = 100;

  function innerFunc(a, b) {
    return a + b + z;
  }

  return innerFunc;
}

const innerFunc = outerFunc();

console.log(innerFunc(2, 3));
console.log(innerFunc(3, 3));
```

7. What is the output

```javascript
function outerFunc(a) {
  function innerFunc(b, c) {
    return a + b + c;
  }

  return innerFunc;
}

const innerFunc = outerFunc(10);

console.log(innerFunc(1, 1));
console.log(innerFunc(1, 2));
```

8. What is the output

```javascript
function outerFunc() {
  function innerFunc(a, b) {
    return a + b;
  }

  return {innerFunc};
}

const outer = outerFunc();

console.log(outer.innerFunc(10, 10));
console.log(outer.innerFunc(20, 15));
```

```javascript
function add(a,b) {
return  a+b;
}
console.log(add(3,4));
console.log(add(3,4,5));
```

```javascript
funciton add(){
    console.log(arguments);
    var sum = 0;
    for(var i=0; i< arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(3,4,6,7));
```

```javascript
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
```

```javascript
var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
```

---

|  |   |

1. Function types

    1.1. syntax:

    ```JavaScript
        //  function declaration
        function functionName(paramters){
        // function body
        }    
    ```

    1.2. usage:

    1.2.1. call the function by using name functionName();  
    1.2.2. call in other function  

    1.3. Example:

    ```javascript
        // function defination or declaration
          function greetings(){
            console.log(Good morning'); // function body
          }
          // function call
          greetings();
    ```

---

2. Anonymous funciton

    2.1 syntax:

    ```javaScript
        function(paramter){
            // function body
        }
    ```

    2.2 usage:
    2.2.1 by using any DOM(Document Object Model) events or actions

    2.3 Example:

    ```JavaScript
      document.getElementById('myButton').onClick = fuction(){
       alert('Button clicked');
      }
    ```

---

 3. Named function

    3.1. syntax:

    ```javascript
        function functionName(){}
    ```

    3.2. usage:

    ```javascript
        functionName();    
    ```

    3.3. Example:

    ```javascript
        function test(){
          alert('test function');
        }
        test();
    ```

---

 4. Named function expresion

    4.1. syntax:

    ```javascript
        const functionName = function functionName(){}    
    ```

    4.2. usage:

    4.2.1. to store function vlaue into definied variable  

    4.3 example:

    ```javascript
         const greeting = function test(){
          alert('Good Morning!');
          }
          greeting();
    ```

---

 5. immediately invoked funciton expresion(IIEF)
    5.1. syntax:

    ```javascript
        (
            function(paramter){
            // funciton body
            }
          )(arguments);
    ```

    5.2. usage:

    5.2.1. To call on page load.
    5.2.2. In module creation

    5.3. example:

    ```javascript
        (
          function(){
            alert('Good Morning!');
          }
        )();
    ```

---

 6. Arrow funciton
    6.1. syntax:

    ```javascript
        const functionName = ()=>{}
    ```

    6.2. usage:
    6.2.1. Easy to write
    6.2.2. To context

    6.3. Example:

    ```javascript
        const greetings = ()=>{
          alert('test on greetings fun');
        }
        greetings();
    ```

---

 7. Generator funciton
  7.1. bsyntax:

    ```javascript
     function* functionName(paramter){
     // function body
     }
    ```

 Usage:

 1. Functions taht can  be paused and resumed during executions.

 Example:

```javascript
 function* numberGenerator(){
   let num =1;
   while(trye){
   yield num++;
   }
 }
```

---

 8. Async funciton
 syntax:

```javascript
 async function functionName(paramter){
       const url = '<https://api.example.com/users/>';
    const api1 = await fetch(url);
       const result = await api1.json();

    return result;

 }
```

 usage:
 to perform asynchronous actions

 example:

```javascript
 function resolveAfter2Seconds() {
 return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved funtion');
  }, 2000);
   });
 }

 async function asyncCall(){
   const result = await resolveAfter2Seconds();
   console.log('test', result)
 }
 asyncCall();
 ```

---

9. call back function
   9.1. syntax:

```JavaScript
    // callback Function
    function callbackFunction() {

    }
    // function declaration
   function functionName(param1, callbackFunction){
   // function body
   callbackFunction();
   }
    // function call
    functionName(param1, callbackFunction);
```

  // function declaration
  // Questions:
  // Can we pass function as a paramter in JavaScript?

```javascript
  function greetings(param1, param2){
    param2();// we are calling this as a function
  }
  function testMe(){
    console.log('executed from testMe function');
  }
  // function call

  console.log(typeof testMe);
  greetings(true, testMe);
```

// <https://www.programiz.com/javascript/callback>

---

 10. promise functions
   10.1. syntax:

```JavaScript
    new Promise(
   (resolve, reject)=>{
     resolve => {},
     reject =>{}
   }
   );
```

   10.2. Usage:
    1. asyncronous task

  10.3. Example:
  
---

Quesitons:

References:

1. <https://bobbyhadz.com/blog/javascript-call-function-inside-function>
2. t
