/*
const numbers = [];

const obj = {a:1, b:2};

const {a:numbers[0], b:numbers[1]} = obj; // gives error Cannot redeclare block-scoped variable 'numbers'.
*/

const numbers =[];

const obj = {a:1, b:2};

({a:numbers[0], b: numbers[1]} = obj );
