/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This script is my approach to solving Exercise 01 of Unit 10.
 * The goal of this exercise is to add interactivity to a button that, when clicked,
 * generates a short story using user input. The story is displayed inside a designated div.
 * Bonus: considering that the primary language of the content will be English,
 * I've also set the language attribute of the HTML document to "en".
 */

/**
 * Sets the language attribute of the HTML document to English.
 *
 * @constant {HTMLElement} htmlElement - The root HTML element of the document.
 */
const htmlElement = document.documentElement;
htmlElement.setAttribute("lang", "en");

/**
 * @constant {HTMLButtonElement} storyBtn
 * @description
 * Selects the button with id "gen-button" that triggers the story generation.
 */
const storyBtn = document.getElementById("gen-button");

// Add click event listener to trigger story creation
storyBtn.addEventListener("click", makeStory);

/**
 * Generates a short story using user-provided input values (trimmed of any whitespace)
 * for a noun, adjective, and a person's name. The story is then
 * displayed inside the HTML element with the ID "story".
 *
 * @function makeStory
 * @returns {void}
 *
 * @example
 * // Assuming input fields contain:
 * // noun: "Joseph", adjective: "pink", person: "cucumbers"
 * // Result:
 * // "Joseph is terrified of pink cucumbers."
 */
function makeStory() {
    const nounInput = document.getElementById("noun").value.trim();
    const adjInput = document.getElementById("adjective").value.trim();
    const nameInput = document.getElementById("person").value.trim();

    const story = `${nameInput} is terrified of ${adjInput} ${nounInput}.`;

    const storyDiv = document.getElementById("story");
    storyDiv.textContent = story;
}