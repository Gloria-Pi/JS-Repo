/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the implementation of the `printReverse()` function,
 * which logs the reversed version of a string to the console.
 * It uses built-in array methods such as `.split()`, `.reverse()`, and `.join()`.
 */

/**
 * @function printReverse
 * @description Logs the reversed string of a given text to the console.
 *
 * @param {string} text - The input string to be reversed.
 * @returns {void} Logs the reversed string to the console.
 *
 * @example
 * printReverse("Hello World");
 * // Logs: "dlroW olleH"
 *
 * @example
 * printReverse("Geronimo-Stilton");
 * // Logs: "notlitS-ominoreG"
 */

function printReverse(text) {
    // Splits the string into an array of characters, including spaces
    let textArray = text.split("");

    // The built-in reverse() method reverses the array
    let reversedTextArray = textArray.reverse();

    // Converts the reversed array back into a string using join()
    let reversedString = reversedTextArray.join("");

    // Prints the reversed string
    console.log(reversedString);
}


// Initializing the variables
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";


// Test Cases
printReverse(message);
//"dlroW olleH"

printReverse(message1);
//"notlitS-ominoreG"

printReverse(message2);
//".boS 3< evah ew gniht suoicerp tsom eht si emiT"