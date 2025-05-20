/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains my solution to the exercise "05 Credit Card Validation".
 * 
 * The function validateCreditCard, listed in this document:
 * - validates the credit card number by checking multiple formatting and logical conditions
 * - to do so, it also invokes another function (sumDigits) to sum together all the digits of a string of numbers
 * - at the very end, calls another function (printCardInfo) to print the information about the credit card in a specific format and return an object indicating whether the card is valid or not, along with a reason for failure when applicable.
 */

/**
 * @function sumDigits
 * @description Iterates through a numeric string and computes the total sum of its digits.
 * @param {string} rawCardNumber - A string containing only digit characters (no dashes).
 * @returns {number} The sum of all the digits in the provided string.
 *
 * @example
 * sumDigits("1234567812345678"); // returns 72
 *
 * sumDigits("0000000000000001"); // returns 1
 */
function sumDigits(rawCardNumber) {

    let sumResult = 0;

    for (let digit in rawCardNumber) {

        sumResult += +rawCardNumber.charAt(digit);
    }

    return sumResult;
}


/**
 * @function printCardInfo
 * @description Logs a formatted message summarizing the credit card check, and returns the result object.
 * @param {string} cardNumber - The original credit card number (including dashes).
 * @param {boolean} isValid - A boolean indicating whether the card is valid or not.
 * @param {string} errorType - A keyword indicating the reason for failure (or "none" if valid).
 * @returns {{number: string, valid: boolean, error: string}} An object containing:
 *   - `number`: the card number.
 *   - `valid`: a boolean indicating whether the card is valid.
 *   - `error`: a string containing the error message (or "none" if there isn't one).
 *
 * @example
 * console.log(printCardInfo("1234-5678-9012-3456", true, "none"));
 * 
 * // Logs:
 * //          ================================================
 * //          = number : 1234-5678-9012-3456                 =
 * //          = valid : true                                 =
 * //          = error : none                                 =
 * //          ================================================
 *      
 * // Returns: {number: '1234-5678-9012-3456', valid: true, error: 'none'}
 *
 * @example
 * printCardInfo("1111-1111-1111-1111", false, "same_digit");
 * 
 * // Logs:
 * //          ================================================
 * //          = number : 1111-0000-1111-0000                 =
 * //          = valid : false                                 =
 * //          = error : sum_less_than_16                                 =
 * //          ================================================
 *
 * // Returns: {number: '1111-0000-1111-0000', valid: false, error: 'sum_less_than_16'}
 */
function printCardInfo(cardNumber, isValid, errorType) {
    const infoMessage =
        `
            ================================================
            = number : ${cardNumber}                 =
            = valid : ${isValid}                                 =
            = error : ${errorType}                                 =
            ================================================
        `;
    
    console.log(infoMessage);

    return {number: cardNumber, valid: isValid, error: errorType};
}


/**
 * @function validateCreditCard
 * @description Processes a formatted credit card string and checks it against the following required rules:
 * - Must contain exactly 16 digits (excluding dashes)
 * - Must contain only numeric digits
 * - Must include at least two different digits
 * - Final digit must be even
 * - Sum of digits must be greater than 16
 * 
 * @param {string} cardNumber - The credit card number in format XXXX-XXXX-XXXX-XXXX.
 * @returns {{number: string, valid: boolean, error: string}} An object describing validity and error type (if any).
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

    const rawCardNumber = cardNumber.replaceAll("-", "");

    // Stores the various regex into variables for clarity's sake

    const validCardPattern = /^(?!(\d)\1{15})\d{15}[02468]$/;

    const notOnlyNumbersPattern = /^(?!\d{16}$).{16}$/;

    const allTheSameDigitPattern = /^(\d)\1{15}$/;

    const oddFinalDigitPattern = /^(?!(\d)\1{15})\d{15}[13579]$/;

    const tooLongPattern = /^(?=\d{17,}$)\d*/;
    
    const tooShortPattern = /^(?=\d{0,15}$)\d*/;


    // Declares a variable to store the results of the validation (which will be in object form)
    let result;


    // Checks if the pattern is valid, then whether the sum of all the digits is > 16
    if (validCardPattern.test(rawCardNumber)) {

        if (sumDigits(rawCardNumber) > 16) {
    
            result = { number: cardNumber, valid: true, error: "none" };           

        } else {

            result = { number: cardNumber, valid: false, error: "sum_less_than_16" };         
        
        }
    }

    // Identifies what is wrong with the card number and reports to the user
        
    if (notOnlyNumbersPattern.test(rawCardNumber)) {
        result = { number: cardNumber, valid: false, error: "non_digit_values_included" };
            
    } else if (allTheSameDigitPattern.test(rawCardNumber)) {
        result = { number: cardNumber, valid: false, error: "same_digit" };

    } else if (oddFinalDigitPattern.test(rawCardNumber)) {
        result = { number: cardNumber, valid: false, error: "odd_final_digit" };

    } else if (tooLongPattern.test(rawCardNumber)) {
        result = { number: cardNumber, valid: false, error: "too_many_digits" };

    } else if (tooShortPattern.test(rawCardNumber)) {
        result = { number: cardNumber, valid: false, error: "too_few_digits" };

    }


    // Calls printCardInfo and returns its result
    return printCardInfo(cardNumber, result.valid, result.error);

}


// Calling the function

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