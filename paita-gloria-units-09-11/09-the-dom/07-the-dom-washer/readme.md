# 07 The DOM Washer


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
  - drawStacks - displays the current state of both stacks in the page updating the DOM
  - runSimulation - simulate washing all dirty dishes adding a random delay between steps

- Use correct HTML and CSS as needed for this exercise

Bonus
1. have three stacks of dirty dishes and one clean stack
2. the dishwasher is able to wash two dishes at a time


<br>
<br>

# Approach to Solution

## Overview

This project simulates a **dishwasher** that:

- Handles **three dirty stacks** and **one clean stack**.
- **Randomly generates** 10–50 dishes for each dirty stack.
- **Washes two dishes at a time** (one per active dirty stack).
- Introduces a **random delay** (1–5 seconds) between washes.
- Displays the status of stacks at each step.

## 1. Initial Setup of Stacks

- **Three dirty stacks (`dirtyStack1`, `dirtyStack2`, `dirtyStack3`)** are initialized as empty arrays.
- A **collection array** (`dirtyStacksCollection`) holds all dirty stacks for centralized management.
- One **clean stack (`cleanStack`)** stores the cleaned dishes.

> Each dirty stack is filled using a **random number of dishes** between 10 and 50. The dishes are labeled with unique IDs like `dirtyDishA1`, `dirtyDishB7`, etc.

## 2. Generating and Stacking Dishes

- The `randomNumberOfDishes()` function:
  - Generates a random integer between 10 and 50.
  - This ensures variability in the simulation each time it runs.

- The `stackDirtyDishes()` function:
  - Populates each dirty stack with labeled dish strings (`dirtyDishA1`, `dirtyDishB3`, etc.).
  - Uses a loop to fill stacks according to their assigned random count.

## 3. Displaying the Initial DOM State

- `displayDirtyStacks()`:
  - Selects corresponding `ul` elements in the DOM and appends `li` elements for each dish.
  - Associates each dirty stack with a separate DOM list (`stack-a`, `stack-b`, `stack-c`).

## 4. Simulation Mechanics

### Washing Dishes

- `washDish()`:
  - Pops the last dish from a dirty stack.
  - Transforms its label from `"dirty"` to `"clean"` and pushes it to the `cleanStack`.
  - Updates the DOM by removing the last `<li>` from the corresponding dirty stack.
  - Displays the newly cleaned dish in the clean stack DOM list.

- `removeDishFromDom()`:
  - Identifies the correct stack by index.
  - Removes the corresponding dish element from the DOM.

- `fillCleanStackInDom()`:
  - Adds a newly cleaned dish to the clean stack's `ul` in the DOM.

### Updating Dish Counters

- `nOfDishes()`:
  - Updates the DOM counters (`<span>`) for each dirty stack and the clean stack.
  - Keeps the displayed dish counts synchronized with the array lengths.

## 5. Running the Simulation

- `runSimulation()`:
  - Initializes with the first **two dirty stacks** as active.
  - Every 1–5 seconds:
    - One dish is washed from each active stack.
    - Stack counts are updated.
    - Empty stacks are removed from the active pool.
    - If an active stack finishes and there is an unused one, it is added.
  - The simulation ends when no active or untouched dirty stacks remain.


<br>

## Logic Highlights

- **Stack management**:
  - Mimics a LIFO (Last In, First Out) system by using `pop()` to remove dishes.
- **Randomness**:
  - The use of `Math.random()` makes the simulation unpredictable in both timing and stack size.
- **DOM synchronization**:
  - Each visual change in the interface reflects a real change in the data structures.



<br>

## Example Output (in the DOM)

Before simulation starts:
```
Stack A: dirtyDishA1, dirtyDishA2, ..., dirtyDishA18
Stack B: dirtyDishB1, ..., dirtyDishB23
Stack C: dirtyDishC1, ..., dirtyDishC11
Clean Stack: (empty)
```

During simulation (live updates every few seconds):
```
Stack A: dirtyDishA1, ..., dirtyDishA10
Stack B: dirtyDishB1, ..., dirtyDishB14
Stack C: untouched (until added)
Clean Stack: cleanDishA18, cleanDishB23, ...
```

After simulation:
```
Stack A: empty
Stack B: empty
Stack C: empty
Clean Stack: cleanDishA1 → cleanDishA18, cleanDishB1 → cleanDishB23, cleanDishC1 → cleanDishC11
```

<br>

## Notes

- All DOM elements (sections, divs, ul, li, span) are assumed to be pre-existing in the HTML file.
- The simulation relies on time intervals and dynamic element selection; errors may occur if the DOM structure differs from the expected one.