/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 */


/*ASSIGNMENT
Using the babies array from the previous exercise:  
- Write a getBabyOutfit() function that returns a description a baby's outfit
    - e.g "Lyla is wearing a blue shirt and red pants and a green hat"
- Write a feedBaby() function that prints what a baby is eating.
    - e.g. "Lyla is eating food3, food1, food4 and food2"
    - All foods in favoriteFoods should appear but randomly each time the function is called
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

function foodArrayRandomizer(aFoodArray, wannabeRandomizedFoodArray) {

    //scramblo l'array di numeri
    let indexesToAssign = indexListArrayScrambler(aFoodArray);

    //assegno ad ogni elemento dell'array originalFoodArray un indice diverso e lo metto in randomizedFoodArray
    aFoodArray.forEach((food, index) => {

        index = indexesToAssign[index];
        wannabeRandomizedFoodArray[index] = food;
    });

}

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

    //randomizeArray(arrayOfIndexes);

    // Per ogni indice
    for (let i = 0; i < numberOfArrayItems; i++) {

        randomizeIndex(arrayOfIndexes, alreadyPickedIndexes, scrambledArrayOfIndexes);

    }

    return scrambledArrayOfIndexes;

}

function randomizeIndex(anArray, alreadyPickedIndexesArray, wannabeScrambledIndexesArray) {
    //Un numero fra quelli presenti
    let newIndex = Math.floor(Math.random() * anArray.length);
    //se non è già stato selezionato -> procedi
    if (!alreadyPickedIndexesArray.includes(newIndex)) {
        alreadyPickedIndexesArray.push(newIndex);
        wannabeScrambledIndexesArray.push(newIndex);
        //altrimenti -> ritenta
    } else {
        randomizeIndex(anArray, alreadyPickedIndexesArray, wannabeScrambledIndexesArray)
    }
}

// MAIN FUNCTIONS -------------------------------------------------------------------


function getBabyOutfit(babyElement) {

    const name = babyElement.name;

    const outfitObject = babyElement.outfit;

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


function feedBaby(babyElement) {

    const name = babyElement.name;

    const originalFoodArray = babyElement.favoriteFoods;

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


// APPLYING BOTH FUNCTION TO EACH BABY -------------------------------------------------------------------
babies.forEach(baby => {
    getBabyOutfit(baby);
    feedBaby(baby);
});