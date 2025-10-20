/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Implements an interactive image gallery where users can:
 * - Load 10 random images on page load
 * - Add a new image dynamically
 * - Remove images selectively or the last image
 * - Reorder images using drag and drop
 * The gallery state (images and order) is persisted in localStorage.
 */

const gallery = document.getElementById("gallery");
const addImageBtn = document.getElementById("addImageBtn");
const removeImageBtn = document.getElementById("removeImageBtn");

let draggedImage = null; // currently dragged wrapper element
let imageIds = [];       // array of image IDs currently in the gallery

const STORAGE_KEY = "savedGalleryImageIds";
const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 150;
const MAX_IMAGES = 100; // maximum number of images to fetch from API

/**
 * Returns a stable URL for a given image ID with fixed width and height.
 * @param {number} id - The ID of the image
 * @returns {string} The URL of the image
 */
function getImageUrl(id) {
    return `https://picsum.photos/id/${id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
}

/**
 * Saves the current array of image IDs to localStorage.
 */
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imageIds));
}

/**
 * Loads the saved array of image IDs from localStorage.
 * @returns {number[]|null} The array of image IDs or null if none is saved
 */
function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
}

// --- DRAG & DROP HANDLERS ---

/**
 * Handles drag start event on a wrapper.
 * Sets the draggedImage variable and adds visual feedback.
 * @param {DragEvent} e 
 */
function handleDragStart(e) {
    const wrapper = e.target.closest(".image-wrapper");
    if (!wrapper) return;
    draggedImage = wrapper;
    wrapper.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
}

/**
 * Handles drag end event on a wrapper.
 * Clears the draggedImage and removes visual feedback.
 * @param {DragEvent} e 
 */
function handleDragEnd(e) {
    const wrapper = e.target.closest(".image-wrapper");
    if (wrapper) wrapper.classList.remove("dragging");
    draggedImage = null;
}

/**
 * Allows dropping by preventing default behavior.
 * @param {DragEvent} e 
 */
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

/**
 * Handles drop event to reorder images in the gallery.
 * Updates both the DOM order and imageIds array.
 * @param {DragEvent} e 
 */
function handleDrop(e) {
    e.preventDefault();

    const targetWrapper = e.target.closest(".image-wrapper");
    if (!targetWrapper || !draggedImage || draggedImage === targetWrapper) return;

    const allWrappers = Array.from(gallery.children);
    const draggedIndex = allWrappers.indexOf(draggedImage);
    const targetIndex = allWrappers.indexOf(targetWrapper);

    // Move dragged element in DOM
    if (draggedIndex < targetIndex) {
        gallery.insertBefore(draggedImage, targetWrapper.nextSibling);
    } else {
        gallery.insertBefore(draggedImage, targetWrapper);
    }

    // Update imageIds order
    imageIds = Array.from(gallery.children).map(el => parseInt(el.dataset.id));
    saveToLocalStorage();
}

// --- IMAGE CREATION ---

/**
 * Creates a wrapper element containing the image and a remove button.
 * Attaches drag and drop events to the wrapper and click event to the remove button.
 * @param {number} id - The image ID
 * @returns {HTMLDivElement} The image wrapper element
 */
function createImageElement(id) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");
    wrapper.draggable = true;
    wrapper.dataset.id = id;

    const img = document.createElement("img");
    img.src = getImageUrl(id);
    img.alt = `Random image ${id}`;
    wrapper.appendChild(img);

    const btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.textContent = "×";
    btn.title = "Remove this image";
    wrapper.appendChild(btn);

    // Prevent the button from interfering with drag events
    btn.addEventListener("mousedown", e => e.stopPropagation());
    btn.addEventListener("dragstart", e => e.stopPropagation());

    // Remove the image when clicking the button
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        gallery.removeChild(wrapper);
        imageIds = imageIds.filter(imgId => imgId !== id);
        saveToLocalStorage();
    });

    // Attach drag & drop events to the wrapper
    wrapper.addEventListener("dragstart", handleDragStart);
    wrapper.addEventListener("dragend", handleDragEnd);
    wrapper.addEventListener("dragover", handleDragOver);
    wrapper.addEventListener("drop", handleDrop);

    return wrapper;
}

// --- CORE LOGIC ---

/**
 * Adds an image with the given ID to the gallery.
 * @param {number} id 
 */
function addImage(id) {
    const img = createImageElement(id);
    gallery.appendChild(img);
    imageIds.push(id);
    saveToLocalStorage();
}

/**
 * Removes the last image from the gallery.
 */
function removeLastImage() {
    if (gallery.lastElementChild) {
        const lastImg = gallery.lastElementChild;
        const lastId = parseInt(lastImg.dataset.id);
        gallery.removeChild(lastImg);
        imageIds = imageIds.filter(id => id !== lastId);
        saveToLocalStorage();
    }
}

// --- INITIAL LOAD ---

/**
 * Loads the initial gallery on page load.
 * Uses saved IDs from localStorage or fetches random images from Picsum Photos API.
 */
async function loadInitialImages() {
    const saved = loadFromLocalStorage();

    if (saved && saved.length > 0) {
        imageIds = saved;
        imageIds.forEach((id) => {
            const img = createImageElement(id);
            gallery.appendChild(img);
        });
    } else {
        try {
            const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=${MAX_IMAGES}`);
            const data = await res.json();
            const availableIds = data.map((img) => parseInt(img.id));
            const selectedIds = [];

            while (selectedIds.length < 10) {
                const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
                if (!selectedIds.includes(randomId)) {
                    selectedIds.push(randomId);
                }
            }

            selectedIds.forEach((id) => addImage(id));
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }
}

// --- BUTTON EVENTS ---

/**
 * Adds a new random image to the gallery when the add button is clicked.
 */
addImageBtn.addEventListener("click", async () => {
    try {
        const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=${MAX_IMAGES}`);
        const data = await res.json();
        const availableIds = data.map((img) => parseInt(img.id));

        let newId;
        do {
            newId = availableIds[Math.floor(Math.random() * availableIds.length)];
        } while (imageIds.includes(newId));

        addImage(newId);
    } catch (error) {
        console.error("Error adding image:", error);
    }
});

// Remove last image when the remove button is clicked
removeImageBtn.addEventListener("click", removeLastImage);

// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", loadInitialImages);