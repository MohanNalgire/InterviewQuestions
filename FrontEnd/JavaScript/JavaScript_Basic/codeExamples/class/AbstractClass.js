class Shape{

    constructor(){
        if(this.constructor === Shape){
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculateArea(){
        throw new Error('Method "" must be implemented.');
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius =radius;
    }

    calculateArea(){
        // return Math.PI * Math.pow(this.radius,2);
        return Math.PI * (this.radius**2);
    }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea());