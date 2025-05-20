# 09 Format Date


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write a function formatDate(date) that accepts a date and outputs it as follows:
- If less than a second has passed since the date, output "right now"
- If less than a minute has passed since the date, output "n sec. ago"
- If less than an hour has passed since the date, output "m min. ago"
- Otherwise, output the date in this format "DD.MM.YY HH:mm"
    - e.g. 17.04.16 10:00

<br>
<br>

# Approach to Solution

## 1. Getting the time difference
- We use `Date.now()` to get the current timestamp in milliseconds.
- We calculate the difference in milliseconds between the current time and the provided date.

## 2. Conditional output logic
- If less than **1 second** has passed (i.e. `diff < 1000`), output `"right now"`.
- If less than **1 minute** has passed, convert milliseconds to seconds and output `"n sec. ago"`.
- If less than **1 hour** has passed, convert milliseconds to minutes and output `"m min. ago"`.
- If more than **1 hour** has passed, the function builds a custom string using:
  - `getDate()`, `getMonth() + 1`, `getFullYear().slice(-2)`, `getHours()`, `getMinutes()`
  - Each part is padded with leading zeros if needed using `padStart`.

# Code Summary

```js

function formatDate(date) {
  const passedDateInMs = date.getTime();
  const currentDateInMs = Date.now();
  const timeDifference = currentDateInMs - passedDateInMs;

  if (timeDifference < 3600000) {
    if (timeDifference < 1000) {
      console.log("right now");
    } else if (timeDifference < 60000) {
      console.log(`${Math.round(timeDifference / 1000)} sec. ago`);
    } else {
      console.log(`${Math.round(timeDifference / 60000)} min. ago`);
    }
  } else {
    const formattedDate = new Date(passedDateInMs);
    const day = String(formattedDate.getDate()).padStart(2, '0');
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
    const year = String(formattedDate.getFullYear()).slice(-2);
    const hours = String(formattedDate.getHours()).padStart(2, '0');
    const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
    console.log(`${day}.${month}.${year} ${hours}:${minutes}`);
  }
}

```

# Examples

```js
// Example 1: More than 1 hour ago
formatDate(new Date(2025, 2, 31, 0, 0, 0, 0));
// Output: "31.03.25 00:00"

// Example 2: Less than 1 hour ago
formatDate(new Date(Date.now() - 30 * 60 * 1000)); // 30 minutes ago
// Output: "30 min. ago"

// Example 3: Less than 1 minute ago
formatDate(new Date(Date.now() - 45000)); // 45 seconds ago
// Output: "45 sec. ago"

// Example 4: Less than 1 second ago
formatDate(new Date(Date.now() - 500)); // half a second ago
// Output: "right now"

// Example 5: Current time
formatDate(new Date());
// Output: "right now"
```

# Notes & Edge Cases

- The function assumes the given `date` is not in the future.
- It doesn't handle negative differences (future dates).
- Rounding is done using `Math.round()` for simplicity.
- Leading zeros ensure consistent formatting (`01`, `09`, etc.).