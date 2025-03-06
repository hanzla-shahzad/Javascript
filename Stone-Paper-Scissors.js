let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

let getcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let playGame = (userChoice) => {
   const compChoice = getcompChoice();
   console.log("comp choice is = ", compChoice);

let drawGame = () => {
    msg.innerHTML = "Game was draw, Play again";
    msg.style.backgroundColor = "black";
};

let showWin = (userWin) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerHTML = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerHTML = "You lose";
        msg.style.backgroundColor = "red";
    }
}
   if(userChoice === compChoice) {
    drawGame();
   } else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? true : false;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin);
   }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});