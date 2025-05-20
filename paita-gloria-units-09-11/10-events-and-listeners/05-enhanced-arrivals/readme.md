# 05 Enhanced Arrivals

# Author

**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Start with the ‘Arrivals’ exercise from a previous lesson
- Add the following features:
    - When the user clicks a row, it should expand to show more information about the flight
    - When the user clicks an open row it should close again
    - If the user clicks a row, any other open rows should close
        - Like in this [example of an accordion](https://jqueryui.com/accordion/#collapsible)
    - Add a ‘Departures’ section with departing flights
    - The user should be able to switch between Arrivals and Departures with a fade-in/fade-out
animation

<br>
<br>

# Approach to Solution

## 1. **Flight Data Structure**

The flight data is represented as an array of objects, each containing properties such as `date`, `hour`, `origin`, `flight`, `status`, `notes`, and `airplane`. Departing flights also include a `checkin` property.  

- **Arrivals**: Contains flight data for arriving flights.
- **Departures**: Contains flight data for departing flights.

```javascript
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
];
```

<br>

## 2. Dynamic Tab Switching
Tabs allow users to toggle between the "Arrivals" and "Departures" sections.

Clicking a tab highlights it and displays the corresponding table with a fade-in effect.
Other sections are hidden.

```js
tabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("highlighted"));
        tab.classList.add("highlighted");

        tableDivs.forEach((div, tableIndex) => {
            if (tabIndex === tableIndex) {
                div.classList.add("in");
            } else {
                div.classList.remove("in");
            }
        });
    });
});
```

<br>

## 3. Flight Status Management

### Generating Dates and Times

- Each flight is assigned a random arrival or departure time, with a random delay of up to 15 minutes.
- The generateDateHour function formats the date and time and stores it in the flight object.

```js
function generateDateHour(flightList) {
    for (let flight of flightList) {
        const randomDelay = Math.floor(Math.random() * 15 * 60000);
        const dateToUse = new Date(date.getTime() + randomDelay);

        flight.date = `${String(dateToUse.getDate()).padStart(2, '0')}-${String(dateToUse.getMonth() + 1).padStart(2, '0')}`;
        flight.hour = `${String(dateToUse.getHours()).padStart(2, '0')}:${String(dateToUse.getMinutes()).padStart(2, '0')}`;
        flight.dateObject = dateToUse;
    }
}
```
<br>

### Assigning Statuses

- Flights are assigned statuses such as `"ON_TIME"`, `"DELAYED"`, or `"ARRIVED"` for arrivals, and `"CHECK-IN IS OPEN"`, `"DELAYED"`, or `"DEPARTED"` for departures.
- Delayed flights include an expected time in the notes field.

```js
function addArrivalsStatus(arrivalsList, statusList) {
    arrivalsList.forEach(flight => {
        if (flight.dateObject.getTime() <= date.getTime()) {
            flight.status = "ARRIVED";
        } else {
            flight.status = statusList[Math.floor(Math.random() * statusList.length)];
            if (flight.status === "DELAYED") {
                const delay = Math.floor(Math.random() * 10 * 60000) + 60000;
                const delayedDate = new Date(flight.dateObject.getTime() + delay);
                flight.notes = `EXPECTED AT ${String(delayedDate.getHours()).padStart(2, '0')}:${String(delayedDate.getMinutes()).padStart(2, '0')}`;
                flight.expectedDateObject = delayedDate;
            }
        }
    });
}
```

<br>

## 4. Accordion Behavior
Each flight row can be expanded to show additional details.

Clicking a row toggles its visibility.
If another row is open, it is closed before opening the clicked row.

```js
function toggleAccordion(flight) {
    const accordionTitles = document.querySelectorAll(".accordion-title");
    accordionTitles.forEach(row => {
        if (row !== flight.rowElement && row.classList.contains("active")) {
            row.classList.remove("active");
            const content = row.nextElementSibling;
            if (content && content.classList.contains("accordion-content")) {
                content.style.display = "none";
            }
        }
    });

    const content = flight.details;
    if (content.style.display === "none") {
        flight.rowElement.classList.add("active");
        content.style.display = "";
    } else {
        flight.rowElement.classList.remove("active");
        content.style.display = "none";
    }
}
```

<br>

## 5. Flight Rendering
Flights are dynamically added to the table as rows.

Each row includes flight details such as date, time, origin, and status.
Delayed flights are styled with a "delayed" class.

```js
function addNextFlight(flight) {
    const newRow = document.createElement("tr");
    newRow.classList.add("accordion-title");
    newRow.innerHTML = `
        <td>${flight.date}</td>
        <td>${flight.hour}</td>
        <td>${flight.origin}</td>
        <td>${flight.flight}</td>
        <td>${flight.status}</td>
        <td>${flight.notes}</td>
        <td>${flight.airplane}</td>
    `;

    const accordionContentRow = document.createElement("tr");
    accordionContentRow.classList.add("accordion-content");
    accordionContentRow.style.display = "none";
    accordionContentRow.innerHTML = `
        <td colspan="7">
            <div class="flight-details">
                <p>No additional information about ${flight.flight}</p>
            </div>
        </td>
    `;

    flight.details = accordionContentRow;
    flight.rowElement = newRow;

    if (flight.status === "DELAYED") {
        newRow.classList.add("delayed");
    }

    arrivalsTableBody.appendChild(newRow);
    arrivalsTableBody.appendChild(accordionContentRow);

    newRow.addEventListener("click", () => toggleAccordion(flight));
}
```

<br>

## 6. Periodic Updates
Every 10 seconds, the following actions are performed:

- Add new flights to the table.
- Update delayed statuses.
- Check if flights have arrived or departed.
- Remove flights that have been in the "ARRIVED" or "DEPARTED" state for 60 seconds.

```js
setInterval(() => {
    updateTimeMsg();

    if (arrFlightsIndex < arrivals.length) {
        addNextFlight(arrivals[arrFlightsIndex]);
        arrFlightsIndex++;
    }

    if (depFlightsIndex < departures.length) {
        addDepartingFlight(departures[depFlightsIndex]);
        depFlightsIndex++;
    }

    changeDelayedStatusForDepartures(departures);
    isArrived(arrivals);
    isDeparted(departures);
    removeArrivedFlights(arrivals);
    removeDepartedFlights(departures);
}, 10000);
```

<br>

## Example Usage
**Case 1:**
- Click on a flight row → Expands to show additional details.
- Click on another row → Closes the first row and expands the second.

**Case 2:**

- Switch to the "Departures" tab → Displays departing flights with a fade-in effect.

**Case 3:**

- Wait 10 seconds → New flights are added to the table, and statuses are updated.