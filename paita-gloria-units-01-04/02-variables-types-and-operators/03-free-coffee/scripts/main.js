/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file containes my attempt at solving exercise 03 "Free Coffee".
 * 
 * This program calculates the total number of coffee cups a person will drink from their current age until a specified maximum age. 
 */

//Initializing the variables
let currentAge = 28;
let maxAge = 100;
let coffeeCupsPerDay = 1.5;
let coffeeCupsUntilDeath = (maxAge - currentAge) * coffeeCupsPerDay;  

//Logging everything to console using console.log()
console.log(`You will need ${coffeeCupsUntilDeath} cups of coffee to last you until the ripe old age of ${maxAge}.`);

//OUTPUT: You will need 108 cups of coffee to last you until the ripe old age of 100.