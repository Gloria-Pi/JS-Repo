# 07 Seconds


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write two functions that based on the current date and time output the number
of seconds:
- `getSecondsToday()` returns the number of seconds from the beginning of
today
- `getSecondsToTomorrow()` returns the number of seconds till tomorrow



<br>
<br>


# Approach to Solution

## 1. Understanding the Time Calculations

To solve this assignment, it's important to understand:
- A day has **86400 seconds** (24 hours × 60 minutes × 60 seconds).
- To get the seconds from today, we sum:
  - Current hour × 3600
  - Current minutes × 60
  - Current seconds

To get the seconds *until* tomorrow, we subtract the seconds already passed today from 86400.

---

## 2. Creating the `getSecondsToday()` Function

We use the `Date` object to extract:
- `getHours()`
- `getMinutes()`
- `getSeconds()`

Each component is converted to seconds and added together:

```js
function getSecondsToday() {
    const currentDateTime = new Date();

    const currentHoursInSeconds = currentDateTime.getHours() * 3600;
    const currentMinutesInSeconds = currentDateTime.getMinutes() * 60;
    const currentSeconds = currentDateTime.getSeconds();

    const totalSecondsOfToday = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;

    return totalSecondsOfToday;
}
```

### Example Output

```txt
The number of seconds from the beginning of today is: 37865.
```

---

## 3. Creating the `getSecondsToTomorrow()` Function

This function uses the same logic as `getSecondsToday()` but inverts the purpose:

```js
function getSecondsToTomorrow() {
    const currentDateTime = new Date();

    const currentHoursInSeconds = currentDateTime.getHours() * 3600;
    const currentMinutesInSeconds = currentDateTime.getMinutes() * 60;
    const currentSeconds = currentDateTime.getSeconds();

    const totalSecondsOfToday = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;

    const totalSecondsUntilTomorrow = 86400 - totalSecondsOfToday;

    return totalSecondsUntilTomorrow;
}
```

### Example Output

```txt
The number of seconds 'til tomorrow: 48535.
```

---

# Testing & Verification

To confirm the correctness of both functions, you can visit this website:

🔗 https://www.keithschwarz.com/timing/seconds.htm  
It shows the exact number of seconds passed since midnight and can be used to compare your results.