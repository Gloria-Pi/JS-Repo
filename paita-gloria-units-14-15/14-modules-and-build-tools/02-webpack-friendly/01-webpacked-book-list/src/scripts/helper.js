
import delayedCSS from "../styles/delayed.css";

// Add external CSS after a delay of 5 seconds
export function loadDelayedCSS(delay = 5000) {
    setTimeout(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = delayedCSS; // webpack gives final URL
        document.head.appendChild(link);

        console.log(`CSS loaded after ${delay / 1000} seconds`);
    }, delay);
}

// setTimeout(() => {
//   import("../styles/style.css")
//     .then(() => {
//       console.log('CSS loaded after 5 seconds');
//     })
//     .catch(err => {
//       console.error('Failed to load CSS:', err);
//     });
// }, 5000);