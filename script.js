const ownField = document.getElementById('own');
const enemyField = document.getElementById('enemy');
const ownDecks = document.querySelectorAll('#own .deck');

const oneDecks = [];
const twoDecks = [];
const threeDecks = [];
const fourDecks = [];
const allDecks = [];
let blink = 1;

ownField.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('deck') &&
    !e.target.classList.contains('set') &&
    !e.target.classList.contains('destroid') &&
    !e.target.classList.contains('missed')
  ) {
    if (allDecks.length < 20) {
      e.target.classList.add('set');
      allDecks.push([...ownDecks].indexOf(e.target));
      addShips([...ownDecks].indexOf(e.target));
    }
  }
});

function addShips(deckIndex) {}
