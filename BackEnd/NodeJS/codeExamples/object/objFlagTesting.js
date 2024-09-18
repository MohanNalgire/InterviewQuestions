const testObj = {
    first_name: "Ram"
  };
  const descriptors1 = Object.getOwnPropertyDescriptors(testObj);
  console.log('test on descriptors1 =>', descriptors1);
  // Object.seal(testObj);
  
  Object.freeze(testObj);
  testObj.last_name = "Patil";
  
  const descriptors2 = Object.getOwnPropertyDescriptors(testObj);
  console.log('test on descriptors2 =>', descriptors2);
  
  /*
  changing  => writable
  adding/removing => configurable
  iteration & display => enumberable
  */
  
  /* 
  Object.preventExtensions(obj) => new  properties not allowed 
  Object.isExtensible(obj); => test new properties can be added or not
  
  Object.seal(obj) => flag configurable: false
  Object.isSealed(obj); => test that if we can delete or change property
  
  
  Object.freeze(obj) => writable: false, configurable: false 
  Object.isFrozen(obj) => 
    test that 
    1) is property value changable = writable flag testing
    2) is property deletable and changable = configurable flag testing
  */