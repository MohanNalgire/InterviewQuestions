/**
Given an array of positive integers, find the minimum and maximum values that can be calculated by summing exactly given number of the array integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/
function minMaxSum(arr, position) {
    // Check if the position is valid
    if (position <= 0 || position > arr.length) {
        throw new Error('Position must be greater than 0 and less than or equal to the length of the array.');
    }
    
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Calculate the min sum by summing the first 'position' smallest elements
    const minSum = arr.slice(0, position).reduce((acc, el) => acc + el, 0);
    
    // Calculate the max sum by summing the last 'position' largest elements
    const maxSum = arr.slice(-position).reduce((acc, el) => acc + el, 0);
    
    return { minSum, maxSum };
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const position = 3;
const result = minMaxSum(array, position);
console.log(`Min Sum: ${result.minSum}, Max Sum: ${result.maxSum}`); 