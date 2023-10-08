var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"
var chars = str.split('');
console.log(chars[8]);
// Expected output: "k"
var strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
