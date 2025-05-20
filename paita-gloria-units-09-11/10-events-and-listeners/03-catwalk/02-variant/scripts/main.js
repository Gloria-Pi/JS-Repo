/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Animates a cat image to walk from the left to the right of the screen and back.
 * When the cat reaches the right edge, it reverses direction and walks left.
 * When it reaches the left edge again, it reverses and walks right.
 */

/**
 * The image element representing the cat.
 * It is assumed to be the first <img> element in the document.
 * @type {HTMLImageElement}
 */
const cat = document.getElementsByTagName('img')[0];

/**
 * Initializes the cat's walking animation across the screen.
 * 
 * The cat starts walking to the right. When it reaches the right edge of the window,
 * it reverses direction and walks to the left. This process repeats indefinitely,
 * creating a back-and-forth motion.
 */
function catWalkBackForth() {

    /**
     * Animates the cat walking to the left (i.e., moving backwards).
     * 
     * - Moves the cat 10 pixels to the left every 50 milliseconds.
     * - When the cat reaches the left edge of the screen (left position ≤ 0),
     *   the interval is cleared and forward walking is initiated.
     */
    function catMoonWalk() {

        let backwardId = window.setInterval(() => {
            if (parseInt(cat.style.left) <= 0) {
                clearInterval(backwardId); // Stop walking left
                catWalkForwards(); // Start walking right
            } else {
                let oldXPosition = parseInt(cat.style.left);
                let newXPosition = oldXPosition - 10;
                cat.style.left = newXPosition + "px";
            }
        }, 50);
    }

    /**
     * Animates the cat walking to the right (i.e., moving forwards).
     * 
     * - Moves the cat 10 pixels to the right every 50 milliseconds.
     * - When the cat reaches the right edge of the screen (right position ≥ window width),
     *   the interval is cleared and backward walking is initiated.
     */
    function catWalkForwards() {

        let forwardId = window.setInterval(() => {
            if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
                clearInterval(forwardId);  // Stop walking right
                catMoonWalk(); // Start walking left
            } else {
                let oldXPosition = parseInt(cat.style.left);
                let newXPosition = oldXPosition + 10;
                cat.style.left = newXPosition + "px";
            }
        }, 50);
    }

    // Start the animation moving to the right
    catWalkForwards();
}

// Prevent scrollbars from showing during animation
document.body.style.overflow = "hidden";

// Set initial position and layout for the cat
cat.style.position = "absolute";
cat.style.left = "0px";

// Start the back-and-forth cat walk
catWalkBackForth();