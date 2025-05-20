/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains my solution for Assignment 06: "Identity Hijack" from the DOM unit.
 * 
 * Task: Replace all visual and textual branding from Stanford University with equivalents from UC Berkeley.
 * 
 * Assignment Breakdown:
 * 
 * 1. Branding & Naming
 *    - Find any elements with the word 'Stanford' and replace it with 'Berkeley';
 *    - Remember to change the title of the page as well
 *    - Replace any symbols of Stanford University with Berkeley
 * 
 * 2. Color Scheme
 *    - Find all elements with the 'Stanford' color(s) and replace them with the 'Berkeley' color(s)
 * 
 * 3. Links
 *    - Manually find all the links in the navigation area
 * and replace them with references to the Berkeley website if there are
 * similar pages there. Otherwise links should point to the Berkeley homepage
 */

// Replace all occurrences of "Stanford" with "Berkeley" in <p> elements
const allParagraphs = document.querySelectorAll('p');
const allPMatches = Array.from(allParagraphs).filter(p => p.textContent.includes('Stanford'));
allPMatches.forEach((aParagraph) => {

    // If the <p> contains the class "su-brand", removes the class before replacing "Berkeley" with "Stanford". Without doing so, the text will display "Bkl" instead of "Berkley".
    if (aParagraph.classList.contains("su-brand")) {
        aParagraph.classList.remove("su-brand");
    }
    aParagraph.textContent = aParagraph.textContent.replaceAll("Stanford", "Berkeley");
});

// Replace "Stanford" with "Berkeley" in <a> elements
const allAnchors = document.querySelectorAll('a');
const allAnchorMatches = Array.from(allAnchors).filter(a => a.textContent.includes('Stanford'));
allAnchorMatches.forEach((anAnchor) => {
    if (anAnchor.classList.contains("su-brand")) {
        anAnchor.classList.remove("su-brand");
    }
    anAnchor.textContent = anAnchor.textContent.replace("Stanford", "Berkeley");
});

// Replace "Stanford" with "Berkeley" in <h3> elements
const allH3 = document.querySelectorAll('h3');
const allH3Matches = Array.from(allH3).filter(h3 => h3.textContent.includes('Stanford'));
allH3Matches.forEach((aH3) => {
    if (aH3.classList.contains("su-brand")) {
        aH3.classList.remove("su-brand");
    }
    aH3.textContent = aH3.textContent.replace("Stanford", "Berkeley");
});


// Update the page title to replace "Stanford" with "Berkeley"
const originalTitle = document.head.getElementsByTagName("title");
originalTitle[0].textContent = originalTitle[0].textContent.replace("Stanford", "Berkeley");


// Update Stanford colors to Berkeley colors
// Call-to-action buttons
const cta = document.querySelectorAll("[data-ga-category='Call to action']");

cta.forEach(ctaElement => {
    ctaElement.style.backgroundColor = "#003262";
});

// Navbar background and menu toggle
const nav = document.querySelector("[data-ga-category='Brand bar']");
nav.style.backgroundColor = "#003262";

const navMenu = document.getElementById("menu-toggle");
navMenu.style.backgroundColor = "#003262";

// Update menu item link colors
const menuItems = document.querySelectorAll("nav > div > ul li a");

menuItems.forEach(items => {
    items.style.color = "#BC9B6A";
});

// Search toggle button
const searchToggle = document.getElementById("search-toggle");
searchToggle.style.backgroundColor = "#003262";

// Update navigation links in the gateway menu
const navLinks = document.querySelectorAll("#menu-gateway-nav li > a");
navLinks.forEach(links => {
    links.style.color = "#BC9B6A";
});

// Update scroller background
const sectionScroller = document.getElementById("splash--scroller");
sectionScroller.style.backgroundColor = "#003262";

// Update post category text color
const postCategory = document.querySelectorAll("p.post-category");

postCategory.forEach(post => {
    post.style.color = "#003262";
});

// Update event type text color
const eventTypes = document.querySelectorAll("span.event-type");

eventTypes.forEach(event => {
    event.style.color = "#003262";
});

// Update calendar event date background
const eventShortDate = document.querySelectorAll("time.event-short-date");

eventShortDate.forEach(event => {
    event.style.backgroundColor = "#BC9B6A";
});

// Update footer <h3> titles color
const footerH3s = document.querySelectorAll("section#footer__content > div > div > div > h3");
footerH3s.forEach(h3s => {
    h3s.style.color = "#003262";
});

/*
// Simplified:
const footerH3s = document.querySelectorAll("#footer__content div h3")
footerH3s.forEach(h3s => {
    h3s.style.color ="#003262";
});
*/

// Update footer background color
const footer = document.getElementById("footer__global-footer");
footer.style.backgroundColor = "#003262";

// Update footer link colors and border
const footerLinks = document.querySelectorAll("#footer__content>ul li a");

footerLinks.forEach(links => {
    links.style.borderColor = "#003262";
    links.style.color = "#003262";
});


// Replace any symbols of Stanford University with Berkeley
// Couldn't find any symbols.


// Update navigation links to point to Berkeley's website

const newsLink = document.querySelector("#menu-item-2297 > a");
newsLink.href = "https://news.berkeley.edu/";

const eventsLink = document.querySelector("#menu-item-2296 > a");
eventsLink.href = "https://events.berkeley.edu/";

const academicsLink = document.querySelector("#menu-item-106 > a");
academicsLink.href = "https://www.berkeley.edu/academics/";

const researchLink = document.querySelector("#menu-item-108 > a");
researchLink.href = "https://www.berkeley.edu/research/";

const healthCareLink = document.querySelector("#menu-item-1336 > a");
healthCareLink.href = "https://www.berkeley.edu/";

const campusLifeLink = document.querySelector("#menu-item-109 > a");
campusLifeLink.href = "https://www.berkeley.edu/campus-life/";

const admissionLink = document.querySelector("#menu-item-107 > a");
admissionLink.href = "https://www.berkeley.edu/admissions/";

const aboutLink = document.querySelector("#menu-item-21974 > a");
aboutLink.href = "https://www.berkeley.edu/about/";

const studentsLink = document.querySelector("#menu-item-9055 > a");
studentsLink.href = "https://www.berkeley.edu/students/";

const familyLink = document.querySelector("#menu-item-17 > a");
familyLink.href = "https://calparents.berkeley.edu/";

const facultyLink = document.querySelector("#menu-item-8817 > a");
facultyLink.href = "https://www.berkeley.edu/faculty-staff/";

const visitorsLink = document.querySelector("#menu-item-7621 > a");
visitorsLink.href = "https://visit.berkeley.edu/";

const alumniLink = document.querySelector("#menu-item-18 > a");
alumniLink.href = "https://my.berkeley.edu/";

const headerLink = document.querySelector("#header--wordmark");
headerLink.href = "https://www.berkeley.edu/";