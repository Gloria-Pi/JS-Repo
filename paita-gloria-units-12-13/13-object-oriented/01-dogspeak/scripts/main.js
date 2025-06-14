/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Adds a method to the String prototype that logs the string followed by " Woof!" to the console.
 */

/**
 * Logs the current string with a playful "Woof!" appended.
 * This method does not modify the original string or return a value.
 *
 * @function dogSpeak
 * @memberof String
 * @returns {void}
 */
String.prototype.dogSpeak = function () {
    console.log(this + " Woof!");
};

// Declaring a string variable and calling the custom method
let absoluteTruth = "We like to learn";
absoluteTruth.dogSpeak();

// Using the method directly on a string literal
"Dogs are smart".dogSpeak();