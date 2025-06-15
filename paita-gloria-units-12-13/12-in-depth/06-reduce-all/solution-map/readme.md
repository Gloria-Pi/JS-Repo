# 06 Reduce All  - myMap()

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

# Approach to Solution - myMap()

## Step 1: Creating the `myMap` Function

The goal was to replicate the behavior of `Array.prototype.map()` using `reduce()` without modifying any prototype.

* The function accepts an array (`targetArray`) and a callback (`callbackFn`).
* A new array is created and returned by accumulating the results of the callback applied to each element.
* The callback receives the same parameters as the native `.map()`:

  * `element` — the current element being processed
  * `index` — the index of the current element
  * `array` — the entire array being traversed

This ensures compatibility with standard map logic.

<br>

## Step 2: Using `.reduce()` to simulate `.map()`

`.reduce()` is used to build a new array step by step.

```js
function myMap(targetArray, callbackFn) {
  return targetArray.reduce((accumulator, currElement, currIndex, targetArray) => {
    accumulator[currIndex] = callbackFn(currElement, currIndex, targetArray);
    return accumulator;
  }, []);
}
```

* The accumulator is initialized as an empty array `[]`.
* The result of the callback is assigned to the correct index in the accumulator: `accumulator[currIndex] = ...`.

This makes the resulting array identical to what `.map()` returns: a new array of the same length, with transformed elements at each index.

<br>

## Step 3: Why `accumulator.push()` was replaced

The initial version used `.push()` to accumulate results:

```js
accumulator.push(callbackFn(currElement, currIndex, targetArray));
```

This works **for most cases** and produces a correct output in a standard context.

However, `.map()` guarantees that:

* The returned array will have **the same length** as the input array.
* The callback's return values are assigned to **specific indexes**, preserving holes and sparse behavior if needed.

Using `.push()` always appends to the end, which could break index alignment, especially with sparse arrays. To preserve correct indexes and make the function more aligned with how `.map()` behaves internally, the version was changed to use:

```js
accumulator[currIndex] = ...
```

This ensures each transformed element is stored **at the same index** as the original one.

<br>

## Step 4: Testing the Function

Two test cases were used:

### Object transformation test

```js
const pokedex = [
  { pokedex: 1, pokemon: "Pikachu" },
  { pokedex: 2, pokemon: "Bulbasaur" },
  { pokedex: 3, pokemon: "Squirtle" },
  { pokedex: 4, pokemon: "Charmander" }
];

const result = myMap(pokedex, ({ pokedex, pokemon }) => ({ [pokedex]: pokemon }));
```

**Expected output:**

```js
[
  { 1: "Pikachu" },
  { 2: "Bulbasaur" },
  { 3: "Squirtle" },
  { 4: "Charmander" }
]
```

### Number transformation test

```js
const numbers = [1, 2, 3, 4, 5];
const result = myMap(numbers, n => n * n);
```

**Expected output:**

```js
[1, 4, 9, 16, 25]
```

Both results matched the output of `Array.prototype.map()`.