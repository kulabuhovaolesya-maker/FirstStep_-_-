// Згортає блок з деталями конкретної вакансії
function collapseDetails(detailsId) {
  const detailsElement = document.getElementById(detailsId);
  if (detailsElement) {
    detailsElement.style.display = 'none';
  }
}

// Розгортає блок з деталями конкретної вакансії
function expandDetails(detailsId) {
  const detailsElement = document.getElementById(detailsId);
  if (detailsElement) {
    detailsElement.style.display = 'block';
  }
}

// Приховує всю картку вакансії
function hideVacancy(cardId) {
  const cardElement = document.getElementById(cardId);
  if (cardElement) {
    cardElement.style.display = 'none';
  }
}

// Повертає всі приховані картки, не змінюючи стан їхніх деталей
function showAllVacancies() {
  const allCards = document.querySelectorAll('.vacancy-card');
  allCards.forEach(function(card) {
    card.style.display = 'flex';
  });
}
