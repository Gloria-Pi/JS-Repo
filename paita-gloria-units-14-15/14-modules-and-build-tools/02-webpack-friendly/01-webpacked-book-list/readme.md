# 01 Webpacked Book List

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Original Assignment

- Create a complete webpage with a title, description and all other HTML tags
- In the body add an h1 title of "My Book List"
- In javascript, iterate through the array of books.
   - For each book, create HTML element with the book title and author and append it to the page
   - Use a ul and li to display the books
   - Add a url property to each book object that contains the cover image of the book
   - Add the image to the HTML using Javascript
   - Using javascript change the style of the book depending on whether you have read it or not
- Add an external css file that applies after 5 seconds
   - Now change the style of the book depending on whether you have read it or not using both css and javascript (the CSS should use a different color for read books)

<br>
<br>

# Approach to Solution - Webpack Ver.

## 1. Creating the Book Array
- A constant `bookList` contains objects with `title`, `author`, and `alreadyRead` properties.
- A separate `imgArray` is defined with paths to book cover images.

<br>

## 2. Building the HTML Structure
- A new `<ul>` element is created and placed immediately after the `<h1>` title.

```js
const newUl = document.createElement("ul");

pageTitle.insertAdjacentElement("afterend", newUl);
```

- Each book is represented by a `<li>` element containing:
  - The book title and author as plain text.
  - An `<img>` tag displaying the cover image.
- Each list item is assigned a class of `"read"` or `"unread"` based on its status.

```js
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
```

<br>

## 3. Styling with JavaScript
- Inline styling is applied to each book cover image:
  - Green border for read books.
  - Red border for unread books.

```js
// Append an image to each list item and style it based on the read status
for (let listItem of allListItems) {

    const book = bookList[imgIndex]; // Get the corresponding book

    // Creating a new IMG
    let newImg = document.createElement("img");
        
    // Picking the IMG link from the array
    newImg.src = book.url;

    // Using javascript to change the style of the book depending on whether you have read it or not
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
```

<br>

## 4. Delayed External CSS Injection
- After 5 seconds, an external CSS file (`style.css`) is added to the document head.
- This file can include additional or overriding styles for `.read` and `.unread` classes.

```js
const cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "./styles/style.css";

setTimeout(() => {
    document.head.appendChild(cssFile);
}, 5000);
```

<br>
<br>

## Example Output (After 5 Seconds)

- "The Hunchback of Notre-Dame - Victor Hugo" will appear with a red border (unread).
- "The Design of Everyday Things - Don Norman" will have a green border (read).
- Cover images will be shown below each title-author entry.
- CSS colors and font styles will update automatically after the CSS file is loaded.