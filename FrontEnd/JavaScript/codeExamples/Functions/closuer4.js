function test() {
    const a =10;
    const b =20;
    function summation(){
        return a*b;
    }
    return summation;
  }
  const result = test();
  console.log('checking result',result());

  //checking result 200