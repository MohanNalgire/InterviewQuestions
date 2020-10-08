
# JavaScript

Reference:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements>

What is output for following on browser development tool console.

## Control flow

### Block

A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.

### break

Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

### continue

Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

## Empty

An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

### if...else

Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

### switch

Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

### throw

Throws a user-defined exception.

### try...catch

Marks a block of statements to try, and specifies a response, should an exception be thrown.

## Declarations

### var

Declares a variable, optionally initializing it to a value.

### let

Declares a block scope local variable, optionally initializing it to a value.

### const

Declares a read-only named constant.

1.

```javascript
const a = 3;
    a = 4;
```

**Anser:**
VM40:2 Uncaught TypeError: Assignment to constant variable.

---

2.

```javascript
const x = { fName:'john', lName:'farrow' };
    x.fName = 'abc';
    console.log(x);
```

**Anser:**
{fName: "abc", lName: "farrow"}

---

3.

```javascript
const x = { fName:'john', lName:'farrow' };
x = { firstName:'abc', lName:'xyz' };
```

**Anser:**
Uncaught SyntaxError: Identifier 'x' has already been declared
<https://stackoverflow.com/questions/44604212/when-to-use-const-with-objects-in-javascript>

---

4.

```javascript
null == undefined
```

**Anser:**
true

---

5.

 ```javascript
null === undefined
```

**Anser:**
false

---

6.

```javascript
switch (day) {
  case 0:
    console.log('case 0',day);
  case 1:
    console.log('case 1', day);
    break;
  case 2:
     console.log('case 2', day);
}
day = 0;
````

**Anser:**
case 0 0
case 1 0

---

7.

```javascript
console.log(this)
```

**Anser:**
It gives Window object as global scope value

---
