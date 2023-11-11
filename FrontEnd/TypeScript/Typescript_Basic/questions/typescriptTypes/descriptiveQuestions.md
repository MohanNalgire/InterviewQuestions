# Typescript data types/ types

## Questions

| Sr No.: | Questions                                                                 |
| :------ | :------------------------------------------------------------------------ |
|         | How many premitives in Javascirpt and typescript are there?               |
|         | How many ways are there to assign a type in Typescript variable creation? |
|         |                                                                           |

### Questions and answers

---
### data types ###

### What is a data type?

In software programming, data type refers to the type of value a variable has and what type of mathematical, relational or logical operations can be applied without causing an error. For example, many programming languages use the data type string to classify text, integer to identify whole numbers and floating point to designate numbers with decimal points.

### What is type checking in compiler design?

Type checking is the process of verifying and enforcing constraints of types in values. A compiler must check that the source program should follow the syntactic and semantic conventions of the source language and it should also check the type rules of the language. It allows the programmer to limit what types may be used in certain circumstances and assigns types to values. The type-checker determines whether these values are used appropriately or not.

### what is type converison?

### what are the types of type checking?

There are two kinds of type checking:
    1) Static Type Checking.
    2) Dynamic Type Checking.


### what is typescript type checking?

- TypeScript types introduce strong type checking to JavaScript. 
- The use of types is optional, but if use the types, then they are analyzed by the compiler, and errors are thrown if they are used incorrectly. 

### How to opt out of type checking in typescript?

- Typescript allows us to opt-out of type checking by assigning `any` type to a variable.
- The compiler will not perform type checking on variables whose type is `any`.
- `any` is a special data type that can hold any data. 
- You can change the data type. We use `any` when we do not know the type of data. 
- `any` is specific to typescript.
- When a variable’s type is not given and typescript cannot infer its type from the initialization then it will be treated as an `any` type.


### what are the primitive types in typescript?

| Primitive Types | keyword   | Description                                                            |
| :-------------- | :-------- | :--------------------------------------------------------------------- |
| String          | string    | It is used to represent a sequence of characters                       |
| Boolean         | boolean   | Represents true and false                                              |
| Number          | number    | It is used to represent both Integer as well as Floating-Point numbers |
| BigInt          |           |                                                                        |
| Null            | null      | It is used when an object does not have any value                      |
| Undefined       | undefined | Denotes value given to uninitialized variable                          |
| Symbol          |           |                                                                        |

### What re the non-primitive data types in typescript?

| Non-Primitive Types | keyword | Description |
| :------------------ | :------ | :---------- |
| Object              |         |             |

### what are the special data types in typescript?

| Special Types | keyword | Description                             |
| :------------ | :------ | :-------------------------------------- |
| Never         |         |                                         |
| Void          | void    | Generally used on function return-types |
| Unknown       | unknown |                                         |

### What are other types in typescirpt?

| Other Types | keyword | Description                                                                                        |
| :---------- | :------ | :------------------------------------------------------------------------------------------------- |
| Any         | any     | If variable is declared with any data-type then any type of value can be assigned to that variable |
| Array       | Array   |                                                                                                    |
| Tuple       |         |                                                                                                    |
| Function    |         |                                                                                                    |
| constructor |         |                                                                                                    |


### What are the Advanced tpes in typescript?

Literal type
Union type
Intersection type

InstanceOf type guard


### what is NaN in typescirpt?

- NaN in Typescript stands for Not a Number. 
- It is the result of numerical operations, where result is not a number. 
- It is the property of the global object. You can refer it either as NaN or Number.NaN. 
- The typeof NaN is primitive number. 
- We can check whether a value is NaN by using the isNaN function or by Number.IsNan method.

---
### Type annotations ###

### What is typescript type annotations?

**Type annotations** — also known as type signatures — are used to indicate the datatypes of variables and input/outputs of functions and methods.
- TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. 
- We can specify the type using :Type after the name of the variable, parameter or property. There can be a space after the colon. This we can say typescript type annotation.
  Example:

```typescript
    var age: number = 32; // number variable
    var name: string = "John";// string variable
    var isUpdated: boolean = true;// Boolean variable
```

These are type annotations. You cannot change the value using a different data type other than the declared data type of a variable. If you try to do so, TypeScript compiler will show an error. This helps in catching JavaScript errors. 

### What are the types of type annotations in typescript?

| Sr. NO. | Annotation tpye                | Annotation type description |
| :-----: | :----------------------------- | :-------------------------- |
|   01    | Variable annotation            |                             |
|   02    | Arrays                         |                             |
|   03    | Generics                       |                             |
|   04    | Type inference                 |                             |
|   05    | Union types                    |                             |
|   06    | Creating types from types      |                             |
|   07    | Functions                      |                             |
|   08    | Objects                        |                             |
|   09    | Type annotations in TypeScript |                             |
|   10    | V A R                          |                             |
|   11    | Any                            |                             |
|   12    | Classes                        |                             |
|   13    | Conditional types              |                             |
|   14    | Function parameter annotation  |                             |
|   15    | Keyof type operator            |                             |
|   16    | Mapped types                   |                             |
|   17    | Type assertions                |                             |


### What are the benifits of using type annotation?

1) Type annotations are used to enforce type checking. 
2) It is not mandatory in TypeScript to use type annotations. 
3) However, type annotations help the compiler in checking types and helps avoid errors dealing with data types. 
4) It is also a good way of writing code for easier readability and maintenance by future developers working on your code.


### Can you use JavaScript `typeof` operator in typescript?

### What is difference between `Type Aliases` and `Interfaces`

    | Diff Point             | Interface             | Type                         |
    | :--------------------- | :-------------------- | :--------------------------- |
    | Extending an interface | use `extends` keyword | use intersections symbol `&` |
    | Can redeclare          | Yes                   | No                           |
    |                        |


1. ### How many premitives in Javascirpt and typescript are there?

1) boolean -
2) string -
3) number -
4) bigint -
5) symbol -

2. ### How many ways are there to assign a type in Typescript variable creation?

1) Explicit
2) Implicit

1) **Explicit:**  
    Syntax:

    ```typescript
        let <variable>:<data_type> = "<value>";
    ```

    Example:

    ```typescript
        let firstName:string = "Mohan";
    ```

    - `let` => declaration keyword of JS, TS
    - `variable` => variable name
    - `:string` => Explicitly we are defining type of variable
    - `=` => assignment sign
    - `value` => value is string and its string with notation of double quotes.

2) **Implicit:**  
    Syntax: let <variable> = "value";

    Example:
    - `let` =>
    - `variable` =>
    - `=` => assignment sign
    - `value` => value is string and its string with notation of double quotes.



### What is differece in Java and Typscirpt type annotations?

    TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed.


### What is functions paramter type annotations?

### What is functions return type annoations?

---
### Inference ###

### What is type inference? 

    Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its usage.

### What is typscript type inference?

    TypeScript type inference is a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression. 
    this imeans that you do not have to explicityly specify the type of every variable and expression in your code.

    Example:

    ```typescript
    const x = 10;
    const y = x + 2;
    
    console.log(y); // 12

    // Type of constant x is number
    // Type of constant y is also number
    ```

### How Does TypeScript Type Inference Work?

    TypeScript type inference works by using a variety of techniques to deduce the type of a variable or expression. These techniques include:
    
    - **Type checking**: The TypeScript compiler checks the types of the expressions that are used to initialize a variable or expression. This can be used to infer the type of the variable or expression.
    - **Type inference rules**: TypeScript has a set of rules that can be used to infer the type of a variable or expression. These rules are based on the types of the expressions that are used in the variable or expression.
    - **Type annotations**: If you have explicitly annotated the type of a variable or expression, the TypeScript compiler will use that type annotation to infer the type of the variable or expression.

    Reference: https://medium.com/@sahil90085/typescript-type-inference-a-comprehensive-guide-40c888c6d78f#:~:text=The%20TypeScript%20compiler%20can%20infer%20the%20type%20of%20x%20based,type%20of%20x%20is%20number%20.
    
### Benefits of TypeScript Type Inference

    TypeScript type inference provides a number of benefits, including:
    
    - **Conciseness**: TypeScript type inference can help to make your code more concise by eliminating the need for type annotations. This can make your code easier to read and write.
    - **Readability**: TypeScript type inference can help to make your code more readable by making it clear what the types of your variables and expressions are. This can make it easier to understand your code for both humans and machines.
    - **Type safety**: TypeScript type inference can help to prevent errors by ensuring that your code is type-safe. This means that the TypeScript compiler can detect errors at compile time, rather than at runtime.

### What are the advanced typescript type inference techniquies?

    TypeScript also supports a number of advanced type inference techniques. These techniques can be used to infer the types of more complex variables and expressions.
    Some of the more advanced TypeScript type inference techniques include:

    1) Union types
    2) Intersection types
    3) Generics
    4) Utility types

### What are the typescript rules of inference?



### What is the **contextual typing**? Where to use **contextual typing**?

### How to declare function types?

### How to declare object types?

### How to declare optional object property types?

### How to declare **Union types** in typescript?

The first way to combine types you might see is a union type. 
A union type is a type formed from two or more other types, representing values that may be any one of those types. 
We refer to each of these types as the union’s members.

### What is typescript narrowing?

### 