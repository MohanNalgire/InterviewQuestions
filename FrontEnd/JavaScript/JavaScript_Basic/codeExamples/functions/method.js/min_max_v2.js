function minMaxSum(arr, position) {
    // Validate the position
    if (position <= 0 || position > arr.length) {
        throw new Error('Position must be greater than 0 and less than or equal to the length of the array.');
    }
    
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Calculate the sums using a single reduce function
    const { minSum, maxSum } = arr.reduce((acc, el, index) => {
        if (index < position) {
            acc.minSum += el; // Sum for the smallest elements
        }
        if (index >= arr.length - position) {
            acc.maxSum += el; // Sum for the largest elements
        }
        return acc;
    }, { minSum: 0, maxSum: 0 });
    
    return { minSum, maxSum };
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const position = 3;
const result = minMaxSum(array, position);
console.log(`Min Sum: ${result.minSum}, Max Sum: ${result.maxSum}`); // Output: Min Sum: 6, Max Sum: 27
