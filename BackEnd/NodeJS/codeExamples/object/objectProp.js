const user = {};

user.first_name = 'Ram';
console.log('Test1 on user =>', user);
// we are testing writable => true 
user.first_name = 'Mohan';
console.log('Test2 on user =>', user);
console.log(Object.getOwnPropertyDescriptor(user, 'first_name'));
// checking variable type
console.log(typeof user);
// we are testing enumberable => true
for(const prop in user)console.log('user props =>', prop)
console.log(Object.getOwnPropertyDescriptor(user, 'first_name'));
// we are testing configurable => true
console.log('testin on user first_name delete =>', delete user.first_name);
console.log('test on our user obj =>', user);
// printing all the details of object property
console.log(Object.getOwnPropertyDescriptor(user, 'first_name'));

/*
Object property flags
1. writable =>
    Specifies whether the property can be changed.
2. enumberable => 
    Specifies whether the property can be returned in a for/in loop.
    An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method
3. configurable => 
    Specifies whether the property can be deleted or changed.
*/

/*
Test1 on user { first_name: 'Ram' }
Test2 on user { first_name: 'Mohan' }
object
{
  value: 'Mohan',
  writable: true,
  enumerable: true,
  configurable: true
}
*/







// why value of object property is changing



