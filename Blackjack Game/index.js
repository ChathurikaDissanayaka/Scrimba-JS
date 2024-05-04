let player = {
    name: "S4ch1",
    chips: 150
}

let cards = [] 
let hasBlackJack = false
let isAlive =  false
let message = ""
let sum = 0;

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let cardValue = Math.floor(Math.random()*13) + 1
    if(cardValue == 1){
        return 11
    } else if(cardValue > 10){
        return 10
    }
    return cardValue 
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards =[firstCard, secondCard]
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
