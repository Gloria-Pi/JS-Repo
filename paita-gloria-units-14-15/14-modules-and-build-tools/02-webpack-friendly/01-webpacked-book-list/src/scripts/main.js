/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Dynamically generates a list of books on the page. Each book entry includes
 * the title, author, and a cover image, and is styled conditionally based on
 * whether the book has been read. After a delay, an external CSS file is loaded
 * to further style the elements.
 */

import { loadDelayedCSS } from "./helper.js";

import notredame from "../assets/img/notredame.jpg";
import design from "../assets/img/design.jpg";
import haikyuu1 from "../assets/img/haikyuu1.jpg";
import holocaust from "../assets/img/holocaust.jpg";


/**
 * @constant {Array<Object>} bookList
 * @description
 * List of book objects to display. Each book has a title, author,
 * read status, and will later be assigned an image URL.
 */
const bookList = [
    {
        title: "The Hunchback of Notre-Dame",
        author: "Victor Hugo",
        alreadyRead: false,
    },
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: true,
    },
    {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        alreadyRead: false,
    },
    {
        title: "Haikyu!! Vol. 1",
        author: "Haruichi Furudate",
        alreadyRead: true,
    }
];

/**
 * @constant {Array<string>} imgArray
 * @description
 * Array of imported image paths corresponding to each book.
 */
const imgArray = [
    notredame,
    design,
    holocaust,
    haikyuu1
];

// Add image URLs to book objects
bookList.forEach((book, i) => {
    book.url = imgArray[i];
});

const pageTitle = document.querySelector("h1");
const newUl = document.createElement("ul");
pageTitle.insertAdjacentElement("afterend", newUl);

// Render each book as an <li> with an image and conditional styling
bookList.forEach(({ title, author, alreadyRead, url }) => {
    const li = document.createElement("li");
    li.textContent = `${title} - ${author}`;
    li.classList.add(alreadyRead ? "read" : "unread");

    const img = document.createElement("img");
    img.src = url;
    img.style.border = `2px solid ${alreadyRead ? "green" : "red"}`;
    li.appendChild(img);

    newUl.appendChild(li);
});

// Load non-critical CSS after a delay
loadDelayedCSS();