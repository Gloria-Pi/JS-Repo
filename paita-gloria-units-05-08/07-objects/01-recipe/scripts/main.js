/**
 * @file main.js
 * @author Gloria Paita
 * @description
 * This program defines a favorite recipe object and logs its details individually.
 * As a bonus, it also defines an array of multiple recipes and logs the title,
 * servings, and ingredients of each one.
 */

/**
 * @typedef {Object} Recipe
 * @property {string} title - The name of the recipe.
 * @property {number} servings - The number of servings the recipe makes.
 * @property {string[]} ingredients - A list of ingredients needed for the recipe.
 */


/**
 * @constant {Recipe}
 * A single favorite recipe with its title, servings, and ingredients.
 */
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


// Logging the recipe information one by one
console.log(`Title: ${favRecipe.title}`);         // Tuna & Tomato Pasta
console.log(`Number of servings: ${favRecipe.servings}`);       // 1
console.log(`Ingredients needed: ${favRecipe.ingredients}`);    // [ 'Pasta', 'Can of Tuna', ..., 'Salt' ]
console.log("-----------------------------");


/**
 * @constant {Recipe[]}
 * A collection of recipes stored in an array, each with title, servings, and ingredients.
 */
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
  {
    title: "Avocalicious Brunch",
    servings: 2,
    ingredients: [
      "Toasted Bread",
      "Smoked Salmon",
      "Avocado",
      "Egg",
      "Salt"
    ]
  },
  {
    title: "Nutty Skyr",
    servings: 1,
    ingredients: [
      "Skyr",
      "Honey", 
      "Nuts"
    ]
  },
  {
    title: "Lazy Hambuger",
    servings: 1,
    ingredients: [
      "Hamburger",
      "Salt", 
      "Pepper", 
      "Tabasco"
    ]
  }
];


// Logging the recipe information one by one using the for...of loop
for (let recipe of recipeBook) {
  console.log(`Title: ${recipe.title}`);
  console.log(`Number of servings: ${recipe.servings}`);
  console.log(`Ingredients needed: ${recipe.ingredients}`);
  console.log("-----------------------------");
}


/* Logs:

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

*/