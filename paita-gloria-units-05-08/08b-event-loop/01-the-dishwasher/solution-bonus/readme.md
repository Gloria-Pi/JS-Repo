# 01 The Dishwasher - Bonus 1


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

Bonus
1. have three stacks of dirty dishes and one clean stack
2. the dishwasher is able to wash two dishes at a time


<br>
<br>

# Approach to Solution -  Bonus Version

## Overview

This project simulates a **dishwasher** that:

- Handles **three dirty stacks** and **one clean stack**.
- **Randomly generates** 10–50 dishes for each dirty stack.
- **Washes two dishes at a time** (one per active dirty stack).
- Introduces a **random delay** (1–5 seconds) between washes.
- Displays the status of stacks at each step.

---

## How the code is structured


#### 1. Utility Functions

```js
function randomNumberOfDishes() {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
}
```

- `randomNumberOfDishes()`
  - Returns a random number between 10 and 50.



```js
function stackDirtyDishes(aDirtyStack, numberOfDirtyDishes) {
    for (let i = 1; i <= numberOfDirtyDishes; i++) {
        aDirtyStack.push("dirtyDish" + i);
    }
}
```

- Fills a given array (`aDirtyStack`) with labeled dishes (`dirtyDish1`, `dirtyDish2`, etc.).
- Called separately for each of the three dirty stacks.

#### 2. Stack Initialization

- Creates three empty dirty stacks and one clean stack:
  ```js
  const dirtyStack1 = [];
  const dirtyStack2 = [];
  const dirtyStack3 = [];
  const cleanStack = [];
  ```
- Stores the dirty stacks in a collection for easier handling:
  ```js
  let dirtyStacksCollection = [dirtyStack1, dirtyStack2, dirtyStack3];
  ```
- Populates each dirty stack with a random number of dishes using:
  ```js
  stackDirtyDishes(stack, randomNumberOfDishes());
  ```

#### 3. Display Function

- `displayStacks(multipleDirtyStacks, cleanStack)`
  - Logs the current count of dirty dishes in each stack and how many clean dishes there are.

#### 4. Dishwashing Logic

- `washDish(dirtyStack, cleanStack)`
  - Moves the top dish from a dirty stack into the clean one using `.pop()` and `.push()`.

#### 5. Simulation Function

- `runSimulation()`
  - Loops while dirty stacks are not all empty.
  - Picks **two non-empty stacks** and calls `washDish` for each.
  - Waits a random delay (1–5 sec) between cycles using `setTimeout`.
  - Displays current stack states after each wash.


## Example Output

```
Dirty dishes from Stack 1: 25
Dirty dishes from Stack 2: 32
Dirty dishes from Stack 3: 17
Clean dishes: 0
------------------------------------
Washing dish: dirtyDish25 from Stack 1...
Washing dish: dirtyDish32 from Stack 2...
...
All dishes washed!
```
