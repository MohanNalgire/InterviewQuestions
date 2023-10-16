//  closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 
function testing(){
    const number = 10, number2 = 20, number3= 30;
       // outer function block
       function testInner(num){ // num = function call paramter value as per data type of value type get declared
           console.log('printing numbers =>',number, number2,number3);
           // Inner function block
           let result = 0;
          
               for(let i=0; i<=num; i++)
               {
                   result += i;
               }
           console.log('testing on result =>', result);
       }
       return testInner(number);// calling function and returning value
   }
   testing();