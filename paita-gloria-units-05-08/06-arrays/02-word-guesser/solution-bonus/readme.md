# 02 Word Guesser - Bonus Version

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

1. Create two arrays:
- one for the letters of the word (e.g. 'C', 'A', 'T')
- Another for the current guessed letters (start with `"_", "_', "_"` and add the correct letters to it).

2. Write a function called guessLetter that should:
- Take one parameter, a letter.
- Have a maximum number of guesses (e.g. 6)
- Check if the letter is in the word array.
- If the letter matches, add it in the correct position of the guessed array.
- Show the user the current guessed letters.
- Tell the user if they guessed a correct letter.
- Tell the user how many guesses remain.
- Tell the user if they won or lost the game.

3. Call your function to make guesses:

- guessLetter('G');
- guessLetter('I');
- guessLetter('O');
- guessLetter('A');
- guessLetter('T');


**BONUS**  
- Add a random reward for correct guesses and subtract a random amount for failed
guesses.
- Show the user the total reward (positive or negative).
- Draw a hangman image to the console log after each guess.
- Add a function that generates the letters to guess randomly.
- Add a function that chooses the initial word to guess from an array of words.


<br>
<br>


# Approach to Solution

# Summary of Code Structure

- `words`: list of possible target words
- `lettersOfTheWord`: actual word (split into characters)
- `lettersToBeGuessed`: guessed letters ("_" or actual letters)
- `playerScore`: current score based on guesses
- `wrongGuessCount`: current number of incorrect guesses
- `hangmanStages`: ASCII art stages of hangman drawing
- `pickWord()`: initializes game state
- `randomReward() / randomDetraction()`: point modifiers
- `guessLetter()`: main game logic

<br>

## 1. Setting Up the Game State

- **Word Bank**: An array of strings, each representing a word to guess (letters are space-separated).

```javascript
// Loop to simulate the game 10 times
for (let i = 1; i < 11; i++) {

    guessLetter(randomAlphabet(alphabetLetters));

}
```
- **Word Selection**: A `pickWord()` function randomly selects a word from the array.

```javascript
function pickWord(listOfWords) {
    const randomWordIndex = Math.floor((Math.random() * listOfWords.length));
    const randomWord = listOfWords[randomWordIndex];
    
    lettersOfTheWord = randomWord.split(" ");
    lettersToBeGuessed = lettersOfTheWord.slice().fill("_");
}
```


- **Game Arrays**:
  - `lettersOfTheWord`: Holds the correct word split into individual characters.
  - `lettersToBeGuessed`: Mirrors the above with underscores, updated on correct guesses.

```js
let lettersOfTheWord = [];
let lettersToBeGuessed = [];
```

<br>

## 2. Core Game Mechanics

### Function: `guessLetter(letter)`
- Takes a single letter as input.
- Checks if the game is already over.
- Compares input letter to the target word:
  - If found, updates `lettersToBeGuessed` accordingly.
  - If not found, increases `wrongGuessCount`, reduces score, and updates the Hangman drawing.
- Displays feedback to the user: correct/incorrect, updated state, remaining guesses.
- Ends the game with a win or loss message depending on the progress.

```js
function guessLetter(letter) {
    console.log(`Guess ${numberOfGuesses} out of 10.`);

    if (numberOfGuesses < 11) {
        let check = lettersOfTheWord.indexOf(letter);

        if (check === -1) {
            console.log(`\nLetter ${letter}? Aww, wrong guess...`);
            wrongGuesses++;
            randomDetraction();
        } else {
            console.log(`\nLetter ${letter}? Hey, that's a correct guess!`);
            randomReward();

            for (let index in lettersOfTheWord) {
                if (letter === lettersOfTheWord[index]) {
                    lettersToBeGuessed[index] = letter;
                }
            }
        }

        if (wrongGuesses >= 0) {
            console.log(hangmanStages[wrongGuesses]);
        }
        console.log(`These are all the letters you've guessed until now:\n${lettersToBeGuessed}`);
        console.log(`============================================`);

        numberOfGuesses++;

        if (lettersOfTheWord.join("") === lettersToBeGuessed.join("")) {
            console.log(`\nYOU WON!\nFinal Score ${playerScore}.\nThe word is ${lettersToBeGuessed.join("")}.\nYou have guessed the word, congrats! :)`);
            return;
        }
    }

    if (numberOfGuesses === 11) {
        console.log(`\nGAME OVER\nFinal Score ${playerScore}.\nYou couldn't guess the word in time. Better luck next time! :(`);
    }
}
```

### Guess Flow:
- The user can call `guessLetter()` repeatedly to simulate the guessing loop.
- The game allows a maximum of 9 incorrect guesses (based on `hangmanStages` length).

```js
for (let i = 1; i < 11; i++) {
    guessLetter(randomAlphabet(alphabetLetters));
}
```
<br>

## 3. Bonus Features

### Random Reward System
- **`randomReward()`**: Adds 1–5 points on correct guess.
- **`randomDetraction()`**: Subtracts 1–5 points on incorrect guess.
- `playerScore` tracks the total.

```js
let playerScore = 0;

function randomReward() {
    const reward = Math.floor((Math.random() * 5) + 1);
    playerScore += reward;
    console.log(`You've just gained ${reward} points!\nCurrent score: ${playerScore}`);
}

function randomDetraction() {
    const detraction = Math.floor((Math.random() * 5) + 1);
    playerScore -= detraction;
    console.log(`You've just lost ${detraction} points!\nCurrent score: ${playerScore}`);
}
```

### Hangman ASCII Drawing
- `hangmanStages[]`: Array of 10 strings representing the stages of the hangman drawing.
- Each wrong guess increases `wrongGuessCount` and shows the next stage.

### Random Word and Letter Generator
- `pickWord(listOfWords)`: Selects a word from the provided array.
- Initial word is randomly picked at the start of the game.

```js
function randomAlphabet(alphabet) {
    const randomIndex = Math.floor((Math.random() * 26) + 1);
    return alphabet.charAt(randomIndex);
}

const alphabetLetters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

<br>
<br>


# Sample Gameplay

```js
pickWord(words);        // Randomly picks a word from the list

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
```

Feedback is shown after each guess with:
- Updated guessed word state
- Hangman drawing
- Correct/incorrect message
- Current score
- Remaining guesses
- Win/loss message if applicable