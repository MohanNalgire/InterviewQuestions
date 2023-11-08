const calculat = {
    add: function (x, y) {
      return x + y;
    },
    subtract: function (x, y) {
      return x - y;
    }
  };
  
  console.log(calculat.add(5, 3)); 

  // Output: 8
  
  let person = {
    firstName: "Ram",
    lastName: "Sham",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); 

// Outputs: Ram Sham