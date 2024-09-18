# Array

## Questions Index

| Sr. No.: | Quesitons |
| :---: | :--- |
|| What is array in JavaScript |
|| What is associative array |

1. ### How to do object destructuing without var let or const

In the destructuring of object assignment statement the parentheses (...) around the assignment statement are required when using object literal destructuring assignment without a declaration.

2. ### What is this javascript syntax where you have () around the whole variable expression?

```javascript
({ body: { customer } } = await callCreateCustomer({
    email: createRandomEmailAddress(),
    key: 999,
    password: 'password',
}));
```
>
This is Destructuring Assignment wothout declaration.  
Here `customer` variable is already declared above and a value is being assinged with `response.body.customer`.  
The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.  

3. ### How to Destructure a object with new variable declarations?

```javascript
When destructuring objects, we use curly braces with the exact name of what we have in the object. Unlike in arrays where we can use any variable name to unpack the element, objects allow just the use of the name of the stored data.

const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
console.log(courseOne, courseTwo);

As you can see, we have courseOne and courseTwo as the names of the data we want to unpack.

Assigning a variable name will always help us keep our code clean, especially when it comes to working with external data when we want to unpack and reuse it across our code.
```

4. ### Can you add some custom variables in destructring assignment

We can add a new variable while destructuring and add a default value to it.

```javascript
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
const { name, age, salary=123455 } = user;

console.log(name, age, salary); // Output, Alex 43 123455
```

5. ### What are the object destructuring patterns in JavaScript

For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.
    a) In **binding patterns**, the pattern starts with a declaration keyword (var, let, or const). Then, each individual property must either be bound to a variable or further destructured.
    Binding pattern examples:
        1) for...in
        2) for...of
        3) for...await...of
        4) Funciton paramters;
        5) The catch binding variable
        ```javascript
        const obj = { a: 1, b: { c: 2 } };
        const { a } = obj; // a is constant
        let {
          b: { c: d },
        } = obj; // d is re-assignable
        ```

    b) In **assignment patterns**, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with var or let, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.

    ```javascript
    const numbers = [];
    const obj = { a: 1, b: 2 };
    ({ a: numbers[0], b: numbers[1] } = obj);
    // The properties `a` and `b` are assigned to properties of `numbers`
    ```
