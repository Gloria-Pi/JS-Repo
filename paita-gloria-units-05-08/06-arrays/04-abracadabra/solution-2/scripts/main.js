/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains Solution 2 out of 6 of different solutions to the following assignment:
 * Change the 4th letter in the string "Abracadabra" to an "X".
 *
 * IMPLEMENTED METHOD:
 * RegEx approach: uses the .replace() method combined with a regular expression
 * to match a specific character sequence and replace it with a new one.
 *
 * The pattern /rac/ is replaced with "rXc", which effectively changes the 4th character.
 */


let magicWord = "Abracadabra";

let newMagicWord = magicWord.replace(/rac/, "rXc");

console.log(newMagicWord);
// Logs: "AbrXcadabra"