/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `mixUp`, which takes two strings, swaps their first 
 * two characters, and returns the concatenated result.
 */

/**
 * @function mixUp
 * @description Swaps the first two characters of two given strings and concatenates them in a single string.
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

    // Select the first two characters of both strings
    let firstCharaString1 = text1.charAt(0);
    let secondCharaString1 = text1.charAt(1);

    let firstCharaString2 = text2.charAt(0);
    let secondCharaString2 = text2.charAt(1);
    
    // Swap using replace()
    let firstMixString1 = text1.replace(firstCharaString1, firstCharaString2);
    let secondMixString1 = firstMixString1.replace(secondCharaString1, secondCharaString2);

    let firstMixString2 = text2.replace(firstCharaString2, firstCharaString1);
    let secondMixString2 = firstMixString2.replace(secondCharaString2, secondCharaString1);

    // Concatenate the strings
    let mixedString = secondMixString1.concat(" ", secondMixString2);

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