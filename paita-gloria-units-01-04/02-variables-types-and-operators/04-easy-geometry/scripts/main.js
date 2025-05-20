/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains my attempt at solving exercise 04 "Easy Geometry".
 * 
 * This program calculates and displays the circumference and area of a circle based on a given radius. 
 * 
 * It also rounds the results and logs them to the console in the format: "The circumference is NN." and "The area is NN."
 */ 

//Initializing the radius of the circle
let circleRadius = 4.8;

//Calculating, rounding and initializing the circumference and area of the circle
let circleCircumference = Math.round(2 * Math.PI * circleRadius);

let circleArea =  Math.round(Math.PI * Math.pow(circleRadius, 2));


//Logging everything to the console
console.log(`The circumference is ${circleCircumference}.`);        //OUTPUT: The circumference is 30.

console.log(`The area is ${circleArea}.`);       //OUTPUT: The area is 72.
