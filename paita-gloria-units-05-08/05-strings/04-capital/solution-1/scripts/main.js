/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the implementation of the `capital` function,
 * which capitalizes the first letter of a given string.
 */

/**
 * @function capital
 * @description Capitalizes the first letter of a given string.
 *
 * @param {string} text - The input string.
 * @returns {string} The input string with its first letter capitalized.
 *
 * @example
 * console.log(capital("hello world"));
 * // "Hello world"
 *
 * console.log(capital("geronimo-stilton"));
 * // "Geronimo-stilton"
 *
 * console.log(capital("time is the most precious thing we have <3 sob."));
 * // "Time is the most precious thing we have <3 sob."
 */
function capital(text) {
    
    let textArray = text.split("");

    let firstCharacter = textArray[0];

    let capitalizedFirstCharacter = firstCharacter.toUpperCase();

    let capitalizedArray = textArray.toSpliced(0, 1, capitalizedFirstCharacter);

    let capitalizedString = capitalizedArray.join("");

    return capitalizedString;
}



// Initializing some messages
let message = "hello world";
let message1 = "geronimo-stilton";
let message2 = "time is the most precious thing we have <3 sob.";



// Test Cases
console.log(capital(message));
// "Hello world"

console.log(capital(message1));
// "Geronimo-stilton"

console.log(capital(message2));
// "Time is the most precious thing we have <3 sob."
