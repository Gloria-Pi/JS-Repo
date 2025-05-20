/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the solution to the Movie Database assignment, which requires:
 * - creating an object to store the information about a movie (title, duration, stars)
 * - creating an array of similar objects
 * - creating a function to print out the movie information in a formatted string
 */

const myMovie = {
    title: "A Very Cool Very Engaging Movie",
    duration: 20,
    stars: ["Ian McCool", "John Coolio", "Jane Tarzan"]
};

const movieDatabase = [
    {
        title: "Is this 'Burn Out'?",
        duration: 120,
        stars: ["Gloria Pigeon", "Matteo Birdman", "Lady ITS", "Mr. Stress"]
    },
    {
        title: "Twisted Wonderland",
        duration: 180,
        stars: ["Riddle Rosehearts", "Azul Ashengrotto", "Jamil Viper", "Jade Leech"]
    },
    {
        title: "A Thousand Tears",
        duration: 1000,
        stars: ["Sir Lots O' Water", "Pretty Face", "The Eyes Twins", "Miss. Sadness"]
    },
    {
        title: "Jurassic Park",
        duration: 170,
        stars: ["George the T-Rex", "April the Pterodactyl", "Hernest the Velociraptor", "Linda the Triceratops"]
    }
];


/**
 * @function movieInfo
 * @description Function that prints the movie information in a formatted string.
 * 
 * @param {Object} movie - Object containing the movie information (title, duration, stars).
 * @returns {void} No return value, just console.log() the movie information.
 * 
 * @example
 * movieInfo(myMovie);
 * // Logs: "A Very Cool Very Engaging Movie" lasts for 20 minutes.
 * // Stars: Ian McCool, John Coolio, Jane Tarzan.
 */
function movieInfo(movie) {

    console.log(`"${movie.title}" lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.\n`);

}


// Tests the function by printing one movie
movieInfo(myMovie);
// Logs: "A Very Cool Very Engaging Movie" lasts for 20 minutes. Stars: Ian McCool, John Coolio, Jane Tarzan.

movieInfo(movieDatabase[0]);
// Logs: "Is this 'Burn Out'?" lasts for 120 minutes. Stars: Gloria Pigeon, Matteo Birdman, Lady ITS, Mr. Stress.


// Tests the function by printing all the movies in the array
for (let movie of movieDatabase) {
    movieInfo(movie);
}

/* Logs:
"Is this 'Burn Out'?" lasts for 120 minutes. Stars: Gloria Pigeon, Matteo Birdman, Lady ITS, Mr. Stress.

"Twisted Wonderland" lasts for 180 minutes. Stars: Riddle Rosehearts, Azul Ashengrotto, Jamil Viper, Jade Leech.

"A Thousand Tears" lasts for 1000 minutes. Stars: Sir Lots O' Water, Pretty Face, The Eyes Twins, Miss. Sadness.

"Jurassic Park" lasts for 170 minutes. Stars: George the T-Rex, April the Pterodactyl, Hernest the Velociraptor, Linda the Triceratops.
*/