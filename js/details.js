export class Details {
    constructor(apiKey, baseUrl, ui) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.ui = ui;
        this.gameDetailsOverlay = document.getElementById('gameDetailsOverlay');
        this.closeOverlayBtn = document.getElementById('closeOverlay');
        this.attachCloseListener();
    }

    async getGameDetails(id) {
        const endpoint = `${this.baseUrl}/api/game?id=${id}`;
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
                const details = await response.json();
                console.log(details);
                this.ui.displayDetails(
                    details.thumbnail,
                    details.title,
                    details.genre,
                    details.platform,
                    details.status,
                    details.description,
                    details.game_url
                );
                this.gameDetailsOverlay.classList.remove('d-none');
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (err) {
            console.error(err);
        }
        this.ui.hideLoadingSpinner();
    }

    attachCloseListener() {
        this.closeOverlayBtn.addEventListener('click', () => {
            this.gameDetailsOverlay.classList.add('d-none');
        });
    }
}
