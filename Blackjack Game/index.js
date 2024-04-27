let firstCard = 4;
let secondCard = 8;
let cards = [firstCard, secondCard] 
let hasBlackJack = false;
let isAlive =  true;
let message = "";

let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 5
    cards.push(card)
    sum += card
    renderGame()
}
