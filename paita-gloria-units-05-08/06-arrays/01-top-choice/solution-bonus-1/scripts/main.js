/**
 * @file main.js
 * @author Gloria Paita
 * 
* @description
 * This script fulfills an assignment that required:
 * 1. Creating an array of top personal choices (in this case, favorite fruits),
 * 2. Logging each choice to the console using a formatted ranking string like
 *    "My 1st choice is Banana", "My 2nd choice is Orange", etc.
 *
 * To achieve this, a `for` loop is used to iterate through the array, and a `switch` statement
 * determines the correct ordinal suffix ("st", "nd", "rd", or "th") based on the current ranking number.
 * 
 * Note: the suffix logic accounts for some exceptions (like 21st, 22nd, 23rd), but not all edge cases.
 * A more accurate and scalable solution using regex can be found in the `solution-bonus-2` folder.
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
  

//For loop
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
My 21st choice is Dragonfruit
My 22nd choice is Tangerine
My 23rd choice is Lemon
My 24th choice is Lime
(...)
My 30th choice is Passionfruit
My 31st choice is Jackfruit
My 32nd choice is Mulberry
My 33rd choice is Cranberry
My 34th choice is Date
(...)
My 50th choice is Jambolan
My 51th choice is Mamey
My 52th choice is Mangosteen

*/