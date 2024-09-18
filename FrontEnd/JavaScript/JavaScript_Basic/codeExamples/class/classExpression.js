const Car = class {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    info(){
        return `${this.brand} ${this.model}`;
    }
}

const car1 = new Car('Tesla', 'Model 3');
console.log(car1.info());
