/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script loads data from a factory JSONBlob and multiple car JSONBlobs, processes the responses in parallel,
 * and displays the content inside the DOM. It handles loading states, errors, and renders structured HTML lists
 * for both the factory and car objects.
 */

/**
 * Displays the `factoryObject` as a nested unordered list inside the element with ID "factory".
 * Handles different data types: null, arrays, objects, and primitive values.
 *
 * @function displayFactory
 * @returns {void}
 */
function displayFactory() {

    const factoryUl = document.createElement("ul");

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

    const factoryDiv = document.getElementById("factory");
    factoryDiv.append(factoryUl);
}

/**
 * Displays each car from the `carsArray` as a nested unordered list inside the element with ID "cars".
 * Each car's properties are listed, with nested objects rendered as sub-lists.
 *
 * @function displayCars
 * @returns {void}
 */
function displayCars() {

    carsArray.forEach(car => {

        const singleCarUl = document.createElement("ul");

        for (const key in car) {
            const li = document.createElement("li");
            const value = car[key];

            const keyP = document.createElement("p");
            keyP.textContent = key + ":";
            keyP.classList.add("key");

            const valueP = document.createElement("p");
            valueP.classList.add("value");

            // Handle different types of values
            if (value === null) {
                valueP.textContent = "null";
                li.appendChild(keyP);

            } else if (Array.isArray(value)) {
                valueP.textContent = value.join(", ");
                li.appendChild(keyP);

            } else if (typeof value === "object") {

                // Create a nested <ul> for object properties
                const subUl = document.createElement("ul");
                li.appendChild(keyP);

                // Iterate over the properties of the nested object
                for (const subKey in value) {
                    const subLi = document.createElement("li");
                    const subKeyP = document.createElement("p");
                    subKeyP.textContent = subKey + ":";
                    subKeyP.classList.add("key");

                    const subValueP = document.createElement("p");
                    subValueP.textContent = value[subKey];
                    subValueP.classList.add("value");

                    subLi.appendChild(subKeyP);
                    subLi.appendChild(subValueP);
                    subUl.appendChild(subLi);
                }

                li.appendChild(subUl); // Append sublist to the parent <li>

            } else {
                valueP.textContent = value;
                li.appendChild(keyP);
            }

            li.appendChild(valueP);
            singleCarUl.appendChild(li);
        }

        // Append the car's <ul> to the DOM in the "cars-list" div
        const carsList = document.getElementById("cars-list");
        carsList.appendChild(singleCarUl);

        // Sets the class "title" to the first <li>
        const carTitle = singleCarUl.querySelector("li:first-child");
        carTitle.classList.add("title");

        // Sets the class content to the rest of the <li>s
        const carContent = Array.from(singleCarUl.children).slice(1);
        carContent.forEach(infoPiece => {
            infoPiece.classList.add("content");
        });

        // Store the car title in the car object for future updates
        car.title = carTitle;

        // Store the detail <li>s in the car object for future reference
        car.details = carContent;

    });
}

//ERRORS & MESSAGES -------------------------------------------------------------------------

/**
 * Displays an error message in the DOM for a limited time (8 seconds).
 *
 * @function showError
 * @param {string} message - The error message to display.
 * @returns {void}
 *
 * @example
 * showError("Unable to load data.");
 */
function showError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.classList.add("showDiv");

    // Hide it after a few seconds
    setTimeout(() => {
        errorDiv.classList.remove("showDiv");
        errorDiv.textContent = "";
    }, 8000);
}

/**
 * Displays a loading message in the DOM until it is manually hidden.
 *
 * @function loadingMsg
 * @param {string} message - The loading message to display.
 * @returns {void}
 *
 * @example
 * loadingMsg("Loading data, please wait...");
 */
function loadingMsg(message) {
    const loadingDiv = document.getElementById("loading-message");
    console.log(message);

    loadingDiv.textContent = message;
    loadingDiv.classList.add("showDiv");
}

/**
 * Hides the loading message and clears its content.
 *
 * @function hideLoadingMsg
 * @returns {void}
 */
function hideLoadingMsg() {
    const loadingDiv = document.getElementById("loading-message");
    console.log("All the data has been loaded!");
    loadingDiv.classList.remove("showDiv");
    loadingDiv.textContent = "";
}

//GET --------------------------------------------------------------------------

// Instantiate a new request for the factory
const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1372889222368911360";
let factoryObject;

/**
 * Sends a GET request to the factory endpoint, parses the JSON response,
 * assigns it to `factoryObject`, and displays it in the DOM.
 * If parsing fails, an error message is shown.
 *
 * @function getFactoryRequest
 * @returns {void}
 *
 * @example
 * getFactoryRequest(); // Starts the data loading and rendering process
 */
function getFactoryRequest() {

    loadingMsg("Loading data, please wait...");

    const factoryRequest = new XMLHttpRequest();

    factoryRequest.addEventListener("load", function () {
        // Parse the JSON string into a JavaScript object
        try {
            factoryObject = JSON.parse(factoryRequest.responseText);
        } catch (e) {
            showError("Data parsing error on factoryObject: invalid JSON structure.");
            return;
        }
        displayFactory();
        carsGetRequest(); // Starts loading cars after factory is ready
    });
    factoryRequest.open("GET", factoryEndpoint);
    factoryRequest.send();
}

window.onload = function () {
    getFactoryRequest();
};

// Instantiate a new request for the cars
let carsArray = [];

const car01Endpoint = "https://jsonblob.com/api/jsonBlob/1374118226572795904";
const car02Endpoint = "https://jsonblob.com/api/jsonBlob/1374118447876857856";
const car03Endpoint = "https://jsonblob.com/api/jsonBlob/1374118559613116416";
const car04Endpoint = "https://jsonblob.com/api/jsonBlob/1374118653330644992";
const car05Endpoint = "https://jsonblob.com/api/jsonBlob/1374118770653716480";

const carsEndpoints = [car01Endpoint, car02Endpoint, car03Endpoint, car04Endpoint, car05Endpoint];

/**
 * Sends parallel GET requests to all car endpoints in `carsEndpoints`,
 * stores the parsed results into `carsArray`, and displays them in the DOM.
 * Handles both network and JSON parsing errors individually for each car.
 * Hides the loading message once all requests are successfully processed.
 *
 * @function carsGetRequest
 * @returns {void}
 *
 * @example
 * carsGetRequest(); // Called after factory data has been successfully loaded
 */
function carsGetRequest() {
    let loadedCars = 0;

    carsEndpoints.forEach((carEndpoint, index) => {
        const singleCarRequest = new XMLHttpRequest();

        singleCarRequest.addEventListener("load", function () {
            try {
                const carData = JSON.parse(singleCarRequest.responseText);
                carsArray[index] = carData;
            } catch (e) {
                console.error(`Failed to parse car at index ${index}:`, singleCarRequest.responseText);

                showError("Data parsing error on carData: invalid JSON structure.");
                return;
            }

            loadedCars++;

            // When all requests are done
            if (loadedCars === carsEndpoints.length) {
                displayCars();
                hideLoadingMsg();
            }

        });

        singleCarRequest.addEventListener("error", function () {
            showError("Network error while loading car data.");
        });

        singleCarRequest.open("GET", carEndpoint);
        singleCarRequest.send();
    });
}