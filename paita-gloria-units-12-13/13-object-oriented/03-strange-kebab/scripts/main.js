/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Adds a custom method `toStrangeKebab()` to the String prototype that converts a given string
 * into a specific variation of kebab-case format, as defined by a set of transformation rules.
 * It handles camelCase, PascalCase, mixed symbols, repeated characters, numbers, and whitespace.
 */

/**
 * @function toStrangeKebab
 * @description
 * Converts the current string into a "strange kebab-case" format.
 * This transformation:
 * - Detects camelCase and PascalCase boundaries
 * - Replaces non-alphanumeric characters and spaces with hyphens
 * - Collapses multiple hyphens into one
 * - Removes leading digits (replacing them with a hyphen first, then trimming)
 * - Removes hyphens from start/end
 * - Converts the final result to lowercase
 *
 * @returns {string} The kebab-cased string after all transformations
 *
 * @example
 * " -- -My?Name&*is**my$$Passport???p??".toStrangeKebab(); // "my-name-is-my-passport-p"
 */
String.prototype.toStrangeKebab = function () {

    // Defines a sequence of transformations (functions) to apply to the string
    const transformations = [

        // Separates consecutive uppercase letters
        str => str.replace(/([A-Z])(?=[A-Z])/g, "$1 "),

        // Adds space between lowercase/number followed by uppercase (e.g., "userName" becomes "user Name")
        str => str.replace(/([a-z0-9])(?=[A-Z])/g, "$1 "),

        // Replaces all non-word characters, whitespace, and underscores with hyphens
        str => str.replace(/\W|\s|_/g, "-"),

        // Replaces digits at the start of the string with a hyphen
        str => str.replace(/^[0-9]+/g, "-"),

        // Replaces multiple consecutive hyphens with a single one
        str => str.replace(/-{2,}/g, "-"),

        // Removes any leading or trailing hyphens
        str => str.replace(/^-|-$/g, ""),

        // Converts the string to lowercase
        str => str.toLowerCase()
    ];

    // Applies all transformations in sequence
    const result = transformations.reduce((acc, currTransformationFn) => currTransformationFn(acc), this);

    return result;

};

// Example array of input strings
const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
];

// Apply transformation and log each result
source.forEach(item => console.log(item.toStrangeKebab()));