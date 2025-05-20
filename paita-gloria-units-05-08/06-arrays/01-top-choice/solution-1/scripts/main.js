/**
 * @file main.js
 * @author Gloria Paita
 * @description
 * This script logs a ranked list of the author's favorite Vocaloids.
 * Each entry is displayed with its position in the format: "My #X choice is NAME".
 * 
 * The ranking is stored in the `vocaloidRank` array.
 * A `for` loop is used to iterate through the array, starting from index 0,
 * and the position number is calculated as `index + 1` for display purposes.
 */



//Initializing the array
const vocaloidRank = [
    "GUMI",
    "Fukase",
    "AI",
    "Hatsune Miku",
    "Flower",
    "Otomachi Una",
    "Kagamine Rin",
    "Gakupo",
    "Kagamine Len",
    "Megurine Luka",
    "KAITO",
    "MEIKO"
  ];



//For loop
for (let index = 0; index < vocaloidRank.length; index++) {
    console.log(`My #${index+1} choice is ${vocaloidRank[index]}`);
}


/* OUTPUT:
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
*/