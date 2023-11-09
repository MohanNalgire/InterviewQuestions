/*
Inheritance: 
1) core feature of any programming language
2) It allow use to use already existing code with its behaviour and data of an object in JS

class base Inheritance types:
1) single inheritance
2) multiple inheritance
3) multilevel inheritance
4) hierarchical inheritance
5) hybird inheritance


Types of inheritance in JavaScript
1) prototypal inheritance
2) Pseudo-classical inheritance
3) Functional inheritance
https://linuxhint.com/javascript-inheritance-types-2/
*/
/*
 [[prototype]]: object
 __proto__:null
*/
let user = {
    firstname: 'Ravi',
    lastName: 'Jadhav',
    fullName : function(){
        console.log('testing vlaue of this => ', this);
        return `${this.firstname} ${this.lastName}`;
    }
};

/*
[[prototype]]:object
    firstname: 'Ravi'
    lastName: 'Jadhav'
    [[prototype]]:object
    __proto__: null

*/
/*
let employee = {
    __proto__:user // We are inheriting object user
}
*/
/*
Following things will not work 
1) let employee = __proto__.user;
2) let employee = {};
*/

let employee = {}
console.log('test on user.fullname()', user.fullName());
// console.log('test on employee.fullname() =>', employee.fullName()); // we are just calling the prototype object method
/* 
This line will convert 
employee.__proto__ =  user;  to employee.__proto__:user 
and add to above object.
Object assignement changes = to : in above object
*/
employee.__proto__ = user;
console.log('test on employee', employee);

console.log('print fistname => ', employee.firstname);
console.log('print lastname =>', employee.lastName);

console.log(employee.__proto__.firstname);
