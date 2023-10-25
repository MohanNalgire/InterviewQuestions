let user = {
    
};
console.log('test on variable => ', typeof user);

Object.defineProperties(
    user,
    {
    "first_name":{ value: "Ram",  writable: true, enumerable: true, configurable:true /* In nodeJS environment property must be true for showing values on console.*/},
    "last_name":{ value: "Patil", enumerable:true}
    }
    
);

console.log('test on object', user);

const descriptor = Object.getOwnPropertyDescriptors(user);
console.log('descriptor1 test', descriptor);

const isDeletable = delete user.first_name;
console.log('test on fist_name delet => ', isDeletable);
console.log('After delete action =>', user);

// Chaning object property value
user.first_name = "Mohan";
console.log('After adding property', user);