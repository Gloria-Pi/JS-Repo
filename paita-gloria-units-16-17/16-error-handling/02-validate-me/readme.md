# 02 Validate Me

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment
 
Write a function `validatePassword()` that returns `true` if a password meets the following requirements:
- Must be at least 8 characters long
- Must contain at least one uppercase letter, one lowercase letter, one digit and one symbol

If the password is invalid, the function should throw a custom error object with the message "Invalid password format" and the reason the password is not valid

This code tests the function. Add more cases to it:

```js
    try {
        const validPassword = 'Abcdefg$1';
        const invalidPassword = 'abcdefg1';
        console.log(validatePassword(validPassword)); // true
        console.log(validatePassword(invalidPassword)); // throws error
    } catch (error) {
        console.error(error.message); // "Invalid password format - no uppercase"
    }
```

<br>
<br>

# Approach to Solution

## Step 1: Initial Regex Attempt
Initially, I tried to implement the password validation using a **single regex**:

```js
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\]!"#$%&'()*+,-./:;<=>?@^[_`{|}~]).{8,}$/gm
```

* This regex correctly identified whether a password was valid or not.
* However, using a single regex **did not allow identifying which specific rule was violated**.
  For example, if a password lacked an uppercase letter, the regex would simply fail, giving no information about the reason.

<br>

## Step 2: Splitting Validation into Small Checks

To provide **detailed error messages**, I split the validation into **multiple smaller regex tests**:

* Check for minimum length: `password.length >= 8`
* Check for lowercase letters: `/[a-z]/`
* Check for uppercase letters: `/[A-Z]/`
* Check for digits: `/\d/`
* Check for symbols (see next step)
* Check for whitespace: `/\s/` to ensure no spaces (added later)

<br>

## Step 3: Symbol Selection

For symbols, I used the set specified by the **[OWASP Foundation](https://owasp.org/www-community/password-special-characters)**:

```bash
] !"#$%&'()*+,-./:;<=>?@^[_`{|}~
```

* These characters are present on a **standard US keyboard**.
* They are frequently used in passwords and recommended for security best practices.
* Limiting symbols to this set ensures **compatibility across platforms** and **predictable behavior** in validation.

<br>

## Step 4: Adding Whitespace Check

I also added a rule to **reject passwords containing whitespace** because many systems do not allow spaces in passwords for security or usability reasons.

```js
const hasWhitespace = /\s/.test(passwordToValidate);
```

<br>

## Step 5: Custom Error Handling

I implemented a **custom error class** `PasswordValidationError`:

```js
class PasswordValidationError extends Error {
    constructor(reason) {
        super(`Invalid password format - ${reason}`);
        this.name = "PasswordValidationError";
        this.reason = reason;
    }
}
```

* Provides both a **generic message** (`"Invalid password format"`) and a **specific reason**.
* Makes it easy to display meaningful feedback to the user or log detailed errors for debugging.

<br>

## Testing

I included test cases covering:

* Valid passwords
* Passwords that fail due to:

  * Missing uppercase
  * Missing lowercase
  * Missing number
  * Missing symbol
  * Containing whitespace

<br>

---

### References

* OWASP Password Special Characters: [https://owasp.org/www-community/password-special-characters](https://owasp.org/www-community/password-special-characters)
* JavaScript `Error` and Custom Errors: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)