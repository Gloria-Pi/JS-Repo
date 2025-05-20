/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the assignGrade() function.
 */

/**
 * @function assignGrade
 * @description This function takes a number score (e.g. "18") as a parameter and returns the corresponding grade ("A", "B", "C", "D", or "F").
 * 
 * If the score parameter is missing, or is not a number between 0 and 100, the function returns an error message.
 * 
 * This function also includes a type check for score, to handle cases where the argument is not a number but another data type.
 * 
 * @param {number} score - A numeric score (must be between 0 and 100).  
 * @returns {string} The grade corresponding to that score ("A", "B", "C", "D", or "F"), or an error message if the score is invalid.
 * 
 * @example
 * console.log(assignGrade(99));
 * 
 * // Logs: "A"
 * 
 * @example
 * console.log(assignGrade());
 * 
 * // Logs: "Error! A score must be a number between 0 and 100."
 * 
 * @example
 * console.log(assignGrade(69));
 * 
 * // Logs: "D"
 * 
 */


function assignGrade(score) {

    let grade;

    // Checks if score is a valid number between 0 and 100
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

    // If the score isn't a valid number between 0 and 100, assigns the grade variable a string
    } else {
        grade = "Error! A score must be a number between 0 and 100.";
    }

    return grade;

}


//Test Cases
console.log(assignGrade(99));            // "A"
console.log(assignGrade(89));            // "B"
console.log(assignGrade(79));            // "C"
console.log(assignGrade(69));            // "D"
console.log(assignGrade(29));            // "F"

console.log(assignGrade());
// "Error! A score must be a number between 0 and 100."

console.log(assignGrade(-91));
// "Error! A score must be a number between 0 and 100."

console.log(assignGrade("11"));
// "Error! A score must be a number between 0 and 100."