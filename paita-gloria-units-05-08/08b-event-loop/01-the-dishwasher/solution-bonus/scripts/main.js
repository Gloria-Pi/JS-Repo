/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * Simulation of a dishwasher system with three dirty dish stacks and one clean stack.
 * The dishwasher can wash two dishes at a time (one from each active stack), and new stacks are added when one becomes empty.
 * Dishes are washed with a random delay (1-5 seconds).
 */


/**
 * Generates a random number of dishes between 10 and 50.
 * @function randomNumberOfDishes
 * @returns {number} A random integer between 10 and 50.
 * @example
 * const dishes = randomNumberOfDishes(); // e.g. 34
 */
function randomNumberOfDishes() {
    return randomNumber = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
}


/**
 * Fills a given stack with a specified number of dirty dishes.
 * Each dish is labeled with a string like "dirtyDish1", "dirtyDish2", etc.
 * @function stackDirtyDishes
 * @param {Array} aDirtyStack - The stack to be filled with dirty dishes.
 * @param {number} numberOfDirtyDishes - Number of dirty dishes to add to the stack.
 */
function stackDirtyDishes(aDirtyStack, numberOfDirtyDishes) {
    for (let i = 1; i < numberOfDirtyDishes+1; i++) {
        aDirtyStack.push("dirtyDish".concat(`${i}`));
    }
}



// Declaring the stacks of Dirty Dishes
const dirtyStack1 = [];
const dirtyStack2 = [];
const dirtyStack3 = [];

let dirtyStacksCollection = [dirtyStack1, dirtyStack2, dirtyStack3];

const cleanStack = [];


// Randomly generate the number of dishes for each stack of Dirty Dishes
let numberOfDirtyDishes1 = randomNumberOfDishes();
let numberOfDirtyDishes2 = randomNumberOfDishes();
let numberOfDirtyDishes3 = randomNumberOfDishes();


// Filling the stacks with a randomly generated number of dirty dishes
stackDirtyDishes(dirtyStack1, numberOfDirtyDishes1);
stackDirtyDishes(dirtyStack2, numberOfDirtyDishes2);
stackDirtyDishes(dirtyStack3, numberOfDirtyDishes3);



// (Optional) Prints a list of all the dishes present in the arrays
/**
 * Displays the number of dirty dishes in each stack and the number of clean dishes.
 * @function displayStacks
 * @param {Array[]} multipleDirtyStacks - Array containing all dirty dish stacks.
 * @param {Array} cleanStack - The stack of clean dishes.
 */
function displayStacks(multipleDirtyStacks, cleanStack) {
    for (let i = 0; i < multipleDirtyStacks.length; i++) {
        console.log(`Dirty dishes from Stack ${i + 1}: ${multipleDirtyStacks[i].length}`);
    }
    console.log(`Clean dishes: ${cleanStack.length}`);
    console.log(`------------------------------------`);
}



/**
 * Moves one dish from the dirty stack to the clean stack.
 * @function washDish
 * @param {Array} dirtyStack - A stack containing dirty dishes.
 * @param {Array} cleanStack - A stack to receive clean dishes.
 * @example
 * washDish(dirtyStack1, cleanStack);
 */
function washDish(dirtyStack, cleanStack) {

    let selectedDish = dirtyStack.pop();

    cleanStack.push(selectedDish);   
}



/**
 * Runs the dishwashing simulation.
 * - Starts with two active dirty stacks.
 * - Automatically adds a new stack when one becomes empty.
 * - Random delay between each wash cycle (1–5 seconds).
 * - Simulation ends when all dishes are washed.
 * 
 * @function runSimulation
 * @param {Array[]} multipleDirtyStacks - Array of all dirty stacks (e.g. 3 stacks).
 * @param {Array} cleanStack - The stack that collects cleaned dishes.
 */
function runSimulation(multipleDirtyStacks, cleanStack) {

    console.log(`--------STARTING-THE-PROGRAM--------`);

    let activeStacks = multipleDirtyStacks.slice(0, 2); // Start with 2 stacks
    let untouchedStacks = multipleDirtyStacks.slice(2);

    const interval = setInterval(() => {
        // Wash one dish from each active stack
        activeStacks.forEach(stack => washDish(stack, cleanStack));
        displayStacks(multipleDirtyStacks, cleanStack);

        // Remove finished stacks
        activeStacks = activeStacks.filter(stack => stack.length > 0);

        // Add a new stack if one is empty and we have untouched left
        while (activeStacks.length < 2 && untouchedStacks.length > 0) {
            activeStacks.push(untouchedStacks.shift());
        }

        // Stop condition
        if (activeStacks.length === 0 && untouchedStacks.length === 0) {
            clearInterval(interval);
            console.log("All the dishes are clean!");
            console.log(`---------END-OF-THE-PROGRAM---------`);
        }

    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000); // wash every 1–5 seconds
}


// Start of the program
runSimulation(dirtyStacksCollection, cleanStack);