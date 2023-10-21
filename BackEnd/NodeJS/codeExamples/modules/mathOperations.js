const mathModule  = require('./mathModule');
/*
// console.log('mathModule', mathModule, mathModule);

// console.log(mathModule.addition());

// console.log(mathModule.subtraction());

// console.log(mathModule.multiplicaiton());

console.log(mathModule.division());
*/

// script level scope declaration
const values = {
    a: 10,
    b: 20
};
const values1 = [
    10,
    20
];
// console.log('test on mathModule', mathModule);
// console.log(mathModule.addition(values.a, values.b));

// nconsole.log(values1.length);
// console.log(values1[0], values1[1], values1[2]);
// console.log(mathModule.addition(values1[0], values1[1]));

console.log(mathModule.addition(values['a'], values['b']));

// how access array values
// how to access object vlaues

// how to access module values
// how to access module functions

// how to import moudle in other file - for browser environment
// how to import module in other file - for node environment

