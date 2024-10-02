/*
Write code for a class that represetn one ojbect with 3 properties a, b,c and assign vlaue to them from constructor. 
Add 2 methods to class one is for immutable property and one for muitable property change.
*/

class  MyClass {
    constructor(a,b,c){
        this._a = a; // Immutable property
        this.b = b; // Mutable property
        this.c = c; // Mutable property
    }

    // Method to get the immutable property
    getImmutable(){
        return this._a;
    }

    // Method to change a mutable property
    setMutable(newValue){
        this.b = newValue;
    }
}

const myClassObj = new MyClass(10, 20, 30);
console.log(myClassObj.getImmutable);
console.log(myClassObj.b);
console.log(myClassObj.c);

myClassObj.setMutable(50);
console.log(myClassObj.b);
