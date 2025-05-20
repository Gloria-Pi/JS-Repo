# 01 Tell My Fortune


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>


# Assignment

- Store the following into variables: number of children, partner's name, geographic location, job title.
- Output your fortune to the console like so: "You will be a X in Y, and married to Z with N kids."


<p>&nbsp;</p>

# Approach to Solution

## 1. Initializing the variables
I've decided to assign to numberOfChildren a number instead of a string, in order to see how it would behave when concatenated.

**Required Variables:**
- let numberOfChildren = 0;
- let partnersName = "Gianluigino";
- let geographicLocation = "Wondertown";
- let jobTitle = "Dog Trainer";

**Bonus Variable**
```javascript
let tellMyFortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
```

<p>&nbsp;</p>

## 2. Using the console.log() method to display the message
To test how JavaScript concatenates strings and variables, I experimented with different inputs inside console.log().

### 1. Using commas and the operator + in order to compose the sentence (0 remains a number)

```javascript
console.log("You will be a", jobTitle, "in", geographicLocation + ",", "and married to", partnersName, "with", numberOfChildren, "kids.");
```

**OUTPUT:**

You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.

0 is a number.

---
<p>&nbsp;</p>

### 2. Using commas and the operator + in order to compose the sentence (0 gets converted into a string)

```javascript
console.log("You will be a", jobTitle, "in", geographicLocation + ",", "and married to", partnersName, "with " + numberOfChildren, "kids.");
```

**OUTPUT:**

You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.

0 is a string.

---
<p>&nbsp;</p>

### 3. Using the operator + in order to compose the sentence
```javascript
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", " + "and married to " + partnersName + " with " + numberOfChildren + " kids.");
```

**OUTPUT:**

You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.

0 is a string.

---
<p>&nbsp;</p>

### 4. Using backticks and the variables I've initialized in order to format the sentence
```javascript
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);
```

**OUTPUT:**

You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.

0 is a string.

---
<p>&nbsp;</p>

### 5. Using another variable in order to display the message contained within it
```javascript
console.log(tellMyFortune);
```

**OUTPUT:**

You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.

0 is a string.

<p>&nbsp;</p>


## Why Does `numberOfChildren` Become a String in the Second Console Log?

In JavaScript, the `+` operator behaves differently depending on the types of values it operates on:

- When used with two numbers, it performs addition.
- When used with at least one string, it performs **string concatenation**.


<p>&nbsp;</p>


## BONUS Consideration: something I noticed while using Live Server
- When trying out the index.html file using the Live Server extention on Chrome, Edge, Firefox and Opera, the following console error appears:

    **FIREFOX**: `GET http://127.0.0.1:5500/favicon.ico` ---> `HTTP/1.1 404 Not Found`

    **EDGE/OPERA/CHROME**: `Failed to load resource: the server responded with a status of 404 (Not Found)` --> `:5500/favicon.ico:1`

    Which makes sense, considering I haven't set up a favicon for this file.

<p>&nbsp;</p>


- Since I'm using Live Server, another message that appears on the console is

    `Live reload enabled.` --> `index.html:54` (Opera, Chrome) 

    `Live reload enabled.` --> `index.html:54:13` (Firefox)
