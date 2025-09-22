# 02 Webpack friendly

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Implement some of exercises of the previous units as a webpack project
- The aims are
    - to rewrite the same exercises with modern JS syntax
    - to use webpack, and polyfills if necessary, to make the code compatible with the largest
number of browsers
- Document any important configuration or code changes in readme.md
- Test the projects with the largest number of browsers you can

<br>

# Chosen Project(s)
## 01 - [Book list](../../../paita-gloria-units-09-11/09-the-dom/02-book-list/readme.md)
### Why I Chose This Project

I picked this project because, even though the core JavaScript is simple, it includes just enough complexity to make working with Webpack interesting and educational. Specifically, it gave me the chance to figure out how to handle:

- `setTimeout` logic for delaying actions in the browser

- Injecting a CSS file after a **delay**, instead of loading it immediately

- Working with **images** and **favicons** as static assets

- Basic **DOM manipulation** (creating elements, setting styles, etc.)

These features helped me practice how to properly configure Webpack loaders, manage assets, and apply polyfills to support older browsers — all while keeping the project small and manageable.

<br>

## 02 - [Enhanced Arrivals](../../../paita-gloria-units-09-11/10-events-and-listeners/05-enhanced-arrivals/readme.md)
### Why I Chose This Project

I chose this project because it presented an exciting opportunity to enhance and modernize a complex application dealing with dynamic flight data. This project challenged me to:

- Refactor legacy code by merging similar functions, improving maintainability and reducing redundancy  
- Implement modern JavaScript features like optional chaining (`?.`), nullish coalescing (`??`), and concise arrow functions  
- Handle dynamic UI updates involving DOM manipulation, such as adding flight rows with expandable details (accordions)  
- Configure Webpack to bundle and polyfill for modern browser compatibility while maintaining efficient asset management  
- Learn more about the import/export of webpack modules

Overall, this project allowed me to deepen my understanding of both frontend architecture and build tooling, making the code more robust, readable, and scalable.

> **Note:** The complete project is not contained within this folder.  
> To explore the full project, please navigate to the `[02-modern-enhanced-arrivals]` folder located at `15-modern-javascript/03-greatest-hits`.  
>  
> For details on how the project was refactored, see the [refactoring readme](../../15-modern-javascript/03-greatest-hits/02-modern-enhanced-arrivals/readme.md).  
>  
> For an in-depth explanation of the Webpack configurations used, refer to the [Webpack notes](../../15-modern-javascript/03-greatest-hits/02-modern-enhanced-arrivals/webpack-notes.md).