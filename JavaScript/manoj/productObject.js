//Creating a Product Object
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  const laptop = new Product('Laptop', 999.99);
  console.log(laptop.price); 
  // Output: 999.99
  