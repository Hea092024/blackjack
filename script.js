let firstCard = Math.floor(Math.random() * 11 + 1)
let secondCard = Math.floor(Math.random() * 11 + 1);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true 
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function renderGame () {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards [0] + " " + cards [1]
    if (sum < 20) {
        message = " Do you want to draw a new card?"
    } else if ( sum === 21) {
        message = " Wohoo, You've got Blackjack!"
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
// console.log(message)

function newCard () {
    console.log(" Drawing a new card from the deck!")
    let thirdCard = Math.floor(Math.random() * 11) + 1
    sum += thirdCard
    startGame()
}

function startGame (){
    renderGame()
}