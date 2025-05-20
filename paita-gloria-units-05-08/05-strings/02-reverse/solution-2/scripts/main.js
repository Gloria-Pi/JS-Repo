/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description Contains the `reverse()` function, which takes a string as input and returns it reversed.
 * This implementation is based on the solution-3 version of the printReverse() exercise
 * and does not use arrays, but instead builds the reversed string character by character using a loop.
 */

/**
 * @function reverse
 * @description Reverses a given string by iterating over it backwards and concatenating characters one by one.
 * 
 * @param {string} text - The string to be reversed.
 * @returns {string} The reversed string.
 * 
 * @example
 * console.log(reverse("Hello World"));       // "dlroW olleH"
 */

function reverse(text) {

    // Creates an empty string to store the reversed text
    let reversedText = "";
    
    // Loops through the string backwards and uses charAt() to get each character
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text.charAt(i);
    }
    
    // Returns the reversed string
    return reversedText;
}


// Initializing the variables
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";


// Test Cases
console.log(reverse(message));
//"dlroW olleH"

console.log(reverse(message1));
//"notlitS-ominoreG"

console.log(reverse(message2));
//".boS 3< evah ew gniht suoicerp tsom eht si emiT"