/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script simulates a dishwasher system with three stacks of dirty dishes and one stack for clean dishes.
 * The dishwasher washes two dishes at a time (one from each active stack) with a random delay between 1 and 5 seconds.
 * When a dirty stack becomes empty, a new stack is added to the active stacks until all dishes are washed.
 * The simulation updates the DOM to reflect the current state of the stacks.
 */

// Declaring the stacks of dirty dishes
const dirtyStack1 = [];
const dirtyStack2 = [];
const dirtyStack3 = [];

const dirtyStacksCollection = [dirtyStack1, dirtyStack2, dirtyStack3];

// Stack to hold cleaned dishes
const cleanStack = [];

// Randomly generate the number of dishes for each stack of dirty dishes
let numberOfDirtyDishes1 = randomNumberOfDishes();
let numberOfDirtyDishes2 = randomNumberOfDishes();
let numberOfDirtyDishes3 = randomNumberOfDishes();

const numberOfDirtyDishesCollection = [numberOfDirtyDishes1, numberOfDirtyDishes2, numberOfDirtyDishes3];

// Fill the stacks with a randomly generated number of dirty dishes
stackDirtyDishes(dirtyStacksCollection, numberOfDirtyDishesCollection);

// Display the initial state of the dirty stacks in the DOM
displayDirtyStacks(dirtyStacksCollection);


/**
 * Generates a random number of dishes between 10 and 50.
 * @function randomNumberOfDishes
 * @returns {number} A random integer between 10 and 50.
 */
function randomNumberOfDishes() {
    const randomNumber = Math.floor(Math.random() * (51 - 10 + 1)) + 10;
    return randomNumber;
}


/**
 * Fills the dirty stacks with labeled dirty dishes.
 * @function stackDirtyDishes
 * @param {Array[]} dirtyStacksCollection - Array of dirty dish stacks.
 * @param {number[]} numberOfDirtyDishesCollection - Array of dish counts for each stack.
 */
function stackDirtyDishes(dirtyStacksCollection, numberOfDirtyDishesCollection) {
    const stackLabels = ['A', 'B', 'C'];

    dirtyStacksCollection.forEach((stack, index) => {
        const label = stackLabels[index];
        const numberOfDirtyDishes = numberOfDirtyDishesCollection[index];

        for (let i = 1; i <= numberOfDirtyDishes; i++) {
            stack.push(`dirtyDish${label}${i}`);
        }
    });
}


/**
 * Displays the dirty stacks in the DOM by populating their respective lists.
 * @function displayDirtyStacks
 * @param {Array[]} multipleDirtyStacks - Array of dirty dish stacks.
 */
function displayDirtyStacks(multipleDirtyStacks) {
    // Select all the divs inside the section
    const stackDivs = document.querySelectorAll("#dirty-stack-section .dirty-stack");

    const firstUl = stackDivs[0].querySelector("ul");
    const secondUl = stackDivs[1].querySelector("ul");
    const thirdUl = stackDivs[2].querySelector("ul");

    const ulStack = [firstUl, secondUl, thirdUl];

    multipleDirtyStacks.forEach((dirtyStack, index) => {
        const currentUl = ulStack[index];
        if (currentUl && dirtyStack) {
            dirtyStack.forEach(dish => {
                const newLi = document.createElement("li");
                newLi.textContent = dish;
                currentUl.appendChild(newLi);
            });
        }
    });
}


/**
 * Adds a cleaned dish to the clean stack in the DOM.
 * @function fillCleanStackInDom
 * @param {string} aCleanDish - The cleaned dish to add.
 */
function fillCleanStackInDom(aCleanDish) {
    // Select all the divs inside the section
    const cleanUl = document.querySelector("#clean-stack-section .clean-stack > ul");

    if (cleanUl && aCleanDish) {
        const newLi = document.createElement("li");
        newLi.textContent = aCleanDish;
        cleanUl.appendChild(newLi);
    }
}


/**
 * Updates the number of dishes displayed for each stack in the DOM.
 * @function nOfDishes
 * @param {Array[]} multipleDirtyStacks - Array of dirty dish stacks.
 * @param {Array} cleanStack - The stack of cleaned dishes.
 */
function nOfDishes(multipleDirtyStacks, cleanStack) {
    // Select all the parent divs (stack-a, stack-b, stack-c)
    const stackDivs = document.querySelectorAll("#dirty-stack-section > div");

    stackDivs.forEach((stackDiv, index) => {
        const span = stackDiv.querySelector("p > span");
        if (span && multipleDirtyStacks[index]) {
            span.textContent = multipleDirtyStacks[index].length;
        }
    });

    // Update the clean stack count
    const cleanStackSpan = document.querySelector("#clean-stack-section > div > p > span");
    if (cleanStackSpan) {
        cleanStackSpan.textContent = cleanStack.length;
    }
}


/**
 * Simulates washing a dish by moving it from a dirty stack to the clean stack.
 * Updates the DOM to reflect the changes.
 * @function washDish
 * @param {Array} dirtyStack - The stack of dirty dishes.
 * @param {Array} cleanStack - The stack of cleaned dishes.
 */
function washDish(dirtyStack, cleanStack) {
    let selectedDish = dirtyStack.pop();
    cleanStack.push(selectedDish.replace("dirty", "clean"));

    removeDishFromDom(dirtyStack);

    let lastCleanedDish = cleanStack.at(-1);
    fillCleanStackInDom(lastCleanedDish);
}


/**
 * Removes the last dish from the corresponding dirty stack in the DOM.
 * @function removeDishFromDom
 * @param {Array} dirtyStack - The stack of dirty dishes.
 */
function removeDishFromDom(dirtyStack) {
    // Get the index of the stack to figure out which UL it corresponds to
    const index = dirtyStacksCollection.indexOf(dirtyStack);

    const stackDivs = document.querySelectorAll("#dirty-stack-section .dirty-stack");

    const liToRemove = stackDivs[index].querySelector("ul > li:last-child");

    liToRemove.remove();
}


/**
 * Runs the dishwashing simulation.
 * - Washes dishes from two active stacks at a time.
 * - Adds a new stack when one becomes empty.
 * - Stops when all dishes are washed.
 * @function runSimulation
 * @param {Array[]} multipleDirtyStacks - Array of all dirty stacks.
 * @param {Array} cleanStack - The stack of cleaned dishes.
 */
function runSimulation(multipleDirtyStacks, cleanStack) {

    let activeStacks = multipleDirtyStacks.slice(0, 2); // Start with 2 stacks
    let untouchedStacks = multipleDirtyStacks.slice(2);

    const interval = setInterval(() => {

        // Wash one dish from each active stack
        activeStacks.forEach(stack => washDish(stack, cleanStack));

        nOfDishes(multipleDirtyStacks, cleanStack);

        // Remove finished stacks
        activeStacks = activeStacks.filter(stack => stack.length > 0);

        // Add a new stack if one is empty and we have untouched left
        while (activeStacks.length < 2 && untouchedStacks.length > 0) {
            activeStacks.push(untouchedStacks.shift());
        }

        // Stop condition
        if (activeStacks.length === 0 && untouchedStacks.length === 0) {
            clearInterval(interval);
        }

    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000); // wash every 1–5 seconds
}


// Start of the program
runSimulation(dirtyStacksCollection, cleanStack);