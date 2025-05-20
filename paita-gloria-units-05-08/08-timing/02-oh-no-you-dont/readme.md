# 02 Oh no you don't


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Write a function `useful` that does something useful in Javascript
- Schedule it to run after 10 seconds
- Write another function that cancels the scheduling of the first function
- Use the second function to cancel the first one after 5 seconds and output
‘function cancelled’ to the console


<br>
<br>

# Approach to Solution

## The `useful()` Function
The function `useful()` selects a random Pokémon from the Johto region and logs it to the console. It accepts an array of Pokémon names as an argument and uses `Math.random()` to select an entry.

```js
function useful(regionalPokemon) {

    let randomIndex = Math.floor(Math.random() * regionalPokemon.length);

    console.log(regionalPokemon[randomIndex]);

}
```

<br>

## Scheduling `useful()`
To schedule `useful()`, we use `setTimeout()`, assigning the timeout ID to the variable `timerIdUseful`.

The function is set to execute after 10 seconds (10,000 ms), passing the `johtoPokemon` array as an argument.

```js
let timerIdUseful = setTimeout(useful, 10000, johtoPokemon);
```

<br>

## Creating the `stopUseful()` Function
The function `stopUseful()` is responsible for canceling the scheduled execution of `useful()`.

It uses `clearTimeout(timerIdUseful)` to prevent `useful()` from running and logs "Function Cancelled" to the console.

```js
function stopUseful() {

    clearTimeout(timerIdUseful);
    console.log("Function Cancelled");
    
}
```

<br>

## Scheduling `stopUseful()`
Another `setTimeout()` is used to call `stopUseful()` after 5 seconds (5,000 ms), ensuring that `useful()` never gets executed.

```js
let timerIdStopUseful = setTimeout(stopUseful, 5000);
```

<br>


## Example Output
```
Function Cancelled
```
Since `stopUseful()` runs before `useful()`, no Pokémon is logged to the console.