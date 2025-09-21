/**
 * @file main.js
 * @author Gloria Paita
 * @description
 * This script provides functionality for validating credit card numbers
 * using multiple formatting and logical rules. It includes utility functions
 * for summing digits, printing validation results, and checking against
 * custom regex-based rules.
 */

/**
 * Calculates the sum of all digits in a numeric string.
 *
 * @function sumDigits
 * @param {string} rawCardNumber - A string of digits only (no dashes or spaces).
 * @returns {number} The sum of all the digits in the string.
 *
 * @example
 * sumDigits("1234567812345678"); // returns 72
 */
const sumDigits = rawCardNumber =>
    [...rawCardNumber].reduce((sum, digit) => sum + Number(digit), 0);

/**
 * Logs a formatted summary of the credit card validation result and returns it as an object.
 *
 * @function printCardInfo
 * @param {string} cardNumber - The original credit card number (including dashes).
 * @param {boolean} isValid - Whether the credit card is valid.
 * @param {string} errorType - The validation error type, or "none" if valid.
 * @returns {{number: string, valid: boolean, error: string}} Summary of the card validation.
 *
 * @example
 * printCardInfo("1234-5678-9012-3456", true, "none");
 * // Logs:
 * //     ================================================
 * //     = number : 1234-5678-9012-3456                 =
 * //     = valid  : true                                =
 * //     = error  : none                                =
 * //     ================================================
 *
 * @example
 * printCardInfo("1111-1111-1111-1111", false, "same_digit");
 * // Logs:
 * //     ================================================
 * //     = number : 1111-1111-1111-1111                 =
 * //     = valid  : false                               =
 * //     = error  : same_digit                          =
 * //     ================================================
 */
const printCardInfo = (cardNumber, isValid, errorType) => {
    const infoMessage = `
        ================================================
        = number : ${cardNumber.padEnd(40)}=
        = valid  : ${String(isValid).padEnd(40)}=
        = error  : ${errorType.padEnd(40)}=
        ================================================
    `;
    console.log(infoMessage);
    return { number: cardNumber, valid: isValid, error: errorType };
}

/**
 * Validates a credit card number against formatting and logical rules.
 * The input should be a string in the format "XXXX-XXXX-XXXX-XXXX".
 *
 * Rules checked:
 * - Must contain exactly 16 digits (excluding dashes)
 * - Must contain only numeric characters
 * - Must include at least two different digits
 * - Final digit must be even
 * - Sum of digits must be greater than 16
 *
 * @function validateCreditCard
 * @param {string} cardNumber - A formatted credit card number.
 * @returns {{number: string, valid: boolean, error: string}} Result of the validation.
 *
 * @example
 * validateCreditCard("1234-5678-9012-3456");
 * // Returns: { number: '1234-5678-9012-3456', valid: true, error: 'none' }
 *
 * @example
 * validateCreditCard("1111-1111-1111-1111");
 * // Returns: { number: '1111-1111-1111-1111', valid: false, error: 'same_digit' }
 */
function validateCreditCard(cardNumber) {

    // Removes the dashes from the card number
    const rawCardNumber = cardNumber.replace(/-/g, "");

    // Stores the various regex patterns as properties of an object
    const patterns = {
        validCard: /^(?!(\d)\1{15})\d{15}[02468]$/,
        notOnlyNumbers: /^(?!\d{16}$).{16}$/,
        sameDigit: /^(\d)\1{15}$/,
        oddFinalDigit: /^(?!(\d)\1{15})\d{15}[13579]$/,
        tooLong: /^(?=\d{17,}$)\d*/,
        tooShort: /^(?=\d{0,15}$)\d*/
    };

    // Default result — will be overridden if valid or matched to an error
    let result = { number: cardNumber, valid: false, error: "unknown" };


    // Checks if the pattern is valid, then whether the sum of all the digits is > 16
    if (patterns.validCard.test(rawCardNumber)) {

        result = sumDigits(rawCardNumber) > 16
            ? { number: cardNumber, valid: true, error: "none" }
            : { number: cardNumber, valid: false, error: "sum_less_than_16" };

    }

    // Ordered rules to test against
    const rules = [
        { pattern: patterns.notOnlyNumbers, error: "non_digit_values_included" },
        { pattern: patterns.sameDigit, error: "same_digit" },
        { pattern: patterns.oddFinalDigit, error: "odd_final_digit" },
        { pattern: patterns.tooLong, error: "too_many_digits" },
        { pattern: patterns.tooShort, error: "too_few_digits" }
    ];

    // Find the first failing rule (if any)
    const failedRule = rules.find(rule => rule.pattern.test(rawCardNumber));
    if (failedRule) {
        result.error = failedRule.error;
    }

    // Print and return the final result
    return printCardInfo(result.number, result.valid, result.error);
};

// === Example Usage ===

// Valid test cases
console.log(validateCreditCard("1234-5678-9012-3456"));
console.log(validateCreditCard("1111-1111-1111-1112"));


// Invalid test cases
console.log(validateCreditCard("1111-0000-1111-0000"));         // The sum is < 16.
console.log(validateCreditCard("ABCD-1111-1111-1111"));         // There are non-digit values.
console.log(validateCreditCard("1111-1111-1111-1111"));         // All digits are the same number.
console.log(validateCreditCard("1111-1111-1111-3333"));         // The final digit is odd.
console.log(validateCreditCard("1111-1111-1111-3333-24"));      // Too many digits.
console.log(validateCreditCard("1111-1111-1111-33"));           // Too few digits.