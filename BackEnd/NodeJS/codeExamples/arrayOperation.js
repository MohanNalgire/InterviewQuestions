const data = require('./dataArrayOfObject');
// forEach example
console.log(data.data);
const callback = function (obj, index) {
    console.log(`index ${index}`, Object.keys(obj.testingNewValue)[0]);
};
data.data.forEach(callback);

// reducer example

