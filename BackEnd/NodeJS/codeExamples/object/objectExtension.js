const testObj = {};

Object.preventExtensions(testObj);

testObj.first_name = 'Ram';

console.log('Test on testObj  extension =>', testObj);

/*
const descriptor = Object.getOwnPropertyDescriptor(testObj, 'first_name');
console.log('test on descriptor =>', descriptor);
*/
const descriptors = Object.getOwnPropertyDescriptors(testObj);
console.log('test on descriptors =>', descriptors);