function test() {
    const a =20;
    const b =10;
    function summation(){
        console.log("inner level three",a,b);
        return a*b;
    }
    return summation;
  }
  const result = test();
  console.log('checking result', result());

 // inner level three 20 10
//checking result 200