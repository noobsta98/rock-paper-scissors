document.addEventListener('DOMContentLoaded', () => {
  const TOTALROUNDS = 5;

// INIT computerScore and humanScore
let computerScore = 0;
let humanScore = 0;
let currentRound = 1 ;


// CHECK score, DECLARE winner
let declareWinner = (cScore, hScore) => {
  const winnerPara = document.createElement('p');
  if(cScore > hScore){
    winnerPara.textContent = 'PLAYER LOST!'
  } else if(hScore > cScore){
    winnerPara.textContent = 'PLAYER WON!'
  } else{
    winnerPara.textContent = 'TIE!';
  }
  winnerPara.style['font-size'] = '50px';
  winnerPara.style['font-weight'] = 'bolder';
  result.appendChild(winnerPara);
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
  const logRoundOutcome = document.createElement('p');
  if(pPick === cPick){
    playerScoreCount.textContent = `PLAYER SCORE: ${humanScore}.`
    computerScoreCount.textContent = `COMPUTER SCORE: ${computerScore}.`

    const tieText = document.createTextNode(`[Round ${currentRound}] TIE!`);
    logRoundOutcome.appendChild(tieText);
  } else if(
    (pPick === 'rock' && cPick === 'paper') ||
    (pPick === 'paper' && cPick === 'scissors') ||
    (pPick === 'scissors' && cPick === 'rock')
  ){
    playerScoreCount.textContent = `PLAYER SCORE: ${humanScore}.`
    computerScoreCount.textContent = `COMPUTER SCORE: ${++computerScore}.`

    logRoundOutcome.style.backgroundColor = 'red';

    logRoundOutcome.textContent = `[Round ${currentRound}] Player: ${pPick} loses to ${cPick}`;
  } else{
    playerScoreCount.textContent = `PLAYER SCORE: ${++humanScore}.`
    computerScoreCount.textContent = `COMPUTER SCORE: ${computerScore}.`

   logRoundOutcome.style.backgroundColor = 'green';

    logRoundOutcome.textContent = `[Round ${currentRound}] Player: ${pPick} wins against Computer: ${cPick}`;
    
}
  result.appendChild(logRoundOutcome);
  currentRound++;
  if(currentRound > TOTALROUNDS){
    declareWinner(computerScore, humanScore);
    container.removeEventListener('click', handleEvent);
  }
}


const container = document.querySelector('.container');
const result = document.querySelector('.result');
const playerScoreCount = document.querySelector('.player-score');
const computerScoreCount = document.querySelector('.computer-score');
playerScoreCount.textContent = `PLAYER SCORE: ${humanScore}`;
computerScoreCount.textContent = `COMPUTER SCORE: ${computerScore}`;


container.addEventListener('click', handleEvent);
  
function handleEvent(e) {
  let target = e.target;

  switch (target.id) {
    case 'rock':
    case 'paper':
    case 'scissor':
      playRound(target.textContent);
  }
}
});