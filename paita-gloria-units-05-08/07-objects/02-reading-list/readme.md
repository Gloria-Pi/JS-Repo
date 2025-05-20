# 02 Reading List


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Create an array of objects, where each object describes a book and has
properties for the `title` (a string), `author` (a string), and `alreadyRead` (a
boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title and
book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an `if/else` statement to change the output depending on whether
you read it yet or not. If you read it, log a string like 'You already read "The
Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
"The Lord of the Rings" by J.R.R. Tolkien.'

<br>

---

# Approach to Solution

## 1. Creating the array of books

I created an array called `bookList` that stores a collection of book objects.  
Each object includes:
- `title` → a string for the book title  
- `author` → a string for the author's name  
- `alreadyRead` → a boolean indicating if the book has been read  

<br>

```js
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
```

<br>

## 2. Logging the title and author

I used a `for...of` loop to iterate through each book in the array.  
For each book, it logged a string in the format: `"Title" by Author.`

<br>


```js
for (let book of bookList) {
    console.log(`"${book.title}" by ${book.author}.\n`);
}

/*
"Most Wonderful Book" by Most Wonderful Author.
"An Amazing Adventure" by Pit Snape.
"Romance 101" by Hope L. Roman.
"Winnie The Pooh" by A. A. Milne.
*/
```

<br>

## 3. Adding conditional output

A second `for...of` loop was used to enhance the output using an `if/else` statement.  
This prints a different message based on the value of the `alreadyRead` property:

- If `alreadyRead` is `true`:  
  `You already read "Title" by Author.`

- If `alreadyRead` is `false`:  
  `You still need to read "Title" by Author.`

This personalizes the feedback depending on whether the book has been read.

<br>


```js
for (let book of bookList) {
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}.\n`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}.\n`);
    }
}

/*
You still need to read "Most Wonderful Book" by Most Wonderful Author.
You already read "An Amazing Adventure" by Pit Snape.
You still need to read "Romance 101" by Hope L. Roman.
You already read "Winnie The Pooh" by A. A. Milne.
*/
```