/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script modifies the page's DOM elements to personalize and enhance a profile-like section.
 * It changes text contents, dynamically applies styles,
 *  and injects new elements such as images and stylesheets.
 */

let bodyNode = document.body;

/**
 * Updates the body element's font family to "Arial, sans-serif".
 * Directly modifies the `style` property (not recommended for separation of concerns).
 */
bodyNode.style.fontFamily = "Arial, sans-serif";

/**
 * Replaces each span inside the profile section with custom user information.
 * Specifically targets:
 * - nickname
 * - favorites
 * - hometown
 */
let nickname = document.getElementById("nickname");
let favorites = document.getElementById("favorites");
let hometown = document.getElementById("hometown");

let myNickname = document.createTextNode("Glo");
let myFavorites = document.createTextNode("Napping, Eating, Drinking Tea");
let myHometown = document.createTextNode("Pallet Town");

nickname.parentNode.replaceChild(myNickname, nickname);
favorites.parentNode.replaceChild(myFavorites, favorites);
hometown.parentNode.replaceChild(myHometown, hometown);

/**
 * Iterates through all "li" elements inside a "ul" and assigns the class list-item to each.
 * This class is later styled by an external stylesheet.
 */

let liNodes = bodyNode.querySelectorAll("ul > li");

liNodes.forEach(liNode => {
    liNode.className = "list-item";
});

// // Uncomment to verify
// console.log(liNodes);
// // prints: "NodeList(3)[li.list-item, li.list-item, li.list-item]"


/**
 * Creates and appends a new "img" element to the page.
 */
let newImg = document.createElement("img");
newImg.src = "./assets/img/madagascar.webp";
bodyNode.appendChild(newImg);


/**
 * Dynamically loads an external CSS file after a delay of 4 seconds.
 * The CSS file styles ".list-item" elements to appear white, bold, and with an orange background.
 */
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./styles/style.css";
setTimeout(() => { document.head.appendChild(link); }, 4000);