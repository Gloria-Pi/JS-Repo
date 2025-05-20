/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `notBad`, which identifies and replaces certain negative expressions
 * in a sentence with a more positive phrasing.
 */

/**
 * @function notBad
 * @description Replaces the first occurrence of "not ... bad" in a sentence with "good",
 *  if "bad" appears after "not".
 * 
 * @param {string} text - The input sentence to process.
 * @returns {string} The modified sentence if "not ... bad" is found, otherwise the original sentence.
 *
 * @example
 * console.log(notBad("This dinner is not that bad!"));
 * // "This dinner is good!"
 *
 * console.log(notBad("It's not quite that bad. It can be improved, but it's not that bad."));
 * // "It's good. It can be improved, but it's not that bad."
 */
function notBad(text) {

    const notBadPattern = /not.*?bad/i;

    //If the regex finds a "not" followed by a "bad", even with other characters in between
    if (notBadPattern.test(text)) {

        //Substitutes the entire "not * bad" substring with "good"
        let notBadIsGood = text.replace(notBadPattern, "good");

        return notBadIsGood;

    } else {

        //If it doesn't find the right sequence, returns the original string
        return text;

    }
}

// Initializing some messages
let message = "This movie sucks!";
let message1 = "This movie is not that bad, cmon!";
let message2 = "The bad thing about not sleeping enough is...";
let message3 = "It's not quite that bad. It can be improved, but it's not that bad.";


// Test Cases
console.log(notBad(message));
// This movie sucks!

console.log(notBad(message1));
// This movie is good, cmon!

console.log(notBad(message2));
// The bad thing about not sleeping enough is...

console.log(notBad(message3));
// It's good. It can be improved, but it's not that bad.