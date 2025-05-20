# 01 Slow List - setInterval ver.


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Create an array that holds a list of 30 items (food, books, etc.)
- Print one item of the list every second until the list is completely printed
  - Use `setInterval` to achieve this goal
  - Do the same thing using `setTimeout`

<br>
<br>

# Approach to Solution

## Setting Everything Up
- The first step was to define an array containing 30 Pokemon names, called `pokemonArray`.

```js
const pokemonArray = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", ... "Bellsprout"];
```

- Then, I initialized a counter variable, `pokedexNumber`, set to `0`, which keeps track of which Pokemon is currently being printed.

```js
let pokedexNumber = 0;
```
<br>

## Creating a function using `setInterval()`
The function `printEachPokemon()` was designed to be passed as an argument to setInterval(), and is responsible for:
  1. Printing one Pokemon name from the array.
  2. Incrementing the counter to move to the next Pokemon.
  3. Checking if all Pokemon have been printed (using an `if-else` statement); if so, it stops execution using `clearInterval()`.

The function will be executed every **1000 milliseconds (1 second)** when passed to `setInterval()`.

```js
function printEachPokemon() {

    // Logs a single element of the array and moves to the next one
    if (pokedexNumber < pokemonArray.length) {
        console.log(pokemonArray[pokedexNumber]);
        pokedexNumber++;

    } else {

        // Stops the interval once all elements are printed
        clearInterval(intervalId);
    }
}

// Stores the interval ID in `intervalId`, which is later used in `clearInterval()`.
let intervalId = setInterval(printEachPokemon, 1000);

```

<br>

## Example Output (1 Pokemon per second)
```plaintext
Pikachu
Charmander
Bulbasaur
Squirtle
...
Bellsprout
```

<br>

## Considerations & Limitations
- The program **does not handle dynamic changes** to the array during execution. If the array length changes while the program is running, unexpected behavior may occur.