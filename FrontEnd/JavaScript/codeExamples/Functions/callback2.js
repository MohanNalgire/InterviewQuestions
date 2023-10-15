function greet(name, callback){
    console.log(`Hi ${name} good morning!.`);
    callback();
}
function question(){
    console.log('How are you?');
}
greet('Mahadev', question);

const callback = function question(){
    console.log('How are you?');
}
callback();