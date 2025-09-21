# 03 Greatest Hits - 01 Credit Card Validation

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Greatest Hits: Assignment

- Rewrite some previous exercises in modern JS syntax
  - Credit Card Validation
  - Advanced Arrivals
  - Reduce All
- Try to use as many modern features as you can
- In readme.md document any important changes
- **Bonus**:
  - Use webpack, make your code compatible with older browsers

<br>

# Credit Card Validation: Assignment

Write a function called `validateCreditCard` that checks credit card
numbers according to the following rules:
- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16

The following credit card numbers are valid:
- 9999-9999-8888-0000
- 6666-6666-6666-1666

The following credit card numbers are invalid:
- a923-3211-9c01-1112 invalid characters
- 4444-4444-4444-4444 only one type of number
- 1111-1111-1111-1110 sum less than 16
- 6666-6666-6666-6661 odd final number

Hint
- Remove the dash '-' from the input string before checking if the input credit card number is
valid

Call the function with several credit card numbers:

```js
- validateCreditCard('9999-9999-8888-0000');
- validateCreditCard('4444-4444-4444-4444');
- validateCreditCard('6666-6666-6666-1666');
```

The function returns an object saying that the credit card is valid, or what the error is:

```js
- { valid: true, number: '9999-9999-8888-0000' }
- { valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
```

For each card check, print out the result to the log in this format:
```
================================
= number : a923-3211-9c01-1112 =
= valid : false                =
= error : wrong length         =
================================
```

## Link to the original implementation
To learn more about the original version of this project, please refer to this [README](../../../../paita-gloria-units-05-08/07-objects/05-credit-card-validation/readme.md).

<br>

# Approach to Solution

# Refactoring `sumDigits`

## Original Version

```js
function sumDigits(rawCardNumber) {
    let sumResult = 0;

    for (let digit in rawCardNumber) {
        sumResult += +rawCardNumber.charAt(digit);
    }

    return sumResult;
}
```

### Explanation

* Uses a `function` declaration.
* Loops over the string indices using a `for...in` loop.
* Accesses each character with `charAt(index)`.
* Converts each character to a number using the unary `+` operator.
* Sums the digits using a manually maintained `sumResult` variable.

<br>

## Modernized Version (ES6+ Style)

```js
const sumDigits = rawCardNumber =>
  [...rawCardNumber].reduce((sum, digit) => sum + Number(digit), 0);
```

### Explanation

* Uses an arrow function for a more concise definition.
* Uses the spread operator (`...`) to convert the string into an array of characters.
* Uses `Array.prototype.reduce()` to accumulate the sum.
* Replaces the unary `+` with `Number()` for more explicit type conversion.

<br>
<br>

# Refactoring `printCardInfo`

## Old Version

```js
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
```

---

## New Version

```js
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
```

## Key Differences

| Aspect                | Old Version                  | New Version                             |
| --------------------- | ---------------------------- | --------------------------------------- |
| Function Syntax       | Traditional `function`       | Arrow function                          |
| Message Formatting    | Fixed spacing (inconsistent) | Uses `padEnd()` for aligned columns     |
| Type Handling         | Relies on implicit coercion  | Explicitly converts `isValid` to string |

Here’s a clear, no-emoji README that explains the refactor of your `validateCreditCard` function, focusing on making the logic more modular and declarative. It highlights key differences with concise explanations and code snippets.

<br>
<br>

# Refactoring `validateCreditCard`

## Old Version

```js
function validateCreditCard(cardNumber) {
    const rawCardNumber = cardNumber.replaceAll("-", "");

    const validCardPattern = /^(?!(\d)\1{15})\d{15}[02468]$/;
    const notOnlyNumbersPattern = /^(?!\d{16}$).{16}$/;
    const allTheSameDigitPattern = /^(\d)\1{15}$/;
    const oddFinalDigitPattern = /^(?!(\d)\1{15})\d{15}[13579]$/;
    const tooLongPattern = /^(?=\d{17,}$)\d*/;
    const tooShortPattern = /^(?=\d{0,15}$)\d*/;

    let result;

    if (validCardPattern.test(rawCardNumber)) {
        if (sumDigits(rawCardNumber) > 16) {
            result = { number: cardNumber, valid: true, error: "none" };
        } else {
            result = { number: cardNumber, valid: false, error: "sum_less_than_16" };
        }
    }

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

    return printCardInfo(cardNumber, result.valid, result.error);
}
```

---

## New Version

```js
function validateCreditCard(cardNumber) {
    const rawCardNumber = cardNumber.replace(/-/g, "");

    const patterns = {
        validCard: /^(?!(\d)\1{15})\d{15}[02468]$/,
        notOnlyNumbers: /^(?!\d{16}$).{16}$/,
        sameDigit: /^(\d)\1{15}$/,
        oddFinalDigit: /^(?!(\d)\1{15})\d{15}[13579]$/,
        tooLong: /^(?=\d{17,}$)\d*/,
        tooShort: /^(?=\d{0,15}$)\d*/
    };

    let result = { number: cardNumber, valid: false, error: "unknown" };

    if (patterns.validCard.test(rawCardNumber)) {
        result = sumDigits(rawCardNumber) > 16
            ? { number: cardNumber, valid: true, error: "none" }
            : { number: cardNumber, valid: false, error: "sum_less_than_16" };
    }

    const rules = [
        { pattern: patterns.notOnlyNumbers, error: "non_digit_values_included" },
        { pattern: patterns.sameDigit, error: "same_digit" },
        { pattern: patterns.oddFinalDigit, error: "odd_final_digit" },
        { pattern: patterns.tooLong, error: "too_many_digits" },
        { pattern: patterns.tooShort, error: "too_few_digits" }
    ];

    const failedRule = rules.find(rule => rule.pattern.test(rawCardNumber));
    if (failedRule) {
        result.error = failedRule.error;
    }

    return printCardInfo(result.number, result.valid, result.error);
}
```

---

## Key Differences

| Aspect                 | Old Version                         | New Version                                              |
| ---------------------- | ----------------------------------- | -------------------------------------------------------- |
| **Regex organization** | Each regex in a separate variable   | Grouped inside a single `patterns` object                |
| **Error handling**     | `else if` chain for error detection | Declarative `rules` array with `.find()`                 |
| **String cleanup**     | `replaceAll("-", "")` (ES2021)      | `replace(/-/g, "")` with regex for broader compatibility |
| **Result assignment**  | Repeated `result = { ... }` blocks  | Clean fallback with default `result` object              |
| **Logic structure**    | Imperative and nested               | Declarative and modular                                  |