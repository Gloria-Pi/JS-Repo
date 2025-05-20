/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of a for loop that will iterate from 0 to 20.
 * At each iteration, it'll check if the current number is odd or even and log that to the console.
*/

for (let i = 0; i < 21; i++) {

    //Declaring a local variable
    let oddOrEven;

    //If i is 0 or divisible by two, it assigns the string "even" to the variable
    if (i == 0 || i % 2 == 0) {
        oddOrEven = "even";
    } else {
        oddOrEven = "odd";          //else, it assigns the string "odd" to the variable
    }
    
    console.log(`${i} is an ${oddOrEven} number.`);
}