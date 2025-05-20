/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains Solution 1 out of 6 of different solutions to the following assignment:
 * Change the 4th letter in the string "Abracadabra" to an "X".
 *
 * IMPLEMENTED METHOD:
 * Array approach: converts the string to an array with .split(""), modifies the target index,
 * then rejoins it with .join("").
 */


let magicWordString = "Abracadabra";

let magicWordArray = magicWordString.split("");

magicWordArray[3] = "X";

let newMagicWordString = magicWordArray.join("");

console.log(newMagicWordString);
// Logs: "AbrXcadabra"