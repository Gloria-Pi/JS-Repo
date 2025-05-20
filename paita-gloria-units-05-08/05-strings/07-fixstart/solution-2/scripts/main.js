/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `fixStart`, which replaces all occurrences 
 * of the first character in a string with '*', except for the first occurrence.
 * This version of fixStart doesn't implement array methods.
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

    // Selects and store the first character of the string in a new variable
    let firstCharacter = text.charAt(0);
    
    // Extracts the first character out of the string and creates a new variable containing the new string
    let restOfString = text.slice(1);
    
    // Replacing all the occurrences of the first character using replaceAll()
    let replacedString = restOfString.replaceAll(firstCharacter, "*");

    // Concatenation
    let resultString = firstCharacter + replacedString;

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