# 06 Reduce All - myFilter

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

# Approach to Solution - `myFilter()`

## The original filter() method:

* Calls a **callback function** for each element in the array.
* Passes three arguments to the callback: the current **element**, its **index**, and the **original array**.
* Returns a **shallow copy** of the original array, containing only the elements for which the callback returns a **truthy** value.
* If no elements pass the test, the result is an **empty array**.

```js
array.filter((element, index, array) => {
  // return true to keep the element
});
```

<br>
<br>

# Creating the Function

## Core idea:

Use `reduce()` to accumulate only the elements that pass the callback test.

```js
function myFilter(anArray, callbackFn) {
    return anArray.reduce((filteredArray, current, index, originalArray) => {
        if (callbackFn(current, index, originalArray)) {
            filteredArray.push(current);
        }
        return filteredArray;
    }, []);
}
```

## Logic

With `reduce()`, the function manually builds a new array by pushing only the elements that pass that test.

* `filteredArray` is the accumulator, initially an empty array `[]`. It's the final result array being built.
* `current`: the current element of the array.
* `callbackFn(...)`: applies the test to each item.
* If the result is **truthy**, the current element is pushed into the accumulator.
* At the end, the accumulator is returned.


<br>
<br>

## Testing the Function

### 🔹 Odd-indexed Pokémon names:

```js
const pkmnArray = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander", "Chikorita", "Cyndaquil", "Totodile"];

const myOddPokemon = myFilter(pkmnArray, (_, index) => index % 2 === 1);
console.log(myOddPokemon);

const oddPokemon = pkmnArray.filter((_, index) => index % 2 === 1);
console.log(oddPokemon);
```

**Output:**

```js
[ 'Bulbasaur', 'Charmander', 'Cyndaquil' ]
[ 'Bulbasaur', 'Charmander', 'Cyndaquil' ]
```

<br>

### 🔹 Numbers that match a custom condition:

```js
const numberArray = [1, 2, 3, 4, 5, 6, 7];

const myBigNumbers = myFilter(numberArray, (num, index, arr) => (num * index * arr.length) >= 100);
console.log(myBigNumbers);

const bigNumbers = numberArray.filter((num, index, arr) => (num * index * arr.length) >= 100);
console.log(bigNumbers);
```

**Output:**

```js
[ 6, 7 ]
[ 6, 7 ]
```

<br>

### 🔹 Filtering only truthy values:

```js
const falsyArray = [0, false, "", undefined, null];

const myTruthyArray = myFilter(falsyArray, currValue => currValue);
console.log(myTruthyArray);

const truthyArray = falsyArray.filter(currValue => currValue);
console.log(truthyArray);
```

**Output:**

```js
[]
[]
```