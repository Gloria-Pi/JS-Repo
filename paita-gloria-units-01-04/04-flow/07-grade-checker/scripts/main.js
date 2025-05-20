/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the assignGrade() function,
 * along with a for loop that tests the function by checking grades for values from 60 to 100.
 */

/**
 * @function assignGrade
 * @description This function takes a number score (e.g. "18") as a parameter and returns the corresponding grade ("A", "B", "C", "D", or "F").
 * If the score parameter is missing, or is not a number between 0 and 100, the function returns an error message.
 * This function also includes a type check for score, to handle cases where the argument is not a number but another data type.
 * 
 * @param {number} score - A numeric score (must be between 0 and 100).  
 * @returns {string} The grade corresponding to that score ("A", "B", "C", "D", or "F"), or an error message if the score is invalid.
 * 
 * @example
 * console.log(assignGrade(99));
 * // Logs: "A"
 * 
 * @example
 * console.log(assignGrade());
 * // Logs: "Error! A score must be a number between 0 and 100."
 * 
 * @example
 * console.log(assignGrade(69));
 * // Logs: "D"
 */

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


//This for loop tests the assignGrade() function by iterating through values from 60 to 100.
//At each iteration, it logs the score and the corresponding grade to the console.

for (i = 60; i < 101; i++) {
    console.log(`For ${i}, you got ${assignGrade(i)}`);
}

/*
OUTPUT:
For 60, you got a D.
For 61, you got a D.
For 62, you got a D.
(...)
For 100, you got an A.
*/

