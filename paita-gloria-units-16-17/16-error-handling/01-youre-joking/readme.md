# 01 You're Joking

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment
 
Create a function called `fetchRandomJoke()` that fetches one random joke from a `Random joke API` and returns a promise that resolves with the text of the joke.

Create a page that uses the function and displays the joke on the page or an error message if the
promise rejects.

The function:  
- Should use error handling to handle errors that may occur during the fetching
- Should return a Promise that resolves with the joke text, not the joke text itself
- If the fetch operation fails, the function should retry the operation up to 3 times before
giving up
- If the fetch operation fails after 3 attempts, the function should reject the promise

**Bonus**  
Create variants that can fetch jokes by number and by type.

<br>
<br>

# Approach to Solution

I made a simple web page using Vanilla HTML, CSS, JS, where one person can:

* Click a button to get jokes
* Choose a **joke type** (e.g., Programming, Knock-knock)
* Choose how many jokes (1 to 10)
* See the results right on the page

<br>

## HTML setup

I created a simple HTML structure with a joke area and controls:

```html
    <section id="jokeSpawningSection">

        <div id="jokeArea">
            <!-- Jokes will appear here -->
        </div>

        <div id="buttonArea">
            <button id="singleJokeBtn">FETCH JOKE</button>

            <!-- Menu Dropdown -->
            <label for="joke-type">Which flavour?</label>
            <select id="joke-type" name="joke-type">
                <option value="general">General</option>
                <option value="knock-knock">Knock-knock</option>
                <option value="programming">Programming</option>
            </select>

            <!-- Number Input -->
            <label for="joke-count">How many?</label>
            <input type="number" id="joke-count" name="joke-count" min="1" max="10" value="1">
        </div>

    </section>
```

<br>

## The `fetchRandomJoke()` function

I wrote the main function to fetch jokes. It takes two optional parameters:

* `noOfJokes` (default is 1)
* `jokeType` (optional)

<br>

### 1. Randomizing the joke type

If no joke type is selected, I randomly pick one from the available types.

I did this to make sure the function always knows what kind of joke to ask the API for instead of leaving it undefined.

```js
const typeArray = ["general", "knock-knock", "programming"];

if (!jokeType) {
    const randomIndex = Math.floor(Math.random() * typeArray.length);
    jokeType = typeArray[randomIndex];
}
```

This gives users a surprise joke type when they don’t pick one.

<br>

### 2. Normalizing the joke data

The API returns different shapes of data depending on the endpoint:

* Fetching one joke returns an **object**
* Fetching multiple jokes returns an **array of objects**

To make the rest of the code simpler, I normalized the data so it's **always an array**, even if it's just one joke:

```js
const jokesArray = Array.isArray(data) ? data : [data];
```

That way I can always loop through it using `.map()` and display the jokes.


<br>

### 3. Retry logic

Sometimes, the `fetch()` call can fail because of network issues or server problems.

To handle that, I added retry logic that tries the fetch up to **3 times** before giving up. If it still fails after 3 attempts, it rejects the Promise and shows an error message.

Here’s how I handled the retrying:

```js
let retries = 0;

const attemptFetch = () => {
    fetchJoke()
        .then(resolve)
        .catch((error) => {
            retries++;
            if (retries < 3) {
                attemptFetch(); // tries again
                console.warn(`Retrying fetch... (Attempt ${retries + 1})`);
            } else {
                reject(error); // gives up after 3 retries
            }
        });
};

attemptFetch();
```

This lets the app recover from temporary issues (like slow internet), but still fails if it doesn't work after 3 tries.

<br>

### 4. Displaying the jokes

I connected the button to my function and got the selected type and count from the page. Then I displayed the jokes inside the `jokeArea`:

```js
const selectedType = jokeTypeSelect.value;
const selectedCount = parseInt(jokeCountInput.value);

try {
    const jokes = await fetchRandomJoke(selectedCount, selectedType);
    jokeArea.innerHTML = jokes.map(joke => `<p>${joke}</p>`).join("");
} catch (error) {
    jokeArea.innerHTML = `<p>Error! No jokes would be funny enough for you :(</p>`;
    console.error("Fetch failed:", error);}
```

<br>

## 🔗 API Endpoints

* One random joke:
  `https://official-joke-api.appspot.com/jokes/random`

* One random joke by type:
  `https://official-joke-api.appspot.com/jokes/{type}/random`

* Multiple jokes by type (max 10):
  `https://official-joke-api.appspot.com/jokes/{type}/ten`