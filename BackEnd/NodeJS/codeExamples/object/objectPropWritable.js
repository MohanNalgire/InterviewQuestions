/*
 why node js is not showing Object.defineProperty when we add one property
 https://stackoverflow.com/questions/50951150/object-defineproperty-in-node-js
 */

const user = {

};

Object.defineProperty(
    user,
    "last_name",
    {
        value: 'Patil',
        writable: true,
        enumerable: true
    }
);
console.log('testing on object', user);console.log('test on user => ', user);

const descriptor = Object.getOwnPropertyDescriptor(user, 'first_name');
console.log('user object descriptor =>', descriptor);
