// Function call itself is a recusrion

// iteration 
/*
function powerCalculation(x, n){
    let result =1;
    for(let i =0;i< n; i++){// number of times or iteration
        result *=x;
    }
    return result;
}
*/

function powerCalculation(x, n){
    if(n == 1){
        return x; // 2*1 = 2;
    }else{
        return x * powerCalculation(x, n-1);
        // 2* powerCalculation(2, n-1)
    }
}

// const test1 = powerCalculation(2, 16);
const test2 = powerCalculation(2,4);
console.log(test2);




