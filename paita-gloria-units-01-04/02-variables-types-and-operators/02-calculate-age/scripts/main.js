/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This program calculates my possible age in a given future year by:
 * - Storing my birth year and a future year.
 * - Computing two possible ages (before and after my birthday).
 * - Logging the result in the format: "I will be either NN or NN in YYYY."
 * 
 * It also explores different string concatenation methods in JavaScript.
 */

//Initializing the variables

let birthYear = 1996;               //the year when I was born
let futureYear = 2034;              //a random year in the future

let howOldAmI = futureYear - birthYear;         //My age if I already have celebrated my birthday this year
let howOldAmI2 = howOldAmI - 1;                 //My age if I still haven't celebrated my birthday this year


//Using console.log() in order to log everything to the console

//1) By concatenating
console.log("I will be either", howOldAmI, "or", howOldAmI2, "in", futureYear + ".");

//2) Using template literals with backticks
console.log(`I will be either ${howOldAmI} or ${howOldAmI2} in ${futureYear}.`);


// OUTPUT: I will be either 38 or 37 in 2034.