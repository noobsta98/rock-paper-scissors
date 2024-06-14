document.addEventListener('DOMContentLoaded', () => {
  const TOTALROUNDS = 5;

// INIT computerScore and humanScore
let computerScore = 0;
let humanScore = 0;
let currentRound = 1 ;

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
  let cPick = getComputerChoice();
  console.log(`Player: ${pPick}`);
  console.log(`Computer: ${cPick}`);
  if(pPick === cPick){
    text.textContent = `PLAYER SCORE: ${humanScore}
      COMPUTER SCORE: ${computerScore}.`
    const logRoundTie = document.createElement('p');
    const tieText = document.createTextNode(`Round ${currentRound} TIE!`);
    logRoundTie.appendChild(tieText);
    result.appendChild(logRoundTie);
  } else if(
    (pPick === 'rock' && cPick === 'paper') ||
    (pPick === 'paper' && cPick === 'scissors') ||
    (pPick === 'scissors' && cPick === 'rock')
  ){
    text.textContent = `PLAYER SCORE: ${humanScore}
      COMPUTER SCORE: ${++computerScore}.`
      const roundLogLose = document.createElement('p');
      roundLogLose.textContent = `Round ${currentRound} Player: ${pPick} loses to Computer: ${cPick}`;
      roundLogLose.style.color = 'rgba(255, 0, 0, 0.8)'
      result.appendChild(roundLogLose);
  } else{
    text.textContent =`PLAYER SCORE: ${++humanScore}
      COMPUTER SCORE: ${computerScore}.`
      const roundLogWin = document.createElement('p');
      roundLogWin.textContent = `Round ${currentRound} Player: ${pPick} wins against Computer: ${cPick}`
      roundLogWin.style.color = 'rgba(0, 255, 0, 1)'
      result.appendChild(roundLogWin);
  }
  currentRound++;
  if(currentRound > TOTALROUNDS){
    declareWinner(computerScore, humanScore);
    container.removeEventListener('click', handleEvent);
  }
}


const container = document.querySelector('div');
const result = document.querySelector('p');
const text = document.createTextNode(`PLAYER SCORE: ${humanScore}
COMPUTER SCORE: ${computerScore}`);
result.appendChild(text);

container.addEventListener('click', handleEvent);
  
function handleEvent(e) {
  let target = e.target;

  switch (target.id) {
    case 'rock':
    case 'paper':
    case 'scissor':
      // console.log(target.textContent)
      playRound(target.textContent);
      break;
  }
}
// declareWinner(computerScore, humanScore);
});