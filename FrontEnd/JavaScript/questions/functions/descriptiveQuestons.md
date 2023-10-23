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
| 22 | [What is promise in JavaScript](#what-is-promise-in-javascript) |
| 23 | [What are the states in promise](#what-are-the-states-in-promise)|
| 24 | [Write promise prototype details](#write-promise-prototype-details) |
| 25 | [What is promise chaining](#what-is-promise-chaining) |
| 26 | [What are the 4 static methods](#what-are-the-4-static-methods) |
| 27 | [What is call back](#what-is-call-back) |
| 28 | [Which internal properties are available to the promise object returned by the new Promise constructor]
| 29 | [what are the JavaScript brodly used function types](#what-are-the-javascript-brodly-used-function-types) |
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

22. #### What is promise in JavaScript

23. #### What are the states in promise  

24. #### Write promise prototype details

25. #### What is promise chaining

26. #### What are the 4 static methods

27. #### What is call back

28. #### Which internal properties are available to the promise object returned by the new Promise constructor

29. #### what are the JavaScript brodly used function types

30. #### What are the ways to define every kind of function in JavaScript |

| function define ways | regular function  | generator | async await | generator async await |
| :--- | :--- |:--- |:--- |:--- |
| Function Declaration | function(){}          | function*(){}          | async function (){}         | async function* (){} |
| Function Expression  | const t =function(){} | const t =function*(){} | const t =async function (){}| const test = async function* (){} |
| Function Constructor | new Function(){} | GeneratorFunction() | AsyncFunction(){}| AsyncGeneratorFunction() |
Reference : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions>

 1) Declaration
    a) function(){}
    b) function*(){}
    c) async function (){}
    d) async function*(){}

 2) Expression
    a) function(){}
    b) function*(){}
    c) async function (){}
    d) async function*(){}

 3) constructor
    a) function(){}
    b) function*(){}
    c) async function (){}
    d) async function*(){}

31. #### What are the ways to define every kind of arrow function in JavaScript |

| function define ways | regular function  | generator | async await | generator async await |
| :--- | :--- |:--- |:--- |:--- |
| Function Declaration | Not possible   | Not possible | Not possible        | not possible |
| Function Expression  | const t=()=>{} | Not possible | const t =async()=>{}| Not possible |
| Function Constructor | not possible   | not possible | not possible        | not possible |
Reference : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions>
