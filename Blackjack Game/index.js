let firstCard = 4;
let secondCard = 8;
let hasBlackJack = false;
let isAlive =  true;
let message = "";

let sum = firstCard + secondCard;

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    
    console.log(message);
}
