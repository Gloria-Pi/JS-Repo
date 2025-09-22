/**
 * @file flightsGenerator.js
 * 
 * @author Gloria Paita
 * 
 * @module flightsGenerator
 * 
 * @description Defines static lists of arrival and departure flights for the flight tracker.
 */

// ---------- Flight Data ----------

/** @type {Array<Object>} */
export const arrivals = [
    { date: "", hour: "", origin: "REGGIO CALABRIA", flight: "FR8594", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "MUNICH", flight: "EN8256", status: "", notes: "-", airplane: "E95" },
    { date: "", hour: "", origin: "BARCELONA", flight: "FR774", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "NAPOLI", flight: "FR3298", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "COPENHAGEN", flight: "FR5088", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "PARIS Charles de Gaulle", flight: "AF1702", status: "", notes: "-", airplane: "E90" },
    { date: "", hour: "", origin: "FRANKFURT", flight: "EN8848", status: "", notes: "-", airplane: "E95" },
    { date: "", hour: "", origin: "BARCELONA", flight: "VY6514", status: "", notes: "-", airplane: "319" },
    { date: "", hour: "", origin: "ROMA Fiumicino", flight: "AZ1435", status: "", notes: "-", airplane: "319" },
    { date: "", hour: "", origin: "BARI", flight: "FR8341", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "TRAPANI", flight: "FR5903", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "LONDON Stansted", flight: "FR7758", status: "", notes: "-", airplane: "73H" },
    { date: "", hour: "", origin: "PARIS Charles de Gaulle", flight: "AF1202", status: "", notes: "-", airplane: "E90" },
    { date: "", hour: "", origin: "IASI", flight: "W43677", status: "", notes: "-", airplane: "320" }
];

/** @type {Array<Object>} */
export const departures = [
    { date: "", hour: "", origin: "REGGIO CALABRIA", flight: "FR8594", status: "", notes: "-", airplane: "73H", checkin: "A" },
    { date: "", hour: "", origin: "MUNICH", flight: "EN8256", status: "", notes: "-", airplane: "E95", checkin: "B" },
    { date: "", hour: "", origin: "BARCELONA", flight: "FR774", status: "", notes: "-", airplane: "73H", checkin: "C" },
    { date: "", hour: "", origin: "NAPOLI", flight: "FR3298", status: "", notes: "-", airplane: "73H", checkin: "A" },
    { date: "", hour: "", origin: "COPENHAGEN", flight: "FR5088", status: "", notes: "-", airplane: "73H", checkin: "B" },
    { date: "", hour: "", origin: "PARIS Charles de Gaulle", flight: "AF1702", status: "", notes: "-", airplane: "E90", checkin: "C" },
    { date: "", hour: "", origin: "FRANKFURT", flight: "EN8848", status: "", notes: "-", airplane: "E95", checkin: "D" },
    { date: "", hour: "", origin: "BARCELONA", flight: "VY6514", status: "", notes: "-", airplane: "319", checkin: "D" },
    { date: "", hour: "", origin: "ROMA Fiumicino", flight: "AZ1435", status: "", notes: "-", airplane: "319", checkin: "A" },
    { date: "", hour: "", origin: "BARI", flight: "FR8341", status: "", notes: "-", airplane: "73H", checkin: "B" },
    { date: "", hour: "", origin: "TRAPANI", flight: "FR5903", status: "", notes: "-", airplane: "73H", checkin: "C" },
    { date: "", hour: "", origin: "LONDON Stansted", flight: "FR7758", status: "", notes: "-", airplane: "73H", checkin: "D" },
    { date: "", hour: "", origin: "PARIS Charles de Gaulle", flight: "AF1202", status: "", notes: "-", airplane: "E90", checkin: "A" },
    { date: "", hour: "", origin: "IASI", flight: "W43677", status: "", notes: "-", airplane: "320", checkin: "D" }
];

// ---------- Status lists ----------
const arrivalStatuses = ["ON_TIME", "DELAYED"];
const departureStatuses = ["CHECK-IN IS OPEN", "DELAYED", "ON_TIME"];

const date = new Date();

// --------------------------------------------------------------------
// FUNCTIONS TO SET UP THE TABLE

/**
 * @typedef {Object} Flight
 * @property {string} date - The formatted date (DD-MM).
 * @property {string} hour - The formatted time (HH:MM).
 * @property {string} origin
 * @property {string} flight
 * @property {string} status
 * @property {string} notes
 * @property {string} airplane
 * @property {string} [checkin] - Present only for departures.
 * @property {Date} [dateObject] - Raw Date object used for sorting/comparison.
 */

/**
 * Generates a simulated arrival time and date for each flight, adding a random delay
 * between 0 and 15 minutes. Also attaches a raw `dateObject` to each flight.
 *
 * @param {Flight[]} arrivalsList - Array of flight objects to be updated.
 * @returns {void}
 */
function generateDateHour(arrivalsList) {
    arrivalsList.forEach(flight => {

        // Generate a delay (from 0 to 15 minutes)
        const randomDelayPerMinute = Math.floor(Math.random() * 15 * 60000);

        // Add the random delay to the current date
        const delayedDate = new Date(date.getTime() + randomDelayPerMinute);  // Convert to Date object

        // Format date as "DD-MM"
        const formattedDate = delayedDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit"
        }).replace(/\//g, "-");

        // Format time as "HH:MM"
        const formattedTime = delayedDate.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

        // Assign values to the flight object
        flight.date = formattedDate;
        flight.hour = formattedTime;
        flight.dateObject = delayedDate;
    });
}

/**
 * @function sortFlights
 * @description
 * Sorts the flight arrivals list in chronological order based on the `dateObject` property.
 *
 * @param {Flight[]} arrivalsList - Array of flight objects to be sorted.
 * @returns {void}
 *
 * @example
 * sortFlights(arrivals);
 * // ➤ Flights are now ordered from earliest to latest
 */
function sortFlights(arrivalsList) {
    arrivalsList.sort((a, b) => a.dateObject - b.dateObject);
}

/**
 * Returns a random delay between 1 and 10 minutes (in milliseconds).
 * @returns {number}
 */
const getRandomDelay = () => {
    const min = 60000;        // 1 minute
    const max = 10 * 60000;   // 10 minutes
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Formats a Date object as "HH:MM".
 * @param {Date} date
 * @returns {string}
 */
const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
};

/**
 * @function addArrivalsStatus
 * @description
 * Assigns an initial status to each arrival flight. If the current time matches the flight's time,
 * the status is set to "ARRIVED". Otherwise, a random status is assigned from the provided list.
 * If the status is "DELAYED", an expected arrival time is calculated and added to the `notes` field.
 *
 * @param {Object[]} arrivalsList - Array of arriving flight objects.
 * @param {string[]} statusList - Array of possible flight statuses.
 * @returns {void}
 */
function addArrivalsStatus(arrivalsList, statusList) {

    // Loop through each flight in the arrivalsList
    arrivalsList.forEach(flight => {

        // Compare the minutes of the current date with the flight's arrival time
        const flightMinutes = flight.dateObject.getMinutes();
        const flightHour = flight.dateObject.getHours();
        const currentMinutes = date.getMinutes();
        const currentHour = date.getHours();

        // If the flight's time matches the current time, mark it as "ARRIVED"
        if (flightHour === currentHour && flightMinutes === currentMinutes) {
            flight.status = "ARRIVED";
        }

        // Assign a random status
        flight.status = statusList[Math.floor(Math.random() * statusList.length)];

        // If the flight is delayed, calculate the expected arrival time
        if (flight.status === "DELAYED") {
            // Generates a delay (1 to 10 minutes)
            const delay = getRandomDelay();
            const delayedDate = new Date(flight.dateObject.getTime() + delay);

            flight.expectedDateObject = delayedDate;
            flight.notes = `EXPECTED AT ${formatTime(delayedDate)}`;
        }
    });
}

/**
 * @function addDeparturesStatus
 * @description
 * Assigns an initial status to each departing flight. If the current time matches the flight's time,
 * the status is set to "DEPARTED AT HH:MM". Otherwise, a random status is assigned from the provided list.
 * If the status is "DELAYED", an expected departure time is calculated and added to the `notes` field.
 *
 * @param {Object[]} departuresList - Array of departing flight objects.
 * @param {string[]} statusList - Array of possible flight statuses.
 * @returns {void}
 */
function addDeparturesStatus(departuresList, statusList) {

    // Loop through each flight in the arrivalsList
    departuresList.forEach(flight => {

        // Compare the minutes of the current date with the flight's departing time
        const flightMinutes = flight.dateObject.getMinutes();
        const flightHour = flight.dateObject.getHours();
        const currentMinutes = date.getMinutes();
        const currentHour = date.getHours();

        // If the flight's time matches the current time, mark it as "DEPARTED"
        if (flightHour === currentHour && flightMinutes === currentMinutes) {
            flight.status = `DEPARTED AT ${formatTime(date)}`;
        }

        // Randomly assign a status from the status list
        flight.status = statusList[Math.floor(Math.random() * statusList.length)];

        // If the flight is delayed, calculate the expected departure time
        if (flight.status === "DELAYED") {
            const delay = getRandomDelay();
            const delayedDate = new Date(flight.dateObject.getTime() + delay);

            flight.expectedDateObject = delayedDate;
            flight.notes = `EXPECTED DEPARTURE AT ${formatTime(delayedDate)}`;
        }
    });
}

// --------------------------------------------------------------------
// FUNCTION TO EXPORT

/**
 * @function initializeFlights
 * @description
 * Initializes the flight data for the simulation. This function:
 * - Generates random but realistic dates and times for both arrival and departure flights.
 * - Sorts all flights in chronological order based on their generated date and time.
 * - Assigns initial statuses (e.g., "ON TIME", "DELAYED", "ARRIVED", "DEPARTED") to each flight.
 *
 * This prepares the `arrivals` and `departures` arrays for display and real-time updates in the UI.
 *
 * @returns {void}
 *
 * @example
 * initializeFlights();
 * // ➤ All flights will have times, be sorted, and have statuses and notes set.
 */
export const initializeFlights = () => {
    // Apply date generation and sorting to both lists
    [arrivals, departures].forEach(list => {
        generateDateHour(list);
        sortFlights(list);
    });

    // Assign statuses separately for clarity
    addArrivalsStatus(arrivals, arrivalStatuses);
    addDeparturesStatus(departures, departureStatuses);
};