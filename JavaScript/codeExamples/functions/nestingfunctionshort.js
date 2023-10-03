function mul(c){
    console.log("inner level one",c);
     return function(a=50,b=100){
       console.log("inner level two",a,b,c);
       return function(){
         console.log("inner level three",a,b,c);
         return a+b+c;
       }
         
     }
  }
      mul(4)()();

      //D:\InterviewQuestions\JavaScript\codeExamples\functions\nestingfunctionshort.js