# Data types

## Data type

    01. Data types
        1) Primitive data types
        2) Non-primitive data types
    02. Types
      1) String types
      2) Array types
      3) Any types
        1) NonImplicity any
    03. Type annotations on variables
    04. Functions
        1) paramter type annotations
        2) return type annotations
        3) anonumous functions
    5.  Object types
       1) Object properties
    6.  Union Types
       1) Defining a Union types
       2) Working with Union types
    7.  Type assertions
    8.  Literal types
       1. Literal interface
    9.  Null and undefined
       1)  StrictNullChecks off
       2)  strinctNullChecks on
       3)  Non-null assertion operator
    10. Enums
    11. Less Common Primitives
    12. Type aliases
    13. Type inferance
    14. Type casting
    15. Interfaces
    16. 


## Questions

| Sr No.: | Questions                                                                 |
| :------ | :------------------------------------------------------------------------ |
|         | How many premitives in Javascirpt and typescript are there?               |
|         | How many ways are there to assign a type in Typescript variable creation? |
|         |                                                                           |

### Questions and answers

### what are all the build in data types in typescript?

| Built-in Data Types | keyword   | Description                                                                                        |
| :------------------ | :-------- | :------------------------------------------------------------------------------------------------- |
| Number              | number    | It is used to represent both Integer as well as Floating-Point numbers                             |
| Boolean             | boolean   | Represents true and false                                                                          |
| String              | string    | It is used to represent a sequence of characters                                                   |
| Void                | void      | Generally used on function return-types                                                            |
| Null                | null      | It is used when an object does not have any value                                                  |
| Undefined           | undefined | Denotes value given to uninitialized variable                                                      |
| Any                 | any       | If variable is declared with any data-type then any type of value can be assigned to that variable |

### What is typescript type annotations?

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
