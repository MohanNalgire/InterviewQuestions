/*The constructor method initializes properties, and the speak method uses 
this to access the name property.*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

const cat = new Animal("Whiskers");
cat.speak(); 
// Output: Whiskers makes a sound.
