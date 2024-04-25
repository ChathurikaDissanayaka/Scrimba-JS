let firstCard = 4;
let secondCard = 8;
let hasBlackJack = false;
let isAlive =  true;
let message = "";

let sum = firstCard + secondCard;

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

function startGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        // 🙂
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        // 🥳
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        // 😭
        isAlive = false;
    }
    
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
