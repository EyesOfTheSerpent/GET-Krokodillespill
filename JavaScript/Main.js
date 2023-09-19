"use strict";
//Start

const left = document.getElementById("leftSide");
const right = document.getElementById("rightSide");
let leftValue = 0;
let rightValue = 0;
const theInput = document.getElementById("theInput");
const score = document.getElementById("theScore");
let theScore = 0;
let randomNumber1 = getRandomNumber(1, 10);
let randomNumber2 = getRandomNumber(1, 10);

function changeValue(){
    randomNumber1 = getRandomNumber(1, 10);
    randomNumber2 = getRandomNumber(1, 10);
    leftValue = randomNumber1;
    rightValue = randomNumber2;
    left.innerText = leftValue;
    right.innerText = rightValue;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function checkAnswer(){
    if(theInput.value == ">" && leftValue > rightValue){
        increaseScore();
        changeValue();
        resetInput();
    }else if(theInput.value == "<" && leftValue < rightValue){
        increaseScore();
        changeValue();
        resetInput();
    }else if(theInput.value == "=" && leftValue == rightValue){
        increaseScore();
        changeValue();
        resetInput();
    }else{
        decreaseScore();
        changeValue();
        resetInput();
    }
}

function checkSymbols(){
    if(theInput.value.toString() == "<" || theInput.value.toString() == "=" || theInput.value.toString() == ">"){
        return;
    }else{
        theInput.value = "";
    }
}

function increaseScore(){
    theScore++;
    score.innerText = "Current score: " + theScore;
    theInput.value = "";
}

function decreaseScore(){
    theScore--;
    score.innerText = "Current score: " + theScore;
}

function resetInput(){
    theInput.value = "";
}

window.addEventListener("DOMContentLoaded", changeValue);

//End