
 // Nested Objects
const address = {
    street: " c1 Main St",
    city: "Anytown",
    state: "Maharashtra"
  };
 
  const personWithAddress = {
    firstName: "Ramesh",
    lastName: "Sumit",
    age: 25,
    address: address
  };
  
  console.log(address); 
  //street: ' c1 Main St', city: 'Anytown', state: 'Maharashtra' 
  
  console.log(personWithAddress);
  /*firstName: 'Ramesh',
    lastName: 'Sumit',
    age: 25,
    address: { street: ' c1 Main St', city: 'Anytown', state: 'Maharashtra' */
  
  