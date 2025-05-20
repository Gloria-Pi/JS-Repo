/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * A Hangman-style word guessing game with bonuses:
 * - Random word and letter generation.
 * - ASCII hangman stages after each wrong guess.
 * - Random reward system for correct guesses.
 * - Random penalty for incorrect guesses.
 * - Tracks and displays total score and game progress.
 */


//---------------------------------------------------------------------
// THE HANGMAN SECTION


/**
 * Array of ASCII art representing each stage of the hangman.
 * Displayed progressively as wrong guesses increase.
 * @type {string[]}
 */
const hangmanStages = [
    `
    
         


        -
    `
    ,
    `
    
         


        ---
    `
    ,
    `
    
         |
         |
         |
         |
        ---
    `
    ,
    `
     ____
         |
         |
         |
         |
        ---
    `
    ,
    `
     ____
    |    |
         |
         |
         |
        ---
    `
    ,
    `
     ____
    |    |
    0    |
         |
         |
        ---
    `
    ,
    
    `
     ____
    |    |
    0    |
    |    |
         |
        ---
    `
    ,
    `
     ____
    |    |
    0    |
   /|    |
         |
        ---
    `
    ,
    `
     ____
    |    |
    0    |
   /|\\   |
   /     |
        ---
    `
    ,
    `
    _____
   |     |
   0     |
  /|\\    |
  / \\    |
        ---
    ` 
];



//---------------------------------------------------------------------
// THE RANDOMIZERS SECTION



/**
 * @function pickWord
 * @description Randomly selects a word from a given list and sets up both
 * the `lettersOfTheWord` and `lettersToBeGuessed` arrays.
 * @param {string[]} listOfWords - Array of words to pick from, each in spaced letter format.
 * @returns {void}
 */
function pickWord(listOfWords){
    const randomWordIndex = Math.floor((Math.random() * listOfWords.length));
    const randomWord = listOfWords[randomWordIndex];
    
    lettersOfTheWord = randomWord.split(" ");
    
    //Creating a shallow copy with .slice
    const lettersToGuess = lettersOfTheWord.slice();

    //The fill method is not supported in IE
    lettersToBeGuessed = lettersToGuess.fill("_");
}


/**
 * Array that holds the final selected word as individual letters.
 * Example: ['C', 'O', 'F', 'F', 'E', 'E']
 * @type {string[]}
 */
let lettersOfTheWord = [];


/**
 * Array that holds the guessed letters, initialized with underscores.
 * Example: ['_', '_', '_', '_', '_', '_']
 * @type {string[]}
 */
let lettersToBeGuessed = [];


/**
 * List of available words to randomly choose from.
 * Each word is a string with space-separated uppercase letters.
 * @type {string[]}
 */
const words = ["B U B B L E S", "C O F F E E", "D A I S Y", "G L O R Y"];

/**
 * A string containing all uppercase letters from A to Z.
 * The first character is an empty space to allow indexing from 1 to 26.
 * @constant {string}
 */
const alphabetLetters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//A random whole number between 1 and 26 (inclusive):
let randomIndex;


/**
 * @function randomAlphabet
 * @description
 * Returns a random uppercase letter from the English alphabet (A–Z).
 * @param {string} alphabet - A string where index 1 to 26 represent letters A to Z. The character at index 0 must be a space.
 * @returns {string} A random uppercase letter between 'A' and 'Z'.
 */
function randomAlphabet(alphabet) {

    // Generate a random index between 1 and 26 (inclusive) (rounds down to an integer)
    randomIndex = Math.floor((Math.random() * 26) + 1);     // This ensures it's between 1 and 26

    // Get the letter at that index
    const randomLetter = alphabet.charAt(randomIndex);

    return randomLetter;

}



//---------------------------------------------------------------------
// PLAYER SCORE SECTION



/**
 * Tracks the player's current score (can be positive or negative).
 * @type {number}
 */
let playerScore = 0;


/**
 * @function randomReward
 * @description Randomly generates a reward (1–5 points) for correct guesses and
 * adds it to the `playerScore`. Logs feedback to the console.
 * @returns {void}
 */
function randomReward(){
    const reward = Math.floor((Math.random() * 5) + 1);     // This ensures it's between 1 and 5
    playerScore += reward;
    console.log(`You've just gained ${reward} points!\nCurrent score: ${playerScore}`);
}


/**
 * @function randomDetraction
 * @description Randomly generates a penalty (1–5 points) for incorrect guesses and
 * subtracts it from the `playerScore`. Logs feedback to the console.
 * @returns {void}
 */
function randomDetraction(){
    const detraction = Math.floor((Math.random() * 5) + 1);     // This ensures it's between 1 and 5
    playerScore -= detraction;

    //Uncomment if you prefer the player score to stay equal or above 0
    //if (playerScore <= 0) {
    //    playerScore = 0;
    //}

    console.log(`You've just lost ${detraction} points!\nCurrent score: ${playerScore}`);
}



//---------------------------------------------------------------------
// SETTING UP THE GAME SECTION



/**
 * The current guess round (starts at 1). Maximum allowed is 10.
 * @type {number}
 */
let numberOfGuesses = 1;


/**
 * Tracks the number of incorrect guesses (used to show hangman stage).
 * Starts at -1 so the first error shows stage 0.
 * @type {number}
 */
let wrongGuesses = -1;


// Initializes the first word to be guessed
pickWord(words);


/**
 * Allows the user to guess a letter and updates the game state accordingly.
 * Displays hangman stages, updates the guessed letters array,
 * and manages rewards and penalties.
 * 
 * Ends the game if the word is guessed or max attempts are reached.
 * 
 * @function guessLetter
 * @param {string} letter - A single uppercase character to guess.
 * @returns {void}
 */
function guessLetter(letter) {

    console.log(`Guess ${numberOfGuesses} out of 10.`);

    // Only run the loop if there are still guesses available
    if (numberOfGuesses < 11) {

        // Checks if the value of the argument can be found inside the array lettersOfTheWord 
        let check = lettersOfTheWord.indexOf(letter);

        //If the argument is not part of the array, it's a wrong guess
        if (check === -1) {

            console.log(`\nLetter ${letter}? Aww, wrong guess...`);
            wrongGuesses++;
            randomDetraction();
            
        } else {
            
            //If the argument is part of the array, it's a correct guess...
            console.log(`\nLetter ${letter}? Hey, that's a correct guess!`);
            randomReward();
            
            //Cycling through every array element
            for (let index in lettersOfTheWord) {
                
                //Checks is the argument matches the one that it's currently being iterated on
                if (letter === lettersOfTheWord[index]) {
                    
                    //if so, replaces the element inside the array lettersToBeGuessed that has the same index with the argument
                    lettersToBeGuessed[index] = letter;
            
                } else {
                    
                    //if not, goes to the next iteration
                    continue;
    
                }
            }
        }

        //Checking in with the player
        if (wrongGuesses >= 0) {
            console.log(hangmanStages[wrongGuesses]);
        }
        console.log(`These are all the letters you've guessed until now:\n${lettersToBeGuessed}`);
        console.log(`============================================`);


        // Increments the guess count
        numberOfGuesses++;


        //checks if the player has guessed the entire word
        if (lettersOfTheWord.join("") === lettersToBeGuessed.join("")) {

            //the message if you win the game
            console.log(`\nYOU WON!\nFinal Score ${playerScore}.\nThe word is ${lettersToBeGuessed.join("")}.\nYou have guessed the word, congrats! :)`);

            return;

        }

    }

    if (numberOfGuesses === 11) {
        
        //the message if you lose the game
        console.log(`\nGAME OVER\nFinal Score ${playerScore}.\nYou couldn't guess the word in time. Better luck next time! :(`);

    }

}


// Loop to simulate the game 10 times
for (let i = 1; i < 11; i++) {
    guessLetter(randomAlphabet(alphabetLetters));
}