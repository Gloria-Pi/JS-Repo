# 02 Word Guesser - Base Version


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Create two arrays:
- one for the letters of the word (e.g. 'C', 'A', 'T')
- Another for the current guessed letters (start with `"_", "_', "_"` and add the correct letters to it).

Write a function called guessLetter that should:
- Take one parameter, a letter.
- Have a maximum number of guesses (e.g. 6)
- Check if the letter is in the word array.
- If the letter matches, add it in the correct position of the guessed array.
- Show the user the current guessed letters.
- Tell the user if they guessed a correct letter.
- Tell the user how many guesses remain.
- Tell the user if they won or lost the game.

Call your function to make guesses.


<p>&nbsp;</p>


# Approach to Solution

## Method Overview

This solution implements a simple **Hangman-like game** with:

- A **word stored as an array** of uppercase letters (`lettersOfTheWord`).
- A **parallel array** of underscores (`lettersToBeGuessed`) to show guessed progress.
- A **global counter** `numberOfGuesses` initialized to 1 and incremented after each guess.
- A function `guessLetter(letter)` that:
  - Verifies whether the input letter is in the target word.
  - If so, **updates all matching positions** using a `for...in` loop.
  - Provides **feedback** after each guess.
  - Ends the game if the word is guessed or if 10 attempts are used.

<p>&nbsp;</p>

### Code

```js
// Global variables
const lettersOfTheWord = ["B", "U", "B", "B", "L", "E", "S"];
const lettersToBeGuessed = ["_", "_", "_", "_", "_", "_", "_"];

// Tracks the round number
let numberOfGuesses = 1;

function guessLetter(letter) {

    // Only runs the logic if there are still guesses left
    if (numberOfGuesses < 11) {

        // Checks if the guessed letter exists in the word
        let check = lettersOfTheWord.indexOf(letter);

        if (check === -1) {

            //If the argument is not part of the word, it's a wrong guess
            console.log(`\nAww, wrong guess...`);

        } else {

            // If the argument is part of the word, it's a correct guess
            console.log(`\nHey, that's a correct guess!`);

            // Loops through each element of the array
            for (let index in lettersOfTheWord) {

                // If the argument matches the one that it's currently being iterated on
                if (letter === lettersOfTheWord[index]) {

                    // Updates the corresponding position in the guessed array
                    lettersToBeGuessed[index] = letter;

                } else {

                    // If no match, skip to next index
                    continue;
                }
            }
        }

        // Feedback to the player
        console.log(`--> These are all the letters you've guessed until now: ${lettersToBeGuessed}`);
        console.log(`Guess ${numberOfGuesses} out of 10.`);

        // Increases the number of guesses used
        numberOfGuesses++;

        // If the full word has been guessed, the player wins
        if (lettersOfTheWord.join("") === lettersToBeGuessed.join("")) {
            console.log(`\nThe word is ${lettersToBeGuessed.join("")}. \nYou have guessed the word, congrats! :)`);
            return;
        }
    }

    // If no guesses remain, the player loses
    if (numberOfGuesses === 11) {
        console.log(`\nGAME OVER\nYou couldn't guess the word in time. Better luck next time! :(`);
    }
}
```

<p>&nbsp;</p>

---
### Example: Guesses That Win

```js
guessLetter("U");
guessLetter("C"); // incorrect
guessLetter("L");
guessLetter("E");
guessLetter("B");
guessLetter("Y"); // incorrect
guessLetter("S");
```

#### Output (partial):

```text
Hey, that's a correct guess!
--> These are all the letters you've guessed until now: _,U,_,_,_,_,_
Guess 1 out of 10.

(...)

Hey, that's a correct guess!
--> These are all the letters you've guessed until now: B,U,B,B,L,E,S
Guess 7 out of 10.

The word is BUBBLES.
You have guessed the word, congrats! :)
```

<p>&nbsp;</p>

---

### Example: Guesses That Lose

```js
guessLetter("A");
guessLetter("V");
guessLetter("U");
guessLetter("S");
guessLetter("P");
guessLetter("O");
guessLetter("W");
guessLetter("L");
guessLetter("I");
guessLetter("X");
```

#### Output (end):

```text
(...)
Aww, wrong guess...
 --> These are all the letters you've guessed until now: _,U,_,_,L,_,S
Guess 10 out of 10.
 
GAME OVER
You couldn't guess the word in time. Better luck next time! :(
```