# 03 Baby Processing - Functions Applied to a Single Baby Version

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

<br>
<br>

# Approach to Solution

## 1. Defining the Data

The `babies` array contains four objects. Each object includes:

* `name`: a unique name for each baby
* `months`: age in months
* `noises`: characteristic baby sounds
* `favoriteFoods`: an array of strings
* `outfit`: an object with clothing items (keys) and colors/descriptions (values)

Each baby has a unique outfit structure (not all use the same keys), so the outfit-reading function needs to be flexible.

<br>

## 2. Creating the `getBabyOutfit()` Function

**Goal:**
Generate a sentence like `"Togechad is wearing a plush crown hat and a crimson cravat and white socks."`

### Key Points:

* The function takes a `babyNumber` (index in the `babies` array).
* The outfit is accessed via `Object.entries()` to get all keys and values.
* For each outfit item:

  * If the key ends with "s", article "a" is omitted (e.g., `yellow socks`)
  * Otherwise, prepend with `"a"` (e.g., `a crimson cravat`)
* The last item ends with a period, not `"and"`.

### Example Output:

```js
Togechad is wearing a plush crown hat and a crimson cravat and white socks.
```

<br>

## 3. Creating the `feedBaby()` Function

**Goal:**
Generate a sentence like `"Togechad is eating pecha berry purée, spicy mash, and warm milk."`
Every time the function is called, the foods should be in a **different random order**.

### Key Points:

* The function uses `foodArrayRandomizer()` to generate a randomized copy of the baby’s `favoriteFoods` without mutating the original array.
* The randomizer:

  * First creates a shuffled list of indexes (`indexListArrayScrambler`)
  * Then uses those to insert each food in a new array (`wannabeRandomizedFoodArray`)
* The output sentence:

  * Joins foods with commas
  * Prepends "and" to the final food
  * Ends with a period

### Example Output:

```js
Tota Tot is eating oranges, poke puffs, and seaweed pudding.
```

<br>

## 4. Brainstorming and Key Changes

### Step 1: Scrambling the Food Array

**Initial Idea:** Use `sort(() => Math.random() - 0.5)`
**Issue:** It's simple, but not truly random across all calls.

**Decision:**
Write a custom function using index tracking to avoid repeats.
Benefits:

* Avoids mutating the original array
* Makes the logic explicit and reusable

<br>

### Step 2: Handling Articles in Outfit Descriptions

**Initial Idea:** Add `"a"` before every item.
**Problem:** Some items are plural (e.g., `socks`, `mittens`), and using `"a"` sounds unnatural.

**Final Solution:**

* Check if the key ends with `"s"` to skip the article.
* This keeps the logic simple and grammatically correct in most cases.

<br>

### Step 3: Determining Sentence End

**Initial Attempt:** Hardcode the punctuation outside the loop.
**Problem:** Not all babies have the same number of outfit items, and `Object.entries()` returns varying lengths.

**Decision:**
Check for the **last entry** during each iteration and update the sentence accordingly.

<br>

### Step 4: Why not use `splice()` or `sort()`?

* `splice()` would remove elements from the original array.
* `sort()` with a random comparator isn’t reliable for shuffling.
* The current approach preserves data integrity and allows re-randomization each time.

<br>

## Example Output

```bash
--- WHAT ARE THE BABIES WEARING?

Chiko Jr. is wearing a bonnet hat and a light green onesie and yellow booties.
Cynda Cub is wearing an orange hood and flame-pattern mittens and brown pants.
Tota Tot is wearing a blue hat and a fang-shaped bib and a fluffy onesie.
Togechad is wearing a plush crown hat and a crimson cravat and white socks.

---- WHAT ARE THE BABIES EATING?

Chiko Jr. is eating sweet berries, apricorns, and spinach mash.
Cynda Cub is eating spicy mash, and pecha berry purée, warm milk.
Tota Tot is eating poke puffs, oranges, and seaweed pudding.
Togechad is eating poké-puffs, soft rice porridge, and milktank formula.
```

<br>

# Why a Separate File?

I chose to build and test the functions seperatedly:

* Easier to debug logic in the console
* Better control over output for sentence formatting and randomization

See [solution-2](..\solution-2\readme.md) for the full implementation.