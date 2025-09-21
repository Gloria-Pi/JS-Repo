import { Modal } from 'bootstrap';

// DOM Manipulation: Modal ===========================================
// helper.js
export const categories = {
    'Main Series': ['Pokémon Red', 'Pokémon Gold', 'Pokémon Ruby', 'Pokémon Diamond', 'Pokémon Sword'],
    'Pocket': ['Pokémon TCG Online', 'Pokémon TCG Live'],
    'Ranger': ['Pokémon Ranger', 'Shadows of Almia', 'Guardian Signs'],
    'Mystery Dungeon': ['Red Rescue Team', 'Explorers of Time', 'Super Mystery Dungeon'],
    'Mobile Games': ['Pokémon GO', 'Pokémon Unite', 'Pokémon Masters EX'],
    'Other Games': ['Pokémon Snap', 'Pokkén Tournament', 'Detective Pikachu']
};

export function showCategoryModal(category) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const games = categories[category] || ['No games available'];
    modalTitle.textContent = category;
    modalBody.innerHTML = `
    <ul class="list-group">
      ${games.map(game => `<li class="list-group-item">${game}</li>`).join('')}
    </ul>
  `;

    const modal = new Modal(document.getElementById('gameModal'));

    modal.show();
}