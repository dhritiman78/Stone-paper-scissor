let nameOfUser = prompt("Enter your name","Guest");
document.querySelector(".userName").innerText = nameOfUser;
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");
var userDisplay = document.querySelector(".txt1");
var comDisplay = document.querySelector(".txt2");
var param, comParam, user, comp;
// 0 = Stone, 1 = Paper, 2 = Scissors
function compTurn() {
    setTimeout(() => {
    comParam = Math.floor(Math.random()*3);
    if (comParam == 0) {
        comDisplay.innerHTML = "<b>Stone 👊</b>";
    }
    else if (comParam == 1) {
        comDisplay.innerHTML = "<b>Paper 🖐️</b>";
    }
    else if (comParam == 2) {
        comDisplay.innerHTML = "<b>Scissor ✌️</b>";
    }
    }, 1000);
}
//Clearing the parameters
function newDisplay() {
    userDisplay.innerHTML="Click the buttons below to select";
    comDisplay.innerHTML="Automatically selected by the computer";   
}
// Updating score
function updateScore(parameter1) {
    user = parseInt(userScore.innerText);
    comp = parseInt(compScore.innerText);
    if (parameter1 == 0) {
        user++;
    userScore.innerText = user;
    compScore.innerText = comp;
    }
    else if (parameter1 == 1) {
        comp++;
    userScore.innerText = user;
    compScore.innerText = comp;
    }
}
// Declaration of winner
function decWinner() {
    setTimeout(() => {
        var winPositions = [[0,2],[1,0],[2,1],[2,0],[0,1],[1,2]];
        for (let i = 0; i < 6; i++) {
            let [x,y] = [winPositions[i][0],winPositions[i][1]];
                if (x== param && y==comParam && i>=0 && i<3) {
                    alert("Congratulations, You won");
                    newDisplay();
                    updateScore(0);
                }
                else if (x== param && y==comParam && i>=3 && i<6) {
                    alert("Oops, You lost");
                    newDisplay();
                    updateScore(1);
                }
                else if (param == comParam){
                    alert("Game tied");
                    param = -1;
                    comParam = -2;
                    newDisplay();
                    break;
                }
            }
    }, 2000);
    }
 btn1.addEventListener("click", () => {
    param = 0;
    userDisplay.innerHTML = "<b>Stone 👊</b>";
    compTurn();
    decWinner();
});
btn2.addEventListener("click", () => {
    param = 1;
    userDisplay.innerHTML = "<b>Paper 🖐️</b>";
    compTurn();
    decWinner();
});
btn3.addEventListener("click", () => {
    param = 2;
    userDisplay.innerHTML = "<b>Scissor ✌️</b>";
    compTurn();
    decWinner();
});