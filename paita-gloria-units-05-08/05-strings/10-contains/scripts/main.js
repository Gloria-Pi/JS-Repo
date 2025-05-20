/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file defines and tests the `aContainsB` function, which checks if a given substring
 * is present within a larger string using the `indexOf()` method.
 */


/**
 * @function aContainsB
 * @description
 * Checks if the second string is contained within the first one using a case-sensitive comparison.
 *
 * @param {string} textA - The main string in which to search.
 * @param {string} textB - The substring to look for inside `textA`.
 * @returns {boolean} Returns `true` if `textB` is found inside `textA`; otherwise returns `false`.
 * 
 * @example
 * aContainsB("Another hello world", "hell");
 * // → true
 * 
 * aContainsB("Another hello world", "run");
 * // → false
 */
function aContainsB(textA, textB) {

    // Checks if textB can be found inside textA
    let indexOfPattern = textA.indexOf(textB);

    // If the index is -1, the match hasn't been found
    if (indexOfPattern === -1) {
        return false;
    } else {
        return true;        // if the index is ≥ 0, a match was found
    }
}



//This string shouldn't appear in any of the other strings
let messageB0 = "run";

let messageA = "Another hello world"; //other
let messageB = "other";

let messageA1 = "The elephant danced in the room";   //ant
let messageB1 = "ant";

let messageA2 = "The singer sings a song in the park"; //sin
let messageB2 = "sin";



// Test Cases
console.log(`Is "${messageB}" contained in "${messageA}"? ${aContainsB(messageA, messageB)}`);
// Is "other" contained in "Another hello world"? true

console.log(`Is "${messageB1}" contained in "${messageA1}"? ${aContainsB(messageA1, messageB1)}`);
// Is "ant" contained in "The elephant danced in the room"? true

console.log(`Is "${messageB2}" contained in "${messageA2}"? ${aContainsB(messageA2, messageB2)}`);
// Is "sin" contained in "The singer sings a song in the park"? true


console.log(`Is "${messageB0}" contained in "${messageA}"? ${aContainsB(messageA, messageB0)}`);
// Is "run" contained in "Another hello world"? false


console.log(`Is "${messageB0}" contained in "${messageA1}"? ${aContainsB(messageA1, messageB0)}`);
// Is "run" contained in "The elephant danced in the room"? false


console.log(`Is "${messageB0}" contained in "${messageA2}"? ${aContainsB(messageA2, messageB0)}`);
// Is "run" contained in "The singer sings a song in the park"? false