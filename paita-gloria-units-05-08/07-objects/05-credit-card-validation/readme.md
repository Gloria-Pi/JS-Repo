# 05 Credit Card Validation


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

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

<br>

# Approach to Solution

## Step 1: Preprocessing the Input

- The input is expected as a string, like `"1234-5678-9012-3456"`.
- Since the card number contains dashes (`-`), the first step is to remove them with `replaceAll("-", "")`.

```js
const rawCardNumber = cardNumber.replaceAll("-", "");
```

<br>


## Step 2: Creating Regex Patterns

I created multiple **regex patterns** to detect both valid and invalid formats:

- ✅ `validCardPattern`: checks for 16 digits, not all the same, ending in an even number  
  ```js
  /^(?!(\d)\1{15})\d{15}[02468]$/
  ```

- ❌ `notOnlyNumbersPattern`: detects if there are non-digit characters  
  ```js
  /^(?!\d{16}$).{16}$/
  ```

- ❌ `allTheSameDigitPattern`: all 16 digits are identical  
  ```js
  /^(\d)\1{15}$/
  ```

- ❌ `oddFinalDigitPattern`: last digit is odd  
  ```js
  /^(?!(\d)\1{15})\d{15}[13579]$/
  ```

- ❌ `tooLongPattern`: more than 16 digits  
  ```js
  /^(?=\d{17,}$)\d*/
  ```

- ❌ `tooShortPattern`: fewer than 16 digits  
  ```js
  /^(?=\d{0,15}$)\d*/
  ```

<br>


## Step 3: Checking the Sum of Digits

Created a helper function `sumDigits` that:

- iterates through each digit in the string
- converts it to a number
- returns the total sum.

```javascript
function sumDigits(rawCardNumber) {

  let sum = 0;

  for (let digit in rawCardNumber) {
    sum += +rawCardNumber.charAt(digit);
  }

  return sum;
}
```

<br>


## Step 4: Logging Results

Created a helper function `printCardInfo()` that:

- prints the result in a formatted block
- returns the final result object.

```js
function printCardInfo(cardNumber, isValid, errorType) {
  const infoMessage = `
  ================================================
  = number : ${cardNumber}                 =
  = valid : ${isValid}                                 =
  = error : ${errorType}                                 =
  ================================================`;
  
  console.log(infoMessage);

  return { number: cardNumber, valid: isValid, error: errorType };
}
```

<br>


## Step 5: the `validateCreditCard` Function Structure

1. **Removing Dashes**:
   - The first step is to remove the dashes from the card number to ensure the number is continuous and clean for validation.

2. **Regex Patterns**:
   - Several regex patterns are defined to check specific conditions:
     - `validCardPattern`: Ensures the card is a valid 16-digit number with an even final digit and at least two distinct digits.
     - `notOnlyNumbersPattern`: Checks if the card number contains non-digit characters.
     - `allTheSameDigitPattern`: Ensures that not all digits are the same.
     - `oddFinalDigitPattern`: Verifies that the final digit is even.
     - `tooLongPattern` and `tooShortPattern`: Check if the card has too many or too few digits.

3. **Validation**:
   - First, the function checks if the card number matches the `validCardPattern` and if the digit sum is greater than 16. If both conditions are met, the card is considered valid.
   - If the card number fails any of the conditions, it falls through to the next checks, and the corresponding error is set (e.g., "non_digit_values_included", "same_digit", etc.).

4. **Output via `printCardInfo`**:
   - Once the validation is complete, the function calls `printCardInfo` to print the result in a structured format and returns the result.

<br>

```javascript
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
```

<br>


# Tested Cases

| Card Number                | Valid | Error Type                
|------------------------|--------|---------------------------|
| 1234-5678-9012-3456       | ✅     | none                      |
| 1111-1111-1111-1112       | ✅     | none                      |
| 1111-0000-1111-0000       | ❌     | sum_less_than_16          |
| 1111-1111-1111-0000       | ❌     | same_digit                |
| ABCD-1111-1111-1111       | ❌     | non_digit_values_included |
| 1111-1111-1111-3333       | ❌     | odd_final_digit           |
| 1111-1111-1111-3333-24    | ❌     | too_many_digits           |
| 1111-1111-1111-33         | ❌     | too_few_digits            |


<br>


## Examples and Output

```js
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
```

**Console Output Example:**

```
===============================================
= number : 1234-5678-9012-3456                =
= valid : true                                =
= error : none                                =
===============================================

{ number: '1234-5678-9012-3456', valid: true, error: 'none' }
```

```
================================================
= number : 1111-0000-1111-0000                 =
= valid : false                                =
= error : sum_less_than_16                     =
================================================

{number: '1111-0000-1111-0000', valid: false, error: 'sum_less_than_16'}
```

