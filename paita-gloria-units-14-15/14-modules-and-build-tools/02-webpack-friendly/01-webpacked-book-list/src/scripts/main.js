/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script dynamically generates a list of books on a webpage. Each book entry includes
 * the title, author, and cover image, and is styled based on whether the book has been read.
 * After 5 seconds, an external CSS file is applied to modify the appearance of read/unread books.
 */

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

/**
 * @constant {HTMLElement} pageTitle
 * @description
 * The H1 element that contains the main title of the page ("My Book List").
 */
const pageTitle = document.querySelector("h1");

/**
 * @constant {HTMLElement} newUl
 * @description
 * The unordered list (ul) element created to hold all book entries.
 */
const newUl = document.createElement("ul");

// Insert the UL element directly after the H1
pageTitle.insertAdjacentElement("afterend", newUl);

/**
 * @constant {HTMLElement} ulElement
 * @description
 * The reference to the UL element that will contain all LI elements for books.
 */
const ulElement = document.querySelector("ul");

// Generate list items for each book and assign class depending on read status
bookList.forEach(book => {
    let newListItem = document.createElement("li");
    newListItem.textContent = book.title.concat(" - ", book.author);
    ulElement.appendChild(newListItem);

    //Add class "read/unread" to the LI depending on the value of alreadyRead
    if (book.alreadyRead) {
        newListItem.classList.add("read");

    } else {
        newListItem.classList.add("unread");
    }
});

/**
 * @constant {Array<string>} imgArray
 * @description
 * An array of image file paths to be added as the `url` property of each book.
 */
const imgArray = [
    "./assets/img/notredame.jpg",
    "./assets/img/design.jpg",
    "./assets/img/holocaust.jpg",
    "./assets/img/haikyuu1.jpg"
];

// Dynamically add the `url` property to each book
bookList.forEach((book, index) => {
    book.url = imgArray[index];
});

/**
 * @constant {HTMLCollectionOf<HTMLLIElement>} allListItems
 * @description
 * All "li" elements created for each book, used for image and style manipulation.
 */
const allListItems = document.getElementsByTagName("li");

// Initialize index
let imgIndex = 0;

// Append an image to each list item and style it based on the read status
for (let listItem of allListItems) {

    const book = bookList[imgIndex]; // Get the corresponding book
    let newImg = document.createElement("img");

    // Picking the IMG link from the array
    newImg.src = book.url;

    // Using JavaScript to change the style of the book depending on whether you have read it or not
    if (book.alreadyRead) {
        newImg.style.border = "solid 2px green";

    } else {
        newImg.style.border = "solid 2px red";
    }

    // Puts each IMG inside the LI element
    listItem.appendChild(newImg);

    // To the next img link
    imgIndex++;
}

// Add external CSS after a delay of 5 seconds
const cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "./styles/style.css";

setTimeout(() => {
    document.head.appendChild(cssFile);
}, 5000);