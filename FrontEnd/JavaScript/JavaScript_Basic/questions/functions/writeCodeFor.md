# write a program or code for

## Index

| Sr No. | Write a program questions |
| :---: | :--- |
| 01 | [write a program with arrow function for summation of 2 numbers.](#write-a-program-with-arrow-function-for-summation-of-2-numbers) |
| 02 | [write a program with anonimous function for summation of 2 numbers and stop to a variable.](#write-a-program-with-anonimous-function-for-summation-of-2-numbers-and-stop-to-a-variable) |
| 03 | [write a function declaration for a function call ***multiplication(4,5)***](#write-a-function-declaration-for-a-function-call-multiplication45) |
| 04 | [write a program with function for summation 2 numbers.](#write-a-program-with-arrow-function-for-summation-of-2-numbers) |
| 05 | [Write a function declaration for function call ***multiplication(4)(5)(6);***](#write-a-function-declaration-for-function-call-multiplication456) |
| 07 | [Write a function declaration for function call ***summation(4)(5)(6);***](#write-a-function-declaration-for-function-call-summation456) |

### write a program with arrow function for summation of 2 numbers

### write a program with anonimous function for summation of 2 numbers and stop to a variable

### write a function declaration for a function call ***multiplication(4,5)***

### write a program with function for summation 2 numbers

### Write a function declaration for function call ***multiplication(4)(5)(6);***

### Write a function declaration for function call ***summation(4)(5)(6);***

---

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
