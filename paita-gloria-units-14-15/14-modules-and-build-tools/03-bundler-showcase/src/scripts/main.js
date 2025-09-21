/**
 * @file main.js
 * @author Gloria Paita
 * @description
 * Entry point script that dynamically injects Pokémon game cards into the DOM,
 * handles modal opening for each category, and fixes a known Chrome accessibility
 * issue related to Bootstrap modals.
 */

// JS
import { showCategoryModal } from './helper.js';

// CSS
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// DOM Manipulation: Injecting the images into the code ===========================================
import pkmnEmerald from '../assets/img/pokemon-emerald.avif';
import pkmnPocket from '../assets/img/pokemon-pocket.png';
import pkmnMD from '../assets/img/pokemon-mystery-dungeon.jpg';
import pkmnRanger from '../assets/img/pokemon-ranger.webp';
import pkmnSnap from '../assets/img/pokemon-snap.avif';
import pkmnGo from '../assets/img/pokemon-go.webp';

/**
 * Array of Pokémon game categories with titles, images, and descriptions.
 * @type {Array<{title: string, img: string, desc: string}>}
 */
const games = [
  {
    title: 'Main Series',
    img: pkmnEmerald,
    desc: 'Start your journey as a Pokémon Trainer with the original RPG series.'
  },
  {
    title: 'Pocket',
    img: pkmnPocket,
    desc: 'Your favourite TCG game in digital format.'
  },
  {
    title: 'Ranger',
    img: pkmnRanger,
    desc: 'Take on missions as a Pokémon Ranger and protect the wild.'
  },
  {
    title: 'Mystery Dungeon',
    img: pkmnMD,
    desc: 'Become a Pokémon and explore randomly generated dungeons!'
  },
  {
    title: 'Mobile Games',
    img: pkmnGo,
    desc: 'Play Pokémon on-the-go with various mobile experiences.'
  },
  {
    title: 'Other Games',
    img: pkmnSnap,
    desc: 'Etc etc etc.'
  }
];

/**
 * Initializes the game cards on DOMContentLoaded by injecting HTML elements
 * and attaching click event listeners to open the category modal.
 */
document.addEventListener('DOMContentLoaded', () => {
  games.forEach(game => {
    const col = document.createElement('div');
    col.className = 'col-sm-12 col-md-6 col-lg-4 mb-4';

    col.innerHTML = `
    <div class="card h-100 shadow open-modal">
      <img src="${game.img}" class="card-img" alt="${game.title}">
      <div class="card-body" data-category="${game.title}">
        <h2 class="card-title">${game.title}</h2>
        <p class="card-text">${game.desc}</p>
      </div>
    </div>
  `;

    document.getElementById('game-grid').appendChild(col);

    // Attach event listener to open modal on card click
    col.querySelector('.open-modal').addEventListener('click', () => {
      showCategoryModal(game.title);
    });
  });
});

/**
 * Fixes Chrome accessibility bug with Bootstrap modals where
 * an element with `aria-hidden` is blocked because its descendant retains focus.
 * On modal hide, this removes focus from the active element.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener('hide.bs.modal', function (event) {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  });
});