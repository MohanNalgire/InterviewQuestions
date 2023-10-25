const user = {};

// assign properties to user 
user.first_name = 'Ram';
user.last_name = 'Patil';
user.age = 30;

user.first_name = 'Mohan';
console.log('check obj user =>', user);
console.log(' checking type of variable =>', typeof user);

console.log(Object.getOwnPropertyDescriptors(user));
