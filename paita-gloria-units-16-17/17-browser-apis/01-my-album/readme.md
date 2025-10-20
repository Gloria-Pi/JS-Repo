# 01 My Album

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Create a page with **10 random images** that are dynamically loaded using requests when the user opens the page.  

The images should be of the same **height** and **width**.  
There should be **4 images per row**, so a **4x3 grid** that fits the 10 images.   

The user can click buttons to **load a new image** in real time, or **remove an image**.  
The user can also **arrange the images** in the gallery using **drag and drop**.  

The gallery should **remember** the loaded images and their order so that if the user returns to the page, the same images are loaded and keep the same order.  


<br>
<br>

# Approach to Solution

## 1. Initial Implementation

The first version of the project included:

* A 4-column CSS grid to display images:

```css
#gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2vw 15vw;
    gap: 20px;
    padding: 30px 70px;
}
```

* Buttons to add or remove images:

```html
<div id="controls">
    <button id="addImageBtn">+1</button>
    <button id="removeImageBtn">-1</button>
</div>
```

* Drag and drop to reorder images using a simple swap of `src` attributes:

```js
const tempSrc = draggedImage.src;
draggedImage.src = img.src;
img.src = tempSrc;
```

* Persistent storage of image IDs in `localStorage`:

```js
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imageIds));
}
```

**Problem:**

* Removal only deleted the last image.
* Drag and drop was fragile, especially with multiple elements or wrappers.

<br>

## 2. Understanding the Problems

**(a) Image deletion**

* Users could not remove specific images.

**(b) Drag and drop reliability**

* Adding wrappers around images (to include a delete button) broke the original drag/drop logic.
* Drag events were firing on `<img>` instead of the wrapper, and the delete button blocked propagation.

<br>

## 3. Fixing Selective Deletion

I wrapped each image in a container `div.image-wrapper` and added a button inside it:

```js
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

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        gallery.removeChild(wrapper);
        imageIds = imageIds.filter(imgId => imgId !== id);
        saveToLocalStorage();
    });

    return wrapper;
}
```

**Explanation:**

* Each wrapper stores the image ID in `data-id`.
* Clicking the “×” button removes only that wrapper and updates `imageIds`.
* This allows **selective deletion**.

**CSS visual cue:**

```css
.image-wrapper:hover img {
    opacity: 0.7; /* image fades when hovering over delete button */
}

.remove-btn {
    position: absolute;
    top: 3px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    opacity: 0;
    transition: opacity 0.2s ease, background 0.2s ease;
}

.image-wrapper:hover .remove-btn {
    opacity: 1;
}
```

* The delete button only appears on hover, and the image visually signals its removability.

<br>

## 4. Fixing Drag and Drop

With wrappers, drag/drop now works reliably:

```js
function handleDrop(e) {
    e.preventDefault();
    const targetWrapper = e.target.closest(".image-wrapper");
    if (!targetWrapper || !draggedImage || draggedImage === targetWrapper) return;

    const allWrappers = Array.from(gallery.children);
    const draggedIndex = allWrappers.indexOf(draggedImage);
    const targetIndex = allWrappers.indexOf(targetWrapper);

    if (draggedIndex < targetIndex) {
        gallery.insertBefore(draggedImage, targetWrapper.nextSibling);
    } else {
        gallery.insertBefore(draggedImage, targetWrapper);
    }

    imageIds = Array.from(gallery.children).map(el => parseInt(el.dataset.id));
    saveToLocalStorage();
}
```

**Explanation:**

* `closest(".image-wrapper")` ensures correct targets even if dragging the image or hovering over the button.
* The wrapper is moved in the DOM instead of swapping `src`.
* `imageIds` is updated to match the DOM order after every drop.
* `.dragging` class provides visual feedback during drag.
* Delete buttons no longer interfere with drag events:

```js
btn.addEventListener("mousedown", e => e.stopPropagation());
btn.addEventListener("dragstart", e => e.stopPropagation());
```

<br>

## 5. Adding Images

```js
addImageBtn.addEventListener("click", async () => {
    const newId = await fetchRandomId();
    addImage(newId);
});
```

* Each new image gets a wrapper and delete button.
* Drag & drop and hover effects work immediately.
* Image IDs are saved for persistence.

<br>


### 6. Handling Image IDs

* The API used ([Picsum Photos](https://picsum.photos/)) provides images with unique IDs in its JSON response:

```json
{
  "id": "237",
  "author": "Alex",
  "width": 5000,
  "height": 3333,
  "url": "https://unsplash.com/photos/...",
  "download_url": "https://picsum.photos/id/237/5000/3333"
}
```

* These `id` values are used in our gallery to build stable URLs:

```js
function getImageUrl(id) {
    return `https://picsum.photos/id/${id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
}
```

* The same IDs are stored in `localStorage` so the gallery **remembers exact images and their order** on page reload.

<br>
<br>

## Summary of key improvements over the initial version:

1. Users can now remove specific images instead of just the last one.
2. Drag and drop is stable and works with wrappers and delete buttons.
3. Visual cues make the interface more intuitive.
4. `imageIds` array is always in sync with DOM, ensuring proper persistence.