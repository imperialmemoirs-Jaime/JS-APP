let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let allCards = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
let sumCount = document.getElementById("sum-count")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
   let randomNumber = Math.floor(Math.random() * 10) + 1
   return randomNumber
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " "
    }
    sumCount.textContent = "Sum: " + sum
    if (sum <= 20) {
        message =  "You want to draw a new card?"    
    } else if (sum === 21) {
        hasBlackjack =  true
        message = "You have got the Blackjack!!!!!!!"
    } else {
        isAlive = false
        message = "You are out of the game :("
    }
    messageEl.textContent = message
   
}

function newCard() {
    console.log("Drawing new card from the deck")
    let card = getRandomCard()
    allCards.push(card)
    sum += card
    renderGame()
}

function resetGame() {
    console.log("function triggered")
    firstCard = 0
    secondCard = 0
    sum = 0
    allCards = [];
    isAlive = true;
    hasBlackjack = false;
    message = "Want to play a round?";
    renderGame();
}