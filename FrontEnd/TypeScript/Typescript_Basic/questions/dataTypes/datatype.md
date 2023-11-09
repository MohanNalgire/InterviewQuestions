# Data types

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
