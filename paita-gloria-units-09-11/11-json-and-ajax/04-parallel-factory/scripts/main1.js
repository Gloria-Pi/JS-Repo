/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 */

// HELPERS FUNCTIONS - SETTING UP THE PAGE -----------------------------------------------------------------

/**
 * Creates a <button> inside a <li> element and appends it to a given container.
 *
 * @function createButtonInLi
 * @param {string} btnText - The label to display on the button.
 * @param {string} btnClass - The class to assign to the button.
 * @param {HTMLElement} btnWhereToAppend - The parent element to which the new <li> will be appended.
 */
function createButtonInLi(btnText, btnClass, btnWhereToAppend) {
    const btnLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newBtn.textContent = btnText;
    newBtn.setAttribute("class", btnClass);
    btnLi.appendChild(newBtn);
    btnWhereToAppend.appendChild(btnLi);
}

/**
 * Renders the factory object as a nested list in the UI.
 *
 * @function displayFactory
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
 * Renders the list of cars in the UI with collapsible sections and an edit button for each car.
 *
 * @function displayCars
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

        //Appends the edit button
        createButtonInLi("Edit", "edit-btn", singleCarUl);

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

/**
 * Gets a list of next sibling elements, up to a given maximum count.
 *
 * @function getNextSiblings
 * @param {HTMLElement} element - The reference element.
 * @param {number} count - The number of sibling elements to retrieve.
 * @returns {HTMLElement[]} An array of sibling elements.
 */
function getNextSiblings(element, count) {
    const result = [];
    let current = element.nextElementSibling;

    while (current && result.length < count) {
        result.push(current);
        current = current.nextElementSibling;
    }

    return result;
}


/**
 * Attaches input listeners to all editable car fields to update the local data model when changed.
 *
 * @function recordInputs
 */
function recordInputs() {
    const allEditableFields = document.getElementsByClassName("value");

    Array.from(allEditableFields).forEach(field => {
        field.addEventListener("input", () => {
            // Get the key from the previous sibling <p class="key">
            const key = field.previousElementSibling.textContent.replace(":", "").trim();
            const value = field.textContent.trim();

            // Finds the parent <ul> for the current car
            const carUl = field.closest("ul");

            // Finds its index within all car <ul>s
            const allCarUls = Array.from(document.getElementById("cars-list").children);
            const carIndex = allCarUls.indexOf(carUl);

            if (carIndex !== -1 && key) {
                updateJsonObjectValues(carIndex, key, value);
            }
        });
    });
}

/**
 * Toggles edit mode for all car fields and allows saving the modified data.
 * Adds or removes the "edit-mode" style and contentEditable attribute.
 *
 * @function toggleEditingMode
 */
function toggleEditingMode() {

    const allEditBtns = document.getElementsByClassName("edit-btn");
    let isEditing = false;

    Array.from(allEditBtns).forEach(button => {

        button.addEventListener("click", () => {

            if (isEditing) {
                saveAllChangesToBlob();
                isEditing = false;
            } else {
                isEditing = true;
            }

            // Update ALL buttons' text based on editing mode
            Array.from(allEditBtns).forEach(btn => {
                btn.textContent = isEditing ? "Save and Exit" : "Edit";
            });

            // For each car section, toggle its fields
            Array.from(allEditBtns).forEach(btn => {

                const carUl = button.closest("ul");

                const editableFields = carUl.querySelectorAll("p.value");
                editableFields.forEach(p => {
                    p.contentEditable = isEditing;

                    if (isEditing) {
                        p.classList.add("edit-mode");
                    } else {
                        p.classList.remove("edit-mode");
                    }
                });
            });
        });
    });
}

/**
 * Updates the local car object with a new value from the UI.
 * Also updates the carId in the factory object if it is changed.
 *
 * @function updateJsonObjectValues
 * @param {number} carIndex - The index of the car in the carsArray.
 * @param {string} key - The property name to update.
 * @param {string} value - The new value to assign.
 */
function updateJsonObjectValues(carIndex, key, value) {
    const car = carsArray[carIndex];
    if (!car) return;

    if (key === "carId") {
        const oldCardId = car[key];
        car[key] = value;

        // Update in factoryObject.carIds if present
        if (Array.isArray(factoryObject.carIds)) {
            const targetIndex = factoryObject.carIds.indexOf(oldCardId);
            if (targetIndex !== -1) {
                factoryObject.carIds[targetIndex] = value;
                console.log(`Updated factory carIds at index ${targetIndex} to ${value}`);
            } else {
                console.warn("Old cardId not found in factoryObject.carIds array.");
            }
        }

    } else if (key in car) {
        car[key] = value;

    } else {
        // check nested objects
        for (const nestedKey in car) {
            if (
                typeof car[nestedKey] === "object" &&
                car[nestedKey] !== null &&
                key in car[nestedKey]
            ) {
                car[nestedKey][key] = value;
            }
        }
    }
}

/**
 * Creates a deep copy of the cars array, removing temporary properties used for rendering.
 *
 * @function cleanCarArrayCopy
 * @param {Object[]} anArray - The array of car objects.
 * @returns {Object[]} A clean copy of the cars array, ready to be sent to the blob.
 */
function cleanCarArrayCopy(anArray) {
    const copyOfTheArray = JSON.parse(JSON.stringify(anArray));
    copyOfTheArray.forEach(car => {
        delete car.details;
        delete car.title;
    });

    return copyOfTheArray;
}

/**
 * Creates a deep copy of the factory object.
 *
 * @function cleanFactoryCopy
 * @param {Object} factoryObj - The factory object to copy.
 * @returns {Object} A clean copy of the factory object.
 */
function cleanFactoryCopy(factoryObj) {
    return JSON.parse(JSON.stringify(factoryObj));
}

//ERRORS -------------------------------------------------------------------------

/**
 * Displays an error message in the UI for a limited time.
 *
 * @function showError
 * @param {string} message - The error message to display.
 */
function showError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";

    // Hide it after a few seconds
    setTimeout(() => {
        errorDiv.style.display = "none";
        errorDiv.textContent = "";
    }, 8000);
}

//GET --------------------------------------------------------------------------

// Instantiate a new request for the factory
const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1372889222368911360";
let factoryObject;

/**
 * Fetches factory data from the JSONBlob endpoint and renders it in the DOM.
 * Displays an error message if the request fails or returns invalid JSON.
 *
 * @function getFactoryRequest
 */
function getFactoryRequest() {
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

getFactoryRequest();


// Instantiate a new request for the cars
let carsArray = [];

const car01Endpoint = "http://jsonblob.com/api/jsonBlob/1374118226572795904";
const car02Endpoint = "http://jsonblob.com/api/jsonBlob/1374118447876857856";
const car03Endpoint = "https://jsonblob.com/api/jsonBlob/1374118559613116416";
const car04Endpoint = "https://jsonblob.com/api/jsonBlob/1374118653330644992";
const car05Endpoint = "https://jsonblob.com/api/jsonBlob/1374118770653716480";

const carsEndpoints = [car01Endpoint, car02Endpoint, car03Endpoint, car04Endpoint, car05Endpoint];


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
                recordInputs();
                toggleEditingMode();
            }
        });

        singleCarRequest.addEventListener("error", function () {
            showError("Network error while loading car data.");
        });

        singleCarRequest.open("GET", carEndpoint);
        singleCarRequest.send();
    });
}


/**
 * Re-fetches and re-renders the car lists from the blobs.
 * Intended to be called after a save operation completes.
 *
 * @function fetchAndDisplayCars
 */
function fetchAndDisplayCars() {
    // Clear old list
    const carsList = document.getElementById("cars-list");
    carsList.innerHTML = "";

    // Reset and re-fetch all cars
    carsArray = [];
    carsGetRequest(); // This now includes display, inputs, edit mode
}

//POST --------------------------------------------------------------------

/**
 * Saves both car and factory data to their respective blobs by calling the individual save functions.
 *
 * @function saveAllChangesToBlob
 */
function saveAllChangesToBlob() {

    saveCarsChangesToBlob();
    saveFactoryChangesToBlob();

}

/**
 * Sends updated car data to the cars blobs using a PUT request.
 * Handles success and failure scenarios with feedback to the user.
 *
 * @function saveCarsChangesToBlob
 */
function saveCarsChangesToBlob() {
    const cleanCars = cleanCarArrayCopy(carsArray);

    cleanCars.forEach((carData, index) => {
        const request = new XMLHttpRequest();

        request.open("PUT", carsEndpoints[index]);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.onload = () => {
            if (request.status !== 200 && request.status !== 201) {
                console.error(`Car ${index + 1} save failed:`, request.statusText);
                showError(`Car ${index + 1} save failed: ${request.statusText}`);
            }
        };

        request.onerror = () => {
            console.error(`Network error while saving car ${index + 1}`);
            showError(`Network error while saving car ${index + 1}`);
        };

        request.send(JSON.stringify(carData));
    });

    // Optionally refresh the UI after all saves (with slight delay)
    setTimeout(fetchAndDisplayCars, 1000);
}


/**
 * Sends updated factory data to the factory blob using a PUT request.
 * Handles success and failure scenarios with feedback to the user.
 *
 * @function saveFactoryChangesToBlob
 */
function saveFactoryChangesToBlob() {
    const factoryPostRequest = new XMLHttpRequest();
    factoryPostRequest.open("PUT", factoryEndpoint);
    factoryPostRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    factoryPostRequest.onload = () => {
        if (factoryPostRequest.status === 200 || factoryPostRequest.status === 201) {
            console.log("Factory data saved successfully.");
            fetchAndDisplayFactory();
        } else {
            console.error("Factory save failed:", factoryPostRequest.statusText);
            showError(`Factory save failed: ${factoryPostRequest.statusText}`);
        }
    };

    factoryPostRequest.onerror = () => {
        console.error("Network error while saving factory.");
        showError("Network error while saving factory.");
    };

    const cleanFactory = JSON.stringify(cleanFactoryCopy(factoryObject));
    factoryPostRequest.send(cleanFactory);
}