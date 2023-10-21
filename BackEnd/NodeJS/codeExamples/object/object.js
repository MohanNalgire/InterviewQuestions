const user ={

};
const setUserAge = () => 20
const getUserAge = () => 20;
console.log('before adding properties', user);
// Here we are setting properties to object
user.first_name = 'Ram';
user.last_name = 'Patil';
user.getFullName = () => `${user.first_name} ${user.last_name}`;
user.setAge = setUserAge;
user.getAge = getUserAge();

console.log('After adding properties', user);