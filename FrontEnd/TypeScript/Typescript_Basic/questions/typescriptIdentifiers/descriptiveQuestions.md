### What is typescript identifiers?

Identifiers are names we give to variables, functions, classes, and other things in our code. Keywords are special words with specific meanings in TypeScript and can't be used as identifiers. Identifiers must follow certain rules in naming variables, functions, and classes to avoid syntax errors.

### what are the rules of typescript identifiers?

>
Identifiers are names given to elements in a program like variables, functions etc. 
The rules for identifiers are −

1) Identifiers can include both, characters and digits. However, the identifier cannot begin with a digit.
2) Identifiers cannot include special symbols except for underscore (_) or a dollar sign ($).
3) Identifiers cannot be keywords.
4) They must be unique.
5) Identifiers are case-sensitive.
6) Identifiers cannot contain spaces.

Commonly used identifiers in TypeScript include variables, functions, classes, interfaces, and constants.

The following tables lists a few examples of valid and invalid identifiers −

| Valid identifiers | Invalid identifiers |
| ----------------- | ------------------- |
| firstName         | Var                 |
| first_name        | first name          |
| num1              | first-name          |
| $result           | 1number             |

Examples:

```typescript
    let testVariable: string = `Hello World`;
    const testObject: Object = {
    firstName: 'mohan'
}

```