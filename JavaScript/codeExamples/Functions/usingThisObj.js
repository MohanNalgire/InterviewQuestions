/*The object has properties firstName and lastName, as well as a method fullName that uses the 
this keyword to access the object's properties.*/
const person = {
    firstName: "manoj",
    lastName: "jadhav",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  
  console.log(person.fullName()); 
  // Output: manoj jadhav
  






var User = function(){
    this.firstName = 'mohan',
     this.lastName = 'nalgire'
    this.getnameDetails = function(){
     console.log(this);
    }
 };
 const user = new User();
 console.log(user?.getnameDetails());
 

var user1 = {
   firstName: 'mohan',
   lastName: 'nalgire',
   getnameDetails: function(){
       console.log(this);
   }
 }
 user1.getnameDetails()

