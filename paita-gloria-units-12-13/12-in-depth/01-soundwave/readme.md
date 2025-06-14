# 01 Soundwave

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Given the following array:

```js
let noisesArray = ['quack', 'sneeze', 'boom'];
```

Produce the following array, then print it to the console

```bash
['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']
```


<br>
<br>

# Approach to Solution

## Step 0: Understanding the pattern

* Each noise should be printed once for each letter it has.
* In each variation:

  * One letter is capitalized.
  * A growing number of exclamation marks (`!`) is added.


## Step 1: Initial attempt with `.map()`

At first, I tried using `.map()` like this:

```js
let noisesArrayTransformed = noisesArray.map(noise => {
    let transformedNoises = [];

    for (let letterToCapitalize = 0; letterToCapitalize <= noise.length - 1; letterToCapitalize++) {
        let capitalizedLetter = noise[letterToCapitalize].toUpperCase();

        let capitalizedWord =
            noise.slice(0, letterToCapitalize) +
            capitalizedLetter +
            noise.slice(letterToCapitalize + 1);

        let capitalizedNoise = capitalizedWord + "!".repeat(letterToCapitalize + 1);
        transformedNoises.push(capitalizedNoise);
    }

    return transformedNoises;
});
```

**Problem:**
This version returned a nested array with 3 inner arrays (one for each word), like this:

```js
[
  ['Quack!', 'qUack!!', 'quAck!!!', 'quaCk!!!!', 'quacK!!!!!'],
  ['Sneeze!', 'sNeeze!!', 'snEeze!!!', 'sneEze!!!!', 'sneeZe!!!!!', 'sneezE!!!!!!'],
  ['Boom!', 'bOom!!', 'boOm!!!', 'booM!!!!']
]
```

But the assignment required **one flat array**. So `.map()` wasn’t suitable unless I flattened the result afterwards. Instead, I decided to use `.forEach()` and push all the results into a single array.


## Step 2: Looping with `.forEach()`

* I looped through each noise with `.forEach()`.
* Inside the loop, I used a `for` loop to handle capitalization and punctuation.


## Step 3: Constructing each transformed word

* Use `slice()` to split the word before and after the letter to be capitalized.
* Reconstruct the word with that letter capitalized.
* Append `"!".repeat(index + 1)` to match the correct number of exclamation marks.

## Step 4: Saving the result

* Each new variation is pushed into `transformedNoises`.

## Step 5: Printing the result

* Used `console.log()` to print the final array.

<br>

## Code Output

```js
[
  'Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!',
  'Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!','sneeZe!!!!!','sneezE!!!!!!',
  'Boom!','bOom!!','boOm!!!','booM!!!!'
]
```

<br>


# Notes

* `slice()` was used to avoid mutating the original string.
* Capitalization is achieved by replacing one letter at a time using `toUpperCase()`.
* The number of iterations for each noise depends on its length.
* `.forEach()` was chosen over `.map()` to directly collect results in one flat array.