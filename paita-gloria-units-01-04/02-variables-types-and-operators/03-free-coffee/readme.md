# 03 Free Coffee


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>


## Assignment

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store the amount of coffee you drink per day (as a number).
- Calculate how much coffee you would drink for the rest of your life.

- Output the result to the console like so: "You will need NN cups of coffee to last you until the ripe old age of X".


<p>&nbsp;</p>

## Approach to Solution

### 1. Initializing the variables


```javascript
let currentAge = 28;            // My age
let maxAge = 100;               // How long I think I'll live
let coffeeCupsPerDay = 1.5;     // How many cups of coffee I drink everyday

// How many cups of coffee I'll have drunk when I reach my last year of life  
let coffeeCupsUntilDeath = (maxAge - currentAge) * coffeeCupsPerDay;
```

<p>&nbsp;</p>

### 2. Using the console.log() method to display the message

```javascript
console.log(`You will need ${coffeeCupsUntilDeath} cups of coffee to last you until the ripe old age of ${maxAge}.`);
```

**OUTPUT:**

    You will need 108 cups of coffee to last you until the ripe old age of 100.
    