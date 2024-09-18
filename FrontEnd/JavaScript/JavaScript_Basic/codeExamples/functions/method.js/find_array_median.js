function findMedian(arr){
 arr.sort((a,b)=>a-b);

 const medianIndex = Math.floor(arr.length/2);

 console.log('test', arr, medianIndex);
}
const arr = [1,2,3,4,5,6,7];
findMedian(arr);