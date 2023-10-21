//we use the prototype to add a method to all instances created from the Person constructor.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  
  const person1 = new Person('Alice', 'Johnson');
  console.log(person1.fullName()); 
  // Output: Alice Johnson
  