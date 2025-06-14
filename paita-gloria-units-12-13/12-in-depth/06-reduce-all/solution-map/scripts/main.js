/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 */

/* ASSIGNMENT
Write functions that use the reduce method to implement your version of the following Array methods:
`forEach()`

 implement parameters and return values as in the documentation  
    - do not use `Array.prototype`  
    - your functions receive as a first parameter the array on which to operate  
    - all other parameters should be identical to the documentation  
    - except for the `thisArg` parameter, you don't have to implement it  


*/

//Array.prototype.forEach()

/* 
array.forEach((element, index, array) => {
  // do something
});


NOTES:
- forEach() calls a callbackfn for each element in an array
- always returns undefined, so it's not chainable
- the callbackfn is invoked only for array indexes that have assigned values (is not invoked for empty slots)
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