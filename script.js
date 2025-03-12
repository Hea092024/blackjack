let firstCard = Math.floor(Math.random() * 5 + 1);
let secondCard = Math.floor(Math.random() * 6 + 1);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let startGameButton = document.querySelector("#start-btn");
let newCardButton = document.querySelector("#new-card-btn");
let restartGameButton = document.querySelector("#restart-btn");

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards.join(" ");

  if (sum < 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo, You've got Blackjack!";
    hasBlackJack = true;
    newCardButton.style.display = "none";
    restartGameButton.style.display = "inline";
  } else if (sum === 20) {
    message = "You have a sum of 20, would you like to draw a new card?";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    newCardButton.style.display = "none";
    restartGameButton.style.display = "inline";
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let thirdCard = Math.floor(Math.random() * 11) + 1;
    cards.push(thirdCard);
    sum += thirdCard;
    renderGame();
  }
}

function startGame() {
  firstCard = Math.floor(Math.random() * 5 + 1);
  secondCard = Math.floor(Math.random() * 6 + 1);
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  message = "";

  startGameButton.style.display = "none";
  newCardButton.style.display = "inline";
  restartGameButton.style.display = "none";

  renderGame();
}

function restartGame() {
  startGame();
  restartGameButton.style.display = "none";
}

document.getElementById("start-btn").onclick = startGame;
document.getElementById("new-card-btn").onclick = newCard;
document.getElementById("restart-btn").onclick = restartGame;
