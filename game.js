'use strict';
const generateInput = document.getElementById("generate");
const guessInput = document.getElementById("guess");
const generateForm = document.getElementById("generate-form");
const button = document.querySelector("button");
const yourNumber =document.getElementById("you-number");
const machineNumber = document.getElementById("machine-number");
const result = document.getElementById("result");


function formSubmit(event) {
    event.preventDefault();
}


function gamePlay() {
    const Value = parseInt(generateInput.value);
    const guessValue = parseInt(guessInput.value);
    const randomValue = Math.ceil(Math.random() * parseInt(Value));
    if (guessValue > Value) {
        alert(`0과 ${Value}사이의 숫자를 넣어주세요!`);
    }
    else{
        yourNumber.innerText = `You chose: ${guessValue}, `;
        machineNumber.innerText = `the machine chose: ${randomValue}.`;
    }
    //게임결과
   /* if (randomValue === guessValue) {
        result.innerText = "You Won!!!!!";
    }
    else {
        result.innerText = "You lost";
    } */
}

function result(){
    if(gamePlay()){
        result.innerText = "You Won!!!!!";
    }
    else {
        result.innerText = "You lost";
    }

}


generateForm.addEventListener("submit", formSubmit);
button.addEventListener("click", gamePlay,result);
