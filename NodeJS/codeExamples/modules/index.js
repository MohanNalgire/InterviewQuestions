/*
// variable assignment require
const personM = require('./personModule');

console.log('test on commonJS module', personM);

personM.printName();

personM.printRole();
*/
// Named require
const { person, printName, printRole } = require('./personModule');
// variable assignment require
// const personM = require('./personModule');

console.log('test on commonJS module', person);

printName();

printRole();
