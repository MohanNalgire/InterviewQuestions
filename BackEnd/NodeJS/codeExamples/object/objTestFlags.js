const testObj = {
    first_name: "Ram"
  };
  /* 
  1) Object.preventExtensions(testObj);
  
  Syntax: Object.preventExtensions(obj)
  Forbids the addition of new properties to the object.
  */
  /*
  2) Object.seal(testObj);
  Object.seal(obj)
  Forbids adding/removing of properties. Sets configurable: false for all existing properties.
  */
  /*
  3) Object.freeze(testObj);
  Object.freeze(obj)
  Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
  */
  Object.preventExtensions(testObj);
  testObj.last_name = "Patil";
  
  const descriptors = Object.getOwnPropertyDescriptors(testObj);
  console.log('test on descriptors =>', descriptors);
  
  /*
  const isDeleted = delete testObj.first_name;
  console.log('Test on testObj  seal =>', testObj, Object.isExtensible(testObj));
  */
  /*
  const descriptor = Object.getOwnPropertyDescriptor(testObj, 'first_name');
  console.log('test on descriptor =>', descriptor);
  */
  
  
  