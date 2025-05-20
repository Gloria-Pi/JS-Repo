/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script defines and tests the `formatDate` function, which formats a given date
 * based on how much time has passed compared to the current moment. The function 
 * logs different human-readable outputs depending on whether seconds, minutes, or 
 * more than an hour have passed.
 */

/**
 * @function formatDate
 * @description
 * Logs a user-friendly representation of how long ago a given date was.
 * The function chooses the format based on time difference:
 * - "right now" if under 1 second
 * - "n sec. ago" if under 1 minute
 * - "m min. ago" if under 1 hour
 * - "DD.MM.YY HH:mm" if over 1 hour
 *
 * @param {Date} date - The date to be formatted and compared to the current time.
 *
 * @example
 * formatDate(new Date()); // Outputs: "right now"
 *
 * @example
 * formatDate(new Date(Date.now() - 3000)); // Outputs: "3 sec. ago"
 *
 * @example
 * formatDate(new Date(Date.now() - 1800000)); // Outputs: "30 min. ago"
 *
 * @example
 * formatDate(new Date(2024, 11, 24, 12, 30)); // Outputs: "24.12.24 12:30"
 */
function formatDate(date) {
    
    const passedDateInMs = date.getTime();
    
    const currentDateInMs = Date.now();

    const timeDifference = currentDateInMs - passedDateInMs;

    // If less than an hour (3600000 ms) has passed
    if  ((currentDateInMs >= passedDateInMs) && (currentDateInMs < (passedDateInMs + 3600000))) {

        // If less than a second (1000 ms) has passed
        if (currentDateInMs < (passedDateInMs + 1000)) {
    
            console.log("right now");

        // If less than a minute (60000 ms) has passed
        } else if ((currentDateInMs > (passedDateInMs + 1000)) && (currentDateInMs < (passedDateInMs + 60000))) {

            console.log(`${Math.round(timeDifference/1000)} sec. ago`);
            
        } else {
            
            console.log(`${Math.round(timeDifference/60000)} min. ago`);

        }
        
    } else {            // If more than an hour has passed

     // Format the date as "DD.MM.YY HH:mm"
     const formattedDate = new Date(passedDateInMs);
     const day = String(formattedDate.getDate()).padStart(2, '0');
     const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
     const year = String(formattedDate.getFullYear()).slice(-2);
     const hours = String(formattedDate.getHours()).padStart(2, '0');
     const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
     
     console.log(`${day}.${month}.${year} ${hours}:${minutes}`);
    }
}


//TEST CASES
// More than an hour
formatDate(new Date(2025, 2, 31, 0, 0, 0, 0));

// Less than an hour
formatDate(new Date(2025, 2, 31, 21, 46, 0, 0));

// Less than a minute
formatDate(new Date(2025, 2, 31, 21, 35, 0, 0));

// Less than a second
formatDate(new Date(2025, 2, 31, 21, 38, 0, 0));

// "Right now"
formatDate(new Date());