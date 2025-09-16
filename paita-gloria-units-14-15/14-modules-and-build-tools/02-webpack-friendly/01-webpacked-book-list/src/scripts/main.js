/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script dynamically generates a list of books on a webpage. Each book entry includes
 * the title, author, and cover image, and is styled based on whether the book has been read.
 * After 5 seconds, an external CSS file is applied to modify the appearance of read/unread books.
*/

import { loadDelayedCSS } from "./helper.js";

import notredame from "../assets/img/notredame.jpg";
import design from "../assets/img/design.jpg";
import haikyuu1 from "../assets/img/haikyuu1.jpg";
import holocaust from "../assets/img/holocaust.jpg";


/**
 * @constant {Array<Object>} bookList
 * @description
 * An array of book objects to be rendered on the webpage. Each object contains the book's
 * title, author, read status, and an image URL (added later via JavaScript).
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

const imgArray = [
    notredame,
    design,
    holocaust,
    haikyuu1
];

// Dynamically add the `url` property to each book
bookList.forEach((book, i) => {
    book.url = imgArray[i];
});

const pageTitle = document.querySelector("h1");
const newUl = document.createElement("ul");
pageTitle.insertAdjacentElement("afterend", newUl);

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

loadDelayedCSS();