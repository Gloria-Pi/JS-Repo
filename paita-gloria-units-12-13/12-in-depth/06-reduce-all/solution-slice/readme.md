# 06 Reduce All - mySlice

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Make sure that you fully understand the Array reduce method
Write functions that use the reduce method to implement your version of the following Array methods:
`forEach()` , `map()`, `filter()` , `indexOf()` , `slice()`

For each method, implement parameters and return values as in the documentation  
    - do not use `Array.prototype`  
    - your functions receive as a first parameter the array on which to operate  
    - all other parameters should be identical to the documentation  
    - except for the `thisArg` parameter, you don't have to implement it  

For example your implementation of `forEach` could be something like this:

```js
function myForEach(arr, ... ) {
}
```

Testing:  
    - write tests that compare the output of your functions to those of the Array methods  
    - write several and comprehensive tests for each method  
    - make sure that your methods give the same output as the originals  

```js
// Example of testing myMap
// group of arrays used for testing
let testGroup = [
    [1, 2, 3, 4, 5],
    [0, 0, 3, 4, 5],
    [7, 0, 9, 74, 85, 1, 42, 3, 88]
];

// test function for testing map - can be any function as long as the parameters are what map expects
let testFunc = function (num) {
    return num * 2;
};

// replace this with your implementation of map using reduce
function myMap(arr, ... ) {
}

console.log('==== Testing Array.map() method ====');
testGroup.forEach(function (arr) {
    console.log(arr.map(testFunc));
});

console.log('\n==== Testing the function myMap() ====');
testGroup.forEach(function (arr) {
    console.log(myMap(arr, testFunc));
});
// note that tests for forEach, indexOf, filter and slice will be different because the methods behave differently
```

<br>
<br>

# Approach to Solution - mySlice()

## Step 1: Understanding `slice()` behavior

The native `slice()` method:
- Accepts an optional `start` and `end` index
- Interprets negative indices as offsets from the array's end
- Returns a **shallow copy** of the selected portion
- Ignores elements outside of the range

Examples:
```js
["a", "b", "c", "d"].slice(1, 3)      // ["b", "c"]
["a", "b", "c", "d"].slice(-2)        // ["c", "d"]
["a", "b", "c", "d"].slice(2, -1)     // ["c"]
["a", "b", "c", "d"].slice(0, 0)      // []
```

<br>

## Step 2: Creating `mySlice`

The function takes three arguments:
`targetArray`, `start = 0`, and `end`.

It:

* Adjusts `start` and `end` if they are negative
* Clamps values to avoid out-of-bounds errors
* Uses `reduce()` to build the resulting array, adding only elements within the range `[start, end)`

<br>

### Step 3: Decision about `accumulator.push()` vs `accumulator[currIndex]`

During development, `accumulator.push(currValue)` was used inside the reducer function.
This approach works fine because the accumulator is an array, and pushing values in order is the simplest way to fill it.

An earlier test was also done with:

```js
accumulator[currIndex] = currValue;
```

However, this was abandoned because:

* It would insert the element at `currIndex` rather than appending to the output array
* It would produce sparse arrays with empty slots if `start > 0`

Final implementation uses `push()` because it builds a clean result with correct order and no gaps.

<br>

# Final Code

```js
function mySlice(targetArray, start = 0, end) {
    // Handle the start index
    if (start < 0) {
        start = targetArray.length + start;
    }
    if (start < 0) {
        start = 0;
    }
    if (start >= targetArray.length) {
        return [];
    }

    // Handle the end index
    if (end === undefined || end > targetArray.length) {
        end = targetArray.length;
    }
    if (end < 0) {
        end = targetArray.length + end;
    }
    if (end < 0) {
        end = 0;
    }

    // Used reduce to build the sliced array
    return targetArray.reduce((accumulator, currValue, currIndex) => {
        if (currIndex >= start && currIndex < end) {
            accumulator.push(currValue);
        }
        return accumulator;
    }, []);
}
```

<br>

# Output Examples

```js
const arr = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"];

mySlice(arr);               // ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"]
mySlice(arr, 1);            // ["Bulbasaur", "Squirtle", "Charmander"]
mySlice(arr, 1, 3);         // ["Bulbasaur", "Squirtle"]
mySlice(arr, 0, 0);         // []
mySlice(arr, 2, 0);         // []
mySlice(arr, 2, -1);        // ["Squirtle"]
mySlice(arr, -2);           // ["Squirtle", "Charmander"]
```