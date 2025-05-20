/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains Solution 3 out of 6 of different solutions to the following assignment:
 * Change the 4th letter in the string "Abracadabra" to an "X".
 *
 * IMPLEMENTED METHOD:
 * Substring replacement approach: uses the .replace() method to directly replace a known
 * substring ("raca") with another string ("rXca"), which includes the desired letter change.
 *
 * This solution assumes the substring to be replaced is predictable and consistent.
 */


let magicWordString = "Abracadabra";

let newMagicWordString = magicWordString.replace("raca", "rXca");

console.log(newMagicWordString);
// Logs: "AbrXcadabra"