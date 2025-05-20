# 06 Date ago


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Create a function `getDateAgo(date, days)` that returns the day of the month
n days ago from the given date
- For instance, if today is the 20th, then `getDateAgo(new Date(), 1)` should be
19th and `getDateAgo(new Date(), 2)` should be 18th
- Test the function to make sure it works reliably with any valid Date object
- Decide what to do with a negative 'days' parameter
    - e.g. `getDateAgo(new Date(), -2)`


<br>
<br>


# Approach to Solution

## 1. Creating the Function

The core idea is to use **milliseconds** to manipulate dates, avoiding common pitfalls with months or leap years.

The `getDateAgo(date, days)` function:
- Takes two parameters:
  - `date`: the starting `Date` object
  - `days`: number of days to go **back** (positive), **forward** (negative), or zero
- Internally:
  - Converts the input date to milliseconds (`getTime()`)
  - Converts the days offset to milliseconds: `days * 86400000`
  - Subtracts this offset from the original date (thus:
    - positive = subtraction = past
    - negative = addition = future)
  - Converts the resulting timestamp back into a Date object
  - Extracts the **day of the month** using `.getDate()`
- Logs a contextual message based on the `days` value:
  - Positive → message in the past
  - Negative → message in the future
  - Zero → confirms the same date

```js
function getDateAgo(date, days) {

    const givenMsSinceUnix = date.getTime();

    //86400000 is the n of milliseconds in a day
    const daysToSubtractInMs = days*86400000;

    const resultingDateInMs = givenMsSinceUnix - daysToSubtractInMs;

    const resultingDate = new Date(resultingDateInMs);
    
    const resultingDateAgo = resultingDate.getDate(); 

    if (days > 0) {

        console.log(`The date from ${days} day(s) prior to "${date}" was the ${resultingDateAgo}.`);
        
    } else if (days < 0) {
        
        // Put a "-" to make the sentence more readable by turning the negative number into a positive one
        console.log(`In ${-days} day(s) from "${date}" it'll be the ${resultingDateAgo}.`);
        
    } else {
        
        console.log(`Want to know the chosen day's date? It's the ${resultingDateAgo}.`);
    }
    
    return resultingDateAgo;
}
```

## 2. Handling Negative Values

Instead of throwing an error or ignoring negatives, I decided to **support both directions in time**:
- Positive `days`: go back in time
- Negative `days`: go forward in time
- Zero: show the current day of the given date

---

# Examples & Outputs

```js
console.log(getDateAgo(new Date(), 1));
// Output: The date from 1 day(s) prior to "Sat Mar 29 2025..." was the 28.

console.log(getDateAgo(new Date("2025-03-30"), -5));
// Output: In 5 day(s) from "Sun Mar 30 2025..." it'll be the 4.

//Targetting the leap day of 2024
console.log(getDateAgo(new Date("2025-04-06"), 402));
// Output: The date from 402 day(s) prior to "..." was the 29.

console.log(getDateAgo(new Date("2025-03-30"), 0));
// Output: Want to know the chosen day's date? It's the 30.
```