# 06 Reduce All - myForEach

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

# Approach to Solution - `myForEach()`

## Understanding forEach()

The native `Array.prototype.forEach()` method:

```js
array.forEach((element, index, array) => {
  // do something
});
```

* Executes the callback function once for each *assigned* element in the array.
* Skips empty slots (also known as "holes") in sparse arrays.
* Always returns `undefined`, so it cannot be chained.
* Used primarily for side effects like logging or mutations outside the array.

<br>

## Creating the function

The goal was to replicate the `forEach()` behavior using the `reduce()` method.

### Key aspects:

* The return value is irrelevant — the function is used only for its side effects.
* Like `forEach()`, `reduce()` also skips holes in arrays (i.e., indexes without values), which means it can be used to replicate this behavior accurately.
* The function does not return anything (`undefined`), consistent with the native behavior.

### Implementation:

```js
function myForEach(anArray, callbackFn) {
    anArray.reduce((_, current, index, originalArray) => {
        callbackFn(current, index, originalArray);
        return undefined;
    }, undefined);
}
```

<br>

## Explanation of reduce in this context

The `reduce()` method is typically used to compute a single value by accumulating results over an array.

In this case:

* The accumulator is not used.
* Instead, `reduce()` is used to loop over the array, just like `forEach()`.
* Because `reduce()` ignores holes in sparse arrays, it matches the exact iteration behavior of `forEach()`.

So, the use of `reduce()` allows `myForEach()` to:

* Skip empty slots,
* Provide access to the element, index, and original array,
* Execute side effects for each assigned value,
* Return `undefined`.

<br>
<br>

# Testing the function

## 🔹 Strings

```js
const pkmnArray = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"];

myForEach(pkmnArray, (pkmn, index, array) => {
    console.log(`#${index + 1} - ${pkmn} (from an array of length ${array.length})`);
});
```

**Expected output:**

```txt
#1 - Pikachu (from an array of length 4)
#2 - Bulbasaur (from an array of length 4)
#3 - Squirtle (from an array of length 4)
#4 - Charmander (from an array of length 4)
```

Matched output from `Array.prototype.forEach()`.

<br>

## 🔹 Numbers

```js
const numberArray = [1, 2, 3, 4, 5];

myForEach(numberArray, (num, index, array) => {
    const product = num * array.length;
    console.log(`The product of index ${index} is ${product}`);
});
```

**Expected output:**

```txt
The product of index 0 is 5
The product of index 1 is 10
The product of index 2 is 15
The product of index 3 is 20
The product of index 4 is 25
```

Identical to the native version.

<br>

## 🔹 Sparse arrays (with empty slots)

```js
const digimonArray = ["Agumon", "Gabumon", , "Palmon", "Patamon"];

myForEach(digimonArray, (digimon, index, array) => {
    console.log(`#${index + 1} - ${digimon} (from an array of length ${array.length})`);
});
```

**Expected output:**

```txt
#1 - Agumon (from an array of length 5)
#2 - Gabumon (from an array of length 5)
#4 - Palmon (from an array of length 5)
#5 - Patamon (from an array of length 5)
```

Matches native `forEach()` behavior: index 2 (empty slot) is skipped.