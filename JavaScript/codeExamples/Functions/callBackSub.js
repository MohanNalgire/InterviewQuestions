function Sub(cach){
console.log("result hold by",cach);
}

function mySub(a,b ){
    let sub=a-b;
    return sub;

}

let result=mySub(30,13);
Sub(result);

//here i want to print show the result thats why i am using the call back function Sub Function()
//D:\projects\InterviewQuestions\JavaScript\codeExamples\Functions\callBackSub.js