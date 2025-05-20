/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines an array of books and prints:
 * - Each book's title and author in the format: "Title" by Author.
 * - A second message depending on whether the book was already read:
 *     • If read:     'You already read "Title" by Author.'
 *     • If unread:   'You still need to read "Title" by Author.'
 */

/**
 * @constant {Object[]} bookList
 * @description An array of book objects.
 * Each book includes a title, an author, and a boolean indicating if it has been read.
 *
 * @property {string} title - The title of the book.
 * @property {string} author - The name of the book's author.
 * @property {boolean} alreadyRead - Whether the book has already been read.
 *
 * @example
 * {
 *   title: "Winnie The Pooh",
 *   author: "A. A. Milne",
 *   alreadyRead: true
 * }
 */

const bookList = [
    {
        title: "Most Wonderful Book",
        author: "Most Wonderful Author",
        alreadyRead: false
    },
    {
        title: "An Amazing Adventure",
        author: "Pit Snape",
        alreadyRead: true
    },
    {
        title: "Romance 101",
        author: "Hope L. Roman",
        alreadyRead: false
    },
    {
        title: "Winnie The Pooh",
        author: "A. A. Milne",
        alreadyRead: true
    }
];



/**
 * Logs the title and author of each book in the list.
 * Format: "Title" by Author.
 */
for (let book of bookList) {

    console.log(`"${book.title}" by ${book.author}.\n`);

}

/* Logs:
"Most Wonderful Book" by Most Wonderful Author.
"An Amazing Adventure" by Pit Snape.
"Romance 101" by Hope L. Roman.
"Winnie The Pooh" by A. A. Milne.
*/



/**
 * Logs a message based on whether the book has been read.
 * - If already read: 'You already read "Title" by Author.'
 * - If not read:     'You still need to read "Title" by Author.'
 */
for (let book of bookList) {
    
    if (book.alreadyRead) {

        console.log(`You already read "${book.title}" by ${book.author}.\n`);

    } else {

        console.log(`You still need to read "${book.title}" by ${book.author}.\n`);

    }
}


/* Logs:
You still need to read "Most Wonderful Book" by Most Wonderful Author.
You already read "An Amazing Adventure" by Pit Snape.
You still need to read "Romance 101" by Hope L. Roman.
You already read "Winnie The Pooh" by A. A. Milne.
*/