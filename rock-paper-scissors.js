document.addEventListener('DOMContentLoaded', () => {
  // const ROUNDS = 5;

// INIT computerScore and humanScore
let computerScore = 0;
let humanScore = 0;

// PLAY game 
// function playGame(){
//   for(let i = 0; i < ROUNDS; i++){
//   playRound();
//   }
// }

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

// CREATE function to playRound
function playRound(pPick){
  pPick = pPick.toLowerCase();
  // console.log(pPick);
// let pPick = getHumanChoice();
let cPick = getComputerChoice();
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

container.addEventListener('click', (e) =>{
  let target = e.target;

  switch (target.id) {
    case 'rock':
    case 'paper':
    case 'scissor':
      // console.log(target.textContent)
      playRound(target.textContent);
      break;
  }
});
// declareWinner(computerScore, humanScore);
});