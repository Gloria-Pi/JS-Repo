/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 */

function fetchRandomJoke(noOfJokes = 1, jokeType = null) {
    const typeArray = ["general", "knock-knock", "programming"];

    //Randomizing the type of joke if not selected
    if (!jokeType) {
        const randomIndex = Math.floor(Math.random() * typeArray.length);
        jokeType = typeArray[randomIndex];
    }

    let retries = 0;

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
                // Normalize result to always be an array of jokes
                const jokesArray = Array.isArray(data) ? data : [data];
                // Only return the requested number of jokes (max 10 due to API)
                return jokesArray.slice(0, noOfJokes).map(joke => `${joke.setup}<br>${joke.punchline}`);
            });
    };

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

// DOM Elements
const jokeArea = document.getElementById("jokeArea");
const singleJokeBtn = document.getElementById("singleJokeBtn");
const jokeTypeSelect = document.getElementById("joke-type");
const jokeCountInput = document.getElementById("joke-count");

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