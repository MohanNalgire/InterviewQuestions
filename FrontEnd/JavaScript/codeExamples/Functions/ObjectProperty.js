//Accessing Object Properties
const person = {
    name: "John",
    age: 30,
    job: "Developer"
  };
  console.log(person.name); 
  // Output: John
  
// Updating Object Properties
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
  };
  car.year = 2022; // Update the 'year' property
  console.log(car.year);
   // Output: 2022
  
//Adding New Properties:

  const student = {
    name: "Alice",
    age: 20
  };
  student.grade = "A"; // Add a new 'grade' property
  console.log(student.grade); 
  
  // Output: A
  
// Using Bracket Notation

const product = {
    name: "Laptop",
    "in stock": true
  };
  console.log(product["name"]);      // Output: Laptop
  console.log(product["in stock"]); 
  // Output: true

  //Deleting Object Properties
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  delete book.year; // Delete the 'year' property
  console.log(book.year); // Output: undefined
  
  