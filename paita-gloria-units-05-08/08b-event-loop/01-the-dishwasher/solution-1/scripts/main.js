/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description BASE EXERCISE, without the bonus parts.
 * Simulates a dishwasher system using two stacks: dirty and clean dishes.
 */


/**
 * Moves a dish from the dirty stack to the clean stack.
 *
 * @function washDish
 * @description Simulates washing a dish by popping it from the dirty stack,
 * replacing "dirty" with "clean" in the name, and pushing it to the clean stack.
 * Logs the current state of both stacks after the operation.
 *
 * @param {string[]} dirtyStack - The array representing the stack of dirty dishes.
 * @param {string[]} cleanStack - The array representing the stack of clean dishes.
 * @param {number} itNumber - The current iteration number (for logging/debugging purposes).
 *
 * @example
 * washDish(["dirtyDish1"], []);
 * // Console:
 * // Inside setTimeout: Iteration number 1
 * // Dirty dishes:
 * // Clean dishes: cleanDish1
 */
function washDish(dirtyStack, cleanStack, itNumber) {
    
    // Can be commented out. Informs the User on which iteration this function was invoked
    console.log(`Inside setTimeout: Iteration number ${itNumber}`);

    let selectedDish = dirtyStack.pop();

    cleanStack.push(selectedDish.replace("dirty", "clean"));
    
    displayStacks(dirtyStack, cleanStack);

}


/**
 * Fills the dirty dish stack with a given number of dishes.
 *
 * @function stackDirtyDishes
 * @description Populates the dirty stack with dishes named "dirtyDish1", "dirtyDish2", etc.
 *
 * @param {string[]} aDirtyStack - The array to populate with dirty dish strings.
 * @param {number} numberOfDirtyDishes - The number of dishes to generate (between 10 and 50).
 *
 * @example
 * stackDirtyDishes([], 3);
 * // dirtyStack becomes: ["dirtyDish1", "dirtyDish2", "dirtyDish3"]
 */
function stackDirtyDishes(aDirtyStack, numberOfDirtyDishes) {
    for (let i = 1; i < numberOfDirtyDishes+1; i++) {
        aDirtyStack.push("dirtyDish".concat(`${i}`));
    }
}


// Declaring the stacks
const dirtyDishes = [];
const cleanDishes = [];

// Generate a random integer between 10 and 50 (inclusive of both 10 and 50)
let numberOfDirtyDishes = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

stackDirtyDishes(dirtyDishes, numberOfDirtyDishes);

// Check how many dishes where generated for each stack (can be commented out)
console.log(`Stack of Dirty Dishes: ${numberOfDirtyDishes} dishes.`);



/**
 * Logs the current content of both stacks to the console.
 *
 * @function displayStacks
 * @description Prints the contents of the dirty and clean stacks to the console as comma-separated strings.
 *
 * @param {string[]} dirtyStack - The array representing the stack of dirty dishes.
 * @param {string[]} cleanStack - The array representing the stack of clean dishes.
 *
 * @example
 * displayStacks(["dirtyDish1"], ["cleanDish2"]);
 * // Console:
 * // Dirty dishes: dirtyDish1
 * // Clean dishes: cleanDish2
 */
function displayStacks(dirtyStack, cleanStack) {
    console.log(`Dirty dishes: ${dirtyStack.join(", ")}`);
    console.log(`Clean dishes: ${cleanStack.join(", ")}`);
}



/**
 * @function aSingleWash
 * @description
 * Handles the washing of a single dish with a random delay to simulate washing time.
 * After the delay, it delegates the task to the `washDish` function, passing the current iteration index.
 *
 * @param {Array<string>} dirtyStack - The current stack of dirty dishes.
 * @param {Array<string>} cleanStack - The stack of clean dishes.
 * @param {number} itNumber - The index of the dish to wash in the current iteration.
 */
function aSingleWash(dirtyStack, cleanStack, itNumber) {
    
    let timeForOneDish = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    setTimeout(() => {washDish(dirtyStack, cleanStack, itNumber)}, timeForOneDish);

}



/**
 * @function runSimulation
 * @description
 * Starts an asynchronous dishwashing simulation. Each dish from the `dirtyStack` is washed one at a time
 * with a random initial delay, followed by additional random delays for each cycle.
 * Washed dishes are moved to the `cleanStack`. The function uses `setTimeout` to simulate the passage of time.
 *
 * @param {Array<string>} dirtyStack - The stack of dirty dishes. Each element is a dish to be washed.
 * @param {Array<string>} cleanStack - The stack of clean dishes. Washed dishes will be pushed here.
 */
function runSimulation(dirtyStack, cleanStack) {

    console.log("A stack of dirty dishes was found. Activating washing machine...");

    // Initializes the first delay to use in the first setTimeout()
    let currentDelay = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    
    //"Iteration 0"
    aSingleWash(dirtyStack, cleanStack, 0);

    
    for (let iteration = 1; iteration < dirtyStack.length; iteration++) {
        
        // Initializes the additional delay to add to the current delay of each cycle
        let additionalDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        
        // Add the additional delay to the currentDelay of the previous loop. It'll be passed as an argument to setTimeout() of the current loop.
        currentDelay += additionalDelay;
        
        setTimeout(() => {
            aSingleWash(dirtyStack, cleanStack, iteration);
        }, currentDelay); // The delay increases with each loop

    }

}



// Start of the program
runSimulation(dirtyDishes, cleanDishes, 0);