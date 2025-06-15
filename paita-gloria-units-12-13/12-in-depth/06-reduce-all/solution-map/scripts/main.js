/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Implementation of a custom map() function using reduce.
 * Simulates Array.prototype.map without using prototype.
 */

/**
 * Transforms an array using a callback function, simulating the behavior of Array.prototype.map.
 *
 * @function myMap
 * @param {Array} targetArray - The array to iterate over.
 * @param {Function} callbackFn - A function that produces an element of the new Array, taking three arguments:
 *  - currentValue: The current element being processed in the array
 *  - index: The index of the current element being processed
 *  - array: The array myMap was called upon
 * @returns {Array} A new array with each element being the result of the callback function.
 *
 * @example
 * myMap([1, 2, 3], x => x * 2); // [2, 4, 6]
 * myMap([{id: 1}], obj => obj.id); // [1]
 */
function myMap(targetArray, callbackFn) {
    return targetArray.reduce((accumulator, currElement, currIndex, targetArray) => {
        accumulator[currIndex] = callbackFn(currElement, currIndex, targetArray); // Direct assignment
        return accumulator; // Return the accumulator for the next iteration
    }, []); // The accumulator is initialized as an empty array
}

//-------------------------------------
// Testing with strings

const pokedex = [
    { pokedex: 1, pokemon: "Pikachu" },
    { pokedex: 2, pokemon: "Bulbasaur" },
    { pokedex: 3, pokemon: "Squirtle" },
    { pokedex: 4, pokemon: "Charmander" }
];

console.log(" ");
console.log("======== Testing the function myMap() ========");

const myReformattedPokedex = myMap(pokedex, ({ pokedex, pokemon }) => ({ [pokedex]: pokemon }));
console.log(myReformattedPokedex);


console.log("======== Testing Array.prototype.map() ========");
const reformattedPokedex = pokedex.map(({ pokedex, pokemon }) => ({ [pokedex]: pokemon }));
console.log(reformattedPokedex);



//-------------------------------------
// Testing with numbers

const numberArray = [1, 2, 3, 4, 5];

console.log(" ");

console.log("======== Testing the function myMap() ========");
const myMappedNumberArray = myMap(numberArray, number => number * number);
console.log(myMappedNumberArray);

console.log("======== Testing Array.prototype.map() ========");
const mappedNumberArray = numberArray.map(number => number * number);
console.log(mappedNumberArray);