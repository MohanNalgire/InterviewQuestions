const test = {
    values: { a: 10, b: 20 }
  };
  // console.log(test.values);
  // console.log(test.values.a);
  // how to copy object
  
  let objClone = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(test)
  );
  console.log(objClone);
    