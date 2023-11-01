# Array

## Questions and Answers

1. ### What is output

```javascript
const numbers = [];

const obj = {a:1, b:2};

const {a:numbers[0], b:numbers[1]} = obj; // gives error Cannot redeclare block-scoped variable 'numbers'.
```

2.

```javascript
let a, b;
{a, b} = { a:10, b:20};
```

3. 

```javascript
{
    console.log('Hello world');
}
```

4.  Modify this to do object destructuring

```javascript
{a, b} = {a: 1, b: 2};
```

5. Whhat is output for destructuring

```javascript
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

{ name  } = user
let name;
{ name } = user;

Output:
Uncaught SyntaxError: Unexpected token '='
```