/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script fetches and displays jokes using the Official Joke API.
 * It defines a function `fetchRandomJoke()` that returns a promise resolving with the requested jokes.
 * It supports:
 *   - Random joke fetching
 *   - Jokes by type ("general", "knock-knock", "programming")
 *   - Fetching multiple jokes (up to 10)
 *   - Automatic retries (up to 3) if the fetch fails
 * Bonus: Includes joke-by-type and multiple joke support.
 */

/**
 * Fetches one or more random jokes from the Official Joke API.
 *
 * @function fetchRandomJoke
 * @param {number} [noOfJokes=1] - Number of jokes to fetch (max 10)
 * @param {string|null} [jokeType=null] - Type of joke: "general", "knock-knock", or "programming". Random if null.
 * @returns {Promise<string[]>} Promise that resolves with an array of joke strings (each including setup + punchline)
 *
 * @example
 * fetchRandomJoke(1, "programming")
 *   .then(jokes => console.log(jokes))
 *   .catch(err => console.error(err));
 */
function fetchRandomJoke(noOfJokes = 1, jokeType = null) {
    const typeArray = ["general", "knock-knock", "programming"];

    //Randomizing the type of joke if not selected
    if (!jokeType) {
        const randomIndex = Math.floor(Math.random() * typeArray.length);
        jokeType = typeArray[randomIndex];
    }

    let retries = 0;

    // Generate the correct API endpoint based on type and count
    const getEndpoint = () => {
        if (noOfJokes === 1) {
            // For a single joke of any type
            return jokeType
                ? `https://official-joke-api.appspot.com/jokes/${jokeType}/random`
                : `https://official-joke-api.appspot.com/jokes/random`;
        } else {
            // For multiple jokes by type (only works with specific types)
            return `https://official-joke-api.appspot.com/jokes/${jokeType}/ten`;
        }
    };

    // Perform the actual fetch
    const fetchJoke = () => {
        const url = getEndpoint();

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                // Ensure data is always treated as an array
                const jokesArray = Array.isArray(data) ? data : [data];
                // Only return the requested number of jokes (max 10 due to API)
                return jokesArray.slice(0, noOfJokes).map(joke => `${joke.setup}<br>${joke.punchline}`);
            });
    };

    // Wrap in retry logic
    return new Promise((resolve, reject) => {
        const attemptFetch = () => {
            fetchJoke()
                .then(resolve)
                .catch((error) => {
                    retries++;
                    if (retries < 3) { // Can try again for a maximum of 3 times
                        console.warn(`Retrying fetch... (Attempt ${retries + 1})`);
                        attemptFetch();
                    } else {
                        reject(error);
                    }
                });
        };

        attemptFetch();
    });
}


// ===============================
// DOM Interaction
// ===============================

// DOM Elements
const jokeArea = document.getElementById("jokeArea");
const singleJokeBtn = document.getElementById("singleJokeBtn");
const jokeTypeSelect = document.getElementById("joke-type");
const jokeCountInput = document.getElementById("joke-count");

// Event Listener: Fetch and display jokes on button click
singleJokeBtn.addEventListener("click", async () => {
    jokeArea.innerHTML = "<p>🤡</p>";

    const selectedType = jokeTypeSelect.value;
    const selectedCount = parseInt(jokeCountInput.value);

    try {
        const jokes = await fetchRandomJoke(selectedCount, selectedType);
        jokeArea.innerHTML = jokes.map(joke => `<p>${joke}</p>`).join("");
    } catch (error) {
        jokeArea.innerHTML = `<p>Error! No jokes would be funny enough for you :(</p>`;
        console.error("Fetch failed:", error);
    }
});