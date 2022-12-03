/***
 * 
 * 
Bonus»
Rock / Paper / Scissor»

   using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, 
   a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.


*/

function RPS() {

    function determineComputer(num) {
        if (num <= .34) {
            return "rock";
        }
        else if (num <= .67) {
            return "paper";
        }
        else {
            return "scissor";
        }
    }
    let answers = ["rock", "paper", "scissor"];
    // let alert = prompt("What's your choice?");
    // let prompt = require("prompt");
    // prompt.start();
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
    // let computerChoice = determineComputer(math.floor(Math.random() * 3));

    // alert(userChoice);



    if (!userChoice || answers.indexOf(userChoice) === -1) {
        alert("Please select a valid option");
        return;
    }

    if (userChoice === computerChoice) {
        alert("Tie!");
        return;

    }

    if (userChoice === "rock" && computerChoice === "paper") {
        alert("You lose, computer picked " + computerChoice);
        return;
    }
    if (userChoice === "paper" && computerChoice === "scissor") {
        alert("You lose, computer picked " + computerChoice);
        return;
    }
    if (userChoice === "scissor" && computerChoice === "rock") {
        alert("You lose, computer picked " + computerChoice);
        return;
    }

    alert("You win! Computer picked " + computerChoice);
    return;
}

RPS();




// alert("Welcome to Rock Paper Scissors!");
// let choices = ["Rock", "Paper", "Scissors"];
// alert("The choices are Rock, Paper and Scissors. Rock beats Scissors, Paper beats Rock, and Scissors beats paper.");
// let userChoice = prompt("What's your choice?");
// let choicesNumber = choices.length;
// let randomNumber = Math.floor(Math.random() * choicesNumber);
// let computerChoice = choices[randomNumber];
// if (computerChoice == userChoice) { alert("It's a tie!"); }
// else if (computerChoice == "Rock") {
//     if (userChoice == "paper") { alert("You won! Give yourself a pat on the back!") }
//     else if (userChoice == "Scissors") { alert("Sorry, you lost, try again?") };
// }
// else if (computerChoice == "Paper") {
//     if (userChoice == "Scissors") { alert("You won! Give yourself a pat on the back!") }
//     else if (userChoice == "Rock") { alert("Sorry, you lost, try again?") };
// }
// else if (computerChoice == "Scissors") {
//     if (userChoice == "Rock") { alert("You won! Give yourself a pat on the back!") }
//     else if (userChoice == "Paper") { alert("Sorry, you lost, try again?") };
// }