# 01 Story

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026  

<br>

# Assignment

- Add an event listener to the button so that it calls a makeStory function
when clicked.
- In the makeStory function, retrieve the current values of the form input
elements, make a story from them, and output that in the story div (like
"Joseph really likes pink cucumbers.")

<br>
<br>

# Approach to Solution  

## Structure of the Script  

- **Language Setup**: Sets document language attribute.
- **Element Selection**: Selects the button and prepares for user interaction.
- **Event Listener**: Calls `makeStory()` when the button is clicked.
- **Story Generation**: Fetches input, constructs the story string, updates the DOM.

<br>

## Setting the Language Attribute  

- At the beginning of the script, the `lang` attribute of the `<html>` tag is explicitly set to `"en"`.  
- This was handled by selecting the `<html>` element and applying `setAttribute("lang", "en")`.  

```javascript
const htmlElement = document.documentElement;
htmlElement.setAttribute("lang", "en");
```  

This ensures proper accessibility and better behavior for screen readers and search engines.  

<br>

## Selecting and Preparing the Button  

- The button intended to generate the story is selected by its ID (`gen-button`).  
- An event listener is attached to the button, triggering the `makeStory()` function on click.  

```javascript
const storyBtn = document.getElementById("gen-button");
storyBtn.addEventListener("click", makeStory);
```  

<br>

## Generating the Story Using the makeStory function  

- The `makeStory()` function retrieves values from three input fields:
  - A noun input field (`noun`).
  - An adjective input field (`adjective`).
  - A person’s name input field (`person`).  

- Before being used, the values are **trimmed** with `.trim()` to remove unnecessary whitespace.  
- A small story string is constructed using a simple template:  

```javascript
const story = `${nameInput} is terrified of ${adjInput} ${nounInput}.`;
```  

- Finally, the generated story is injected into the `div` with ID `story` using `textContent`.  

```javascript
const storyDiv = document.getElementById("story");
storyDiv.textContent = story;
```  

<br>

# Example Usage  

If the user inputs the following:  
- Noun: `"cucumbers"`  
- Adjective: `"pink"`  
- Person: `"Joseph"`  

The resulting story displayed inside the `#story` div will be:  

```
Joseph is terrified of pink cucumbers.
```  