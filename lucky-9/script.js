// DOM Elements
const startBtn = document.getElementById('start-btn');
const cardDeck = document.querySelector('.card-deck');
const cards = document.querySelectorAll('.card');
const drawBtn = document.querySelector('.draw-btn');
const revealBtn = document.querySelector('.reveal-btn');
const resultBox = document.querySelector('.result-box');
const scoreValue = document.querySelector('.score-value');
const opponentScoreValue = document.querySelector('.opponent-score-value');

// Game Variables
let playerScore = 0;
let opponentScore = 0;
let playerCards = [];
let opponentCards = [];
let cardDrawCount = 0;

// Event Listeners
startBtn.addEventListener('click', startGame);
drawBtn.addEventListener('click', drawCard);
revealBtn.addEventListener('click', revealCards);

// Functions
function startGame() {
    playerScore = 0;
    opponentScore = 0;
    playerCards = [];
    opponentCards = [];
    cardDrawCount = 0;
    
    // Reset card display
    cards[0].querySelector('.card-value').textContent = '?';
    cards[1].querySelector('.card-value').textContent = '?';
    cards[2].querySelector('.card-value').textContent = '?';
    
    // Hide third card initially
    cards[2].style.display = 'none';
    
    // Show the game area and hide result box
    cardDeck.style.display = 'flex';
    resultBox.style.display = 'none';
    document.querySelector('.controls').style.display = 'flex';
    
    // Hide the start button after starting
    startBtn.style.display = 'none';
    
    // Draw the initial 2 cards
    drawCard();
    
    drawBtn.disabled = false;
    revealBtn.disabled = false;
}

function drawCard(){
   const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   
   if (cardDrawCount === 0) {
       // Initial draw - 2 cards for player
       const playerCard1 = cardValues[Math.floor(Math.random() * cardValues.length)];
       const playerCard2 = cardValues[Math.floor(Math.random() * cardValues.length)];
       const opponentCard1 = cardValues[Math.floor(Math.random() * cardValues.length)];
       const opponentCard2 = cardValues[Math.floor(Math.random() * cardValues.length)];
       
       playerCards = [playerCard1, playerCard2];
       opponentCards = [opponentCard1, opponentCard2];
       
       // Display the player's first two cards
       cards[0].querySelector('.card-value').textContent = playerCard1;
       cards[1].querySelector('.card-value').textContent = playerCard2;
       
       // Calculate scores (sum of cards, mod 10 for values > 9)
       let playerTotal = playerCard1 + playerCard2;
       let opponentTotal = opponentCard1 + opponentCard2;
       
       playerScore = playerTotal > 9 ? playerTotal % 10 : playerTotal;
       opponentScore = opponentTotal > 9 ? opponentTotal % 10 : opponentTotal;
       
       cardDrawCount = 1;
   } else if (cardDrawCount === 1) {
       // Third card draw for player
       const playerCard3 = cardValues[Math.floor(Math.random() * cardValues.length)];
       const opponentCard3 = cardValues[Math.floor(Math.random() * cardValues.length)];
       
       playerCards.push(playerCard3);
       opponentCards.push(opponentCard3);
       
       // Show and display the third card
       cards[2].style.display = 'flex';
       cards[2].querySelector('.card-value').textContent = playerCard3;
       
       // Recalculate scores with all three cards
       let playerTotal = playerCards.reduce((sum, card) => sum + card, 0);
       let opponentTotal = opponentCards.reduce((sum, card) => sum + card, 0);
       
       playerScore = playerTotal > 9 ? playerTotal % 10 : playerTotal;
       opponentScore = opponentTotal > 9 ? opponentTotal % 10 : opponentTotal;
       
       // Disable draw button after third card
       drawBtn.disabled = true;
       cardDrawCount = 2;
   }
   
   // Update score display
   scoreValue.textContent = playerScore;
   opponentScoreValue.textContent = opponentScore;
}

function revealCards() {
    drawBtn.disabled = true;
    revealBtn.disabled = true;
    cardDeck.style.display = 'none';
    resultBox.style.display = 'block';
    
    // Update the score display in result box
    scoreValue.textContent = playerScore;
    opponentScoreValue.textContent = opponentScore;
    
    if (playerScore > opponentScore) {
        resultBox.querySelector('.message').textContent = 'You Win!';
    } else if (playerScore < opponentScore) {
        resultBox.querySelector('.message').textContent = 'You Lose!';
    } else {
        resultBox.querySelector('.message').textContent = 'It\'s a Draw!';
    }
    
    // Show start button again for new game
    startBtn.style.display = 'inline-block';
    startBtn.textContent = 'Play Again';
}