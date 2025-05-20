# 05 Money


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a function called money
- It should take a single parameter, an amount, and return '<amount> dollars'
- Add a smiley at the end if the amount is 1 million. Deal with edge cases
For example
`money(1): 1 dollar`
`money(10): 10 dollars`
`money(1000000): 1000000 dollars ;)`

**Bonus**

Add to the function the ability to convert dollars to euros
`money(10): 10 dollars are 9.31 euros`


<br>

# Approach to Solution

## 1. Defining the Function
The function `money` takes a single parameter, `amount`, which represents a monetary value. Based on the given amount, the function determines the appropriate format and message to return.

## 2. Handling Singular and Plural Forms
- If `amount` is exactly `1`, the function returns "1 dollar" (singular form).
- Otherwise, it defaults to "dollars" (plural form).

## 3. Special Cases and Personalized Messages
Different conditions are used to format the message based on the given amount:
- **Exactly 1 million**: Adds a `;)` to the message.
- **Above 1 million but below 1 billion**: Adds encouragement (`"you're doing amazing!"`).
- **Zero or negative up to -999**: Returns a sad face (`:(`).
- **Debt of 1000 or more**: Returns a concerned message (`"bud, you doing okay? :("`).
- **One billion or more**: Congratulates the user on being a billionaire.

These conditions are structured with an `if-else` statement to ensure only one condition is met at a time.

---

# Implementation

```javascript
function money(amount) {
    let message = "dollars";

    if (amount == 1 || amount === -1) {
        message = "dollar";
    } else if (amount == 1000000) {
        message = "dollars ;)";
    } else if (amount > 1000000 && amount < 1000000000) {
        message = "dollars --> you're doing amazing!";
    } else if (amount <= 0 && amount > -1000) {
        message = "dollars :(";
    } else if (amount <= -1000) {
        message = "dollars --> bud, you doing okay? :(";
    } else if (amount >= 1000000000) {
        message = "dollars --> congrats, you are now a billionaire!";
    }

    return amount + " " + message;
}
```

---

# Test Cases

```javascript
console.log(money(1));
// "1 dollar"

console.log(money(10));
// "10 dollars"

console.log(money(3040600));
// "3040600 dollars --> you're doing amazing!"

console.log(money(1000000));
// "1000000 dollars ;)"

console.log(money(-1500));
// "-1500 dollars --> bud, you doing okay? :("

console.log(money(1000000000));
// "1000000000 dollars --> congrats, you are now a billionaire!"

console.log(money(0));
// "0 dollars :("

console.log(money(-1));
// "-1 dollar"
```

---

# Considerations & Alternative Approaches
- **Using `switch` Instead of `if-else`**: I had considered using a `switch` statement before implementing this code, but soon noticed that since some conditions require range checks (e.g., `amount > 1000000 && amount < 1000000000`) and `if-else` provided better flexibility.