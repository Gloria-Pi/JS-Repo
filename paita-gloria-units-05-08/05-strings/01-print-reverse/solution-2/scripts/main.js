/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * The function `printReverse()` logs to the console the reversed string of a given input.
 * 
 * Unlike the version using `.reverse()`, this implementation was designed to practice the use of `for` loops and `.unshift()` for reversing.
 * 
 * It splits the input string into an array, iterates through it using a `for` loop, and constructs the reversed array by prepending each character to a new array using `.unshift()`.
 * The reversed array is then joined back into a string and logged.
 */ 

/**
 * @function printReverse
 * @description  This function logs to the console the reversed string of a given input.
 * 
 * @param {string} text - The string to be reversed.
 * @returns {void} Logs the reversed string to the console.
 * 
 * @example
 * printReverse("Hello World");
 * // Logs: "dlroW olleH"
 * 
 * @example
 * printReverse("Time is precious");
 * // Logs: "suoicerp si emiT"
 */

function printReverse(text) {

    // Converts the input string into an array of characters (including spaces)
    let textArray = text.split("");

    // Initializes an empty array to store the reversed characters
    let reversedTextArray = [];

    // Stores the length of the original array
    let arrayLength = textArray.length;

    let currentCharacter;

    // Loops through each character of the original array
    for (let index = 0; index < arrayLength; index++) {

        // Retrieves the current character in the original order and stores it in a variable
        currentCharacter = textArray[index];

        // Adds the character to the beginning of the new array (reversing the order)
        reversedTextArray.unshift(currentCharacter);
    }

    // Joins the reversed array back into a single string
    let reversedText = reversedTextArray.join("");

    // Outputs the reversed string to the console
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