/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description The function printReverse() logs to the console the reversed string of a given string. 
 * This version does not rely on arrays, but instead uses a for loop and string concatenation. 
 * It also makes use of the `.charAt()` method for character retrieval.
 */

/**
 * @function printReverse
 * @description This function logs the reversed version of the provided string to the console.
 * 
 * @param {string} text - The string that needs to be reversed.
 * @returns {void} This function does not return any value; it only prints the reversed string to the console.
 * 
 * @example
 * // Example usage:
 * printReverse("Hello World");
 * // Output: "dlroW olleH"
 * 
 * printReverse("Geronimo-Stilton");
 * // Output: "notlitS-ominoreG"
 */

function printReverse(text) {

    // Creates an empty string to store the reversed text
    let reversedText = "";
    
    // Loops through the string backwards
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text.charAt(i);  // Use charAt() to get each character
    }

    // Prints the reversed string
    console.log(reversedText);
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