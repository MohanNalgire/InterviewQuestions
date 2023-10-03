let vote=(start,end)=>{

    
    for(let i=start;i<=end;i++){
    
    
        if(i%2==0)
        {
            document.write(" Number is even <br>",i);
        }
        else
        {
            document.write("number is odd<br>",i);
        }
    }
    
}
vote(0,20);


