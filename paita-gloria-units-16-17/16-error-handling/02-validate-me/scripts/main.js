/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines a `validatePassword()` function that checks whether a
 * given password meets specific security requirements:
 * - Must be at least 8 characters long
 * - Must contain at least one uppercase letter
 * - Must contain at least one lowercase letter
 * - Must contain at least one digit
 * - Must contain at least one symbol
 * - Must not contain spaces
 * 
 * If the password is invalid, the function throws a custom `PasswordValidationError` object
 * with the message `"Invalid password format"` and the reason why the password is not valid.
 */

/**
 * Custom Error class representing a password validation failure.
 * Extends the native JavaScript `Error` class and provides a `reason` property
 * describing the specific cause of the failure.
 * 
 * @class PasswordValidationError
 * @extends Error
 * 
 * @property {string} name - The name of the error, set to `"PasswordValidationError"`.
 * @property {string} reason - The detailed reason why the password validation failed.
 * 
 * @example
 * ```js
 * throw new PasswordValidationError("Password must include at least one uppercase letter.");
 * ```
 */
class PasswordValidationError extends Error {
    constructor(reason) {
        super(`Invalid password format - ${reason}`);
        this.name = "PasswordValidationError";
        this.reason = reason;
    }

    /**
     * Logs the error in a readable format to the console.
     */
    logError() {
        console.log(`[${this.name}] ${this.message}`);
    }
}

/**
 * Validates whether a given password meets the following requirements:
 * - Must be at least 8 characters long
 * - Must contain at least one uppercase letter, one lowercase letter, one digit, and one symbol
 * - Must not contain spaces
 * 
 * If the password fails any of these rules, it throws a `PasswordValidationError`
 * indicating the exact reason for the failure.
 * 
 * @function validatePassword
 * @param {string} passwordToValidate - The password string to validate.
 * @throws {PasswordValidationError} Throws a custom error if any validation rule is not satisfied.
 * @returns {boolean} Returns `true` if the password is valid.
 * 
 * @example
 * ```js
 * validatePassword("Abcdefg$1"); // true
 * validatePassword("abcdefg1"); // throws PasswordValidationError
 * ```
 */
function validatePassword(passwordToValidate) {
    const minLength = 8;
    const hasWhitespace = /\s/.test(passwordToValidate);
    const hasLowercase = /[a-z]/.test(passwordToValidate);
    const hasUppercase = /[A-Z]/.test(passwordToValidate);
    const hasDigit = /\d/.test(passwordToValidate);
    const hasSymbol = /[\]!"#$%&'()*+,-./:;<=>?@^[_`{|}~]/.test(passwordToValidate);
    // Alternative simpler, less specific version: const hasSymbol = /[^A-Za-z0-9]/.test(passwordToValidate);

    console.log(`Current password: ${String(passwordToValidate)}`);

    if (passwordToValidate.length < minLength) {
        throw new PasswordValidationError("Password must be at least 8 characters long.");
    }
    if (hasWhitespace) {
        throw new PasswordValidationError("Password must not contain spaces.");
    }
    if (!hasLowercase) {
        throw new PasswordValidationError("Password must include at least one lowercase letter.");
    }
    if (!hasUppercase) {
        throw new PasswordValidationError("Password must include at least one uppercase letter.");
    }
    if (!hasDigit) {
        throw new PasswordValidationError("Password must include at least one digit.");
    }
    if (!hasSymbol) {
        throw new PasswordValidationError("Password must include at least one symbol among these: ] !\"#$%&'()*+,-./:;<=>?@^[_`{|}~] .");
    }

    return true;
}

/**
 * Example test cases demonstrating valid and invalid passwords.
 * Each invalid password triggers a custom `PasswordValidationError` with
 * a descriptive message and reason.
 */
try {
    // Valid Password
    const validPassword = "Abcdefg$1";
    console.log(validatePassword(validPassword));

    // Invalid Passwords
    const whitespacePass = "hello World11&";
    const lacksUppercase = "helloworld_1";
    const lacksLowercase = "HELLOWORLD_1";
    const lacksNumber = "helloWorld!";
    const lacksSpecialChara = "helloWorld1";

    console.log(validatePassword(whitespacePass));
    console.log(validatePassword(lacksUppercase));
    console.log(validatePassword(lacksLowercase));
    console.log(validatePassword(lacksNumber));
    console.log(validatePassword(lacksSpecialChara));

} catch (error) {
    const { name, message } = error;
    console.error(`[${name}] ${message}`);
}