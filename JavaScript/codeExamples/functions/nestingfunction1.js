function mul(a) {
    let b=1,c=2;
    console.log("inner level one",a,b,c);
   return function( b=100) {
       console.log("inner level two",a,b,c);
       return function(c=200){
            console.log("inner level three",a,b,c);
            return  a + b + c;
        }
       
    }
    
}
mul(6)(7)(9)