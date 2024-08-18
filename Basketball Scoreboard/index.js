let scoreL = 0;
let scoreR = 0;

let score1 = document.getElementById("score-1");
let score2 = document.getElementById("score-2");

function addOneLeft(){
    scoreL += 1;
    score1.innerText = scoreL;
}

function addTwoLeft(){
    scoreL += 2;
    score1.innerText = scoreL;
}

function addThreeLeft(){
    scoreL += 3;
    score1.innerText = scoreL;
}

function addOneRight(){
    scoreR += 1;
    score2.innerText = scoreR;
}

function addTwoRight(){
    scoreR += 2;
    score2.innerText = scoreR;
}

function addThreeRight(){
    scoreR += 3;
    score2.innerText = scoreR;
}

function reset(){
    scoreL = 0;
    scoreR = 0;
    score1.innerText = scoreL;
    score2.innerText = scoreR;
}