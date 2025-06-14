/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Custom implementation of the Array.prototype.filter() method using Array.prototype.reduce().
 * The function `myFilter` takes an array and a callback function, and returns a new array
 * containing only the elements for which the callback returns a truthy value.
 * 
 * Includes multiple test cases comparing the custom implementation with the built-in method.
 */

/**
 * Filters an array based on a callback function, using reduce.
 *
 * @function myFilter
 * @description
 * Iterates over each element of the input array, applies the callback function,
 * and constructs a new array containing only the elements for which the callback returns a truthy value.
 *
 * @param {Array} anArray - The array to filter.
 * @param {Function} callbackFn - The function used to test each element.
 * Takes three arguments: current element, index, and the original array.
 *
 * @returns {Array} A new array with the elements that pass the test.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const even = myFilter(numbers, num => num % 2 === 0);
 * console.log(even); // [2]
 */
function myFilter(anArray, callbackFn) {
    return anArray.reduce((filteredArray, current, index, originalArray) => {
        if (callbackFn(current, index, originalArray)) {
            filteredArray.push(current); // Add only elements that pass the test
        }
        return filteredArray;
    }, []);
}

//-------------------------------------
// Testing with strings

const pkmnArray = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander", "Chikorita", "Cyndaquil", "Totodile"];

console.log(" ");
console.log("======== Testing the function myFilter() ========");

const myOddPokemon = myFilter(pkmnArray, (_, index) => {
    return index % 2 === 1; // Keep only Pokémon at odd indices
});

console.log(myOddPokemon);

console.log("======== Testing Array.prototype.filter() ========");


const oddPokemon = pkmnArray.filter((_, index) => {
    return index % 2 === 1;
});

console.log(oddPokemon);


//-------------------------------------
// Testing with numbers


const numberArray = [1, 2, 3, 4, 5, 6, 7];

console.log(" ");
console.log("======== Testing the function myFilter() ========");

const myBigNumbers = myFilter(numberArray, ((num, index, numberArray) => {
    return (num * index * numberArray.length) >= 100;
}));

console.log(myBigNumbers);

console.log("======== Testing Array.prototype.filter() ========");

const bigNumbers = numberArray.filter((num, index, numberArray) => {
    return (num * index * numberArray.length) >= 100;
});

console.log(bigNumbers);

//-------------------------------------
// Testing with truthy and falsy values


const falsyArray = [0, false, "", undefined, null];

console.log(" ");
console.log("======== Testing the function myFilter() ========");

const myTruthyArray = myFilter(falsyArray, currValue => currValue); // Keep only truthy values
console.log(myTruthyArray);

console.log("======== Testing Array.prototype.filter() ========");

const truthyArray = falsyArray.filter(currValue => currValue);
console.log(truthyArray);