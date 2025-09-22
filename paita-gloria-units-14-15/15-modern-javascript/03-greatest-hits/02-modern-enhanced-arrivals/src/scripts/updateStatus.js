/**
 * @file updateStatus.js
 * 
 * @author Gloria Paita
 * 
 * @module updateStatus
 * 
 * @description
 * Contains functions for periodically updating flight statuses in the arrivals and departures tables.
 * Handles delayed status changes, time-based status updates, and removal of flights from the UI.
 *
 * Exports functions for changing delayed statuses, updating statuses by time, removing flights by status,
 * and updating the entire table.
 */

import { arrivals, departures } from "./flightsGenerator.js";

// --------------------------------------------------------------------
// FUNCTIONS INVOKED EVERY 10 SECONDS

/**
 * Checks delayed departures and updates their status after a set duration.
 *
 * After 6 update intervals (60 seconds), flights marked as "DELAYED" are switched to "ON_TIME".
 * The function also updates the table UI and appends an informational message in the accordion.
 *
 * @function changeDelayedStatusForDepartures
 * @param {Object[]} departuresList - Array of departing flight objects.
 * @returns {void}
 */
export function changeDelayedStatusForDepartures(departuresList) {
    departuresList.forEach(flight => {
        const { rowElement, status, updateCounter } = flight;

        // Initialize or increment the update counter
        flight.updateCounter = (flight.updateCounter ?? 0) + 1;

        // Case: Delayed flight should now be marked as on time
        if (status === "DELAYED" && updateCounter >= 6) {
            flight.status = "ON_TIME";
            flight.notes = "-";

            const flightCode = flight.flight || "Anonymous Flight";
            flight.additionalMsg = `Sorry for the inconvenience. Flight ${flightCode} is once again on time.`;

            // Append the additional message only once
            const detailsRow = rowElement?.nextElementSibling;
            const detailsDiv = detailsRow?.classList.contains("accordion-content")
                ? detailsRow.querySelector(".flight-details")
                : null;

            if (detailsDiv && !detailsDiv.querySelector(".additional-msg")) {
                const messageP = document.createElement("p");
                messageP.classList.add("additional-msg");
                messageP.textContent = flight.additionalMsg;
                detailsDiv.appendChild(messageP);
            }

            // Update table row if possible
            if (rowElement?.children.length >= 6) {
                rowElement.classList.remove("delayed");
                rowElement.children[4].textContent = "ON_TIME"; // status cell
                rowElement.children[5].textContent = "-";       // notes cell
            }
        }

        // Case: Flight is already on time and needs to clear notes
        if (status === "ON_TIME" && updateCounter >= 6) {
            if (rowElement?.children[5]) {
                rowElement.children[5].textContent = "-";
            }
        }
    });
}

/**
 * @function updateFlightStatusByTime
 * @description
 * Checks each flight in the list and updates its status based on current time.
 * If a flight is delayed and its expected time has passed, or if its scheduled time has passed,
 * it is marked as "ARRIVED" or "DEPARTED" depending on the provided target status.
 *
 * @param {Object[]} flights - Array of flight objects to update.
 * @param {"ARRIVED"|"DEPARTED"} targetStatus - Status to assign when time is due.
 * @returns {void}
 */
export function updateFlightStatusByTime(flights, targetStatus) {
    const currentTime = Date.now();

    flights.forEach(flight => {
        const { status, expectedDateObject, dateObject, rowElement } = flight;

        if (!rowElement || !rowElement.children?.length) return;

        const hasArrived =
            (status === "DELAYED" && expectedDateObject?.getTime() <= currentTime) ||
            (status !== targetStatus && dateObject?.getTime() <= currentTime);

        if (hasArrived) {
            flight.status = targetStatus;
            flight.notes = "-";

            rowElement.classList.remove("delayed");
            rowElement.children[4].textContent = targetStatus;
            rowElement.children[5].textContent = "-";
        }
    });
}

/**
 * @function removeFlightsByStatus
 * @description
 * Removes flights from the DOM after they have maintained a certain status
 * (e.g. "ARRIVED" or "DEPARTED") for a specified number of intervals.
 * The function tracks duration using a dynamic counter property on each flight object.
 *
 * @param {Object[]} flights - Array of flight objects to check and possibly remove.
 * @param {"ARRIVED"|"DEPARTED"} statusKey - The status to check against (e.g. "ARRIVED").
 * @param {string} counterKey - The property on the flight used to count intervals (e.g. "arrivalCounter").
 * @param {number} threshold - Number of intervals after which the flight should be removed.
 * @returns {void}
 */
export function removeFlightsByStatus(flights, statusKey, counterKey, threshold = 6) {
    flights.forEach(flight => {
        if (flight.status === statusKey) {
            // Initialize or increment the counter
            flight[counterKey] = (flight[counterKey] ?? 0) + 1;

            // If the flight has remained in this status for too long, remove it
            if (flight[counterKey] >= threshold) {
                flight.rowElement?.remove();
                flight.details?.remove();
            }
        }
    });
}

export function updateTable() {
    changeDelayedStatusForDepartures(departures);

    updateFlightStatusByTime(arrivals, "ARRIVED");
    updateFlightStatusByTime(departures, "DEPARTED");

    removeFlightsByStatus(arrivals, "ARRIVED", "arrivalCounter");
    removeFlightsByStatus(departures, "DEPARTED", "departureCounter");
}