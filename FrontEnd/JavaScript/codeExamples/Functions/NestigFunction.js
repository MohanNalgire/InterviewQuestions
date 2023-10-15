function mul(c) {
    //c=4
    console.log("inner level one",c);
   return function(a=50, b=100) {
       // console.log("function arguments", arguments);
       
        console.log("inner level two",a,b,c);
        return function(){
            
            console.log("inner level three",a,b,c);
            return  a + b + c;
        }
       
    }
    // we are returning for 1 function add
    //return add();
}
mul(4);
