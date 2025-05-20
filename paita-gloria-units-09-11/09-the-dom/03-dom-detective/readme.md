# 03 DOM Detective

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Go to [www.gog.com](https://www.gog.com/)
- Use the devtools to view the DOM and write Javascript in the console
- Use the DOM access methods to find the following:
    - Every image on the page
    - The main menu at the top of the page
    - All the news items under "News"
    - The footer
    - All the social media links at the bottom of the page
- Produce a readme.md file with
    - snippets of your Javascript code
    - explanations of which elements they select

<br>
<br>

# Approach to Solution

# Finding Every Image on the Page

To select all `<img>` elements in the page I used `document.getElementsByTagName("img")`.

```js
const allImgs = document.getElementsByTagName("img");
console.log(allImgs);
```

The result is an `HTMLCollection`: a **live**, **array-like object** that contains all the `<img>` elements in the DOM at the time the command is run.

This is what gets printed by the `console.log()`:

```js
HTMLCollection(264) [img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, img.ng-star-inserted, …]

//These are contained within the HTMLCollection
> [0 … 99]
> [100 … 199]
> [200 … 263]
length: 264
> [[Prototype]]: HTMLCollection

undefined
```

<br>

Let's break this up:

```js
HTMLCollection(264) [img.ng-star-inserted, img.ng-star-inserted, ..., img, ...]
```

This means there are **264 image elements** on that page.

> Note: 
>
>The class `ng-star-inserted` comes from Angular. 
> 
>Angular adds this class when it dynamically inserts elements into the DOM.  
>
>So when you see `<img class="ng-star-inserted">`, it means Angular generated that image element dynamically at runtime.

---
<br>

```js
[0 … 99]
[100 … 199]
[200 … 263]
```

These are collapsed groups of the elements in the collection.

The browser chunks large arrays or collections into ranges so it doesn't flood the console. Each range is clickable and will expand to show the individual `<img>` elements.

---
<br>

```js
length: 264
```
The collection contains 264 image elements total.

---
<br>

```js
[[Prototype]]: HTMLCollection
```

This shows the __prototype chain__, meaning that the object is an instance of the built-in `HTMLCollection` class.

It's clickable. When expanded, it will show what methods and properties are available on it (like item(), length, etc.).

> Note:
>
>In JavaScript, every object is linked to another object called its **prototype**.
>
>This prototype acts like a blueprint or a parent object that shares properties and methods with the original object.
>
>This concept is part of what's called the prototype chain.

---
<br>

```js
console.log(allImgs);
```

This returns `undefined` in the console because the `console.log()` itself returns `undefined`.


<br>
<br>


# Finding The Main Menu at the Top of the Page

To select the main menu in the page I wrote the following:

```js
const menu = document.getElementsByClassName("menu-main");
console.log(menu);
```

This selected the `div` at the top of the page containing the STORE, MORE, SIGN IN sub-menus.

The following code is printed to the console:

```js
HTMLCollection [div.menu-main.hide-in-lite-mode]
> 0: div.menu-main.hide-in-lite-mode
length: 1
> [[Prototype]]: HTMLCollection

undefined
```

An alternative would have been to select the `div` containing the the previous sub-menus plus the logo, the shopping cart icon etc:

```js
const menuBig = document.getElementsByClassName("menu__container");
console.log(menuBig);


HTMLCollection [div.menu__container]

//These are contained within the HTMLCollection
0: div.menu__container
length: 1
[[Prototype]]: HTMLCollection

undefined
```

Or to select the whole navbar:

```js
const navBar = document.getElementsByTagName("nav");
console.log(navBar);

HTMLCollection [nav.menu.menu-prices-in-eur.menu--windows.menu-curr-symbol-before.menu-language-en-us]

//These are contained within the HTMLCollection
0: nav.menu.menu-prices-in-eur.menu--windows.menu-curr-symbol-before.menu-language-en-us
length: 1
[[Prototype]]: HTMLCollection

undefined
```


<br>
<br>


# Finding All the News Items Under "News"

To find all the news items under "News" I've chosen this query:

```js
const newsItems = document.querySelectorAll("a.news-tile");
console.log(newsItems);

```

`document.querySelectorAll("a.news-tile")` selects all `<a>` elements (anchor tags) that have the class `news-tile`.

It returns a `NodeList`, which is a **collection of DOM nodes** matching the selector.

This is what gets printed to the console:

```js
NodeList(11) [a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile, a.news-tile]
    
    //These are all contained within the NodeList
    0: a.news-tile
    1: a.news-tile
    2: a.news-tile
    3: a.news-tile
    4: a.news-tile
    5: a.news-tile
    6: a.news-tile
    7: a.news-tile
    8: a.news-tile
    9: a.news-tile
    10: a.news-tile
    length: 11
    [[Prototype]]: NodeList

    //These are all contained within [[Prototype]]: NodeList
        entries: ƒ entries()
        forEach: ƒ forEach()
        item: ƒ item()
        keys: ƒ keys()
        length: (...)
        values: ƒ values()
        constructor: ƒ NodeList()
        Symbol(Symbol.iterator): ƒ values()
        Symbol(Symbol.toStringTag): "NodeList"
        get length: ƒ length()
        [[Prototype]]: Object

undefined
```

As a result I selected **11 elements total** (each one an `<a>` tag with the class `news-tile`).

The `0: a.news-tile`, `1: a.news-tile`, `...` are individual elements in the list, indexed like an array.

The `[[Prototype]]: NodeList` shows that the *NodeList object* inherits from the *NodeList prototype*. By clicking on it, the console will display the **methods and properties** one can use on a NodeList.

E.g.:  
    - entries: ƒ entries()  
    - forEach: ƒ forEach()  
    - item: ƒ item()  


>Note:
>NodeLists are different from HTMLCollections in many ways. For example, unlike HTMLCollection, a NodeList returned by querySelectorAll is not live — it does not automatically update if the DOM changes.

<br>
<br>


# Finding the Footer

`document.getElementsByTagName("footer")` finds all `<footer>` elements in the entire HTML document.

It returns an `HTMLCollection`, an array-like object containing all the matching elements.

Essentially, we're asking the browser to find us all the `<footer>` tags in the document. The footer element on gog.com contains different divs, all recognizable by the classes `footer-microservice`, `main-footer`, etc.

```js
const footer = document.getElementsByTagName("footer");
console.log(footer);
```

```js
HTMLCollection [footer.footer-microservice.main-footer]
0: footer.footer-microservice.main-footer
length: 1
[[Prototype]]: HTMLCollection
```


<br>
<br>

# Finding All the Social Media Links at the Bottom of the Page

In order to select all the social media links I've used this code:

```js
const icons = document.querySelectorAll("i.footer-ic");
console.log(icons);
```

This selected all `<i>` elements with the class `footer-ic`.


```js
NodeList(6) [i.footer-ic.footer-icon-facebook.footer-fb, i.footer-ic.footer-icon-twitter.footer-twitter, i.footer-ic.footer-icon-twitch.footer-twitch, i.footer-ic.footer-icon-facebook.footer-fb, i.footer-ic.footer-icon-twitter.footer-twitter, i.footer-ic.footer-icon-twitch.footer-twitch]
    //These are all contained within the NodeList
    0: i.footer-ic.footer-icon-facebook.footer-fb
    1: i.footer-ic.footer-icon-twitter.footer-twitter
    2: i.footer-ic.footer-icon-twitch.footer-twitch
    3: i.footer-ic.footer-icon-facebook.footer-fb
    4: i.footer-ic.footer-icon-twitter.footer-twitter
    5: i.footer-ic.footer-icon-twitch.footer-twitch
    length: 6
    [[Prototype]]: NodeList

undefined
```

- `NodeList(6)` means the list contains **6 nodes (elements)**.

- These are `<i> tags `(commonly used for icons).

- Each icon has multiple classes, for example:

```js
<i class="footer-ic footer-icon-facebook footer-fb"></i>
```

There are two sets of three icons:

- First set (indexes 0–2): Facebook, Twitter, Twitch

- Second set (indexes 3–5): Same icons again

This likely means the page has two separate footer sections (maybe top and bottom, or desktop and mobile versions), each with the same social icons.