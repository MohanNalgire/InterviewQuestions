function greet(name, callback) {
    console.log(`Hi ${name} good morning!`);
    callback();
}

function question() {
    console.log('How are you?');
}
greet('mahadev', question);