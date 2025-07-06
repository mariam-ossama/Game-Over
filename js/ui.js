export class UI {
    constructor() {
        this.gamesContainer = document.getElementById('gamesContainer');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.overlayDetails = document.getElementById('overlayDetails');
    }

    displayGames(list) {
        let box = '';
        for (let i = 0; i < list.length; i++) {
            box += `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="game-item" data-id="${list[i].id}">
                <div class="card h-100">
                    <div class="p-3 rounded-top">
                        <img src="${list[i].thumbnail || 'https://placehold.co/400'}" class="card-img-top rounded-top w-100" alt="Game Poster">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between align-items-center">
                            ${list[i].title}<span class="badge bg-primary">Free</span>
                        </h5>
                        <p class="card-text">${list[i].short_description}</p>
                    </div>
                    <div class="card-footer">
                        <p class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-dark">${list[i].genre}</span>
                            <span class="badge bg-dark">${list[i].platform}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;
        }
        this.gamesContainer.innerHTML = box;
    }

    displayDetails(imgSrc, title, cat, platform, status, description,gameUrl) {
        this.overlayDetails.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="game-img-container">
                    <img src="${imgSrc || 'https://placehold.co/400'}" alt="Game Image" class="w-100">
                </div>
            </div>
            <div class="col-md-6">
                <div class="game-details-container">
                    <h4>Title: <span>${title}</span></h4>
                    <p>Category: <span class="badge bg-primary">${cat}</span></p>
                    <p>Platform: <span class="badge bg-primary">${platform}</span></p>
                    <p>Status: <span class="badge bg-primary">${status}</span></p>
                    <p>${description}</p>
                    <a href="${gameUrl}" target="_blank" type="button" class="btn btn-outline-warning text-white">Show Game</a>
                </div>
            </div>
        </div>`;
    }

    showLoadingSpinner() {
        this.loadingSpinner.style.display = 'block';
    }

    hideLoadingSpinner() {
        this.loadingSpinner.style.display = 'none';
    }
}
