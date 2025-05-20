# 01 Big Numbers


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a function named `greaterNum` that:
- takes two parameters (both numbers)
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.")



<p>&nbsp;</p>


# Approach to Solution

## 1. Creating the `greaterNum` function

This function compares two given numbers (parameters: `number1` and `number2`) and returns whichever number is greater.

This is achieved using comparison operators such as `>`, and `===` to determine which number is larger or if they are equal. If the two numbers are equal, the function returns a message indicating that neither is greater. Additionally, the function includes type-checking to ensure that both inputs are **numbers** before performing the comparison.

```javascript
function greaterNum(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        if (number1 !== number2) {
            if (number1 > number2) {
                return number1;
            } else {
                return number2;
            }
        } else {
            return "neither, because they are the same number";
        }
    } else {
        return "neither, because one or both values are not numbers";
    }
}
```

**OUTPUT:**

```javascript
console.log(`The greater number of 3 and 19 is ${greaterNum(3, 19)}.`);
// Logs: "The greater number of 3 and 19 is 19."

console.log(`The greater number of 143.2 and -10 is ${greaterNum(143.2, -10)}.`);
// Logs: "The greater number of 143.2 and -10 is 143.2."

console.log(`The greater number of 1 and 1 is ${greaterNum(1, 1)}.`);
// Logs: "The greater number of 1 and 1 is neither, because they are the same number."

console.log(`The greater number of 3 and 1234567890123456789012345678901234567890n is ${greaterNum(3, 1234567890123456789012345678901234567890n)}.`);
// Logs: "The greater number of 3 and 1234567890123456789012345678901234567890n is neither, because one or both values are not numbers."
```

## 2. Handling Edge Cases

The function accounts for potential edge cases:

- **Equal numbers:** Returns a message indicating they are the same.
- **Non-number inputs:** Returns a message explaining that only numbers are accepted.
- **BigInt values:** Since `BigInt` is a different type from `number`, it triggers the non-number message.
