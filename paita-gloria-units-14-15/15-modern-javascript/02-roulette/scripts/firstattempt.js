/**
 * @file firstattempt.js
 * @author Gloria Paita
 * 
 * @description
 * This script implements the first version of the "Roulette" exercise.
 * It simulates a simple game where up to three rounds can be played.
 * Each round has a 50% chance of being won or lost.
 * The function validates input strictly and halts execution upon an invalid input or loss.
 */

let roundsPlayed = 0;
let startingLabel;

/**
 * Validates the label passed to the round function.
 *
 * Accepts only non-empty strings and positive integers.
 * Rejects null, empty strings, arrays, booleans, objects,
 * functions, undefined, symbols, and negative/float numbers.
 *
 * @param {*} label - The value to validate as a round label.
 * @returns {string} - Returns "valid" if the label is acceptable,
 *                     "err1" for invalid type,
 *                     or "err2" for invalid number.
 */
function isValidLabel(label) {

    const invalidTypes = ["boolean", "object", "undefined", "function", "symbol", "bigint"];

    if (label === null
        || label === ""
        || invalidTypes.includes(typeof label)
        || Array.isArray(label)
    ) {
        return "err1";
    }

    // Reject numbers that are not positive integers
    else if (typeof label === "number" && (!Number.isInteger(label) || label < 0)) {
        return "err2";
    }

    return "valid";
}

/**
 * Simulates a single round of a game with a 50% win/loss chance.
 *
 * Uses Promises and recursion to call itself up to 3 times,
 * unless a round is lost or invalid input is detected.
 *
 * @param {string|number} [label="round"] - A label to identify the round.
 *                                          Can be a word (e.g., "start") or a number (e.g., 1).
 * @param {number} [delay=500] - Delay in milliseconds before the round resolves/rejects.
 * @returns {Promise<void>|undefined} - Returns a Promise if valid; otherwise, exits early.
 */
function round(label = "round", delay = 500) {

    const labelCheck = isValidLabel(label);

    // If label is not a valid number or a string -> feedback to user.
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

    // If label is number or a string -> play the game. 
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
                : reject(`round ${currentRound}: lost!`)
        }, delay);
    });

    return myPromise
        .then(resultingMsg => {
            console.log(resultingMsg);
            roundsPlayed++;
            return round(label, delay);
        }
        )

        .catch((error) => {
            console.log(error);
            console.log("Game over");
        });

};

// VALID CALLS
// round(130);
// round("hello");
// round();
// round(undefined);

// INVALID CALLS
// round(-123);
// round(1.23);
// round([1, 3, 4]);
// round({1: "ciao", 3: "hello", 4: "ohayo"});
// round("");
// round(null);
// round(false);