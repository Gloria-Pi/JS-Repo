/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains a solution to the following assignment:
 *
 * 1. Create two arrays, one for the letters of the word to guess, one for the current guessed letters
 *
 * 2. Write a simple word guessing game that:
 * - Tracks correct and incorrect letter guesses.
 * - Reveals letters in-place when guessed correctly.
 * - Ends when the word is guessed or after 10 attempts.
 *
 * IMPLEMENTED FEATURES:
 * - Uses `indexOf()` and a `for...in` loop to match and reveal all instances of a correct letter.
 * - Tracks the number of guesses globally.
 * - Displays the game status after each guess.
 * - Handles both victory and game-over scenarios.
 */


// Global variables
const lettersOfTheWord = ["B", "U", "B", "B", "L", "E", "S"];
const lettersToBeGuessed = ["_", "_", "_", "_", "_", "_", "_"];

let numberOfGuesses = 1;        // Setting the number of the round to 1


/**
 * @function guessLetter
 * @description
 * Simulates a letter-guessing game similar to Hangman. Given a single-letter guess,
 * the function checks whether the letter is part of the target word. If the guess is correct,
 * it updates the array of currently guessed letters. The player has a limited (10) number of attempts
 * to guess the word correctly.
 *
 * @param {string} letter - A single character to guess.
 * @returns {void} Logs correct or incorrect guesses, updated progress, and win/loss messages.
 *
 * @example
 * guessLetter("B");
 * // Logs correct or incorrect guesses, updated progress, and win/loss messages.
 */

function guessLetter(letter) {

    // Only runs the logic if there are still guesses left
    if (numberOfGuesses < 11) {

        // Checks if the guessed letter exists in the word
        let check = lettersOfTheWord.indexOf(letter);

        if (check === -1) {

            //If the argument is not part of the word, it's a wrong guess
            console.log(`\nAww, wrong guess...`);


        } else {

            //If the argument is part of the word, it's a correct guess
            console.log(`\nHey, that's a correct guess!`);

            // Loops through each element of the array
            for (let index in lettersOfTheWord) {

                // If the argument matches the one that it's currently being iterated on
                if (letter === lettersOfTheWord[index]) {
    
                    // Updates the corresponding position in the guessed array
                    lettersToBeGuessed[index] = letter;
            
                } else {
                    
                    // If no match, skips to the next index
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

            console.log(`\nThe word is ${lettersToBeGuessed.join("")}.\nYou have guessed the word, congrats! :)`);

            return;

        }

    }

    // If the player has used all 10 guesses, the player loses
    if (numberOfGuesses === 11) {

        // The message if you lose the game
        console.log(`\nGAME OVER\nYou couldn't guess the word in time. Better luck next time! :(`);

    }

}


//Guesses that lead to a victory
guessLetter("U");

guessLetter("C");

guessLetter("L");

guessLetter("E");

guessLetter("B");

guessLetter("Y");

guessLetter("S");


//Guesses that lead to a loss
// guessLetter("A");

// guessLetter("V");

// guessLetter("U");

// guessLetter("S");

// guessLetter("P");

// guessLetter("O");

// guessLetter("W");

// guessLetter("L");

// guessLetter("I");

// guessLetter("X");