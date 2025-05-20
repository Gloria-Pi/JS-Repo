# 07 Grade Checker


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a loop that tests the function that you wrote earlier “assignGrade”.
- Check every value from 60 to 100:
    - your log should show
        - “For 88, you got a B.”
        - “For 89, you got a B.”
        - “For 90, you got an A.”
        - etc.


<p>&nbsp;</p>

# Approach to Solution

## 1. Implementing the assignGrade() function
The `assignGrade()` function takes a numeric score as input and returns the corresponding grade based on predefined thresholds.

```javascript
function assignGrade(score) {
    let grade;

    if (typeof score === "number" && score >= 0 && score <= 100) {
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80 && score < 90) {
            grade = "B";
        } else if (score >= 70 && score < 80) {
            grade = "C";
        } else if (score >= 60 && score < 70) {
            grade = "D";
        } else {
            grade = "F";
        }
    } else {
        grade = "Error! A score must be a number between 0 and 100.";
    }
    return grade;
}
```

If you wish to know more about the `assignGrade` function, please refer to the [README.md](../03-grade-master/README.md) file within the `03-grade-master` folder.



<p>&nbsp;</p>

## 2. Creating the for loop to test assignGrade
This **for loop** iterates from **60 to 100**, invoking `assignGrade()` at each step and logging the output in the format `"For [score], you got [grade]"`.

```javascript
for (let i = 60; i < 101; i++) {
    console.log(`For ${i}, you got ${assignGrade(i)}`);
}
```

**OUTPUT:**
```javascript
For 60, you got D
For 61, you got D
For 62, you got D
...
For 89, you got B
For 90, you got A
For 91, you got A
...
For 100, you got A
```
