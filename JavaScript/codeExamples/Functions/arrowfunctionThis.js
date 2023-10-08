/*arrow function for sayHello leads to a different behavior for this, 
which refers to the global object instead of the user object.*/
const user = {
    firstName: 'Jane',
    sayHello: () => {
      console.log('Hello, ' + this.firstName);
    }
  };
  
  user.sayHello(); 
  // Output: Hello, undefined
  