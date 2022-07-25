let sum = 0;
let cards = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

const player = {
  name: "Mickey",
  bet: 100,
};

const playerEl = document.querySelector("#player-el");
const messageEl = document.querySelector("#message-el");
const cardsEl = document.querySelector("#cards-el");
const sumEl = document.querySelector("#sum-el");

playerEl.textContent = `Player Name: ${player.name}, Amount: ${player.bet}`;

function getRandomNumber() {
  return Math.floor(Math.random() * 13 + 1);
}

function startGame() {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  checkValues();
}

function checkValues() {
  // cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
  // Reset
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  // cardsEl.textContent = cards.join(" & ");

  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "Congrats! You win blackjack.";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "Game Over!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card);
    checkValues();
  } else if (isAlive === false) {
    alert("You are already out of the game!");
  } else if (hasBlackJack === true) {
    alert("You have already won!");
  }
}
