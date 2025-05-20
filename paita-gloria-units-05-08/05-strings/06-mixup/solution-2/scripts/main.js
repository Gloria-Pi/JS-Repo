/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `mixUp`, which takes two strings, swaps their first 
 * two characters using array methods, and returns the concatenated result.
 */

/**
 * @function mixUp
 * @description Swaps the first two characters of two given strings using array methods
 * and concatenates them into a new string.
 * 
 * @param {string} text1 - The first string to be modified.
 * @param {string} text2 - The second string to be modified.
 * @returns {string} The concatenation of the modified strings.
 *
 * @example
 * console.log(mixUp('hello', 'world'));
 * // "wollo herld"
 */
function mixUp(text1, text2) {

    // Convert the strings to arrays
    let array1 = text1.split(""); 
    let array2 = text2.split("");

    // Select the first two characters of both arrays
    let firstCharaArray1 = array1[0];
    let secondCharaArray1 = array1[1];

    let firstCharaArray2 = array2[0];
    let secondCharaArray2 = array2[1];
    
    // Swap using toSpliced
    let splicedArray1 = array1.toSpliced(0, 2, firstCharaArray2, secondCharaArray2);
    let splicedArray2 = array2.toSpliced(0, 2, firstCharaArray1, secondCharaArray1);

    // Turn into strings
    let splicedString1 = splicedArray1.join("");
    let splicedString2 = splicedArray2.join("");

    // Concatenate the strings
    let mixedString = splicedString1.concat(" ", splicedString2);

    return mixedString;
}



// Initializing some messages
let message1 = "hello";
let message2 = "world";

let sentence1 = "kitty cat";
let sentence2 = "doggie poo";

let accentedRandomWord1 = "òlly";
let accentedRandomWord2 = "àttila";



// Test Cases
console.log(mixUp(message1, message2));
// "wollo herld"

console.log(mixUp(sentence1, sentence2));
// "dotty cat kiggie poo"

console.log(mixUp(accentedRandomWord1, accentedRandomWord2));
// "àtly òltila"