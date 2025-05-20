# 01 Top Choice - Bonus Version 2/2


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Create an **array** to hold your top choices (colors, pets, books, whatever).  
2. For each choice, **log** to the screen a string like:  
   `"My #1 choice is blue."`

**BONUS**  
Change it to add the correct number suffix, e.g.  
`"My 1st choice"`, `"My 2nd choice"`, `"My 3rd choice"`, `"My 4th choice"`, etc.

<p>&nbsp;</p>

# Approach to Solution

## 1. Initializing the Array

I created an array named `fruit` containing a ranked list of my favorite fruits, from most to least favorite.

```js
const fruit = [
  "Banana", "Orange", "Mango", "Pineapple", "Strawberry", 
  "Blueberry", "Grapes", "Watermelon", "Peach", "Pear", "Plum", 
  ...
];
```

<p>&nbsp;</p>

## 2. Creating the Loop

A `for` loop was used to iterate through the array.

- The index starts at `1` so the output matches ordinal rankings (1st, 2nd, etc.)
- At each iteration:
  - A `suffix` is assigned based on the number's ending
  - The full string is logged using template literals

```js

for (let index = 1; index < fruit.length + 1; index++) {

    // Default suffix for most numbers
    let suffix = "th";

    // If the number ends in 1, 2, 3 but is not 11, 12, 13 → use "st", "nd", "rd"
    if (/^(?!.*11$)\d*1$/.test(index)) {
        suffix = "st";
    } else if (/^(?!.*12$)\d*2$/.test(index)) {
        suffix = "nd";
    } else if (/^(?!.*13$)\d*3$/.test(index)) {
        suffix = "rd";
    }
    
    // The array index is offset by -1 since array starts at 0
    console.log(`My ${index}${suffix} choice is ${fruit[index - 1]}`);
}

```

<p>&nbsp;</p>

## Sample Output

```text
My 1st choice is Banana
My 2nd choice is Orange
My 3rd choice is Mango
My 4th choice is Pineapple
...
My 11th choice is Plum
...
My 21st choice is Dragonfruit
My 22nd choice is Tangerine
My 23rd choice is Lemon
My 24th choice is Lime
...
My 51st choice is Mamey
My 52nd choice is Mangosteen
```
<p>&nbsp;</p>

---

# Regular Expression Explanation

### Regex for detecting numbers that end in **1** (but not **11**):

```js
/^(?!.*11$)\d*1$/
```

**How it works**:

- `^` — Anchors the pattern to the **start** of the string
- `(?!.*11$)` — Negative lookahead: fails if the string ends with `11`
- `\d*` — Matches any digits (`*` stands for *zero or more*) before the final character
- `1$` — Ensures the string ends with `1`

This ensures numbers like `1`, `21`, `31` match, but not `11`, `111`, etc.

---

The same logic is used for detecting endings in `2` (but not `12`) and `3` (but not `13`):

```js
/^(?!.*12$)\d*2$/  // for 2nd
```
```js
/^(?!.*13$)\d*3$/  // for 3rd
```

This regex setup prevents incorrect suffixes for numbers like `11`, `12`, `13`, which should all end in `"th"`.
