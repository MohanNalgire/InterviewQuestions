# Function

1. function types

    1.1. syntax:

    ```JavaScript
        //  function declaration
        function functionName(paramters){
        // function body
        }    
    ```

    usage:
    1. call the function by using name
        functionName();
    2. call in other function

      Example:

    ```javascript
        // function defination or declaration
          function greetings(){
           console.log(Good morning'); // function body
          }
          // function call
          greetings();
    ```

---------------------------------------------------------------------;

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

---------------------------------------------------------------------;

 3. named function
 syntax:
 function functionName(){}
 usage:
 functionName();
 Example:

 function test(){
   alert('test function');
 }

test()
---------------------------------------------------------------------

 4. named function expresion
    syntax:
    const functionName = function functionName(){}
    usage:
    to store function vlaue into definied variable
    example:
     const greeting = function test(){
  alert('Good Morning!');
  }
  
  greeting();
  
----------------------------------------------------;

 5. immediately invoked funciton expresion(IIEF)
    syntax:
    (
    function(paramter){
    // funciton body
    }
  )(arguments);

    usage:

 1. To call on page load.
 2. In module creation

    example:

(
  function(){
    alert('Good Morning!');
  }
  )();
-----------------------------------------------------------------------

 6. Arrow funciton
  syntax:
   const functionName = ()=>{}
  usage:
     1. Easy to write
     2. To context

     Example:
     const greetings = ()=>{
    alert('test on greetings fun');
  }
     greetings();  

------------------------------------------------------------------------

 7. Generator funciton
 syntax:
 function* functionName(paramter){
 // function body
 }
 Usage:
 1. Functions taht can  be paused and resumed during executions.

 Example:
 function* numberGenerator(){
   let num =1;
   while(trye){
   yield num++;
   }
 }

------------------------------------------------------------------------

 8. Async funciton
 syntax:
 async function functionName(paramter){
       const url = '<https://api.example.com/users/>';
    const api1 = await fetch(url);
       const result = await api1.json();

    return result;

 }

 usage:
 to perform asynchronous actions

 example:
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
  
------------------------------------------------------------------------;

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
  //
  function greetings(param1, param2){
    param2();// we are calling this as a function
  }
  function testMe(){
    console.log('executed from testMe function');
  }
  // function call

  console.log(typeof testMe);
  greetings(true, testMe);
  
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

1. What is function
2. how to declare function
3. how to call function
4. how to return function
5. how to pass paramter to function
6. what is arrow function
7. write a program with arrow function for summation of 2 numbers.
8. write a program with anonimous function for summation of 2 numbers.
9. What is IIFE (Immedicately Invoked Function Expression)
10. write a program with function for summation.
