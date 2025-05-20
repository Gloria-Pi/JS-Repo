Exercise 03-the-cache
=====================


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


## Assignment
Given this line of code...
`<link rel="stylesheet" href="./css/styles.css?v=1.0">`

...I have to answer the following questions:

1. What does `?v=1.0` do?
2. How does the browser cache work?

<p>&nbsp;</p>

## Approach to Solution
1. `?v=1.0` is a *query string* that is appended to the URL of the linked resource, that specifies the version of the resource.
    It's useful for *browser caching*: this way browsers have a way to understand whether the version of the resource they're parsing is newer compared to the one they've stored in the cache. If that's the case, the browser will delete the older version of the resource and store the one it's currently parsing in the cache.
    In this case, the string is specifying that the resource is version 1.0. 

    This query string can also be used to indicate different versions of a file (e.g., `v=1.0`, `v=1.1`, `v=2.0`), allowing developers to control which version of a file is being used.

<p>&nbsp;</p>


2. **Browser caching** makes websites faster by storing files (e.g. images, CSS, scripts...) locally and reusing them instead of downloading them again each time it visits the same site.
    Browser **cache** is like a *temporary storage space* where the web browser keeps copies of files from the websites it visits.
    
    This is a summary of what happens, in order:
    1. The first time a person visits a website, their browser downloads all the necessary files from the server in order to run the webpage
    
    2. These files are then saved in the browser's cache

    3. The next time said person visits the same website, the browser checks if it already has the files stored in its cache:
        - if the files are still the same, the browser loads them from the cache (it's faster than downloading everything again)
        - if the files have changed, the browser fetches the updated version from the server and stores it in the cache for future use
