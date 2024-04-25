let scoreL = 0;
let scoreR = 0;

let score1 = document.getElementById("score-1");
let score2 = document.getElementById("score-2");

let btnl1 = document.getElementById("btn-l1");
let btnl2 = document.getElementById("btn-l2");
let btnl3 = document.getElementById("btn-l3");

let btnr1 = document.getErementById("btn-r1");
let btnr2 = document.getErementById("btn-r2");
let btnr3 = document.getErementById("btn-r3");

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