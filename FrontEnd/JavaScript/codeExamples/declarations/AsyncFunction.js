async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();
/*
async function example() {
  
    //creating a variable 
  let Data = new Promise((resolve, reject) => {
      //using setTimeout function so that
       //we get the result after some milliseconds 
    setTimeout(() => resolve("Resolved"), 1000)
  });

  let result = await Data; // wait until the Data resolves (*)

  alert(result); // "Resolved"
}

example();
*/