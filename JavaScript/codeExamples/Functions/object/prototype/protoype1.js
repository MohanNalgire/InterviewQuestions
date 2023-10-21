let user = {
    name: "mahadev",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  user.fullName = "rohan nikhil";
  
  console.log(user.name); 
  console.log(user.surname); 