/**
 * @file helper.js
 * @author Gloria Paita
 * 
 * @description
 * Utility function for dynamically loading a CSS file after a delay.
 * This is useful for deferring non-critical CSS to improve perceived page load performance.
 */

import delayedCSS from "../styles/delayed.css";

/**
 * Dynamically loads a stylesheet into the document head after a given delay.
 * This function is used to delay the loading of non-essential CSS (e.g., styles that are not needed immediately).
 *
 * @function loadDelayedCSS
 * @param {number} [delay=5000] - Delay in milliseconds before injecting the CSS.
 * @returns {void}
 */
export function loadDelayedCSS(delay = 5000) {
    setTimeout(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = delayedCSS; // Webpack resolves this to the final URL
        document.head.appendChild(link);

        console.log(`CSS loaded after ${delay / 1000} seconds`);
    }, delay);
}