/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script animates a cat image walking from the left to the right side of the screen.
 * When the cat reaches the right edge of the screen, it resets to the left side and continues walking.
 */

/**
 * This targets the first <img> element in the HTML document, representing the image of a cat.
 * @type {HTMLImageElement}
 */
const cat = document.getElementsByTagName('img')[0];

/**
 * Moves the cat 10 pixels to the right on each call.
 * 
 * - If the cat reaches the right edge of the screen (based on the window width and the cat's width),
 *   its position resets to the left side (`left = 0px`).
 * - Otherwise, the cat continues moving to the right by 10 pixels.
 * 
 * This function creates a continuous looping animation across the screen.
 */
let catWalkWithReset = function () {

    if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
        cat.style.left = "0px";
    } else {
        let oldXPosition = parseInt(cat.style.left);
        let newXPosition = oldXPosition + 10;
        cat.style.left = newXPosition + "px";
    }
};

// Set the initial position and layout for the cat image
cat.style.position = "absolute";
cat.style.left = "0px";

// Prevent scrollbars from showing during animation
document.body.style.overflow = "hidden";

/**
 * Repeatedly calls `catWalkWithReset` every 50 milliseconds to animate the cat's movement.
 */
window.setInterval(catWalkWithReset, 50);