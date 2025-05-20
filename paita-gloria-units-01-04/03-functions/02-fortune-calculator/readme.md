# 02 Fortune Calculator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>


# Assignment

1. Write a function named tellFortune that:
    - Takes 4 parameters: number of children, partner's name, geographic location, job title.
    - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."

2. Call that function 3 times with 3 different values for the arguments


<p>&nbsp;</p>

# Approach to Solution

## 1. Write the function
Out of curiosity, I've decided to create three tellFortune functions.

### 1. **A function that logs the fortune of a person to the console using a global variable called `fortune`, which stores the result of a console.log() function.**

The variable is declared outside of the function, and assigned a value from within the function.

The value of `fortune` is a `console.log()` function, containing the resulting, personalized message.

```javascript
    let fortune;
        
    function tellFortune(jobTitle, location, partner, numChildren) {
        fortune = console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`);
    } 
```

**OUTPUT:**

```javascript
    tellFortune("Dog Trainer", "Hawaii", "Brad Pitt", 1);

    // Logs: "You will be a Dog Trainer in Hawaii, and married to Brad Pitt with 1 kids."
```
    
**NOTE:**

The `fortune` variable is assigned the result of the `console.log()` function, which is `undefined`. This means that after calling `tellFortune()`, the value of `fortune` will be undefined, even though the message is logged to the console.

<p>&nbsp;</p>

### 2. **A function that logs the fortune of a person to the console using a global variable storing a string, called `fortune1`.**

The variable is declared outside of the function, and assigned a value from within the function.

The value of `fortune1` is a `string`, containing the resulting, personalized message.
    
```javascript
    let fortune1;
        
    function tellFortune1(jobTitle, location, partner, numChildren) {
        fortune1 = `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`;
        console.log(fortune1);
    }
```
**OUTPUT:**
```javascript
    tellFortune1("Cat Sitter", "NY", "Lara Croft", 3);
    
    // Logs: "You will be a Cat Sitter in NY, and married to Lara Croft with 3 kids."
```
**NOTE:**

At first the type of `fortune1` is `undefined`, because the variable was declared without an initial value.

After calling the function said variable will be assigned a value of `string` type.


<p>&nbsp;</p>

### 3. **A function that logs the fortune of a person to the console without using a variable.**

```javascript
    function tellFortuneWithoutVariables(jobTitle, location, partner, numChildren) {
        console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`);
    }
```
        
**OUTPUT:**

```javascript
    tellFortuneWithoutVariables("Pigeon Whisperer", "Moscow", "MysteryPerson", 0);

    // Logs: "You will be a Pigeon Whisperer in Moscow, and married to MysteryPerson with 0 kids."
```

<p>&nbsp;</p>

## 2. Picking The Best One
The second function `tellFortune1()` could be a better alternative to the other two because it keeps the fortune string stored in a variable and uses console.log() only to display it. This makes it more flexible (one could easily reuse or manipulate `fortune1` later in the program) and keeps the data of `fortune1` separated from the logging functionality.

<p>&nbsp;</p>

## 3. Calling the function three times with different arguments

```javascript
    tellFortune1("singer", "Italy", "Ilaria", 0);
    tellFortune1("knight", "Prussia", "Albert", 2);
    tellFortune1("professional table tennis player", "Japan", "Suzuki", 1);
```

**OUTPUT:**

```javascript
    //You will be a singer in Italy, and married to Ilaria with 0 kids.
    //You will be a knight in Prussia, and married to Albert with 2 kids.
    //You will be a professional table tennis player in Japan, and married to Suzuki with 1 kids.
```