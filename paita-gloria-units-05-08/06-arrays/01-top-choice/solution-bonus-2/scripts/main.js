/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script is part of an assignment that required:
 * 1. Creating an array of top personal choices (here, favorite fruits),
 * 2. Logging each choice to the console using a formatted ranking string like:
 *    "My 1st choice is Banana", "My 2nd choice is Orange", etc.
 *
 * In this version:
 *
 * - A `for` loop iterates through each element in the `fruit` array.
 * - A `suffix` variable is initialized with the default value `"th"`.
 * - Using a series of `if` statements and regular expressions (regex), the script dynamically assigns
 *   the correct ordinal suffix ("st", "nd", or "rd") to each number, while handling exceptions
 *   such as 11th, 12th, and 13th.
 */



//Initializing the array
const fruit = [
    "Banana", "Orange", "Mango", "Pineapple", "Strawberry", 
    "Blueberry", "Grapes", "Watermelon", "Peach", "Pear", "Plum", 
    "Apricot", "Cherry", "Kiwi", "Papaya", "Lychee", "Pomegranate", 
    "Guava", "Fig", "Coconut", "Dragonfruit", "Tangerine", "Lemon", 
    "Lime", "Raspberry", "Blackberry", "Cantaloupe", "Honeydew", 
    "Nectarine", "Passionfruit", "Jackfruit", "Mulberry", "Cranberry", 
    "Date", "Gooseberry", "Starfruit", "Persimmon", "Durian", "Tamarind", 
    "Soursop", "Salak", "Longan", "Loquat", "Breadfruit", "Zucchini", 
    "Elderberry", "Clementine", "Bittermelon", "Chayote", "Jambolan", 
    "Mamey", "Mangosteen"
  ];
  


//For Loop
for (let index = 1; index < fruit.length + 1; index++) {
    let suffix = "th";

    if (/^(?!.*11$)\d*1$/.test(index)) {
        suffix = "st";
    } else if (/^(?!.*12$)\d*2$/.test(index)) {
        suffix = "nd";
    } else if (/^(?!.*13$)\d*3$/.test(index)) {
        suffix = "rd";
    }

    console.log(`My ${index}${suffix} choice is ${fruit[index - 1]}`);
}



/* OUTPUT

My 1st choice is Banana
My 2nd choice is Orange
My 3rd choice is Mango
My 4th choice is Pineapple
My 5th choice is Strawberry
My 6th choice is Blueberry
My 7th choice is Grapes
My 8th choice is Watermelon
My 9th choice is Peach
My 10th choice is Pear
My 11th choice is Plum
My 12th choice is Apricot
My 13th choice is Cherry
(...)
My 20th choice is Coconut
My 21st choice is Dragonfruit
My 22nd choice is Tangerine
My 23rd choice is Lemon
My 24th choice is Lime
(...)
My 40th choice is Soursop
My 41st choice is Salak
My 42nd choice is Longan
My 43rd choice is Loquat
(...)
My 50th choice is Jambolan
My 51st choice is Mamey
My 52nd choice is Mangosteen

*/