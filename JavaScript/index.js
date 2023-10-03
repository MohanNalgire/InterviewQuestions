/* 
Write a program to take input from the user and show as 
event number 
odd number 
on each line.

Output:
odd 1
even 2
odd 3
even 4
*/
let num1 = prompt('enter value for A');
function testEvenOdd(a){
    for(let i=0; i<=a; i++){
        const result = (i%2===0)?`Even number${i}`:`Odd number${i}`;
       console.log(result);
    }
}
testEvenOdd(num1);


