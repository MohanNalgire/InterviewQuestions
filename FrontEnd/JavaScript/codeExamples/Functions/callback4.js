function greet(name, callback){
    console.log(`Hi ${name} good morning!.`);
    //callback();
}
function question(){
    console.log('How are you?');
}
greet('Mahadev',);

const callback = function question(){
    console.log('How are you?');
}                                            //Hi Mahadev good morning!.
callback();                                 //How are you?
question();                                //how are you?
