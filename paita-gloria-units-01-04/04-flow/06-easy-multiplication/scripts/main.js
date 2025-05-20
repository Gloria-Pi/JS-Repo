/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of:
 * - a for loop that multiplies numbers from 0 to 10 by 9
 * - a nested for loop that generates the full multiplication tables from 1 to 10.
 */

// Declaring the variable to be used in both assignments
let multiplication;

//This for loop iterates from 0 to 10, multiplying each number by 9 and logging the result.
for (i = 0; i < 11 ; i++) {
    
    multiplication = i * 9;
    console.log(`${i} * 9 = ${multiplication}`);
 
}

/*Output:
"0 * 9 = 0"
"1 * 9 = 9"
"2 * 9 = 18"
(...)
"10 * 9 = 90"
*/



//This nested for loop generates multiplication tables from 1 to 10.

//The outer loop iterates from 1 to 10
for (i = 1; i < 11; i++) {

    //Logs an introduction to the current iteration to the console
    console.log(`This is the ${i} times table`);

    //The inner loop calculates and logs each multiplication result.
    for (j = 1; j < 11; j++) {

        multiplication = i * j;
        console.log(`${i} * ${j} = ${multiplication}`);
    }
}

/*OUTPUT
Expected output:
"This is the 1 times table"
"1 * 1 = 1"
"1 * 2 = 2"
(...)
"This is the 10 times table"
"10 * 10 = 100
*/