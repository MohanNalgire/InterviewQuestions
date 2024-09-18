
function findMissingArrayElement(arr,n){
    arr.sort((a,b)=>a-b);
    const filterEl = Array.from({length:n},(x,i)=>i+1).filter(el=> !arr.includes(el));
    return filterEl;
}
const arrNum =[5,3,2,1];
const positions = 5;
findMissingArrayElement(arrNum, positions);


// Testing 
const testCases = [
    { arr: [5, 3, 2, 1], n: 5 }, // Missing: [4]
    { arr: [1, 2, 3, 4], n: 5 }, // Missing: [5]
    { arr: [1, 2, 4, 5], n: 5 }, // Missing: [3]
    { arr: [2, 3, 4, 5], n: 5 }, // Missing: [1]
    { arr: [], n: 5 },           // Missing: [1, 2, 3, 4, 5]
    { arr: [1, 2, 3, 4, 5], n: 5 } // Missing: []
];

testCases.forEach(({ arr, n }) => {
    const missingElements = findMissingArrayElement(arr, n);
    console.log(`Missing elements for array ${arr} with range ${n}:`, missingElements);
});