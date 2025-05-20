# 04 Custom Detective

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Choose a news website that you like
- Use the devtools to view the DOM and write Javascript in the console

- Use the DOM access methods to find:
    - At least 10 different elements or collections of elements in the page
    - Choose interesting elements that require complex selectors to reach

- Produce a readme.md file with
    - A link to the website that you chose
    - snippets of your Javascript code
    - explanations of what which elements they select

<br>
<br>

# Approach to Solution

For this exercise I picked a news site that would grant me some degree of happiness due to its energizing colors and vibrant personality-- the [Pokemon News Website](https://www.pokemon.com/us/pokemon-news)!

<br>

## 1. The Slugs

A "**slug**" in the context of a website refers to the unique, user-friendly part of a URL that identifies a specific page or post. It's the part that follows the domain name and typically represents the content of that page.
For example, in the URL `www.example.com/about-us`, "about-us" is the slug.

```js
console.log(document.querySelectorAll('img[alt="site_slug"]'));

NodeList(6) [img.gus-bounce, img.gus-bounce, img.gus-bounce, img.bounce, img.bounce, img.bounce]
undefined
```

Here we have 6 `<img>` elements total:  
- The first 3 use the class gus-bounce.
- The last 3 use the class bounce.

In this case I wanted to select the img elements at the top of the page, which are links leading to different sites.

<br>
<br>


## 2. The Log In Link

By using this query:

```js
console.log(document.querySelector('a[href="/us/pokemon-trainer-club/login"]'));
```

I selected this element:

```html
<a href="/us/pokemon-trainer-club/login">
    <div class="avatar-icon-wrapper">
        <img class="avatar-icon avatar-icon-mobile" src="https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-avatar.png" alt="View Profile">
    </div>
</a>
```

It's the link to the login page of the pokemon-trainer-club. It contains a div (which in turns contains an img tag) which contains the image of the login button of the website.

<br>
<br>

## 3. The Animation Option in a Toggle Menu

Given this part of the code...

```js
<ul data-select-name="mediaFilter">
    <li data-option-value="/us/pokemon-news">
        <a href="/us/pokemon-news">All News</a>
    </li>
    <li data-option-value="/us/pokemon-news?articleTopic=video-games-apps">
        <a href="/us/pokemon-news?articleTopic=video-games-apps">Video Games &amp; Apps</a>
    </li>
    <li data-option-value="/us/pokemon-news?articleTopic=trading-card-game">
        <a href="/us/pokemon-news?articleTopic=trading-card-game">Trading Card Game</a>
    </li>
    <li data-option-value="/us/pokemon-news?articleTopic=animation">
        <a href="/us/pokemon-news?articleTopic=animation">Animation</a>
    </li>
    <li data-option-value="/us/pokemon-news?articleTopic=play-pokemon-events">
        <a href="/us/pokemon-news?articleTopic=play-pokemon-events">Play! Pokémon Events</a>
    </li>
</ul>
```

...I wanted to select the `<a>` tag for "Animation".
In order to do that, I used this query:

```js
console.log(document.querySelector('ul[data-select-name="mediaFilter"] > li:nth-child(4) > a'));
    <a href=​"/​us/​pokemon-news?articleTopic=animation">​Animation​</a>​
undefined
```
<br>

Here I used: 

- `[]` → **Attribute Selector**
The square brackets `[]` are used to select elements based on the presence or value of an attribute.

Example: 
```css
li[data-option-value] {
  /* Selects all <li> elements that have a data-option-value attribute */
}
```

```css
a[href="/us/pokemon-news?articleTopic=animation"] {
  /* Selects the <a> element with that specific href value */
}
```
<br>

- `:nth-child(n)` → **Positional Selector**

`:nth-child(n)` selects the **nth child element** of its parent, **regardless of tag name**.

Example:
```css
ul > li:nth-child(4) {
  /* Selects the 4th child of the <ul> */
}
```
<br>

### Notes:
- `nth-child()` counts **all element types**, not just `<li>`, unless you structure it right.
- It's **1-based indexing** — so `:nth-child(1)` selects the first child.

<br>

### Summary

| Selector       | Purpose                                 | Example usage                                         |
|----------------|------------------------------------------|--------------------------------------------------------|
| `[attr]`        | Select elements with a specific attribute | `img[alt]`, `li[data-option-value]`                   |
| `[attr="val"]`  | Select elements with a specific value     | `a[href="/about"]`                                    |
| `:nth-child(n)` | Select the nth child element of a parent | `ul > li:nth-child(4)`                                |

---


<br>
<br>

## 4. All the "Tags" of News Tiles

Every news tile on this site is composed of an image, the date, a tag and a title.
In order to select all the tags being currently employed by the news tiles on this page, I wrote:

```js
console.log(document.getElementsByClassName("tags"));
```

Which printed:

```js
HTMLCollection(11) [p.tags, p.tags, p.tags, p.tags, p.tags, p.tags, p.tags, p.tags, p.tags, p.tags, p.tags]

undefined
```

This selected elements such as
- `<p class="tags">Trading Card Game</p>`
- `<p class="tags">Video Games &amp; Apps</p>`
- `<p class="tags">Animation</p>`


<br>
<br>

## 5. A Specific "Tags" Element

But what if I wanted to select just one of those? For example, the "Trading Card Game" tag.

```html
<p class="tags">Trading Card Game</p>
```

I'd have to be a bit more imaginative and use:

```js
const allTags = document.querySelectorAll("p.tags");

let tradingCardTag = null;

allTags.forEach(tag => {
  if (tag.textContent.trim() === "Trading Card Game") {
    tradingCardTag = tag;
  }
});

console.log(tradingCardTag);
```

This code selects all `<p>` elements with the class "tags", then loops through them to find the one whose text content is exactly "Trading Card Game", and stores it in the tradingCardTag variable.


<br>
<br>

## 6. The Email Signup Terms Checkbox

```html
<div class="footer-email-checkbox-wrapper-1">
    <input type="checkbox" id="email-signup-terms" name="email-signup-terms" value="terms" class="footer-email-checkbox">
```

In order to find the checkbox saying "I accept the Pokemon.com Terms of Use and Privacy Notice" I could use different approaches. One of them is:

```js
console.log(document.querySelector("div.footer-email-checkbox-wrapper-1>input[value='terms']"));
```
Or, even more simply:

```js
console.log(document.querySelector("input[value='terms']"));
```

<br>
<br>

## 7. The Twitter/X Anchor in the Footer

```html
<div class="find-us-box">

    <a class="facebook exit-link" target="_blank" title="External: https://www.facebook.com/pokemon" rel="https://www.facebook.com/pokemon" tabindex="0">
        <span class="offscreen">Facebook</span>
    </a>
    <a class="youtube exit-link" target="_blank" title="External: https://www.youtube.com/user/Pokemon" rel="https://www.youtube.com/user/Pokemon" tabindex="0">
        <span class="offscreen">Youtube</span>
    </a>
    <a class="twitter exit-link" target="_blank" title="External: https://www.twitter.com/pokemon" rel="https://www.twitter.com/pokemon" tabindex="0">
        <span class="offscreen">Twitter</span>
    </a>
    <a class="instagram exit-link" target="_blank" title="External: https://www.instagram.com/pokemon" rel="https://www.instagram.com/pokemon" tabindex="0">
        <span class="offscreen">Instagram</span>
    </a>
    <a class="pinterest exit-link" target="_blank" title="External: https://www.pinterest.com/pokemon" rel="https://www.pinterest.com/pokemon" tabindex="0">
        <span class="offscreen">Pinterest</span>
    </a>

</div>
```

In order to find the Twitter icon (which is the third anchor in the div) I used:

```js
console.log(document.querySelector("div.find-us-box>a:nth-child(3)"));
```
This way I targeted the `third anchor child` of the `div` with class `find-us-box`.

<br>
<br>

## 8. The ::after pseudo-element

`::after` is a **CSS pseudo-element** used to insert content after an element’s content, without modifying the actual HTML. It's often used for decorative purposes, icons, spacing, or additional UI flair. It's purely visual, created in the DOM by CSS.

I found it while I was looking at the decorations applied to the Home menu option at the top of the page:

```html
<ul data-analytics-label="primary-nav" style="height: 0px; overflow: hidden; background: rgb(66, 66, 66);">

    <li class="home">
        <a href="https://www.pokemon.com/us/" target="_self" data-content-id="" data-content-type="Sidebar" data-content-variation="sidebarLeft" data-content-location="" data-content-category="" data-content-download="">
            <span class="fill"></span>
            <span class="icon icon_home"></span>
            <span class="title title_home">Home</span>
        </a>
        ::after
    </li>
```

In order to target it, I instinctively tried to write a query:

```js
console.log(document.querySelector('li.home>a:nith-child(1)::after'));
```

Which is, of course wrong. After a quick research I discovered that **it's not possible to select `::after` pseudo-elements directly with JavaScript.**

That's because **pseudo-elements** like `::after` and `::before` **aren’t part of the actual DOM** — they're part of the **render tree**, created and styled by CSS. So they can’t be selected or modified using `querySelector()`, but it's possible to access their *computed styles* with JavaScript.

```js
const liElement = document.querySelector('li.home>a:nth-child(1)');
const afterStyles = window.getComputedStyle(liElement, '::after');

console.log(afterStyles.content); // shows the content of the ::after pseudo-element
```

### Explanation:
- `window.getComputedStyle(element, pseudoElement)`
  - `element`: the DOM element (like your `li`)
  - `'::after'`: tells it to get the pseudo-element's computed styles
- You can access any CSS property that applies, such as:
  ```js
  afterStyles.content
  afterStyles.backgroundColor
  afterStyles.display
  afterStyles.width
  afterStyles.height
  ```


Unfortunately, `console.log(afterStyles.content);` resulted in `none`.
It means that in this case the `::after` does exist, but it has no content defined in the CSS — so it's rendering as empty.

Possible reasons why:  
- There's no content property defined in your CSS
- The CSS selector for `li.home::after` isn’t matching anything
- The CSS is loaded after your script (and not applied yet)
- It's being overwritten by other styles or display: none

By looking through the Elements > Styles panel I managed to find this bit of CSS code:

```css
html.no-touch.csstransitions nav.main li.home:hover::after {
    transition: background-color 0 0;
}

nav.main li.home::after {
    background-color: #919191;
    border-radius: 0 0 0 8px;
}

```

This tells us:
- The `::after` pseudo-element does exist and it’s being styled with:
    - A background color (so it’s visible)
    - A rounded corner on one side

- The `::after` appears (or styles are applied) on :hover via a transition effect
- There's no content defined — that's why content shows as `""`
- It's likely meant for some kind of hover animation or effect -> in this case, for highlighting the "Home" tab in light grey.


<br>
<br>

## 9. The Load More Button

I wanted to try using `.getElementById` and I found my change when I looked at the HTML for the Load More button used to load more news tiles.

```html
<div class="clear">
    <ul>
        (...)
    </ul>

    <a href="#" id="loadMore">
        <span class="button-lightblue">Load More News</span>
    </a>

</div>
```

Here is the command, and what it resulted in:

```js
console.log(document.getElementById("loadMore"));

    //Prints:
    <a href="#" id="loadMore">
        <span class="button-lightblue">Load More News</span>
    </a>
```

<br>
<br>

## 10. The div containing the third news tile of the page


```html
<div class="news-article">
    <img src="/static-assets/content-assets/cms2/img/video-games/_tiles/tcg-pocket/strategy/shining-revelry/mewtwo-ex-and-giratina-ex/pokemon-tcg-pocket-169-en.png" alt="Pokémon TCG Pocket: Mewtwo ex and Giratina ex Deck List Strategy">
    <div class="news-wrapper">
        <div class="date-and-tags">
            <p class="date">April 10, 2025</p>
                <p class="tags">Video Games &amp; Apps</p>
        </div>
            <h3>Pokémon&nbsp;TCG Pocket: Mewtwo&nbsp;ex and Giratina&nbsp;ex Deck List Strategy</h3>
            <p class="hidden-mobile">An exciting new Pokémon&nbsp;ex puts Mewtwo&nbsp;ex back in the spotlight.</p>
    </div>
</div>
```

Given that the previous html snippet is nested inside many divs, I used the Copy > Copy selector command of the Elements page in order to find its exact "path":

`body > div.container > section > div > div.news-list > div > ul > li:nth-child(3) > a > div > div`

Given this, I wrote this in the console to target the div with class="news-article" of the third news tile:

```js
document.querySelector("div.news-list > div > ul > li:nth-child(3) > a > div > div")
```

And it successfully selected:

```html
<div class="news-article">(...)</div> 
```