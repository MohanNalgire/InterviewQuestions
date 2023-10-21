
function sum(...args){// rest paramter wehre operator is rest ...
    /* 
    we need to check if the passed thing is iterable or not
    console.log(Symbol.iterator in Object(args));
    console.log(typeof args[Symbol.iterator]=== 'function')
    console.log(args);
    */
    let result = 0;
    /*
    for(let arg of args){
        result += arg;
    }
    */
    // for(let arg of args) result += arg;
    for(let arg of args){ result += arg; }
    return result;
    
}


console.log(sum(1,2,3,4,5));