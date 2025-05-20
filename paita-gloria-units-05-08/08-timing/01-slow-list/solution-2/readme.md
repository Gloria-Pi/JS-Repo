# 01 Slow List - setTimeout ver.


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

## Using `setTimeout()` with a `for...in` Loop
The solution uses a `for...in` loop to iterate over the `pokemonArray`, scheduling each name to be printed with an increasing delay using `setTimeout()`.

### Key Concepts:
- **Understanding `for...in` vs. `for...of`**
  - `for...in` iterates over keys (indices) of an array.
  - `for...of` iterates over values (elements).
  - Since we need the index for scheduling delays, I selected `for...in` as the more appropriate choice.

- **Why `1000 * pokedexNumber`?**
  - The delay increases by one second for each iteration, ensuring a *staggered* effect.
  - Example:
    - First Pokémon prints at `1000 * 0 = 0ms`.
    - Second Pokémon prints at `1000 * 1 = 1000ms`.
    - Third Pokémon prints at `1000 * 2 = 2000ms`, and so on.

This guarantees that each Pokémon appears at regular one-second intervals rather than all at once.

<br>

## Code Implementation
```js

for (let pokedexNumber in pokemonArray) {
    let timeoutId = setTimeout(() => {
        console.log(pokemonArray[pokedexNumber]);
    }, 1000 * pokedexNumber);
}
```

<br>

# Alternative Approaches

## Using `setTimeout()` Recursively
Instead of a loop, I could've used a recursive function to print Pokémon names one at a time:
```js
function printPokemon(index) {
    if (index < pokemonArray.length) {
        console.log(pokemonArray[index]);
        setTimeout(() => printPokemon(index + 1), 1000);
    }
}
printPokemon(0);
```

### Pros:
- More flexible than a loop, allowing dynamic interval adjustments.
- Avoids issues related to closures and delays.

### Cons:
- Requires a function call for each iteration, potentially consuming more memory.