const person = {
    name: 'Mohan',
    role: 'developer'
};

function printName () {
    console.log(person.name);
}

function printRole() {
    console.log(person.role);
}

// commonJS module export 
module.exports = {
    person,
    printName,
    printRole
};


// Ecmascript Module 

// 1 Named export => export {person, printName,printRole};

// 2 Export default => export default{ person, printName, printRole };

// 3 Export at line => export const person = {}
