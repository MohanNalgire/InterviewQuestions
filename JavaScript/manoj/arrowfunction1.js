//01 | write a program with arrow function for summation of 2 numbers. 
/*let test=(a,b)=>{
    return a+b;
    
}
let c=test(10,30);
consol.log(c)
*/
/*
let test=(a,b) => {
    sum=a+b;
    console.log(sum);

}
test(10,50)
*/
//antonymous function
/*
let sum = function(a, b) {
  return a + b;
}
let d=sum(40,20);
conson.log(d)

*/
//function declaration
/*
function test (a,b){
    return a*b;
    
}

let d= test(10,20);
 console.log(d);
 */
/*
 function multiplication (a,b,c){
    
    return a*b*c;
    
}
//consol.log(multiplication(4)(5)(6));

let d= test(10,20,30);
 console.log(d);

 */
 function mul(a) {
    
    console.log("inner level one",a,b,c);
   return function( b) {
       console.log("inner level two",a,b,c);
       return function(c){
            console.log("inner level three",a,b,c);
            return  a * b * c;
        }
       // return function3()
    }
    // return function2()();
}
mul(4)(5)(6);