# What is output

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

9. What is the output

```javascript
function add(a,b) {
return  a+b;
}
console.log(add(3,4));
console.log(add(3,4,5));
```

10. What is the output
 
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

11. What is the output

```javascript
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
```

12. What is the output

```javascript
var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
```
