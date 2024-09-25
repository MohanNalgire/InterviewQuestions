/*
1. Example of extend
2. Abstract class example with method - js still not support abstraction
3. System design approch -SOLID
    1. S => Single Responsibility
    2. O => Open & close
    3. L => Liskov Substitution
    4. I => Interface Segregation
    5. D => Dependancy Inverse
4. Loggincal Assigment ||= operator example
*/
class GroupingStrategy {
    group(items) {
        throw new Error("Mehtod 'group' should be implemented.")
    }
}

class GroupByProperty extends GroupingStrategy {
    constructor(property) {
        super();
        this.property = property;
    }
    group(items) {
        // console.log('Initial object', items);
        return items.reduce((result, item) => {
            const keyProp = item[this.property];
            if (!result[keyProp]) {
                result[keyProp] = [];
            }
            result[keyProp].push(item);
            return result;
        }, {});
    }
}

class GroupByFunction extends GroupingStrategy{
    constructor(func) {
        super();
        this.func = func;
    }
    group(items) {
        return items.reduce((result,item,index)=>{
            const keyProp = this.func(item);
            (result[keyProp]||=[]).push(item);
            return result;
        },{});
    }
}

const items = [
    { name: 'Alice', age: 25, department: 'Engineering' },
    { name: 'Bob', age: 30, department: 'Engineering' },
    { name: 'Charlie', age: 25, department: 'HR' },
    { name: 'David', age: 30, department: 'HR' },
];

const groupByProperty = new GroupByProperty('age');
// console.log(groupByProperty.group(items));

const groupByFunction = new GroupByFunction(item=>(item.age<30?"under 30":"30 and above"));
console.log(groupByFunction.group(items))
