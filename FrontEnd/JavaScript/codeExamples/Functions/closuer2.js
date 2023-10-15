function test() {
    const a =10;
    const b =20;
    function summation(){
        console.log("inner level three",a,b);
        return a+b;
    }
    return summation;
  }
  const result = test();
  console.log('checking result', result());

  //inner level three 10 20
//checking result 30
