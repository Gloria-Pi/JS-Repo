# 03 Baby Processing - All Babies at Once Version

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Using the babies array from the previous exercise:  
- Write a getBabyOutfit() function that returns a description a baby's outfit
    - e.g "Lyla is wearing a blue shirt and red pants and a green hat"
- Write a feedBaby() function that prints what a baby is eating.
    - e.g. "Lyla is eating food3, food1, food4 and food2"
    - All foods in favoriteFoods should appear but randomly each time the function is called
- Run both function on all the babies


<br>
<br>

# Approach to Solution

The goal of this script was to simulate a small world of fictional baby Pokémon characters by:

* Describing what each baby is wearing
* Randomizing what each baby is eating

To allow better **testing and debugging**, the core functions were written in a **separate script** before applying them globally to all babies.  See [solution-1](..\solution-1\readme.md) for more details.

<br>

## Writing the Functions in Isolation

Before applying any logic to the full list of babies, I created and tested the main functions separately:

* `getBabyOutfit(babyElement)`: Generates a readable sentence describing a baby's outfit
* `feedBaby(babyElement)`: Randomizes their favorite foods and logs what they're currently eating

💡 By testing them independently, I could focus on each function’s logic, edge cases, and sentence formatting without looping over the array right away.

<br>

## Baby Data Structure

The `babies` array includes multiple baby Pokémon objects.
Each object contains:

* `name`: The baby’s nickname
* `months`: Age in months
* `noises`: A list of baby-like sounds
* `favoriteFoods`: An array of 3 food items
* `outfit`: An object of clothing parts (e.g. `hat`, `onesie`, etc.)

This design keeps the baby info readable and easy to access through destructuring or `Object.entries()`.

<br>

## Randomizing Foods Without Mutation

To randomize a baby’s `favoriteFoods`:

* I wrote helper functions that shuffle **indexes**, not the original array:

  * `indexListArrayScrambler()`: Builds a scrambled list of unique indexes
  * `randomizeIndex()`: Ensures no duplicate indexes
  * `foodArrayRandomizer()`: Uses the shuffled index array to fill a new list

This avoids side effects on the original `favoriteFoods` list, keeping data pure and predictable.

<br>

## Formatting the Outfit Sentence

The `getBabyOutfit()` function:

* Uses `Object.entries()` to extract outfit parts
* Chooses whether to include an article (`a`) or not, based on whether the item is plural
* Ends the final sentence with a period, replacing the last `"and"` to improve readability

```js
Togechad is wearing a plush crown hat, a crimson cravat and white socks.
```

<br>

## Final Execution on All Babies

After confirming the functions worked in isolation, I used `.forEach()` to run both `getBabyOutfit()` and `feedBaby()` for **each baby** in the array:

```js
babies.forEach(baby => {
  getBabyOutfit(baby);
  feedBaby(baby);
});
```

This produces a complete snapshot for each baby: what they're wearing and what they're eating — in randomized order!

<br>

# Example Output

```bash
Chiko Jr. is wearing a bonnet hat, a light green onesie and yellow booties.

Chiko Jr. is eating sweet berries, apricorns, and spinach mash.

...

Togechad is wearing a plush crown hat, a crimson cravat and white socks.

Togechad is eating poké-puffs, milktank formula, and soft rice porridge.
```