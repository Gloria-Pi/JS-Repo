# 03 Grade Master


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a function named `assignGrade` that:
- takes 1 parameter, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".

Call that function for a few different scores and log the result to make sure it
works.

<p>&nbsp;</p>


# Approach to Solution

## 1. Writing the `assignGrade` function

The `assignGrade` function takes a numeric score (between 0 and 100) as a parameter and returns a corresponding grade. The grades are assigned based on the following scale:

- "A" for scores 90 and above
- "B" for scores between 80 and 89
- "C" for scores between 70 and 79
- "D" for scores between 60 and 69
- "F" for scores below 60

The function also checks if the score is valid, ensuring it is a number between 0 and 100. If the score is invalid, the function returns an error message.

```javascript
function assignGrade(score) {

    let grade;

    // Check if score is a valid number between 0 and 100
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

<p>&nbsp;</p>

## 2. Handling Invalid Input

If the `score` parameter is missing, or if it is not a valid number between 0 and 100, the function returns the following error message:

```javascript
"Error! A score must be a number between 0 and 100."
```


<p>&nbsp;</p>

## 3. Testing the Function


```javascript
console.log(assignGrade(99));            // Logs: "A"
console.log(assignGrade(89));            // Logs: "B"
console.log(assignGrade(79));            // Logs: "C"
console.log(assignGrade(69));            // Logs: "D"
console.log(assignGrade(29));            // Logs: "F"

console.log(assignGrade());
// Logs: "Error! A score must be a number between 0 and 100."

console.log(assignGrade(-91));
// Logs: "Error! A score must be a number between 0 and 100."

console.log(assignGrade("11"));
// Logs: "Error! A score must be a number between 0 and 100."
```
<p>&nbsp;</p>

The function has been tested with a variety of inputs to ensure it works correctly:

- **Valid Inputs:**
  - Scores like `99`, `89`, `79`, `69`, and `29` return the corresponding grades as expected.

- **Invalid Inputs:**
  - Missing values, non-numeric strings, and invalid numbers return the error message.

<p>&nbsp;</p>


## 4. Type Checking

If the type check had not been implemented in the `assignGrade` function, the function would have treated a non-numeric input (e.g. a string such as "11") as a valid score.

Example:

```javascript
console.log(assignGrade("11"));
// Would return "F" without the type check
```

Without the type check, JavaScript would attempt to compare the string `"11"` with numeric values, which can lead to unexpected results. Specifically, `"11"` would be **coerced into a number** during the comparisons, and since it is a string, JavaScript may not treat it as a valid score.

By checking that the score is a valid number before processing it, we avoid this unintended behavior, ensuring the function behaves as expected.