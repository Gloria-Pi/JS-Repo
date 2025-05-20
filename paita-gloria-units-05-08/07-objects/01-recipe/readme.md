# 01 Recipe


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Create an object to hold information on your favorite recipe. It should have
properties for title (a string), servings (a number), and ingredients (an
array of strings).

- On separate lines (one console.log statement for each), log the recipe
information

**BONUS:**  
Create an array that holds several recipes and log them all

<br>

---

# Approach to Solution

## 1. Creating a Single Recipe Object

- Defined a constant variable `favRecipe`.
- Added three properties to the object:
  - `title`: the name of the dish
  - `servings`: how many servings it makes
  - `ingredients`: an array of ingredients used in the recipe.

```js
// Creating a recipe object
const favRecipe = {
  title: "Tuna & Tomato Pasta",
  servings: 1,
  ingredients: [
    "Pasta",
    "Can of Tuna",
    "Tomatoes",
    "Onion",
    "Pepper",
    "Parsley",
    "Salt"
  ]
};
```
<br>

## 2. Logging the Recipe Information

- Used three separate `console.log()` statements:
  - one for the title
  - one for the servings
  - one for the full ingredients array

```js
console.log(`Title: ${favRecipe.title}`);
console.log(`Number of servings: ${favRecipe.servings}`);
console.log(`Ingredients needed: ${favRecipe.ingredients}`);
```

<br>


### Output

```txt
Title: Tuna & Tomato Pasta
Number of servings: 1
Ingredients needed: Pasta,Can of Tuna,Tomatoes,Onion,Pepper,Parsley,Salt
```

<br>

## 3. Bonus: Creating a Recipe Book

- Created an array named `recipeBook` that contains multiple recipe objects.
- Each object follows the same structure: `title`, `servings`, `ingredients`.

```js
// Creating a recipe book array full of recipe objects
const recipeBook = [
  {
    title: "Tuna & Tomato Pasta",
    servings: 1,
    ingredients: [
      "Pasta",
      "Can of Tuna",
      "Tomatoes",
      "Onion",
      "Pepper",
      "Parsley",
      "Salt"
    ]
  },
  
  (...)

  {
    title: "Lazy Hambuger",
    servings: 1,
    ingredients: [
      "Hamburger",
      "Salt",
      "Pepper",
      "Tabasco"
    ]
  },
];
```

<br>

- Initially started logging the information for each recipe using repeated `console.log()` statements and array indexing, but manually logging each property for every recipe quickly became repetitive and inefficient.

```js

// Logging the recipe information one by one, using the index
console.log(recipeBook[0].title);
console.log(recipeBook[0].servings);
console.log(recipeBook[0].ingredients);
console.log(recipeBook[1].title);
// Stopping here. Using a for loop is easier and more efficient.

```

<br>

- This is why I switched to a `for...of` loop to iterate over the `recipeBook` array.
  - Within the loop:
    - Logged the `title`, `servings`, and `ingredients` for each recipe.

```js
for (let recipe of recipeBook) {
  console.log(`Title: ${recipe.title}`);
  console.log(`Number of servings: ${recipe.servings}`);
  console.log(`Ingredients needed: ${recipe.ingredients}`);
  console.log("-----------------------------");
}
```

<br>


# Output

```text
Title: Tuna & Tomato Pasta
Number of servings: 1
Ingredients needed: Pasta,Can of Tuna,Tomatoes,Onion,Pepper,Parsley,Salt
 -----------------------------
Title: Avocalicious Brunch
Number of servings: 2
Ingredients needed: Toasted Bread,Smoked Salmon,Avocado,Egg,Salt
 -----------------------------
Title: Nutty Skyr
Number of servings: 1
Ingredients needed: Skyr,Honey,Nuts
 -----------------------------
Title: Lazy Hambuger
Number of servings: 1
Ingredients needed: Hamburger,Salt,Pepper,Tabasco
 -----------------------------
```