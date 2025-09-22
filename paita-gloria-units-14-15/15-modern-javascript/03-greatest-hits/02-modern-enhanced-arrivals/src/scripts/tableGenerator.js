/**
 * @file tableGenerator.js
 * 
 * @author Gloria Paita
 * 
 * @module tableGenerator
 * 
 * @description
 * Provides UI logic for flight arrivals and departures tables, including tab switching,
 * dynamic row rendering, accordion details, and time updates.
 *
 * Exports functions for updating time messages, adding flight rows, toggling accordion menus,
 * and initializing the UI.
 */

//---------------------------------------------------------------------
// CLOCK

/**
 * Updates all DOM elements with the ID "update-time" to display the current local time.
 *
 * This is useful for dynamically showing when a view or section was last updated.
 *
 * @function updateTimeMsg
 * @returns {void}
 *
 * @example
 * updateTimeMsg();
 * // Updates element(s) with the current time, e.g., "14:32:05"
 */
export function updateTimeMsg() {
    const updateMessages = document.querySelectorAll("#update-time");

    updateMessages.forEach((message) => {
        message.textContent = `${new Date().toLocaleTimeString()}`;
    });
}

//---------------------------------------------------------------------
// TABS, TABLES, ROWS

/**
 * @description
 * Handles tab switching between "Arrivals" and "Departures" sections.
 * Highlights the active tab and shows the corresponding table with a fade-in effect.
 */
function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    const tableDivs = document.querySelectorAll("div.h2 ~ div");

    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener("click", () => {

            // Highlight the selected tab and un-highlight others
            tabs.forEach(t => t.classList.toggle("highlighted", t === tab));

            // Show the corresponding table and hide others

            tableDivs.forEach((div, tableIndex) => {
                div.classList.toggle("in", tableIndex === tabIndex);
            });
        });
    });
}

/**
 * Renders a flight entry row and its collapsible details into a specified table body.
 *
 * This function dynamically builds the row based on a list of column keys and appends
 * both the main row and its associated accordion detail row to the DOM. It also stores
 * references to these rows in the flight object for future updates or interactions.
 *
 * @function addFlightRow
 * @param {Object} flight - The flight data object containing properties like `date`, `flight`, etc.
 * @param {string} tableBodyId - The ID of the <tbody> element where the row will be appended.
 * @param {string[]} columns - The ordered list of keys to render as table columns.
 * @param {number} accordionColspan - The colspan value for the accordion detail row.
 * @returns {void}
 */
export function addFlightRow(flight, tableBodyId, columns, accordionColspan) {
    // Find the target <tbody> by ID
    const tableBody = document.getElementById(tableBodyId);

    // Create the main flight row
    const newRow = document.createElement("tr");
    newRow.classList.add("accordion-title");

    // Build the inner HTML for the main row dynamically from columns
    newRow.innerHTML = columns
        .map(col => `<td>${flight[col] ?? ""}</td>`)
        .join("");

    if (flight.status === "DELAYED") {
        newRow.classList.add("delayed");
    }

    // Create the hidden accordion content row
    const accordionContentRow = document.createElement("tr");
    accordionContentRow.classList.add("accordion-content");
    accordionContentRow.style.display = "none";
    accordionContentRow.innerHTML = `
    <td colspan="${accordionColspan}">
      <div class="flight-details">
        <p>No additional information about ${flight.flight}</p>
      </div>
    </td>
  `;

    // Store references for later use (e.g. toggling, updating)
    flight.rowElement = newRow;
    flight.details = accordionContentRow;

    // Append both rows to the table
    tableBody.appendChild(newRow);
    tableBody.appendChild(accordionContentRow);

    // Enable row toggle for accordion display
    newRow.addEventListener("click", () => toggleAccordion(flight));
}

// --------------------------------------------------------------------
// ACCORDION MENU

/**
 * Toggles the visibility of a flight's accordion row.
 *
 * Closes any currently open row before toggling the selected one.
 * This ensures only one accordion row is open at a time.
 *
 * @function toggleAccordion
 * @param {Object} flight - The flight object containing rowElement and details references.
 * @returns {void}
 */
export function toggleAccordion(flight) {
    const { rowElement, details } = flight;

    // Close any other active accordion rows
    document.querySelectorAll(".accordion-title.active").forEach(activeRow => {
        if (activeRow !== rowElement) {
            activeRow.classList.remove("active");

            const nextRow = activeRow.nextElementSibling;
            if (nextRow?.classList.contains("accordion-content")) {
                nextRow.style.display = "none";
            }
        }
    });

    // Toggle the current accordion
    const isOpen = details.style.display !== "none";

    if (isOpen) {
        rowElement.classList.remove("active");
        details.style.display = "none";
    } else {
        rowElement.classList.add("active");
        details.style.display = "";
    }
}

export function initUI() {
    setupTabs();
}