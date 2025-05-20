/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the solution to the bonus exercise of the "Capital" exercise.
 * The function capitalizes the first letter of every word in the given string. 
 * 
 * Limitations:
 * - This function does not handle hyphenated words (e.g., "mother-in-law").
 * - It does not modify accented letters (e.g., "à", "ò", "ç").
 */


/**
 * @function capital
 * @description Capitalizes the first letter of every word in the given string. 
 * 
 * @param {string} text - The input string.
 * @returns {string} The input string with each word's first letter capitalized.
 *
 * @example
 * console.log(capital("hello world"));
 * // "Hello World"
 *
 * console.log(capital("geronimo-stilton"));
 * // "Geronimo-stilton"
 */
function capital(text) {
    
    // replaceAll() searches a string for a value or regex, and returns a new string with all values replaced
    let capitalizedString = text.replaceAll(/^[a-z]|(\s[a-z])/g, (match) => match.toUpperCase());

    return capitalizedString;

}



// Initializing some messages
let message4 = "hello world";
let message5 = "geronimo-stilton";
let message6 = "time is the most precious thing we have <3 sob.";
let message7 = "àccents òr çrying çs.";



// Test Cases
console.log(capital(message4));
// "Hello World"

console.log(capital(message5));
// "Geronimo-stilton"

console.log(capital(message6));
// "Time Is The Most Precious Thing We Have <3 Sob."

console.log(capital(message7));
// "àccents òr çrying çs."