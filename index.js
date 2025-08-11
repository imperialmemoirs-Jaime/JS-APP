let sum = 0
let allCards = []
let hasBlackjack = false
let isAlive = false
let message = ""


let messageEl = document.getElementById("message-el")
let sumCount = document.getElementById("sum-count")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " "
    }
    sumCount.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "You want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        message = "You have got the Blackjack!!!!!!!"
    } else {
        isAlive = false
        message = "You are out of the game :("
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        console.log("Drawing new card from the deck")
        let card = getRandomCard()
        allCards.push(card)
        sum += card
        renderGame()
    }
}

function resetGame() {
    console.log("function triggered")

    // Set all game state variables to their initial values
    sum = 0
    allCards = []
    isAlive = false
    hasBlackjack = false
    message = "Want to play a round?"

    // Update the display elements directly
    cardsEl.textContent = "Cards: "
    sumCount.textContent = "Sum: " + sum
    messageEl.textContent = message
}