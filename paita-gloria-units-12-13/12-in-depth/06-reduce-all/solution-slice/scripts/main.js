/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Reimplementation of the Array.prototype.slice() method using Array.prototype.reduce().
 * Handles both positive and negative indices and supports omitted or undefined parameters,
 * returning a shallow copy of a portion of the given array.
 */

/**
 * Returns a shallow copy of a portion of an array into a new array object.
 * This custom implementation uses reduce() to reproduce the behavior of Array.prototype.slice().
 *
 * @function mySlice
 * @param {Array} targetArray - The array to slice.
 * @param {number} [start=0] - The zero-based index at which to begin extraction. Negative values count from the end.
 * @param {number} [end] - The zero-based index before which to end extraction. The element at this index is not included. Negative values count from the end.
 * @returns {Array} A new array containing the extracted elements.
 * 
 * @example
 * mySlice(["a", "b", "c", "d"], 1, 3); // ["b", "c"]
 * mySlice(["a", "b", "c", "d"], -2);   // ["c", "d"]
 * mySlice(["a", "b", "c", "d"], 2, -1); // ["c"]
 */
function mySlice(targetArray, start = 0, end) {
    // Handle the start index
    if (start < 0) {
        start = targetArray.length + start; // Adjust for negative start
    }
    if (start < 0) {
        start = 0; // Clamp to 0 if still negative
    }
    if (start >= targetArray.length) {
        return []; // If start is out of bounds, return empty array
    }

    // Handle the end index
    if (end === undefined || end > targetArray.length) {
        end = targetArray.length; // If no end or out of bounds, slice to the end
    }
    if (end < 0) {
        end = targetArray.length + end; // Adjust for negative end
    }
    if (end < 0) {
        end = 0; // Ensure end is not out of bounds (negative)
    }

    // Use reduce to build the sliced array
    return targetArray.reduce((accumulator, currValue, currIndex) => {
        if (currIndex >= start && currIndex < end) {
            accumulator.push(currValue); // Push values within the range to the result array
        }
        return accumulator;
    }, []);
}

//-------------------------------------
// Testing with strings

const pkmnArray = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"];

console.log(" ");
console.log("======== Testing the function mySlice() ========");
console.log(mySlice(pkmnArray));
console.log(mySlice(pkmnArray, 1));
console.log(mySlice(pkmnArray, 1, 3));
console.log(mySlice(pkmnArray, 0, 0));
console.log(mySlice(pkmnArray, 2, 0));
console.log(mySlice(pkmnArray, 2, -1));
console.log(mySlice(pkmnArray, -2));
console.log(mySlice(pkmnArray, -2));

console.log("======== Testing Array.prototype.slice() ========");

console.log(pkmnArray.slice());
console.log(pkmnArray.slice(1));
console.log(pkmnArray.slice(1, 3));
console.log(pkmnArray.slice(0, 0));
console.log(pkmnArray.slice(2, 0));
console.log(pkmnArray.slice(2, -1));
console.log(pkmnArray.slice(-2));