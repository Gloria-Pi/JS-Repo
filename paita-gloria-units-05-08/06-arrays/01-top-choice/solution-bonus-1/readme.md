# 01 Top Choice - Bonus 1/2


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Create an **array** to hold your top choices (colors, pets, books, whatever).
2. For each choice, **log** to the screen a string like: "My #1 choice is blue."

**BONUS**  

Change it to add the correct number suffix, e.g. "My 1st choice", "My 2nd
choice", "My 3rd choice", "My 4th choice", etc.


<p>&nbsp;</p>


## 1. Creating the array

- I created an array called `fruit` that contains a list of **my favourite fruits**, ordered from most to least favourite.
- The array includes over 50 different fruits.

```js
const fruit = ["Banana", "Orange", "Mango", ... , "Mangosteen"];
```

<p>&nbsp;</p>

## 2. Looping through the array

- I used a `for` loop that starts from `index = 1` and runs until it reaches `fruit.length`.
- Inside the loop, the current index is used to:
  - determine the **ranking number**,
  - determine the correct **ordinal suffix** (`st`, `nd`, `rd`, `th`),
  - and log a message like `"My 1st choice is Banana"` using template strings.

<p>&nbsp;</p>


## 3. BONUS: Adding ordinal suffixes

- I declared the block-scoped variable `suffix` to hold the suffix for the current index.
- I used a `switch` statement to assign:
  - `"st"` for ranks ending in 1 (like 1st, 21st),
  - `"nd"` for ranks ending in 2 (like 2nd, 22nd),
  - `"rd"` for ranks ending in 3 (like 3rd, 23rd),
  - `"th"` for all other cases (like 4th, 5th, 11th, etc.).

<p>&nbsp;</p>


```js
for (let index = 1; index < fruit.length + 1; index++) {

    let suffix;

    switch(index) {
        case 1:
        case 21:
        case 31:
        case 41:
            suffix = "st";
            break;

        case 2:
        case 22:
        case 32:
        case 42:
            suffix = "nd";
            break;

        case 3:
        case 23:
        case 33:
        case 43:
            suffix = "rd";
            break;

        default:
            suffix = "th";
            break;
    }

    console.log(`My ${index}${suffix} choice is ${fruit[index - 1]}`);
}
```

<p>&nbsp;</p>


# Output

Here are a few examples from the output:

```js
My 1st choice is Banana
My 2nd choice is Orange
My 3rd choice is Mango
My 4th choice is Pineapple
My 5th choice is Strawberry
...
My 21st choice is Dragonfruit
My 22nd choice is Tangerine
My 23rd choice is Lemon
...
My 31st choice is Jackfruit
My 32nd choice is Mulberry
My 33rd choice is Cranberry
...
My 50th choice is Jambolan
My 51th choice is Mamey
My 52th choice is Mangosteen
```

<p>&nbsp;</p>

---

# Considerations

⚠️ The `switch` statement doesn't account for all ordinal rules. To fully handle them, each `case` would need to be manually written out within the statement.

To fix this, I thought that a **regex-based** solution would be more accurate and scalable.

This is why I created a **third version** of this exercise in a different folder using regex (please refer to folder `solution-bonus-2` and in particular to this [readme](../solution-bonus-2/readme.md)) for improved suffix handling.