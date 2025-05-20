# 05 Money - BONUS


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a function called money
- It should take a single parameter, an amount, and return '<amount> dollars'
- Add a smiley at the end if the amount is 1 million. Deal with edge cases.

For example

- `money(1): 1 dollar`
- `money(10): 10 dollars`
- `money(1000000): 1000000 dollars ;)`

**Bonus**  
Add to the function the ability to convert dollars to euros  
`money(10): 10 dollars are 9.31 euros`


<br>



# Approach to Solution

## 1. Understanding the Problem
- The exchange rate at the time of writing this code is 1 USD = 0.92 EUR.
- The converted amount should be rounded to two decimal places.
- Must implement the correct singular/plural forms for "dollar(s)", "euro(s)", and the verb "to be".
- The function should handle edge cases like `0`, negative values, and fractional amounts.
- The bonus requires converting the amount to euros while maintaining proper grammar.

## 2. Implementation Details
- The function `money(amount)` will:
  1. Convert dollars to euros using `amount * 0.92`, rounding to two decimal places.
  2. Determine whether to use "dollar" or "dollars", "euro" or "euros", "is" or "are" based on singular/plural rules.
  3. Return a formatted string using template literals.

- A `switch` statement is used to handle specific singular/plural cases.
- `Math.abs(amount)` was implemented as the switch argument in order to handle both positive and negative amounts of `1` (like 1 or -1) and `1.09`.

## Code

```js
function money(amount) {

    // Formula to convert dollars to euros and rounding to two decimal digits
    let convertedAmount = Math.round((amount * 0.92) * 100) / 100;

    // Declaring the variables
    let isDollarPlural;
    let isEuroPlural;
    let verb;
    
    //Switch statement to determine singular/plural forms
    switch (Math.abs(amount)) {
        case 1:
            isDollarPlural = "dollar";
            isEuroPlural = "euros";
            verb = "is";
            break;
        case 1.09:
            isDollarPlural = "dollars";
            isEuroPlural = "euro";
            verb = "are";
            break;
        default:
            isDollarPlural = "dollars";
            isEuroPlural = "euros";
            verb = "are";
            break;
    }
 
    // Constructing the final message using template literals
    let completeMessage = `${amount} ${isDollarPlural} ${verb} ${convertedAmount} ${isEuroPlural}`;

    return completeMessage;

}
```

<br>


## Example Usage

```js

// Initializing some amounts
let savings = 1;
let savings1 = 10;
let savings2 = 3040600;
let savings3 = 1000000;
let savings4 = -1500;
let savings5 = 1000000000;

// Edge Cases
let savings6 = 0;
let savings7 = -1;
let savings8 = 1.09;



// Test Cases
console.log(money(savings));
// 1 dollar is 0.92 euros

console.log(money(savings1));
// 10 dollars are 9.2 euros

console.log(money(savings2));
// 3040600 dollars are 2797352 euros

console.log(money(savings3));
// 1000000 dollars are 920000 euros

console.log(money(savings4));
// -1500 dollars are -1380 euros

console.log(money(savings5));
// 1000000000 dollars are 920000000 euros

console.log(money(savings6));
// 0 dollars are 0 euros

console.log(money(savings7));
// -1 dollar are -0.92 euros

console.log(money(savings8));
// 1.09 dollars are 1 euro
```