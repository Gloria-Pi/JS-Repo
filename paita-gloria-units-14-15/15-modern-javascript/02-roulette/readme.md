# 02 Roulette

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Write a function called round that returns a promise with a 50/50
probability of resolving or rejecting
- The function should take 2 optional parameters:
  - label, a label for the round, otherwise the default is "round"
  - delay, a delay in which to resolve the promise, otherwise 500ms
- Call the function 3 times and use the Promise API to create an output as in
the following page
- Remember to handle any possible errors cleanly

When any round is lost (and terminate)
```bash
round x: lost!
Game over
```

When all rounds are won (and terminate)
```bash
round 1:won!
round 2:won!
round 3:won!
Game over
```

<br>
<br>

# Approach to Solution

# Roulette - First Implementation

This part of the readme will analyse the first version of my implementation for the Roulette exercise.

The code is provided in the file `firstattempt.js`.

## Implementation Details

- The code maintains **global state variables** to track the number of rounds played (`roundsPlayed`) and the initial label (`startingLabel`).  
- Input validation is performed through a helper function `isValidLabel` which ensures that the label provided is either a **positive integer** or a **non-empty string**, and rejects invalid types such as `null`, `undefined`, arrays, booleans, and others (you can learn more on this by checking out this section: [Input Validation](#1-input-validation)).  
- The main function `round` uses promises to simulate asynchronous outcomes with a 50% chance of resolving (win) or rejecting (loss).  
- It recursively calls itself to simulate subsequent rounds until three successful rounds are completed or a round is lost.

### Main Round Function

The `round` function handles the game logic, including input validation, promise creation with random success/failure, and recursive invocation for subsequent rounds:

```javascript
let roundsPlayed = 0;
let startingLabel;

function round(label = "round", delay = 500) {
    const labelCheck = isValidLabel(label);

    if (labelCheck === "err1") {
        console.log("Invalid input: please provide a number or a word.");
        return;
    } else if (labelCheck === "err2") {
        console.log("Invalid input: the number must be a positive integer.");
        return;
    }

    // First round only: capture the label value
    if (typeof label === "number" || typeof label === "string") {
        startingLabel = label;
    }

    // End game after 3 rounds
    if (roundsPlayed >= 3) {
        console.log("Game over");
        return;
    }

    const currentRound = typeof startingLabel === "number"
        ? startingLabel + roundsPlayed
        : `${startingLabel} ${roundsPlayed + 1}`;

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5
                ? resolve(`round ${currentRound}: won!`)
                : reject(`round ${currentRound}: lost!`);
        }, delay);
    });

    return myPromise
        .then(resultingMsg => {
            console.log(resultingMsg);
            roundsPlayed++;
            return round(label, delay);
        })
        .catch(error => {
            console.log(error);
            console.log("Game over");
        });
}
```

## Known Limitations and Considerations
After testing the code, I came to realise that while the code is functional, it comes with the following limitations:

* **Global State**: by implementing global variables (`roundsPlayed` and `startingLabel`) the game state persists across multiple calls and cannot be reset easily without restarting the environment or manually resetting these variables.
* **Recursive Approach**: the function recursively calls itself to simulate multiple rounds instead of calling `round` three separate times externally using the Promise API. While this achieves the intended behavior, the assignment originally specified calling the function three times, which might be interpreted as separate explicit calls rather than recursion.
* **Error Handling**: in order to prevent unhandled promise rejections, any input validation errors are handled inside the function with console messages and early return.

## Usage Examples

```javascript
round(1);             // Starts rounds labeled 1, 2, 3
round("hello");       // Starts rounds labeled "hello 1", "hello 2", "hello 3"
round();              // Defaults to "round 1", "round 2", "round 3"
round(null);          // Logs invalid input message and terminates
round([1, 2, 3]);     // Logs invalid input message and terminates
```

## Conclusion of the first attempt

This first version satisfies the core requirements of the Roulette exercise by simulating three rounds with appropriate input validation, asynchronous behavior, and error handling.  

Unfortunately, it fails to fully adhere to the assignment’s specification to call the `round` function three separate times and properly utilize the Promise API externally to manage the sequence and termination logic.

This limitation led me to write the script `final.js`.

<br>
<br>

# Roulette - Final Implementation

This **Roulette** version has been completed using **Promise chaining**.  
The logic resides in the file `final.js`, and represents an improved, more modular, and standards-compliant version of the initial `firstattempt.js`.

## Implementation Highlights

### 1. Input Validation

To ensure predictable and clean behavior, all input to `round()` is strictly validated via a helper function `isValidLabel(label)`:

```javascript
function isValidLabel(label) {
    const invalidTypes = ["boolean", "object", "undefined", "function", "symbol", "bigint"];

    if (
        label === null ||
        label === "" ||
        invalidTypes.includes(typeof label) ||
        Array.isArray(label)
    ) {
        return "err1";
    }

    if (typeof label === "number" && (!Number.isInteger(label) || label < 0)) {
        return "err2";
    }

    return true;
}
```

Only **non-empty strings** and **positive integers** are accepted as valid labels.
This decision enforces clarity in round identifiers, avoids ambiguity, and prevents unintended behavior during string interpolation in the final message.

For example:

* `round(1)` results in `round 1: won`
* `round("ciao")` results in `round ciao: won`
* `round()` defaults to `round round: won`

Invalid inputs such as arrays, objects, booleans, or negative numbers immediately reject the Promise with a clear error message.

<br>

### 2. Core Function: `round()`

The function generates a Promise that either resolves or rejects after a delay:

```javascript
function round(label = "round", delay = 500) {
    return new Promise((resolve, reject) => {
        const labelCheck = isValidLabel(label);

        if (labelCheck === "err1") {
            reject("Invalid input: please provide a number or a word.");
            return;
        } else if (labelCheck === "err2") {
            reject("Invalid input: the number must be a positive integer.");
            return;
        }

        setTimeout(() => {
            Math.random() < 0.5
                ? resolve(`round ${label}: won`)
                : reject(`round ${label}: lost`);
        }, delay);
    });
}
```

<br>

### 3. Execution Flow

Using `.then()` chaining, three sequential calls to `round()` are made.  
The game stops as soon as one round is lost:

```javascript
round(1)
    .then(result => {
        console.log(result);
        return round(2);
    })
    .then(result => {
        console.log(result);
        return round(3);
    })
    .then(result => {
        console.log(result);
        console.log("Game over");
    })
    .catch(error => {
        console.log(error);
        console.log("Game over");
    });
```

<br>

## Comparison with First Attempt

In the original implementation (`firstattempt.js`), the round logic was handled recursively, with internal state (`roundsPlayed`) and branching based on Promise results. Input validation was mixed into the game loop, and rejection errors sometimes went uncaught, resulting in `Uncaught (in promise)` console errors (which I later avoided by using simple console.logs).

This final implementation corrects those flaws by:

* **Isolating validation** into a dedicated function
* **Rejecting early** on invalid input through the Promise interface
* **Using pure Promise chaining** for sequential game flow
* **Avoiding internal state** like `roundsPlayed`: each call to `round()` is fully independent
* Adopting a **cleaner, modular, and scalable** design

<br>

## Examples

```js
round(1);           // round 1: ...
round("start");     // round start: ...
round();            // round round: ...
round(null);        // ❌ Invalid input
round([1, 2]);      // ❌ Invalid input
round(-5);          // ❌ Invalid input
round(true);        // ❌ Invalid input
```