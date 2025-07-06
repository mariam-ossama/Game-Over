import { UI } from './ui.js';
import { Home } from './home.js';
import { Details } from './details.js';

const apiKey = '21bec65d41msh8ca949256b05652p1eda9bjsn2efd159be0b0';
const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com';


const ui = new UI();
const home = new Home(apiKey, baseUrl, ui);
const details = new Details(apiKey, baseUrl, ui);

// set 'mmorpg' as default games category
home.getGamesByCategory('mmorpg');

// select category from navBar
home.selectCategory();

document.getElementById('gamesContainer').addEventListener('click', e => {
    const card = e.target.closest('.game-item');
    if (card) {
        const id = card.getAttribute('data-id');
        details.getGameDetails(id);
    }
});