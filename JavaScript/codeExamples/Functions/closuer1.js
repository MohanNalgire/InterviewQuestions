function mul(){
    let a=19;
    let b=20;
    let c=30;
    function summation(){
        console.log('inner level lsvel');
        return a+b+c;
    }
    return summation;
}
const result=mul();
console.log('checking result', result());