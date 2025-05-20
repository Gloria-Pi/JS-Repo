/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains the implementation of the `cashRegister` function, which calculates
 * the total cost of items in a shopping cart object. Each key-value pair in the object
 * represents an item and its price in string format.
 */

/**
 * Calculates the total cost of all items in the given shopping cart object.
 *
 * @function cashRegister
 * @description Calculates the total cost of all items in the given shopping cart object.
 * @param {Object} shoppingCart - An object where keys are product names and values are prices in string format.
 * @returns {number} The total sum of all product prices in the cart.
 * @example
 * const personalCart = {
 *     nintendoSwitch: "299.99",
 *     cookies: "1.39",
 *     lettuce: "1.99",
 *     fancyShoes: "88.45",
 *     toiletPaper: "4.50",
 *     electricBoiler: "14.99" 
 * };
 *
 * console.log(cashRegister(personalCart)); // 411.31
 */
function cashRegister (shoppingCart) {

    // Variable holding the total price of the shopping cart
    let totalPrice = 0;

    // Looping through the shoppingCart object using for...in to access each key
    for (let product in shoppingCart) {
        
        // Adds the price to the total after converting it to a number using the unary plus "+"
        totalPrice += +shoppingCart[product];
    }

    return totalPrice;
}


/**
 * Example shopping cart with various product prices.
 */
const personalCart = {
    nintendoSwitch: "299.99",
    cookies: "1.39",
    lettuce: "1.99",
    fancyShoes: "88.45",
    toiletPaper: "4.50",
    electricBoiler: "14.99" 
};


// Testing
console.log(cashRegister(personalCart)); 
// 411.31