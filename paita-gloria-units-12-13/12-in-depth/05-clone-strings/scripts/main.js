/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Implements a function that performs a selective deep clone of an object,
 * preserving only the properties whose values are strings.
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
 * Recursively clones only the string properties of an object or array.
 * Nested objects are included only if they contain at least one string property.
 *
 * @param {*} thingToClone - The input to be selectively cloned.
 * @returns {Object|Array|undefined} A new object/array containing only string values; returns undefined for non-object inputs or Date instances.
 */
function cloneStrings(thingToClone) {
    // Skip non-object or null input
    if (thingToClone === null || typeof thingToClone !== "object") {
        return undefined;
    }

    // Exclude Date objects
    if (thingToClone instanceof Date) {
        return undefined;
    }

    // Create a new object or array
    const clonedObjectOrArray = Array.isArray(thingToClone) ? [] : {};

    // Recursively inspect each property
    Object.entries(thingToClone).forEach(entry => {
        const [key, value] = entry;
        if (typeof value === "string") {
            clonedObjectOrArray[key] = value;

            // Only add the nested object if it contains at least one string property.
            // This avoids adding empty objects to the result.
        } else if (typeof value === "object" && value !== null) {
            const nested = cloneStrings(value);

            if (nested && Object.keys(nested).length > 0) {
                // Add only if nested object has at least one string key
                clonedObjectOrArray[key] = nested;
            }
        }
    });

    return clonedObjectOrArray;

}

/**
 * Output of cloneStrings(), preserving only the string values from originalObject.
 */
const clonedObject = cloneStrings(originalObject);

console.log(clonedObject);