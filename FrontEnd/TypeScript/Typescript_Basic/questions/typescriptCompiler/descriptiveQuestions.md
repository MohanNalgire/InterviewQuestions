
### What is Static type checking?

**Strong Static Typing** − JavaScript is not strongly typed. TypeScript comes with an optional static typing and type inference system through the TLS (TypeScript Language Service). The type of a variable, declared with no type, may be inferred by the TLS based on its value.

### How to compile typescript

### What is mean by `Erased types` in typescript?

### What is mean by `Downleveling` in typescript?

- **Downleveling**:  process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called downleveling.
- By default TypeScript targets ES3, an extremely old version of ECMAScript. 
- Running with `tsc --target es2015 <file_name.ts>` changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported.

### What are the main components of typescript?

At its heart, TypeScript has the following three components −

**Language** − It comprises of the syntax, keywords, and type annotations.

**The TypeScript Compiler** − The TypeScript compiler (tsc) converts the instructions written in TypeScript to its JavaScript equivalent.

**The TypeScript Language Service**− The "Language Service" exposes an additional layer around the core compiler pipeline that are editor-like applications. The language service supports the common set of a typical editor operations like statement completions, signature help, code formatting and outlining, colorization, etc.

### What are the declaration files in typescript?

- When a TypeScript script gets compiled, there is an option to generate a declaration file (with the extension .d.ts) that functions as an interface to the components in the compiled JavaScript. 
- The concept of declaration files is analogous to the concept of header files found in C/C++. 
- The declaration files (files with .d.ts extension) provide intellisense for types, function calls, and variable support for JavaScript libraries like jQuery, MooTools, etc.

### What is the basic syntax of typescript?

- Syntax defines a set of rules for writing programs. 
- Every language specification defines its own syntax. A TypeScript program is composed of −
    1) Modules
    2) Functions
    3) Variables
    4) Statements and Expressions
    5) Comments


### What is compilter flag in typescript?

Compiler flags enable you to change the behavior of the compiler during compilation. Each compiler flag exposes a setting that allows you to change how the compiler behaves.

### What are the different compiler flags used in typescript?

| S.No. | Compiler flag & Description | Description                                                    |
| :---- | :-------------------------- | :------------------------------------------------------------- |
| 1.    | help                        | Displays the help manual                                       |
| 2.    | module                      | Load external modules                                          |
| 3.    | target                      | Set the target ECMA version                                    |
| 4.    | declaration                 | Generates an additional .d.ts file                             |
| 5.    | removeComments              | Removes all comments from the output file                      |
| 6.    | out                         | Compile multiple files into a single output file               |
| 7.    | sourcemap                   | Generate a sourcemap (.map) files                              |
| 8.    | module noImplicitAny        | Disallows the compiler from inferring the any type             |
| 9.    | watch                       | Watch for file changes and recompile them on the fly |

