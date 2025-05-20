# 01 Top Choice - Base Version


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

# Approach to Solution

## 1. Creating the array

- I've initialized the array `vocaloidRank`, which contains a list of my favourite **Vocaloids**, ordered from most favourite to least favourite.
- Each element in the array is a string with the name of one Vocaloid.

<p>&nbsp;</p>

## 2. Looping through the array

- I used a `for` loop to iterate through the array.
- The loop starts with `index = 0` and runs until `index < vocaloidRank.length`, so it covers all elements.
- Inside the loop, I used a **template string** to log the message:
  ```
  My #${index + 1} choice is ${vocaloidRank[index]}
  ```
  This way:
  - `index + 1` gives the correct human-readable ranking (1st, 2nd, etc.).
  - `vocaloidRank[index]` retrieves the corresponding name.

<p>&nbsp;</p>

## 3. Output

```js
"My #1 choice is GUMI"
"My #2 choice is Fukase"
"My #3 choice is AI"
"My #4 choice is Hatsune Miku"
"My #5 choice is Flower"
"My #6 choice is Otomachi Una"
"My #7 choice is Kagamine Rin"
"My #8 choice is Gakupo"
"My #9 choice is Kagamine Len"
"My #10 choice is Megurine Luka"
"My #11 choice is KAITO"
"My #12 choice is MEIKO"
```