// Adding a Method to an Existing Object
// Create an object
const car = {
    brand: "Tata",
    model: "Nexa"
  };
  
  // Add a method to the object
  car.start = function() {
    return "Starting the " + this.brand + " " + this.model;
  };
  
  // Access the method and call it
  console.log(car.start()); 
  // Output: "Starting the Tata Nexa"
  