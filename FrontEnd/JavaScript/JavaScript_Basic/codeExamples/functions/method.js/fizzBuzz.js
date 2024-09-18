'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let i = 0; i < n; i++) {
        
        console.log(((i%3===0)?'Fizz':'') + ((i%5===0)?'Buzz':'')||i);
        /*
        const threeMul = (i % 3 === 0);
        const fiveMul = (i % 5 === 0);
        if (threeMul && fiveMul) {
            console.log(`FizzBuzz`);
        } else if (threeMul) {
            console.log(`Fizz`);
        } else if (fiveMul) {
            console.log(`Buzz`)
        }else{
            console.log(i )
        }
            */
    }


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
