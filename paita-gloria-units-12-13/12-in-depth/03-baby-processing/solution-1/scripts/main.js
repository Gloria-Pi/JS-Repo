/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script manages a list of fictional baby Pokémon characters.
 * It includes functions to:
 * - Generate a string describing a baby's outfit.
 * - Randomize and log the foods a baby is currently eating.
 * Helper functions are included to shuffle arrays without modifying the original order.
 */

// ARRAY OF BABIES -------------------------------------------------------------------

let babies = [
    {
        name: "Chiko Jr.",
        months: 9,
        noises: ["chi-chi!", "chikorii!"],
        favoriteFoods: ["apricorns", "spinach mash", "sweet berries"],
        outfit: {
            hat: "bonnet",
            onesie: "light green",
            booties: "yellow"
        }
    },
    {
        name: "Cynda Cub",
        months: 12,
        noises: ["cynda!", "quill!"],
        favoriteFoods: ["warm milk", "spicy mash", "pecha berry purée"],
        outfit: {
            hood: "orange",
            mittens: "flame-pattern",
            pants: "brown"
        }
    },
    {
        name: "Tota Tot",
        months: 10,
        noises: ["to-to!", "crunch!"],
        favoriteFoods: ["seaweed pudding", "oranges", "poke puffs"],
        outfit: {
            hat: "blue",
            bib: "fang-shaped",
            onesie: "fluffy"
        }
    },
    {
        name: "Togechad",
        months: 6,
        noises: ["toge-toge!", "pii!"],
        favoriteFoods: ["milktank formula", "soft rice porridge", "poké-puffs"],
        outfit: {
            hat: "plush crown",
            cravat: "crimson",
            socks: "white"
        }
    }
];

// HELPER FUNCTIONS -------------------------------------------------------------------

/**
 * Randomly assigns each item in a food array to a new index in a target array.
 *
 * @param {string[]} aFoodArray - The original array of food items.
 * @param {string[]} wannabeRandomizedFoodArray - The target array to hold the randomized order.
 */
function foodArrayRandomizer(aFoodArray, wannabeRandomizedFoodArray) {

    // Scrambling the array of numbers
    let indexesToAssign = indexListArrayScrambler(aFoodArray);

    // Assigning to each element of originalFoodArray an index, then placing it in randomizedFoodArray
    aFoodArray.forEach((food, index) => {

        index = indexesToAssign[index];
        wannabeRandomizedFoodArray[index] = food;
    });
}

/**
 * Creates and returns a new array of index numbers, shuffled randomly.
 *
 * @param {Array} anArray - The array whose length determines the number of indexes to generate.
 * @returns {number[]} An array of unique, scrambled index values.
 */
function indexListArrayScrambler(anArray) {
    const numberOfArrayItems = anArray.length;
    let arrayOfIndexes = [];

    //Generates the array of indexes
    for (let i = 0; i < numberOfArrayItems; i++) {
        arrayOfIndexes.push(i);
    }

    //Scrambling the array
    let scrambledArrayOfIndexes = [];
    let alreadyPickedIndexes = [];

    for (let i = 0; i < numberOfArrayItems; i++) {
        randomizeIndex(arrayOfIndexes, alreadyPickedIndexes, scrambledArrayOfIndexes);
    }
    return scrambledArrayOfIndexes;
}

/**
 * Randomly selects a new index that hasn't been used yet and adds it to the scrambled array.
 * If the index has already been picked, retries until a unique one is found.
 *
 * @param {number[]} anArray - Original array of indexes.
 * @param {number[]} alreadyPickedIndexesArray - Tracks which indexes have already been picked.
 * @param {number[]} wannabeScrambledIndexesArray - Final array where picked indexes are added.
 */
function randomizeIndex(anArray, alreadyPickedIndexesArray, wannabeScrambledIndexesArray) {
    // A number among the one that are available
    let newIndex = Math.floor(Math.random() * anArray.length);
    // If it hasn't been selected yet -> proceed
    if (!alreadyPickedIndexesArray.includes(newIndex)) {
        alreadyPickedIndexesArray.push(newIndex);
        wannabeScrambledIndexesArray.push(newIndex);
        // Else: try again
    } else {
        randomizeIndex(anArray, alreadyPickedIndexesArray, wannabeScrambledIndexesArray);
    }
}

// MAIN FUNCTIONS -------------------------------------------------------------------

/**
 * Logs a sentence describing what a specific baby is wearing, using their outfit object.
 *
 * @param {number} babyNumber - The index of the baby in the `babies` array.
 * @returns {void}
 *
 * @example
 * getBabyOutfit(0);
 * // Chiko Jr. is wearing a bonnet hat and a light green onesie and yellow booties.
 */
function getBabyOutfit(babyNumber) {

    const name = babies[babyNumber].name;
    const outfitObject = babies[babyNumber].outfit;
    const outfitEntries = Object.entries(outfitObject);

    let fullSentence = `${name} is wearing `;

    outfitEntries.forEach(entry => {
        const [key, value] = entry;

        let subSentence;

        if (key.charAt(key.length - 1) === "s") {
            subSentence = `${value} ${key} and `;
            isLastEntry();
        } else {
            subSentence = `a ${value} ${key} and `;
            isLastEntry();
        }

        function isLastEntry() {
            if (entry === outfitEntries[outfitEntries.length - 1]) {
                subSentence = `${subSentence.substring(0, subSentence.indexOf(" and"))}.`;
                fullSentence += subSentence;
            } else {
                fullSentence += subSentence;
            }
        }
    });

    console.log(fullSentence);
    console.log(" ");
}

/**
 * Randomizes the order of a baby's favorite foods and logs a sentence describing what the baby is eating.
 *
 * @param {number} babyNumber - The index of the baby in the `babies` array.
 * @returns {void}
 *
 * @example
 * feedBaby(2);
 * // Tota Tot is eating poke puffs, seaweed pudding, and oranges.
 */
function feedBaby(babyNumber) {

    const name = babies[babyNumber].name;

    const originalFoodArray = babies[babyNumber].favoriteFoods;

    const randomizedFoodArray = [];

    foodArrayRandomizer(originalFoodArray, randomizedFoodArray);

    let fullSentence = `${name} is eating `;

    const lastFood = randomizedFoodArray[randomizedFoodArray.length - 1];

    for (let food of randomizedFoodArray) {
        fullSentence += lastFood === food ? `and ${food}.` : `${food}, `;
    }

    console.log(fullSentence);
    console.log(" ");
}

// TESTING THE FUNCTIONS -------------------------------------------------------------------

console.log("---- What are the babies wearing?".toUpperCase());
console.log(" ");

getBabyOutfit(0);
getBabyOutfit(1);
getBabyOutfit(2);
getBabyOutfit(3);

console.log(" ");
console.log("---- What are the babies eating?".toUpperCase());
console.log(" ");

feedBaby(0);
feedBaby(1);
feedBaby(2);
feedBaby(3);