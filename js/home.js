export class Home {
    constructor(apiKey, baseUrl, ui) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.ui = ui;
        this.categories = document.querySelectorAll('#navbarNavAltMarkup a');
    }

    selectCategory() {
        this.categories.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.categories.forEach(el => el.classList.remove('active'));
                element.classList.add('active');

                const selectedCategory = element.textContent.trim().toLowerCase();
                this.getGamesByCategory(selectedCategory);
            });
        });
    }

    async getGamesByCategory(category) {
        const endpoint = `${this.baseUrl}/api/games?category=${category}`;
        this.ui.showLoadingSpinner();
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': this.apiKey,
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            });
            if (response.ok) {
                const games = await response.json();
                this.ui.displayGames(games);
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (err) {
            console.error(err);
        }
        this.ui.hideLoadingSpinner();
    }
}
