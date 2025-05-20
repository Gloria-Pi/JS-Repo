# 02 Universal Translator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a function named `helloWorld` that:
- takes 1 parameter, a language code (e.g. "it", "de", "en")
- returns "Hello, World!" for the given language, for at least 3 languages. It should default to returning English.

Call that function for each of the supported languages and log the result to make sure it works.

<p>&nbsp;</p>

# Approach to Solution

## 1. Creating the `helloWorld` function

This function takes a language code (`lang`, *string*) as a parameter and returns the phrase "Hello, World!" in the specified language. If the provided language code is not recognized or is missing, the function defaults to English.

The function supports multiple languages, including Italian, German, French, and Japanese. If a language code that isn't defined in the function is passed, the function defaults to English.

### Code Explanation
The function uses a `switch` statement to check the provided language code and return the corresponding translation of "Hello, World!".
It also declared a `let` variable (`message`) before the start of the `switch`, which is used to store a string with the greeting in the chosen language, before returning it.

```javascript
function helloWorld(lang) {

    let message;

    switch (lang) {
        case "it":
            message = "Ciao, Mondo!";
            break;
        case "de":
            message = "Hallo, Welt!";
            break;
        case "fr":
            message = "Salut, le Monde!";
            break;
        case "jp":
            message = "Konnichiwa, Sekai!";
            break;
        default:
            message = "Hello, World!";
    }

    return message;
}
```

<p>&nbsp;</p>

## 2. Testing the `helloWorld` function

```javascript
console.log(helloWorld("it"));  // Logs: "Ciao, Mondo!"
console.log(helloWorld("de"));  // Logs: "Hallo, Welt!"
console.log(helloWorld("fr"));  // Logs: "Salut, le Monde!"
console.log(helloWorld("jp"));  // Logs: "Konnichiwa, Sekai!"
console.log(helloWorld());      // Logs: "Hello, World!" (defaults to English)
console.log(helloWorld("ru"));  // Logs: "Hello, World!" (default case)
```