/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script animates a cat image walking from the left side of the screen to the right.
 * The cat moves 10 pixels every 50 milliseconds using the catWalkStandard function.
 */

/**
 * The image element representing the cat.
 * Must be the first <img> element in the document.
 * @type {HTMLImageElement}
 */
const cat = document.getElementsByTagName('img')[0];

/**
 * Moves the cat 10 pixels to the right by updating its `left` CSS style.
 * This function reads the current position, adds 10 pixels, and updates the position.
 */
let catWalkStandard = function () {
    let oldXPosition = parseInt(cat.style.left);
    let newXPosition = oldXPosition + 10;
    cat.style.left = newXPosition + "px";
};

// Initialize the cat's position and layout.
cat.style.position = "absolute";
cat.style.left = "0px";

/**
 * Starts the animation by calling `catWalkStandard` every 50 milliseconds.
 * This creates a continuous walking effect.
 */
window.setInterval(catWalkStandard, 50);