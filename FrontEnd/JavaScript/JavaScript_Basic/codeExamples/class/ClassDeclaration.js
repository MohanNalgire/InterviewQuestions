// Class declaration in JavaScript
class Person {
    // Constructor method
    constructor(name){
        this.name = name;
    }
    // Instance field
    myField ="foo";

    // class public methods
    // Instance method
    greet(){
        // greet method body
        return `Hello my welcom ${this.name}`
    }

    // static field
    static myStaticField = "bar";

    //
}

// Creating an instance of the class
const person1 = new Person('Mohan');
console.log(person1)