/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Animates a cat image walking left and right across the screen.
 * When the cat reaches the center of the screen, it pauses for 10 seconds,
 * shows a different image, and then resumes walking in the opposite direction.
 */

/**
 * The image element representing the cat.
 * Assumes the first <img> in the document is the cat.
 * @type {HTMLImageElement}
 */
const cat = document.getElementsByTagName('img')[0];

/**
 * Starts the cat walk animation with pause behavior at the center of the screen.
 * 
 * The cat walks right until the edge, then reverses and walks left.
 * When the cat reaches the center of the screen, it pauses for 10 seconds
 * and shows a different image. Then it resumes walking in the current direction.
 */
function catWalkPause() {

    /**
     * Makes the cat walk to the left (backwards).
     * - Moves the cat 10px left every 50ms.
     * - If the cat reaches the left edge, it reverses direction.
     * - If the cat reaches the center of the screen, it pauses for 10s and switches image.
     */
    function catMoonWalk() {

        let backwardId = window.setInterval(() => {

            let oldXPosition = parseInt(cat.style.left);
            let newXPosition = oldXPosition - 10;
            cat.style.left = newXPosition + "px";

            // Stop at left edge and reverse direction
            if (parseInt(cat.style.left) <= 0) {
                clearInterval(backwardId);
                catWalkForwards();
            }

            // Pause at center and change image
            if (cat.offsetWidth / 2 + parseInt(cat.style.left) <= window.innerWidth / 2 &&
                cat.offsetWidth / 2 + parseInt(cat.style.left) >= window.innerWidth / 2 - 10) {
                clearInterval(backwardId);
                cat.src = "./assets/gifs/laptop-cat.gif"; // Show alternate cat
                setTimeout(() => {
                    cat.src = "./assets/gifs/cat-walk.gif"; // Restore original
                    catMoonWalk(); // Resume walking
                }, 10000);
            }
        }, 50);
    }

    /**
     * Makes the cat walk to the right (forwards).
     * - Moves the cat 10px right every 50ms.
     * - If the cat reaches the right edge, it reverses direction.
     * - If the cat reaches the center of the screen, it pauses for 10s and switches image.
     */
    function catWalkForwards() {

        let forwardId = window.setInterval(() => {

            let oldXPosition = parseInt(cat.style.left);
            let newXPosition = oldXPosition + 10;
            cat.style.left = newXPosition + "px";

            // Stop at right edge and reverse direction
            if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
                clearInterval(forwardId);
                catMoonWalk();
            }

            // Pause at center and change image
            if (cat.offsetWidth / 2 + parseInt(cat.style.left) >= window.innerWidth / 2 &&
                cat.offsetWidth / 2 + parseInt(cat.style.left) <= window.innerWidth / 2 + 10) {
                clearInterval(forwardId);
                cat.src = "./assets/gifs/laptop-cat.gif";
                setTimeout(() => {
                    cat.src = "./assets/gifs/cat-walk.gif";
                    catWalkPause(); // Restart walk logic
                }, 10000);
            }
        }, 50);
    }
    catWalkForwards(); // Start the animation moving right
}

// Set up layout and prevent scrollbars
document.body.style.overflow = "hidden";
cat.style.left = "0px";

// Start the animation
catWalkPause();