/* 
Object creation by using the function constructor
*/

function User(firstName, lastName){
    this.firstName= firstName,
    this.lastName= lastName
}

const userDetails = new User("mohan", "nalgire");
console.log(userDetails);