///Constructor Function
/*In this example, we define a constructor function Person to create person objects. We use the this 
 keyword to set properties and methods within the constructor function. We then create instances of the
 Person object using the new keyword.*/
 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }
  
  const person1 = new Person("Alice", "Smith");
  const person2 = new Person("Bob", "Johnson");
  
  console.log(person1.fullName()); 
  // Output: Alice Smith
  console.log(person2.fullName()); 
  // Output: Bob Johnson
  