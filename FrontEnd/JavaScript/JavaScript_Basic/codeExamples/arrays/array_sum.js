function findCombinations(arr, targetSum) {
    const result = [];

    function findComb(currentComb, startIndex, currentSum) {
        if (currentSum === targetSum) {
            result.push([...currentComb]);
            return;
        }
        if (currentSum > targetSum) return;

        for (let i = startIndex; i < arr.length; i++) {
            currentComb.push(arr[i]);
            findComb(currentComb, i + 1, currentSum + arr[i]);
            currentComb.pop();
        }
    }

    findComb([], 0, 0);
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 6;
const combinations = findCombinations(arr, targetSum);
console.log(combinations);
// [ [ 1, 2, 3 ], [ 1, 5 ], [ 2, 4 ], [ 6 ] ]
