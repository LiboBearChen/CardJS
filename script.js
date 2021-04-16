import Deck from "./deck.js";
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck;

startGame();
function startGame() {
  const deck = new Deck();
  deck.shuffle();
  const deckMdipoint = Math.ceil(deck.nnumberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMdipoint));
  computerDeck = new Deck(deck.cards.slice(deckMdipoint, deck.numberOfCards));

  cleanBeforeRound();
}

function cleanBeforeRound() {
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  text.innerHTML = "";

  updateDeckCount();
}

function updateDeckCount() {}
