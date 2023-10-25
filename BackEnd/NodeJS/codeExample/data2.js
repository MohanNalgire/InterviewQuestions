import { data } from "./data";


// console.log(data);

const callback = function (obj, index, /* array */){

    console.log(`index ${index}`,Object.keys(obj.testingNewValue)[0]);

};
data.forEach(callback, /* thisArg */);

//console.log('my result is',  data);

//NodeJS\codeExample\data2.js