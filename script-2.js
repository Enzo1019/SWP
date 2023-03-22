// card Game
const cards = document.querySelectorAll('.card');
const matchesDisplay = document.querySelector('#matches');
const attemptsDisplay = document.querySelector('#attempts');
const restartButton = document.querySelector('#restart-button');

let flippedCards = [];
let matches = 0;
let attempts = 0;

function flipCard() {
  if (flippedCards.length === 2) {
    return;
  }

  this.querySelector('img').style.display = 'block';
  this.classList.add('flipped');

  flippedCards.push(this);

  if (flippedCards.length === 2) {
    attempts++;

    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
      matches++;
      flippedCards = [];
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => {
          card.querySelector('img').style.display = 'none';
          card.classList.remove('flipped');
        });

        flippedCards = [];
      }, 1000);
    }

    updateProgress();
  }
}

function updateProgress() {
  matchesDisplay.textContent = matches;
  attemptsDisplay.textContent = attempts;

  if (matches === cards.length / 2) {
    setTimeout(() => {
      alert('Congratulations! You won the game!');
    }, 500);
  }
}

function shuffleCards() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * cards.length);
    card.style.order = randomPosition;
  });
}

function restartGame() {
  flippedCards = [];
  matches = 0;
  attempts = 0;

  cards.forEach((card) => {
    card.querySelector('img').style.display = 'none';
    card.classList.remove('flipped');
  });

  shuffleCards();
  updateProgress();
}

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});

restartButton.addEventListener('click', restartGame);

shuffleCards();
