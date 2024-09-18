/*
concept 
1. Inheritance
2. Child class without constructor
3. calling parent getter and setter without constructor and super()
*/

class Name {
protected FirstName!: string;
private LastName!: string;
private FullName!:string;

set firstName(first_name:string){
  this.FirstName = first_name;
}
get firstName(){
  return this.FirstName;
}

}
class Test extends Name {
  getFullName(){
    return super.firstName
  }
}

const test = new Test();
test.firstName = "mohan"
console.log(test.getFullName())