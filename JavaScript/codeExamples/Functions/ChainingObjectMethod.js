//Using Chaining Object Methods
const person = {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 30,
  };
  
  const result = Object.keys(person)
    .map(key => key.toUpperCase())// Convert keys to uppercase
  
    .join(", ");// Join keys with a comma and space
  
  console.log(result); 
  // Output: "FIRSTNAME, LASTNAME, AGE"