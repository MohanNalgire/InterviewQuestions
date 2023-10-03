
# JavaScript

## Data types in JavaScript

1. What is the output of following code?

    ```javascript
        let value = true;
        alert(typeof value);
        value = String(value);
        alert(typeof value); 
    ```

2. What is the out of following code?

    ```javascript
        alert( "6" / "2" );
    ```

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
//  problum 1) We are creating for loop using continue statement.

 ```javaScript
let i = 0;// initialization and value assignment
for(;i<=10;){ // condition
console.log('test on i', i);
    if(i == 5 ){
        continue; 
    }else{
        i++;
    }
}
// output :
// iteration 1  i = 0 , i inc 1
// iteration 2  i = 1 , i inc 2
// iteration 3  i = 2 , i inc 3
// iteration 4  i = 3 , i inc 4
// iteration 5  i = 4 , i inc 5
// iteration 5  i = 5 , i inc ---
```

```
// Problum 2)
let i = 0;// initialization and value assignment
for(;i<=10;){ // condition
    if(i == 5 ){continue;}
    console.log('test on i', i);
     i++;
}
//Output:
test on i 0
test on i 1
test on i 2
test on i 3
test on i 4

```
```
let i = 0;// initialization and value assignment
for(;i<=10;){ // condition
i++;
console.log('test on i', i);
    if(i == 5 ){
        continue; 
    }

}
 Output :
 test on i 1
test on i 2
test on i 3
test on i 4
test on i 5
test on i 6
test on i 7
test on i 8
test on i 9
test on i 10
test on i 11

```
```
let i = 0;// initialization and value assignment
console.log('test on i', i);
for(;i<=10;){ // condition
i++;
console.log('test in block i', i);
    if(i == 5 ){
        continue; 
    }

}
Output:
test on i 0
test in block i 1
test in block i 2
test in block i 3
test in block i 4
test in block i 5
test in block i 6
test in block i 7
test in block i 8
test in block i 9
test in block i 10
test in block i 11
```
```
for(let i=0;i<=10;i++){ // condition

console.log('test in block i', i);
    if(i == 5 ){
        continue; 
    }

}
Output:
test in block i 0
test in block i 1
test in block i 2
test in block i 3
test in block i 4
test in block i 5
test in block i 6
test in block i 7
test in block i 8
test in block i 9
test in block i 10

```
```
for(let i=3;i<=10;i++){ // condition

    if(i == 2 ){
        continue; 
    }
console.log('test in block i', i);
}

}
Output:
test in block i 3
test in block i 4
test in block i 5
test in block i 6
test in block i 7
test in block i 8
test in block i 9
test in block i 10


```
```
for(let i=0;i<=10;i++){ // condition
//i++;
console.log('test in block i', i);
    if(i == 5 ){
        continue; 
    }else{
        break;
    }

}
Output:
test in block i 0

```
``````
for(let i=1; i<=10;i++){ // condition
//i++;
//console.log('test in block i', i);
    if(i != 5){
        continue; 
        
    }
console.log('test in block i', i);
}
test condition  i 5
```
 
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

What is the output of following program?

```javascript
// Example of paramters in nested function
    function outerfunc(a) {
        innerFunc = function (b) {
            console.log("a %d  b %d",a,b)
        };
        return innerFunc;
    }
     
    //Get Inner Function
    InnerFunc=outerfunc(5);
    //Invoke it
    InnerFunc(3);
     
    //Invoke invoke inner Function directly
    outerfunc(10)(2);
```
