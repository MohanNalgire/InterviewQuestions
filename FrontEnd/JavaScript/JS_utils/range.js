// 1. Lodash
const _ = require('lodash');
const range = _.range(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 2. Underscore
const _ = require('underscore');
const range = _.range(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. Vanilla JavaScript
function range(start,end){
    const result =[];
    for(let i =start; i<end;i++){
        result.push(i);
    }
    return result;
}
const myRange = range(0,10);

// 4. Aarray.form
const range = (start,end)=>Array.from({length:end-start},(_,i)=>start+i)