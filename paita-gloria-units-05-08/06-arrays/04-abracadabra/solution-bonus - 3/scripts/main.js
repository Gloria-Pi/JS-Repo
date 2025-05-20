/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains Solution 6 out of 6 of different solutions to the following assignment:
 * Change the 4th letter in the string "Abracadabra" to an "X".
 *
 * IMPLEMENTED METHOD:
 * Splice and join approach: turns the string into an array using .split(""), uses .splice() to replace the character,
 * and then joins the array back into a string using .join("").
 */


let magicWordString = "Abracadabra";

// Turns "Abracadabra" into an array of letters 
let magicWordArray = magicWordString.split("");

// Replaces the character at index 3 with "X"
let discardedLetter = magicWordArray.splice(3, 1, "X");

// Joins the array back into a string
let newMagicWordString = magicWordArray.join("");

console.log(newMagicWordString);
// Logs: "AbrXcadabra"

