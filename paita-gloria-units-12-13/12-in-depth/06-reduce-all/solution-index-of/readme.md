# 06 Reduce All - myIndexOf

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

# Approach to Solution - myIndexOf()

## 1. Creating the function

The function `myIndexOf` replicates the behavior of `Array.prototype.indexOf` using `Array.prototype.reduce`.

It accepts three parameters:
- `targetArray`: the array to search.
- `searchElement`: the value to locate.
- `fromIndex` (optional): the index from which to begin the search. Can be negative.

The `.reduce()` implementation:
- Skips elements before `fromIndex`.
- Compares each element strictly (`===`) with `searchElement`.
- Stores and returns the first matching index, or returns `-1` if no match exists.

The initial accumulator is `-1`, representing "not found".

<br>

## 2. Handling `fromIndex` (including negative values)

The behavior of `indexOf()` with `fromIndex` follows specific rules:
- If `fromIndex` is omitted or is less than `-array.length`, it defaults to `0`.
- If `fromIndex >= array.length`, the result is `-1`.
- If `fromIndex` is in the range `-array.length <= fromIndex < 0`, the search begins at `array.length + fromIndex`.

The function adjusts the input accordingly:
```js
if (fromIndex < 0) {
  fromIndex = Math.max(targetArray.length + fromIndex, 0);
}
```

## Examples:

```js
myIndexOf(["a", "b", "c", "d"], "b", -3); // => 1
myIndexOf(["a", "b", "c", "d"], "a", -10); // => 0
myIndexOf(["a", "b", "c", "d"], "a", 10); // => -1
```

<br>

## 3. Notes on `NaN` and strict equality

Since both `indexOf` and `myIndexOf` use strict equality (`===`), `NaN` cannot be found:

* `NaN` is not equal to itself (`NaN === NaN` is false).
* As a result, the function always returns `-1` when searching for `NaN`.

```js
myIndexOf([NaN, NaN], NaN); // => -1
[NaN, NaN].indexOf(NaN);    // => -1
```

To search for `NaN`, a different strategy using `Number.isNaN()` would be required.

<br>

## 4. Empty arrays and skipped elements

When used on an empty array, both `myIndexOf` and `indexOf` return `-1`.

```js
myIndexOf([], "Pikachu"); // => -1
[].indexOf("Pikachu");    // => -1
```

Like `indexOf`, `.reduce()` skips empty slots in sparse arrays.

<br>

## 5. Final considerations

Using `.reduce()` introduces a limitation: early termination is not possible (unlike `for` loops).
To ensure that only the **first matching index** is used, the accumulator is only overwritten if it still equals `-1`.

The function replicates `indexOf` behavior for:

* Multiple matches
* Falsy values (`false`, `0`, `""`, `undefined`, `null`)
* Negative or out-of-bounds indexes
* Empty arrays
* Non-matching searches

<br>

## 6. Example outputs

```js
myIndexOf(["Pikachu", "Bulbasaur", "Pikachu"], "Pikachu");
// => 0

myIndexOf(["Pikachu", "Bulbasaur", "Pikachu"], "Pikachu", 1);
// => 2

myIndexOf(["Pikachu", "Bulbasaur", "Pikachu"], "Mew");
// => -1

myIndexOf([false, 0, "", NaN], NaN);
// => -1

myIndexOf([], "Charmander");
// => -1
```