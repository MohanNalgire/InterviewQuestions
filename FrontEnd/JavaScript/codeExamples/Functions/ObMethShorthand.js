//Using Object Method Shorthand
const person = {
  //we define an object person with properties firstName and lastName.  
    firstName: "Rohit",
    lastName: "Sharma",
    fullName() {

// use method shorthand syntax, where we directly define the fullName method within the object.     
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName());
   // Output: Rohit Sharma
  