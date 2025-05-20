# 01 The Dishwasher


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a simulation of a dishwasher system using two stacks of dishes
- one stack represents dirty dishes, and the other represents clean dishes
- the dirty stack has a random number of plates 10 - 50
- useful functions
  - washDish - moves a dish from the dirty stack to the clean stack
  - displayStacks - displays the current state of both stacks in the console
  - runSimulation - simulate washing all dirty dishes adding a random delay between steps


<br>
<br>

# Approach to Solution

## How it works

The simulation is based on the following ideas:

- **Dirty dishes stack**: initialized with a random number of elements between 10 and 50.
- **Clean dishes stack**: initially empty.
- A dish is "washed" by removing it from the dirty stack and pushing it into the clean stack.
- A **random delay** between each wash simulates time taken to clean each dish.
- All operations are logged in the console using a display function.

---

## Code structure

The file is organized as follows:

### 1. **Initialization**

```js
const dirtyDishes = [];
const cleanDishes = [];

let numberOfDirtyDishes = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

function stackDirtyDishes(aDirtyStack, numberOfDirtyDishes) {
    for (let i = 1; i < numberOfDirtyDishes+1; i++) {
        aDirtyStack.push("dirtyDish".concat(`${i}`));
    }
}
```

- `dirtyDishes` is filled with strings like `"dirtyDish1"`, `"dirtyDish2"`, ..., up to a random limit between 10 and 50.
- `cleanDishes` starts empty and will be filled during the simulation.

---

### 2. **Function: washDish**

```js
function washDish(dirtyStack, cleanStack, itNumber) {
    
    // Can be commented out. Informs the User on which iteration this function was invoked
    console.log(`Inside setTimeout: Iteration number ${itNumber}`);

    let selectedDish = dirtyStack.pop();

    cleanStack.push(selectedDish.replace("dirty", "clean"));
    
    displayStacks(dirtyStack, cleanStack);

}
```

- **Purpose**: Moves one dish from the dirty stack to the clean stack.
- Removes the last dish using `pop()` (LIFO logic).
- Uses `replace()` to rename the dish string from `"dirty"` to `"clean"`.
- Adds it to the clean stack using `push()`.
- Calls `displayStacks()` to show the updated state.

---

### 3. **Function: displayStacks**

```js
function displayStacks(dirtyStack, cleanStack) {
    console.log(`Dirty dishes: ${dirtyStack.join(", ")}`);
    console.log(`Clean dishes: ${cleanStack.join(", ")}`);
}
```

- Clears the console before each update.
- Displays the current contents of both stacks.

---

### 4. **Function: runSimulation**

```js
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
```

- Recursively calls itself until all dishes are washed.
- Introduces a **random delay** using `setTimeout`.
- Ends when `dirtyDishes` is empty.

---

## Example run

```bash
Dirty Dishes: [ 'dirtyDish1', 'dirtyDish2', 'dirtyDish3' ]
Clean Dishes: []

Dirty Dishes: [ 'dirtyDish1', 'dirtyDish2' ]
Clean Dishes: [ 'cleanDish3' ]

Dirty Dishes: [ 'dirtyDish1' ]
Clean Dishes: [ 'cleanDish3', 'cleanDish2' ]

Dirty Dishes: []
Clean Dishes: [ 'cleanDish3', 'cleanDish2', 'cleanDish1' ]

All dishes have been washed!
```