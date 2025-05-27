# 02 Babies

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Create an empty array of babies
- Each baby should have the following properties
    - "name" (a string)
    - "months" (age in months as number)
    - "noises" (an array of strings)
    - "favoriteFoods" (an array of strings)
- Add 4 different babies to the array using as many different ways as possible
- Iterate through the array printing key and value pairs e.g [name:”Lyla”]
- Now add an "outfit" property to each baby in the array
    - Outfit should describes at least 3 parts of their clothing using different properties, for
example, "shirt": "blue"
    - Print each baby again with their outfit in a nicely formatted object

<br>
<br>

# Approach to Solution

### Step 1: Creating baby objects
- Initialized an empty `babies` array and four babies with the required properties.
- Each baby has:
  - A `name`
  - An age in `months`
  - A `noises` array
  - A `favoriteFoods` array

### Step 2: Populating the array
- Used different methods to add the babies:
  - `unshift()` to add to the beginning
  - `push()` to add to the end
  - Direct index assignment (`babies[3] = baby4`) to place an item

### Step 3: Iterating through the array
- Used `forEach()` to iterate over each baby.
- Inside the loop, used a `for...in` loop to access each property.
- Printed in `[key: "value"]` format.

```bash
Chiko Jr. was manufactured with these characteristics:
[name: "Chiko Jr."]
[months: "9"]
[noises: "chi-chi!,chikorii!"]
[favoriteFoods: "apricorns,spinach mash,sweet berries"]
```

### Step 4: Adding outfits
- Created a separate `outfitArray` with 4 outfit objects.
- Each outfit has at least 3 clothing parts, using different keys (`hat`, `onesie`, `cravat`, etc.).
- Used `forEach()` again to assign each outfit to the corresponding baby using the index.

### Step 5: Final output formatting
- Re-printed all baby data.
- When printing `outfit`, used a nested `for...in` loop to list each part on its own line with indentation.

<br>

# Example Output

```bash
Chiko Jr. was manufactured with these characteristics:
- name: "Chiko Jr."
- months: "9"
- noises: "chi-chi!,chikorii!"
- favoriteFoods: "apricorns,spinach mash,sweet berries"
- outfit:
   - hat: bonnet
   - onesie: light green
   - booties: yellow
```