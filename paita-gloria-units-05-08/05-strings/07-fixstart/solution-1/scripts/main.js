/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `fixStart`, which, using array methods,
 * replaces all occurrences of the first character in a string with '*',
 * except for the first occurrence.
 * 
 */

/**
 * @function fixStart
 * @description Replaces all occurrences of the first character in a string with '*', 
 * except for the first occurrence itself.
 * 
 * @param {string} text - The input string (assumed to be at least 1 character long).
 * @returns {string} The modified string with all occurrences of the first character replaced by '*'.
 *
 * @example
 * console.log(fixStart('babble'));
 * // "ba**le"
 *
 * console.log(fixStart('people prefer pizza to pepsi'));
 * // "peo*le *refer *izza to *e*si"
 */
function fixStart(text) {

    // Selects first character of the string and put it into a variable
    let firstElement = text.charAt(0);

    // Convert string to array
    let textArray = text.split("");

    // Kicks the first element out of the array and stores the rest of the array into a new variable
    // slice() creates a new array without modifying the original
    let shiftedArray = textArray.slice(1);

    // Converts the shifted array into a string
    let shiftedString = shiftedArray.join("");

    // Replaces the character stored in firstElement inside the shiftedString 
    let replacedString = shiftedString.replaceAll(firstElement, "*");

    // Add the first character back to the beginning of the string
    let resultString = firstElement + replacedString;

    return resultString;

}



// Initializing the strings
let message = "I want to eat ice cream in Iceland";
let message1 = "people prefer pizza to pepsi";
let message2 = "_Hi_My_Name_Is_";
let message3 = "1_andMany1/Other_1_numb1er3s";



// Test
console.log(fixStart(message));
// "I want to eat ice cream in *celand"

console.log(fixStart(message1));
// "peo*le *refer *izza to *e*si"

console.log(fixStart(message2));
// "_Hi*My*Name*Is*"

console.log(fixStart(message3));
// "1_andMany*/Other_*_numb*er3s"