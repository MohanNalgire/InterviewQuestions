function mul(c){
    console.log("inner level one",c);
    const function2=function(a=50,b=100){
        console.log("iner level two",a,b,c);
        return function(){
            console.log("inner level three",a,b,c);
            return a+b+c;
        }
    }
    return function2()

}
mul(4)
//D:\InterviewQuestions\