# 05 Arrivals

# Author

**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Implement the arrivals page of an airport such as [this](https://www.aeroportoditorino.it/en/tofly/flights/departs-arrivals) one
   - Create a complete proper webpage with a title, description and all other HTML tags
   - Add Javascript and CSS files
   - Include as much detail as you can to each flight row
   - Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc

- Simulate a real arrivals list
   - The list should start empty and update every 10 seconds
   - Flights that have arrived should be removed after 60 seconds
   - Flights should change status in time. E.g. departing>on_time>delayed>arrived
   - Flights that are delayed should be displayed in red
   - New flights should be added to the bottom of the list
   - The list should be sorted by date and hour

<br>
<br>

# Approach to Solution

<br>

# 1. Creation of the `index.html` file  
**Main features:**
- The `head` section includes:
  - a title
  - links to the favicon
  - a link to the `style.css` resource
- The `body` consists of:
  - a page title
  - a `div` element containing:
    - a message indicating the last update to the flight schedule
    - the arrivals table, whose records will be dynamically updated using JavaScript and CSS
    - a script reference to the `main.js` file
  - a footer displaying the author's name and the year the page was created

Each element is assigned an `id` or `class` attribute to allow styling via CSS.

<br>

# 2. Creation of the `style.css` file  
The stylesheet includes:
- **Static styles** applied from the start (e.g., to `footer`, `h1`, and the flight table)
- **Dynamic styles** that are applied through JavaScript, such as the style associated with the `.delayed` class

<br>

# 3. Creation of the `main.js` file  

## Core Idea  
The goal was to create a dynamic arrivals table with the following properties:

- Each flight is represented as an object within the `arrivals` array, containing:
  - `date`: the date of arrival
  - `hour`: the scheduled arrival time, in `HH:MM` format
  - `origin`: the departure airport
  - `flight`: the flight code
  - `status`: the current status, which may be `"DEPARTING"`, `"ON_TIME"`, `"DELAYED"`, or `"ARRIVED"`
  - `notes`: used to display the estimated arrival time in the case of delays
  - `airplane`: the aircraft model

- A second array defines the possible flight statuses:
  - `DEPARTING`: the flight is preparing to depart. It transitions to `ON_TIME` after one minute.
  - `ON_TIME`: the flight is on schedule.
  - `DELAYED`: the flight is delayed.

- When either the official arrival time (for flights marked `ON_TIME`) or the estimated time (for `DELAYED` flights) matches the current local time, the flight status is updated to `ARRIVED`.

- A flight that has remained in the `ARRIVED` state for 60 seconds or more is removed from the table.

- The arrivals table and flight statuses are updated every 10 seconds.

<br>


## The Arrays  
Two arrays were defined:

- An array of flight objects:
```js
const arrivals = [
   {
     date: "",
     hour: "",
     origin: "REGGIO CALABRIA",
     flight: "FR8594",
     status: "",
     notes: "-",
     airplane: "73H"
   },
   {
     date: "",
     hour: "",
     origin: "MUNICH",
     flight: "EN8256",
     status: "",
     notes: "-",
     airplane: "E95"
   },

   (...)

   {
     date: "",
     hour: "",
     origin: "IASI",
     flight: "W43677",
     status: "",
     notes: "-",
     airplane: "320"
   }
];
```

- An array of possible statuses:
```js
const statuses = ["ON_TIME", "DELAYED", "DEPARTING"];
```

<br>

## Setting up the records for the table

For each flight, a date and an arrival time are generated based on today’s date.  
A random delay of up to 15 minutes is added to create some space between flights.  
The time is formatted as follows: HH:MM.  
This function updates the values for the following keys for each flight in the `arrivals` array:  
- `date`  
- `hour`  

Additionally, this function creates a new property called `objectDate`, which will be used for sorting through the `sortArrivals` function.

```js
function generateDateHour(arrivalsList) {
    for (let flight of arrivalsList) {

        // Generate a delay (from 0 to 15 minutes)
        const randomDelayPerMinute = Math.floor(Math.random() * 15 * 60000);

        // Add the random delay to the current date
        const dateToUse = new Date(date.getTime() + randomDelayPerMinute);  // Convert to Date object
        
        // Format date as "DD-MM"
        const day = String(dateToUse.getDate()).padStart(2, '0');
        const month = String(dateToUse.getMonth() + 1).padStart(2, '0');
        const formattedDate = `${day}-${month}`;

        // Sets the date for each flight in the array
        flight.date = formattedDate;

        // Format time as "HH:MM"
        const hours = String(dateToUse.getHours()).padStart(2, '0');
        const minutes = String(dateToUse.getMinutes()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        // Sets the hour for each flight in the array
        flight.hour = formattedTime;

        // Store the full Date object for sorting and comparisons
        flight.dateObject = dateToUse;
    }
}
```
---
<br>

The `sortArrivals` function is used to sort the `arrivals` array based on the scheduled arrival time assigned to each flight.

```js
function sortArrivals(arrivalsList) {

    arrivalsList.sort((a, b) => a.dateObject - b.dateObject);

}
```
---
<br>

The `addStartingStatus` function assigns a status to each flight.  
- If a flight’s arrival time matches the current time, it is assigned the "ARRIVED" status; otherwise, one of the following statuses is assigned: "DELAYED", "ON_TIME", or "DEPARTING".
- If a flight is delayed, a note is added to the table showing the estimated arrival time.
- If a flight is assigned the "DELAYED" status, a random delay (up to 10 minutes) is generated and an `expectedDateObject` property is added to ensure proper functioning of the `isArrived` function.

```js
function addStartingStatus(arrivalsList, statusList) {

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

        } else {

            // Randomly assign a status from the status list
            flight.status = statusList[Math.floor(Math.random() * statusList.length)];

            
            // If the flight is delayed, calculate the expected arrival time
            if (flight.status === "DELAYED") {
                // Generates a delay (1 to 10 minutes)
                const randomDelayTime = Math.floor(Math.random() * 10 * 60000) + 60000;
                const delayedDate = new Date(flight.dateObject.getTime() + randomDelayTime);

                const hours = String(delayedDate.getHours()).padStart(2, '0');
                const minutes = String(delayedDate.getMinutes()).padStart(2, '0');
                const formattedDelayedDate = `${hours}:${minutes}`;

                flight.notes = `EXPECTED AT ${formattedDelayedDate}`;

                flight.expectedDateObject = delayedDate;

            }
        }
    });
}
```
---
<br>

The `updateTimeMsg` function updates the DOM to display the current time in the "HH:MM:SS" format, informing the user when the flight schedule was last updated.

```js
function updateTimeMsg() {
    const updateMsg = document.getElementById("update-time");
    updateMsg.textContent = `${new Date().toLocaleTimeString()}`;
}
```

```html
        <p id="update-msg">Flight Schedules updated at
            <span id="update-time"></span>
        </p>
```
---
<br>

The `addNextFlight` function performs the following tasks:  
- Creates a `<tr>` element and populates it with `<td>` elements based on the properties of the objects in the `arrivals` array.
- Adds the table row as a property for each flight object.
- If a flight is marked as delayed, it adds the `delayed` class to the new row, allowing a different CSS style to be applied (delayed flights will be highlighted in red with white text).

```javascript
function addNextFlight(flight) {

    const newRow = document.createElement("tr");
    
    // Create the table row structure
    newRow.innerHTML = `
        <td>${flight.date}</td>
        <td>${flight.hour}</td>
        <td>${flight.origin}</td>
        <td>${flight.flight}</td>
        <td>${flight.status}</td>
        <td>${flight.notes}</td>
        <td>${flight.airplane}</td>
    `;

    // Store the table row element in the flight object for future updates
    flight.rowElement = newRow;
    
    // Add a "delayed" class for styling if the flight is delayed
    if (flight.status === "DELAYED") {
        newRow.classList.add("delayed");
    }

    // Append the row to the table body
    tableBody.appendChild(newRow);
    
}
```

<br>


## Creating the Helper Functions

The `changeStatus` function is responsible for:  
- Adding an `updateCounter` (if it hasn't been added already) to a flight, or incrementing it by one.
- Checking if a flight marked as "DEPARTING" has a counter >= 6 (i.e., if it has been in this state for more than one minute). If so, it changes the flight's status to "ON_TIME".

```js
function changeStatus() {
    arrivals.forEach(flight => {
        
        if (flight.updateCounter === undefined) {
            flight.updateCounter = 0;
        } else {
            flight.updateCounter++;
        }

        if (flight.status === "DEPARTING" && flight.updateCounter >= 6) {
            flight.status = "ON_TIME";
            
            // Only try to update the DOM if rowElement exists
            if (flight.rowElement && flight.rowElement.children[4]) {
                flight.rowElement.children[4].textContent = "ON_TIME";
            }
        }
    });
}
```
---
<br>

The `isArrived` function changes the status of a flight to "ARRIVED" when the current time is >= to the expected arrival time (for DELAYED flights) or the scheduled arrival time (for ON_TIME and DEPARTING flights).

```js
function isArrived() {
    const currentDate = new Date();

    arrivals.forEach(flight => {
        const row = flight.rowElement;

        // DELAYED flights: compare expected arrival time
        if (flight.status === "DELAYED" && flight.expectedDateObject) {
            if (flight.expectedDateObject.getTime() <= currentDate.getTime()) {
                flight.status = "ARRIVED";

                // Update table row
                row.classList.remove("delayed");
                row.children[4].textContent = "ARRIVED"; // status
                row.children[5].textContent = "-";       // notes

                flight.notes = "-";
            }
        }

        // ON_TIME or other flights: compare original arrival time
        else if (flight.status !== "ARRIVED" && flight.dateObject) {
            if (flight.dateObject.getTime() <= currentDate.getTime()) {
                flight.status = "ARRIVED";

                row.children[4].textContent = "ARRIVED";
                row.children[5].textContent = "-";

                flight.notes = "-";
            }
        }
    });
}
```
---
<br>

The `removeArrivedFlights` function is used to remove flights marked as ARRIVED if the `arrivalCounter` is >= 6 (i.e., if more than one minute has passed since they were marked as ARRIVED).  

To do this, as soon as a flight is marked as ARRIVED, it is assigned an `arrivalCounter = 0`, which will be incremented every ten seconds.

```js
function removeArrivedFlights(){
    arrivals.forEach(flight => {
        if (flight.status === "ARRIVED") {

            if (flight.arrivalCounter === undefined) {
                flight.arrivalCounter = 0;
            } else {
                flight.arrivalCounter++;
            }

            if (flight.arrivalCounter >= 6) {
                if (flight.rowElement && flight.rowElement.parentNode) {
                    flight.rowElement.remove();
                }
            }
        }
    });
}
```

<br>

## Starting The Program

The program performs the following steps:
- Generates the arrival time and date for each flight.
- Sorts the flights in the `arrivals` array based on their date and time of arrival.
- Adds a status to each flight.
- Generates the table in the HTML page.
- Using `setInterval`, every ten seconds, the following commands are executed:
   - The message informing the user of the last time the flight table was updated is refreshed.
   - A flight is added to the table.
   - Checks if there are any conditions to change the flight's status.
   - Checks if a flight has arrived.
   - Removes flights that have been marked as ARRIVED for at least one minute.

```js
generateDateHour(arrivals);
sortArrivals(arrivals);
addStartingStatus(arrivals, statuses);
const tableBody = document.getElementById("flight-table-body");

let flightIndex = 0;

// Update the table and statuses every 10 seconds
setInterval(() => {

    updateTimeMsg();

    const flight = arrivals[flightIndex];

    // Stop the interval when no more data
    if (flightIndex < arrivals.length) {
        addNextFlight(flight);
        flightIndex++;
    }

    changeStatus();

    isArrived();

    removeArrivedFlights();

    // To keep an eye on the counters, uncomment
    //console.log("----------------");
    //arrivals.forEach(flight => {console.log(flight.origin, flight.status, flight.updateCounter, flight.arrivalCounter)});
    
}, 10000); // Run every 10 seconds
```