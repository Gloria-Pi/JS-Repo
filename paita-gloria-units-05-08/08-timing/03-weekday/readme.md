# 03 Weekday


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Write a function `getWeekDay(date)` to show the weekday in short format:
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
- Write another function that does the same in Italian
- Add a language parameter to the function that accepts ‘en’ or ‘it’ and
outputs the day in the correct language


<br>
<br>


# Approach to Solution

### 1. Creating the Function for English

The first function `getWeekDayEn()`:
- Accepts a `Date` object or a valid date string
- Uses `.getDay()` to extract the weekday number (0–6)
- Maps each number to the corresponding short English name:
  - 0 → `SU`, 1 → `MO`, ..., 6 → `SA`

```js
function getWeekDayEn(date) {
    const weekDayNumber = new Date(date).getDay();
    switch (weekDayNumber) {
        case 0: console.log("SU"); break;
        case 1: console.log("MO"); break;
        case 2: console.log("TU"); break;
        case 3: console.log("WE"); break;
        case 4: console.log("TH"); break;
        case 5: console.log("FR"); break;
        case 6: console.log("SA"); break;
    }
}
```

```js
getWeekDayEn("2025-03-29");
// Output: SA
```

---

### 2. Creating the Function for Italian

The second function `getWeekDayIt()`:
- Follows the same structure but outputs short Italian names:
  - 0 → `DOM`, 1 → `LUN`, ..., 6 → `SAB`

```js
function getWeekDayIt(date) {
    const weekDayNumber = new Date(date).getDay();
    switch (weekDayNumber) {
        case 0: console.log("DOM"); break;
        case 1: console.log("LUN"); break;
        case 2: console.log("MAR"); break;
        case 3: console.log("MER"); break;
        case 4: console.log("GIO"); break;
        case 5: console.log("VEN"); break;
        case 6: console.log("SAB"); break;
    }
}
```

```js
getWeekDayIt("2025-03-29");
// Output: SAB
```

---

### 3. Adding Language Support

A third function `getWeekDayEnIt()` handles both cases:
- Accepts a second parameter `lang` with values `'en'` or `'it'`
- Delegates the call to the appropriate language-specific function

```js
function getWeekDayEnIt(date, lang) {
    if (lang === "en") {
        getWeekDayEn(date);
    } else if (lang === "it") {
        getWeekDayIt(date);
    }
}
```

```js
getWeekDayEnIt("2025-03-29", "en");
// Output: SA

getWeekDayEnIt("2025-03-29", "it");
// Output: SAB
```

---

# Notes

- JavaScript’s `.getDay()` returns:
  - `0` for **Sunday**, `6` for **Saturday**
- Internally, all input dates are passed to `new Date()` to ensure type consistency
- No error is thrown for missing or invalid language codes (future improvement)