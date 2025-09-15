import { Modal, Dropdown} from 'bootstrap'; //required for the modal and dropdown menu
import '../styles/main.scss';
import { showCategoryModal } from './helper.js';


// DOM Manipulation: Injecting the images into the code ===========================================
import pkmnEmerald from '../assets/img/pokemon-emerald.avif';
import pkmnPocket from '../assets/img/pokemon-pocket.png';
import pkmnMD from '../assets/img/pokemon-mystery-dungeon.jpg';
import pkmnRanger from '../assets/img/pokemon-ranger.webp';
import pkmnSnap from '../assets/img/pokemon-snap.avif';
import pkmnGo from '../assets/img/pokemon-go.webp';

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

//Ensures the HTML is loaded before running JS
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

        //Modal
        col.querySelector('.open-modal').addEventListener('click', () => {
            showCategoryModal(game.title);
        });
    });
});

// Fix to the fix "Blocked aria-hidden on an element because its descendant retained focus..." error on Chrome (due to the modals)
// It ensures that focus is removed from the active element whenever a modal is closed.
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('hide.bs.modal', function (event) {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });
});