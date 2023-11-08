//Chaining Promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(1000)
    .then(() => console.log("One second has passed."))
    .then(() => delay(2000))
    .then(() => console.log("Another two seconds have passed."));
    /*Output: One second has passed.
    Another two seconds have passed.*/
      