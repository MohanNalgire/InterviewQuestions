/*let a=(b)=>{document.write("a is ",b);} 
let b=a("Trying to be good");*/

function vote(a,b){
 for(let i=a;i<=b;i--){
 if(i==25){
    
    console.log("you are elegible for voting",i)
 }
 else{
    console.log("result are not elegible",i);
    
 }
}

}

vote(17,25);
 