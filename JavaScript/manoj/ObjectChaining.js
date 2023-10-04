/*const testObj = {
    myFunction(){
        return 'test my function'
    }
}
const test = {};
 console.log(testObj.myFunction?.());

//Output: test my function
*/
//
class Calculator {
    constructor() {
      this.value = 0;
    }
    
    add(num) {
      this.value += num;
      return this;
    }
    
    subtract(num) {
      this.value -= num;
      return this;
    }
    
    getValue() {
      return this.value;
    }
  }
  
  const calc = new Calculator();
  const result = calc
    .add(5)
    .subtract(3)
    .add(10)
    .getValue();
  
  console.log(result); 
  // Output: 12
  