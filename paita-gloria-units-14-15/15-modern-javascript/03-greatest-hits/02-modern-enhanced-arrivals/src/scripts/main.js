/**
 * @file main.js
 * @author Gloria Paita
 * Initializes the flight tracker UI and updates it every 10 seconds
 * with new arrival and departure flights. Uses data from the flight
 * generator and dynamically updates the flight table and statuses.
 */

import "../styles/main.css";
import { initializeFlights, arrivals, departures } from "./flightsGenerator.js";
import { initUI, updateTimeMsg, addFlightRow } from "./tableGenerator.js";
import { updateTable } from "./updateStatus.js";

// --------------------------------------------------------------------
// START OF THE PROGRAM

/**
 * Initializes flight data and user interface components.
 */
initializeFlights();
initUI();

// Index to track the next flight to add to the table
let arrFlightsIndex = 0;
let depFlightsIndex = 0;

/**
 * Interval timer that updates the UI every 10 seconds.
 * Adds the next arrival and departure flights (if available),
 * updates the clock message, and refreshes the flight table/statuses.
 */
setInterval(() => {
  updateTimeMsg();

  const arrivingFlight = arrivals?.[arrFlightsIndex];
  const departingFlight = departures?.[depFlightsIndex];

  if (arrFlightsIndex < arrivals.length) {
    addFlightRow(
      arrivingFlight,
      "arrivals-table-body",
      ["date", "hour", "origin", "flight", "status", "notes", "airplane"],
      7
    );
    arrFlightsIndex++;
  }

  if (depFlightsIndex < departures.length) {
    addFlightRow(
      departingFlight,
      "departures-table-body",
      ["date", "hour", "origin", "flight", "status", "notes", "airplane", "checkin"],
      8
    );
    depFlightsIndex++;
  }

  updateTable();
}, 10000);