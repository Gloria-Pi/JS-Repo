/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains a custom implementation of the `indexOf()` method using `Array.prototype.reduce`.
 * The function mimics the native behavior of `Array.prototype.indexOf()` including:
 * - Handling of the `fromIndex` parameter (positive and negative)
 * - Returning -1 if the element is not found
 * - Skipping empty slots
 * - Not matching `NaN` due to strict equality
 */

/**
 * Custom implementation of Array.prototype.indexOf using reduce.
 *
 * @function myIndexOf
 * @description
 * Searches for the first occurrence of a given element in an array, starting from an optional index.
 * Returns the index if found, or -1 if not found. This version uses `reduce` and mimics native behavior.
 *
 * @param {Array} targetArray - The array to search in.
 * @param {*} searchElement - The element to locate in the array.
 * @param {number} [fromIndex=0] - The index to start searching from. Can be negative to count from the end.
 * @returns {number} The index of the first matching element, or -1 if not found.
 *
 * @example
 * myIndexOf(["a", "b", "c"], "b");           // returns 1
 * myIndexOf(["a", "b", "c"], "d");           // returns -1
 * myIndexOf(["a", "b", "a"], "a", 1);        // returns 2
 * myIndexOf(["a", "b", "c"], "a", -2);       // returns -1
 */
function myIndexOf(targetArray, searchElement, fromIndex = 0) {
    // Adjusts negative fromIndex to a valid non-negative starting point
    if (fromIndex < 0) {
        fromIndex = Math.max(targetArray.length + fromIndex, 0);  // Handles too negative values
    }

    return targetArray.reduce((accumulator, curElement, currIndex) => {
        // Skip elements before the starting index
        if (currIndex < fromIndex) {
            return accumulator;
        }

        // If match is found and we haven't already found one, return its index
        if (curElement === searchElement && accumulator === -1) {
            return currIndex;
        }

        // If we've gone through the array and haven't found the match, return -1
        return accumulator;
    }, -1);  // Starting with "Not found"
}

//-------------------------------------
// Testing with strings

const caughtPokemon = [
    "Pikachu", "Bulbasaur", "Squirtle", "Charmander",
    "Pikachu", "Chikorita", "Totodile"
];

console.log("======== Testing the function myIndexOf() ========");
console.log(myIndexOf(caughtPokemon, "Pikachu"));        // → 0
console.log(myIndexOf(caughtPokemon, "Pikachu", 1));     // → 4 (second "Pikachu")
console.log(myIndexOf(caughtPokemon, "Mew"));            // → -1 (not found)
console.log(myIndexOf(caughtPokemon, "Pikachu", 8));     // → -1 (fromIndex too large)
console.log(myIndexOf(caughtPokemon, "Pikachu", -4));    // → 4 (starts from index 3)
console.log(myIndexOf([], "Pikachu"));                   // → -1 (empty array)

console.log("======== Testing Array.prototype.indexOf() ========");

console.log(caughtPokemon.indexOf("Pikachu"));
console.log(caughtPokemon.indexOf("Pikachu", 1));
console.log(caughtPokemon.indexOf("Mew"));
console.log(caughtPokemon.indexOf("Pikachu", 8));
console.log(caughtPokemon.indexOf("Pikachu", -4));
console.log([].indexOf("Pikachu", -1));

//-------------------------------------
// Testing with falsy values

let falsyArray = [false, 0, "", NaN];

console.log(" ");

console.log("======== Testing the function myIndexOf() ========");
console.log(myIndexOf(falsyArray, false));  // → 0
console.log(myIndexOf(falsyArray, 0));      // → 1
console.log(myIndexOf(falsyArray, ""));     // → 2
console.log(myIndexOf(falsyArray, NaN));    // → -1 (NaN !== NaN)

console.log("======== Testing Array.prototype.indexOf() ========");

console.log(falsyArray.indexOf(false));
console.log(falsyArray.indexOf(0));
console.log(falsyArray.indexOf(""));
console.log(falsyArray.indexOf(NaN));       // Always -1 because NaN !== NaN