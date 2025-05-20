/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description The function reverse() returns the reversed version of a given string.
 * This implementation is based on the solution-1 version of the printReverse() exercise,
 * and uses string-to-array conversion and the following array methods:
 * .split(), .reverse(), and .join().
 */

/**
 * @function reverse
 * @description Reverses the input string by converting it to an array,
 * reversing the array, and joining it back into a string.
 * 
 * @param {string} text - The original string to be reversed.
 * @returns {string} The reversed version of the input string.
 * 
 * @example
 * console.log(reverse("Hello World"));       // "dlroW olleH"
 */

function reverse(text) {

    // Splits the string into an array of characters, including spaces
    let textArray = text.split("");

    // The built-in reverse() method reverses the array
    let reversedTextArray = textArray.reverse();

    // Converts the reversed array back into a string using join()
    let reversedString = reversedTextArray.join("");

    // Returns the reversed string
    return reversedString;
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