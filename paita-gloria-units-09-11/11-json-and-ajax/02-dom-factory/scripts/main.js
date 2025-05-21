/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script parses JSON data for cars and a factory,
 * dynamically generates styled HTML lists, and appends them to the DOM.
 */

/**
 * @constant {string} cars
 * @description A JSON string representing an array of car objects.
 */
const cars = `[
    {
        "carId": "car01",
        "make": "Pikachu Motors",
        "model": "Thunderbolt",
        "year": 2018,
        "price": 18000,
        "isElectric": true,
        "features": [
            "Bluetooth",
            "Remote Start",
            "Backup Camera",
            "Heated Seats"
        ],
        "insurance": {
            "company": "Kanto Insurance",
            "policyNumber": "KA234567890",
            "expiryDate": "2025-04-10",
            "isPaid": true
        },
        "previousOwners": null,
        "mileage": 0
    },
    {
        "carId": "car02",
        "make": "Bulbasaur Motors",
        "model": "VineWhip",
        "year": 2020,
        "price": 23000,
        "isElectric": false,
        "features": [
            "Apple CarPlay",
            "Navigation System",
            "Blind Spot Monitoring",
            "Heated Seats"
        ],
        "insurance": {
            "company": "Johto Insurance",
            "policyNumber": "JO0987654321",
            "expiryDate": "2026-02-01",
            "isPaid": false
        },
        "previousOwners": [
            "Emily Davis"
        ],
        "mileage": 30000
    },
    {
        "carId": "car03",
        "make": "Charizard Motors",
        "model": "Flare Blitz",
        "year": 2021,
        "price": 65000,
        "isElectric": false,
        "features": [
            "Leather Seats",
            "Panoramic Roof",
            "Adaptive Cruise Control",
            "Blind Spot Detection"
        ],
        "insurance": {
            "company": "Hoenn Insurance",
            "policyNumber": "HO1122334455",
            "expiryDate": "2025-12-20",
            "isPaid": true
        },
        "previousOwners": [
            "Sophia Martin"
        ],
        "mileage": 15000
    },
    {
        "carId": "car04",
        "make": "Squirtle Motors",
        "model": "Water Gun",
        "year": 2022,
        "price": 24000,
        "isElectric": false,
        "features": [
            "Heated Seats",
            "Lane Assist",
            "Bluetooth",
            "Remote Start"
        ],
        "insurance": {
            "company": "Sinnoh Insurance",
            "policyNumber": "SI567890123",
            "expiryDate": "2025-08-14",
            "isPaid": false
        },
        "previousOwners": null,
        "mileage": 0
    },
    {
        "carId": "car05",
        "make": "Eevee Motors",
        "model": "Evolution",
        "year": 2020,
        "price": 54000,
        "isElectric": false,
        "features": [
            "Navigation System",
            "Panoramic Sunroof",
            "Heated and Cooled Seats",
            "Apple CarPlay"
        ],
        "insurance": {
            "company": "Unova Insurance",
            "policyNumber": "UN9876543210",
            "expiryDate": "2025-07-30",
            "isPaid": true
        },
        "previousOwners": [
            "Daniel King"
        ],
        "mileage": 25000
    }
]`;

/**
 * @constant {string} factory
 * @description A JSON string representing the factory details.
 */
const factory = `{
    "name": "RocketFueled Car Lab",
    "location": "Spaceport City, Alola",
    "establishedYear": 2012,
    "isOperating": true,
    "totalEmployees": 1080,
    "annualRevenue": 48000000,
    "facilities": {
        "assemblyLine": "The HyperLoop",
        "paintShop": "ColorBlaster 5000",
        "qualityControl": "The TestZone"
    },
    "motto": "We don’t just make cars, we make history!",
    "carIds": [
        "car01",
        "car02",
        "car03",
        "car04",
        "car05"
    ]
}`;

/**
 * Parses the cars and factory JSON strings into JavaScript objects.
 * @constant {Object[]} carsObject - Array of car objects.
 * @constant {Object} factoryObject - Factory details object.
 */
const carsObject = JSON.parse(cars);
const factoryObject = JSON.parse(factory);

// Selects the <header> element in the DOM.
const headerNode = document.querySelector("header");

/**
 * Iterates over each car object, creates a nested HTML list for each car's properties,
 * and appends it to the DOM after the <header> element.
 * Handles nulls, arrays, and nested objects.
 */
carsObject.forEach(car => {
    const singleCarUl = document.createElement("ul");

    for (const key in car) {
        const li = document.createElement("li");
        const value = car[key];

        // Handle different types of values
        if (value === null) {
            li.textContent = `${key}: null`;
        } else if (Array.isArray(value)) {
            li.textContent = `${key}: ${value.join(", ")}`;
        } else if (typeof value === "object") {
            li.textContent = `${key}:`; // Add title only

            // Create a nested <ul> for object properties
            const subUl = document.createElement("ul");

            // Iterate over the properties of the nested object
            for (const subKey in value) {
                const subLi = document.createElement("li");
                subLi.textContent = `${subKey}: ${value[subKey]}`;
                subUl.appendChild(subLi);
            }

            li.appendChild(subUl); // Append sublist to the parent <li>

        } else {
            li.textContent = `${key}: ${value}`;

        }
        singleCarUl.appendChild(li);
    }

    // Append the car's <ul> to the DOM after the <header> element
    headerNode.insertAdjacentElement("afterend", singleCarUl);
});

const factoryUl = document.createElement("ul");
headerNode.insertAdjacentElement("afterend", factoryUl);

/**
 * Creates an HTML list for the factory object, including nested lists for object properties,
 * and appends it to the DOM after the <header> element.
 */
for (const key in factoryObject) {
    const li = document.createElement("li");
    let value = factoryObject[key];

    // Handle different types of values
    if (value === null) {
        li.textContent = `${key}: null`;
    } else if (Array.isArray(value)) {
        li.textContent = `${key}: ${value.join(", ")}`;
    } else if (typeof value === "object") {
        li.textContent = `${key}:`; // Add title only
        const subUl = document.createElement("ul");

        for (const subKey in value) {
            const subLi = document.createElement("li");
            subLi.textContent = `${subKey}: ${value[subKey]}`;
            subUl.appendChild(subLi);
        }
        li.appendChild(subUl); // Append sublist to the parent <li>

    } else {
        li.textContent = `${key}: ${value}`;
    }
    factoryUl.appendChild(li);
}

headerNode.insertAdjacentElement("afterend", factoryUl);