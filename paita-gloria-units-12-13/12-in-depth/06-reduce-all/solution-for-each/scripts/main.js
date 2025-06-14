/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script implements a custom version of the Array method `forEach()` using `reduce()`.
 * The custom function, `myForEach()`, mimics the behavior of the native method:
 * it executes a provided function once for each assigned array element and always returns `undefined`.
 * Empty slots (holes) in sparse arrays are not visited, just like in the native method.
 */

/**
 * Executes a provided function once for each assigned element in the array.
 * The function is implemented using the `reduce()` method.
 * It does not return a value and does not mutate the original array.
 *
 * @function myForEach
 * @param {Array} anArray - The array to iterate over.
 * @param {Function} callbackFn - A function to execute for each element in the array.
 * It receives three arguments: the current element, the index, and the original array.
 * @returns {undefined}
 *
 * @example
 * const arr = ["a", "b", "c"];
 * myForEach(arr, (el, index, array) => {
 *   console.log(`${index}: ${el}`);
 * });
 */
function myForEach(anArray, callbackFn) {
    anArray.reduce((_, current, index, originalArray) => {
        callbackFn(current, index, originalArray);
        return undefined; // We don't care about the accumulated value
    }, undefined);
}

//-------------------------------------
// Testing with strings

const pkmnArray = ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"];

console.log(" ");
console.log("======== Testing the function myForEach() ========");

myForEach(pkmnArray, (pkmn, index, pkmnArray) => {
    const description = `#${index + 1} - ${pkmn} (from an array of length ${pkmnArray.length})`;
    console.log(description);
});

console.log("======== Testing Array.prototype.forEach() ========");


pkmnArray.forEach((pkmn, index, pkmnArray) => {
    const description = `#${index + 1} - ${pkmn} (from an array of length ${pkmnArray.length})`;
    console.log(description);
});

//-------------------------------------
// Testing with numbers

const numberArray = [1, 2, 3, 4, 5];

console.log(" ");
console.log("======== Testing the function myForEach() ========");

myForEach(numberArray, (num, index, numberArray) => {
    const product = num * numberArray.length;
    console.log(`The product of the number at index ${index} of the array multiplied for ${numberArray.length} ( which is the array length) is ${product}`);
});

console.log("======== Testing Array.prototype.forEach() ========");

numberArray.forEach((num, index, numberArray) => {
    const product = num * numberArray.length;
    console.log(`The product of the number at index ${index} of the array multiplied for ${numberArray.length} ( which is the array length) is ${product}`);
});

//--------------------------------------------
// Testing with empty slots in the array

const digimonArray = ["Agumon", "Gabumon", , "Palmon", "Patamon"];

console.log(" ");
console.log("======== Testing the function myForEach() ========");

myForEach(digimonArray, (digimon, index, digimonArray) => {
    const description = `#${index + 1} - ${digimon} (from an array of length ${digimonArray.length})`;
    console.log(description);
});

console.log("======== Testing Array.prototype.forEach() ========");


digimonArray.forEach((digimon, index, digimonArray) => {
    const description = `#${index + 1} - ${digimon} (from an array of length ${digimonArray.length})`;
    console.log(description);
});