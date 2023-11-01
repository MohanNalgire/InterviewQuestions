1. reverse() vs toReversed()

| point | reverse | toReversed() |
| :---:| :--- | :--- |
| mutation     | will mutating the array  | will not mutate the original array  |
| sparse array | will sparse the array    | will not creating a sparse array    |

*sparse arrays*

- Sparse arrays are arrays without sequential elements.

2. sorted() vs toSorted()

| point | soreted() | toSorted() |
| :---:| :--- | :--- |
| mutation     | will mutating the array  | will not mutate the original array  |
| sparse array | will return empty at last for empty slot    | will return undefined at last for empty slot   |
|              | Example: ['🍊orange', '🍌banana', '🍎apple', empty]  |Example: ['🍊orange', '🍌banana', '🍎apple', undefined]   |

3. sorted() vs toSorted()

| point | splice() | toSpliced() |
| :---:| :--- | :--- |
| mutation     | will mutating the array  | will not mutate the original array  |
| sparse array | will return sparse array | toSpliced() never returns a sparse array.  |
|              | Example:   |Example:    |