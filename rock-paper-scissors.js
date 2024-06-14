document.addEventListener('DOMContentLoaded', () => {
  const ROUNDS = 5;

// INIT computerScore and humanScore
let computerScore = 0;
let humanScore = 0;

// PLAY game 
function playGame(){
  for(let i = 0; i < ROUNDS; i++){
  playRound();
  }
}

// CHECK score, DECLARE winner
let declareWinner = (cScore, hScore) => {
  if(cScore > hScore){
    alert("COMPUTER WINS!!!!");
  } else if(hScore > cScore){
    alert("PLAYER WINS!!!!");
  } else{
    alert("DRAW!!!!");
  }
}

// Get computerChoice
function getComputerChoice(){
  const choice = ['rock', 'paper', 'scissors'];
  let randNum = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[randNum];
  return (computerChoice);
}
// Ask humanChoice
// function getHumanChoice(){
//   let humanChoice = '';
//   while(!['rock', 'paper', 'scissors'].includes(humanChoice)){
//     humanChoice = prompt("Enter \"rock\", \"paper\" or \"scissors\".");
//   }
//   humanChoice = humanChoice.toLowerCase();
//   return humanChoice;
// }

function getHumanChoice(){
  container.addEventListener('click', (e) =>{
    let target = e.target;
  
    switch (target.id) {
      case 'rock':
      case 'paper':
      case 'scissor':
        // console.log(target.textContent)
        playRound(target.textContent.isLowerCase());
        break;
    }
  });
}

// CREATE function to playRound
<<<<<<< HEAD
function playRound(){
  let pPick = getHumanChoice();
  let cPick = getComputerChoice();
=======
function playRound(pPick){
  pPick = pPick.toLowerCase();
  // console.log(pPick);
// let pPick = getHumanChoice();
let cPick = getComputerChoice();
>>>>>>> parent of 418cc1c (add ui counter for win/loss)
  console.log(`Player: ${pPick}`);
  console.log(`Computer: ${cPick}`);
  if(pPick === cPick){
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
    console.log('TIE!');
  } else if(
    (pPick === 'rock' && cPick === 'paper') ||
    (pPick === 'paper' && cPick === 'scissors') ||
    (pPick === 'scissors' && cPick === 'rock')
  ){computerScore++;
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
    console.log(`${pPick} loses to ${cPick}. YOU LOSE!`);
  }else{
    humanScore++;
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
    console.log(`${pPick} beats ${cPick}. YOU WIN!`);
  }
}


const container = document.querySelector('div');
<<<<<<< HEAD
const result = document.querySelector('p');
const text = document.createTextNode(`PLAYER SCORE: ${humanScore}
COMPUTER SCORE: ${computerScore}`);
result.appendChild(text);
=======

container.addEventListener('click', (e) =>{
  let target = e.target;
>>>>>>> parent of 418cc1c (add ui counter for win/loss)

playGame();
// declareWinner(computerScore, humanScore);
});