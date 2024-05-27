document.getElementById('load-more').addEventListener('click', function () {
    const cardContainer = document.getElementById('card-container');
    const existingCards = Array.from(cardContainer.getElementsByClassName('card')).slice(0, 5);
    let newCardsHTML = '';

    existingCards.forEach(card => {
        newCardsHTML += `<div class="card">${card.innerHTML}</div>`;
    });
    cardContainer.innerHTML += newCardsHTML;
});