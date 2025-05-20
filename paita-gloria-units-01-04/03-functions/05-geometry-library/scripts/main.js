/**
 * @file main.js
 * @author Gloria Paita
 * @description This file contains the functions calcCircumference and calcArea,
 * which calculate the circumference and area of a circle, respectively, given its radius.
 * 
 * The results are rounded to two decimal places.
 */

/**
 * @function calcCircumference
 * @description Calculates the circumference of a circle, given its radius.
 * It also rounds the result to two decimal places, and logs the result to the console.
 * 
 * @param {number} radius - The radius of the circle.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * calcCircumference(3);               // Logs: "The circumference is 18.85."
 * 
 * @example
 * calcCircumference(19);              // Logs: "The circumference is 119.38."
 * 
 * @example
 * calcCircumference(13.72);           // Logs: "The circumference is 86.21."
 */
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    const roundedCircumference = Math.round(circumference * 100) / 100;       // rounds to two decimal places
    console.log(`The circumference is ${roundedCircumference}.`);
}

// Test Cases
calcCircumference(3);               // Logs: "The circumference is 18.85."
calcCircumference(19);              // Logs: "The circumference is 119.38."
calcCircumference(13.72);           // Logs: "The circumference is 86.21."



/**
 * @function calcArea
 * @description Calculates the area of a circle, given its radius.
 * It also rounds the result to two decimal places, and logs the result to the console.
 * 
 * @param {number} radius - The radius of the circle.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * calcArea(3);                // Logs: "The area is 28.27."
 * 
 * @example
 * calcArea(19);               // Logs: "The area is 1134.11."
 * 
 * @example
 * calcArea(13.72);            // Logs: "The area is 591.37."
 */
function calcArea(radius) {
    const area = radius ** 2 * Math.PI;             // radius ** 2 is the equivalent of Math.pow(radius, 2), or radius * radius
    const roundedArea = Math.round(area * 100) / 100;       // rounds to two decimal places
    console.log(`The area is ${roundedArea}.`);
}

// Test Cases
calcArea(3);                // Logs: "The area is 28.27."
calcArea(19);               // Logs: "The area is 1134.11."
calcArea(13.72);            // Logs: "The area is 591.37."
