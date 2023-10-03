function mul(c){
    console.log(("inner level two",c));

    const function2=function(a=50,b=100){
        console.log("inner level two",a,b,c);
   
    const function3=function(){

    console.log("inner level three",a,b,c);

        return a+b+c;
    }
    return function3()
}
return function2();

}
mul(4);