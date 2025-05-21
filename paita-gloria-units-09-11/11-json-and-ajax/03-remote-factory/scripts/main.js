/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script manages a car factory web application using data stored remotely on JSONBlob.
 * It supports displaying factory and car data, editing car information, saving updates via HTTP PUT requests,
 * handling user interaction through a dynamic UI, and reporting any errors that occur during data operations.
 */

// HELPERS FUNCTIONS - SETTING UP THE PAGE -----------------------------------------------------------------

/**
 * Creates a <button> inside a <li> element and appends it to a given container.
 *
 * @function createButtonInLi
 * @param {string} btnText - The label to display on the button.
 * @param {string} btnClass - The class to assign to the button.
 * @param {HTMLElement} btnWhereToAppend - The parent element to which the new <li> will be appended.
 * @returns {void}
 */
function createButtonInLi(btnText, btnClass, btnWhereToAppend) {
    const btnLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newBtn.textContent = btnText;
    newBtn.setAttribute("class", btnClass);
    newBtn.classList.add("accordion-content");
    btnLi.appendChild(newBtn);
    btnWhereToAppend.appendChild(btnLi);
}

/**
 * Renders the factory object as a nested list in the UI.
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
 * Renders the list of cars in the UI with collapsible sections and an edit button for each car.
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

        //Appends the edit button
        createButtonInLi("Edit", "edit-btn", singleCarUl);

        // Append the car's <ul> to the DOM in the "cars-list" div
        const carsList = document.getElementById("cars-list");
        carsList.appendChild(singleCarUl);

        // Sets the class "accordion-title" to the first <li>
        const carTitle = singleCarUl.querySelector("li:first-child");
        carTitle.classList.add("accordion-title");

        // Sets the class accordion-content to the rest of the <li>s
        const carContent = Array.from(singleCarUl.children).slice(1);
        carContent.forEach(infoPiece => {
            infoPiece.classList.add("accordion-content");
            infoPiece.style.display = "none"; // Initially hidden
        });

        // Store the car title in the car object for future updates
        car.title = carTitle;

        // Store the detail <li>s in the car object for future reference
        car.details = carContent;

        carTitle.addEventListener("click", () => toggleAccordion(car));
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
 * Toggles the visibility of a car's detail panel while closing any other open panels.
 *
 * @function toggleAccordion
 * @param {Object} car - The car object whose UI section is being toggled.
 * @returns {void}
 */
function toggleAccordion(car) {

    // Close all other open accordion titles
    const allTitles = document.querySelectorAll(".accordion-title");

    allTitles.forEach(title => {
        if (title !== car.title && title.classList.contains("active")) {
            title.classList.remove("active");

            const everyInfo = getNextSiblings(title, 10);

            everyInfo.forEach(infoPiece => {

                if (infoPiece && infoPiece.classList.contains("accordion-content")) {
                    infoPiece.style.display = "none";
                }

            })
        }
    });

    // Toggle the clicked title
    const carInfo = car.details;

    carInfo.forEach(info => {
        if (info.style.display === "none") {
            car.title.classList.add("active");
            info.style.display = "";
        } else {
            car.title.classList.remove("active");
            info.style.display = "none";
        }
    });
}

/**
 * Attaches input listeners to all editable car fields to update the local data model when changed.
 *
 * @function recordInputs
 * @returns {void}
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
 * @returns {void}
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
}


/**
 * Updates the local car object with a new value from the UI.
 * Also updates the carId in the factory object if it is changed.
 *
 * @function updateJsonObjectValues
 * @param {number} carIndex - The index of the car in the carsArray.
 * @param {string} key - The property name to update.
 * @param {string} value - The new value to assign.
 * @returns {void}
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

//ERRORS ------------------------------------------------------------------------------------------------------

/**
 * Displays an error message in the UI for a limited time.
 *
 * @function showError
 * @param {string} message - The error message to display.
 * @returns {void}
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

//GET ----------------------------------------------------------------------------------------------------------

// Instantiate a new request for the factory
const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1372889222368911360";
let factoryObject;

/**
 * Fetches factory data from the JSONBlob endpoint and renders it in the DOM.
 * Displays an error message if the request fails or returns invalid JSON.
 *
 * @function getFactoryRequest
 * @returns {void}
 */
function getFactoryRequest() {
    const factoryRequest = new XMLHttpRequest();

    factoryRequest.addEventListener("load", function () {
        // Parse the JSON string into a JavaScript object
        try {
            factoryObject = JSON.parse(factoryRequest.responseText);
        } catch (e) {
            showError("Data parsing error: invalid JSON structure.");
            return;
        }
        displayFactory();
    });
    factoryRequest.open("GET", factoryEndpoint);
    factoryRequest.send();
}

getFactoryRequest();

// Instantiate a new request for the cars
let carsArray;
const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1372887680802807808";

/**
 * Fetches car data from the JSONBlob endpoint and renders it in the DOM.
 * Sets up editing and input tracking after rendering.
 * Displays an error message if the request fails or returns invalid JSON.
 *
 * @function carsGetRequest
 * @returns {void}
 */
function carsGetRequest() {
    const carsRequest = new XMLHttpRequest();

    carsRequest.addEventListener("load", function () {
        // Parse the JSON string into a JavaScript object
        try {
            carsArray = JSON.parse(carsRequest.responseText);
        } catch (e) {
            showError("Data parsing error: invalid JSON structure.");
            return;
        }

        displayCars();
        recordInputs();
        toggleEditingMode();

    });

    carsRequest.open("GET", carsEndpoint);
    carsRequest.send();

}

carsGetRequest();

/**
 * Re-fetches and re-renders the factory data from the blob.
 * Intended to be called after a save operation completes.
 *
 * @function fetchAndDisplayFactory
 * @returns {void}
 */
function fetchAndDisplayFactory() {
    const factoryRequest = new XMLHttpRequest();
    factoryRequest.open("GET", factoryEndpoint);

    factoryRequest.onload = function () {
        if (factoryRequest.status === 200) {
            try {
                factoryObject = JSON.parse(factoryRequest.responseText);
            } catch (e) {
                showError("Data parsing error: invalid JSON structure.");
                return;
            }

            const factoryDiv = document.getElementById("factory");
            factoryDiv.innerHTML = "";

            displayFactory();

        } else {
            console.error("Failed to fetch updated factory:", factoryRequest.statusText);
            showError(`Failed to load factory data. Please try again. ${factoryRequest.statusText}`);
        }
    };

    factoryRequest.onerror = function () {
        console.error("Network error while refreshing data.");
        showError("Network error: Unable to load factory data.");
    };

    factoryRequest.send();
}

/**
 * Re-fetches and re-renders the car list from the blob.
 * Intended to be called after a save operation completes.
 *
 * @function fetchAndDisplayCars
 * @returns {void}
 */
function fetchAndDisplayCars() {
    const carsRequest = new XMLHttpRequest();

    carsRequest.open("GET", carsEndpoint);

    carsRequest.onload = function () {
        if (carsRequest.status === 200) {

            try {
                carsArray = JSON.parse(carsRequest.responseText);
            } catch (e) {
                showError("Data parsing error: invalid JSON structure.");
                return;
            }

            // Clear the current list before redisplaying
            const carsList = document.getElementById("cars-list");
            carsList.innerHTML = "";

            displayCars(); // Rebuild the UI
            recordInputs();
            toggleEditingMode();

        } else {
            console.error("Failed to fetch updated cars:", carsRequest.statusText);
            showError(`Failed to save car data. Please try again. ${carsRequest.statusText}`);
        }
    };

    carsRequest.onerror = function () {
        console.error("Network error while refreshing data.");
        showError("Network error: Unable to save car data.");
    };

    carsRequest.send();
}

//POST ----------------------------------------------------------------------------------------------------------

/**
 * Saves both car and factory data to their respective blobs by calling the individual save functions.
 *
 * @function saveAllChangesToBlob
 * @returns {void}
 */
function saveAllChangesToBlob() {

    saveCarsChangesToBlob();
    saveFactoryChangesToBlob();

}

/**
 * Sends updated car data to the cars blob using a PUT request.
 * Handles success and failure scenarios with feedback to the user.
 *
 * @function saveCarsChangesToBlob
 * @returns {void}
 */
function saveCarsChangesToBlob() {
    const carsPostRequest = new XMLHttpRequest();
    carsPostRequest.open("PUT", carsEndpoint);
    carsPostRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    carsPostRequest.onload = () => {
        if (carsPostRequest.status === 200 || carsPostRequest.status === 201) {
            console.log("Cars data saved successfully.");

            // Wait until save is confirmed before fetching new data
            fetchAndDisplayCars();
        } else {
            console.error("Cars save failed:", carsPostRequest.statusText);
            showError(`Cars save failed: ${carsPostRequest.statusText}`);
        }
    };

    carsPostRequest.onerror = () => {
        console.error("Network error while saving cars.");
        showError("Network error while saving cars.");

    };

    const clearCarJsonCopy = JSON.stringify(cleanCarArrayCopy(carsArray));
    carsPostRequest.send(clearCarJsonCopy);
}

/**
 * Sends updated factory data to the factory blob using a PUT request.
 * Handles success and failure scenarios with feedback to the user.
 *
 * @function saveFactoryChangesToBlob
 * @returns {void}
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