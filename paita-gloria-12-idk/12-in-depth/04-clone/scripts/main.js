/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Defines a recursive deep cloning function called clone() that is capable of duplicating objects,
 * arrays, and Date instances. The script demonstrates that the cloned object is fully separated from
 * the original, and changes to the clone do not affect the source.
 * The script also includes tests to prove that:  
 * 
 * - Modifying nested objects in the clone does not mutate the original. 
 *  
 * - Special objects like Date are correctly cloned by value, not by reference.
 */

/**
 * Original object to be deeply cloned.
 * Contains nested structures, including a Date object.
 */
const originalObject = {
    name: "Green Mueller",
    email: "Rigoberto_Muller47@yahoo.com",
    address: "575 Aiden Forks",
    bio: "Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.",
    active: false,
    salary: 37993,
    birth: new Date("Sun Apr 18 1965 13: 38:00 GMT +0200(W.Europe Daylight Time)"),
    bankInformation:
    {
        amount: "802.04",
        date: new Date("Thu Feb 02 2012 00:00:00 GMT +0100(W.Europe Standard Time)"),
        business: "Bernhard, Kuhn and Stehr",
        name: "Investment Account 8624",
        type: "payment",
        account: "34889694"
    }
};

/**
 * Recursively clones objects, arrays, and Date instances.
 *
 * @param {*} thingToClone - The item to clone (can be primitive, object, array, or Date).
 * @returns {*} A deeply cloned copy of the input.
 */
function clone(thingToClone) {
    // Return primitives as-is
    if (thingToClone === null || typeof thingToClone !== "object") {
        return thingToClone;
    }

    // Clone Date objects by creating a new instance
    if (thingToClone instanceof Date) {
        return new Date(thingToClone);
    }

    // Create a new object or array
    const clonedObjectOrArray = Array.isArray(thingToClone) ? [] : {};

    // Recursively clone each key-value pair
    Object.entries(thingToClone).forEach(entry => {
        const [key, value] = entry;
        clonedObjectOrArray[key] = clone(value);
    });

    return clonedObjectOrArray;
}

/**
 * Cloned version of `originalObject`.
 * Used to verify that changes do not affect the source.
 */
const clonedObject = clone(originalObject);

console.log(clonedObject);

// Test 1: Change name in clone and verify original remains unchanged
clonedObject.name = "Pinco Panco";
console.log("The name in the cloned object (after changing it) is " + clonedObject.name);
console.log("The name in the original object is still " + originalObject.name);

// Test 2: Mutate the clone's nested property
console.log(`Is the "date" property in the cloned object a Date object? ${clonedObject["bankInformation"]["date"] instanceof Date}`);
clonedObject["bankInformation"]["date"] = "not a date anymore.";
console.log("After having changed the 'date' property in the cloned object, its value is " + clonedObject["bankInformation"]["date"]);
console.log("...while the 'date' property in the original object still reads: " + originalObject["bankInformation"]["date"]);