/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains Solution 4 out of 6 of different solutions to the following assignment:
 * Change the 4th letter in the string "Abracadabra" to an "X".
 *
 * IMPLEMENTED METHOD:
 * Slice and concat approach: uses .slice(start, end) to extract parts of the original string
 * before and after the character to be replaced. The parts are then combined with the new
 * character ("X") using the .concat() method.
 */


let magicWord = "Abracadabra";

// extracts "Abr"
let newMagicWordStart = magicWord.slice(0, 3);

// extracts "cadabra"
let newMagicWordEnd = magicWord.slice(4);

let completeNewMagicWord = newMagicWordStart.concat("X", newMagicWordEnd);

console.log(completeNewMagicWord);
// Logs: "AbrXcadabra"