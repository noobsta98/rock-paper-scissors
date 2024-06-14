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
  const logRoundOutcome= document.createElement('p');
  if(pPick === cPick){
    text.textContent = `PLAYER SCORE: ${humanScore}
      COMPUTER SCORE: ${computerScore}.`
    // const logRoundTie = document.createElement('p');
    const tieText = document.createTextNode(`Round ${currentRound} TIE!`);
    logRoundOutcome.appendChild(tieText);
    result.appendChild(logRoundOutcome);
  } else if(
    (pPick === 'rock' && cPick === 'paper') ||
    (pPick === 'paper' && cPick === 'scissors') ||
    (pPick === 'scissors' && cPick === 'rock')
  ){
    text.textContent = `PLAYER SCORE: ${humanScore}
      COMPUTER SCORE: ${++computerScore}.`
      // const roundLogLose = document.createElement('p');
      logRoundOutcome.textContent = `Round ${currentRound} Player: ${pPick} loses to Computer: ${cPick}`;
      logRoundOutcome.style.color = 'rgba(255, 0, 0, 0.8)'
      result.appendChild(logRoundOutcome);
  } else{
    text.textContent =`PLAYER SCORE: ${++humanScore}
      COMPUTER SCORE: ${computerScore}.`
      // const roundLogWin = document.createElement('p');
      logRoundOutcome.textContent = `Round ${currentRound} Player: ${pPick} wins against Computer: ${cPick}`
      logRoundOutcome.style.color = 'rgba(0, 255, 0, 1)'
      result.appendChild(logRoundOutcome);
  }
  currentRound++;
  if(currentRound > TOTALROUNDS){
    declareWinner(computerScore, humanScore);
    container.removeEventListener('click', handleEvent);
  }
}


const container = document.querySelector('.container');
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