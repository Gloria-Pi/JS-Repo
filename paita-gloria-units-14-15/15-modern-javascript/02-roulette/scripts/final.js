/**
 * @file final.js
 * @author Gloria Paita
 * 
 * @description
 * This script implements the final version of the Roulette exercise.
 * It defines a reusable `round()` function that returns a Promise simulating
 * a 50/50 chance game round with optional input label and delay.
 * The script supports clean sequential chaining and robust input validation.
 */

/**
 * Validates the label passed to the `round()` function.
 *
 * Accepts only non-empty strings and positive integers.
 * Rejects all other data types, empty strings, null, arrays, and non-integer numbers.
 *
 * @param {*} label - The input to be validated as a round label.
 * @returns {string|boolean} - Returns:
 *   - "err1" for invalid types or empty values,
 *   - "err2" for invalid numbers (e.g. floats, negatives),
 *   - true for valid input.
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

    return true;
}

/**
 * Simulates a single round of a game, returning a Promise
 * that resolves or rejects based on a 50/50 chance.
 *
 * If an invalid label is provided, the Promise immediately rejects
 * with an appropriate error message.
 *
 * @param {string|number} [label="round"] - The label to identify the round.
 *        Can be a word or a positive integer. Defaults to "round".
 * @param {number} [delay=500] - Time in milliseconds before resolving/rejecting the round.
 * @returns {Promise<string>} - Resolves with a success message, or rejects with a failure message or validation error.
 *
 * @example
 * // Valid sequence:
 * round(1)
 *   .then(result => round(2))
 *   .then(result => round(3))
 *   .catch(error => console.log(error));
 *
 * // Invalid sequence:
 * round("foo")
 *   .then(result => round(-1))
 *   .catch(error => console.log(error));
 */
function round(label = "round", delay = 500) {

    return new Promise((resolve, reject) => {

        // If label is not a valid number or a string -> feedback to user.
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

// Valid chaining example
round(1)
    .then(result => {
        console.log(`${result}`);
        return round(2);
    })
    .then(result => {
        console.log(`${result}`);
        return round(3); // Uses default label "round"
    })
    .then(result => {
        console.log(`${result}`);
        console.log("Game over");
    })
    .catch(error => {
        console.log(`${error}`);
        console.log("Game over");
    });


// Invalid chaining example
// round("foo")
//     .then(result => {
//         console.log(`${result}`);
//         return round(-1.3);
//     })
//     .then(result => {
//         console.log(`${result}`);
//         return round(3); // Uses default label "round"
//     })
//     .then(result => {
//         console.log(`${result}`);
//         console.log("Game over");
//     })
//     .catch(error => {
//         console.log(`${error}`);
//         console.log("Game over");
//     });