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
function getHumanChoice(){
  let humanChoice = '';
  while(!['rock', 'paper', 'scissors'].includes(humanChoice)){
    humanChoice = prompt("Enter \"rock\", \"paper\" or \"scissors\".");
  }
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

// CREATE function to playRound
function playRound(){
  let pPick = getHumanChoice();
  let cPick = getComputerChoice();
  if (pPick === 'rock' || pPick === 'paper' || pPick ==='scissors') {
    console.log(`Player: ${pPick}`);
    console.log(`Computer: ${cPick}`);
    if(pPick === "rock"){
      if(cPick === "paper"){
        computerScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU LOSE! Rock loses to paper!`);
      } else if(cPick === "scissors"){
        humanScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU WIN! Rock wins against scissors!`);
      } else{
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. DRAW!`);
      }
    } else if(pPick === "scissors"){
      if(cPick === "rock"){
        computerScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU LOSE! Scissors loses against rock!`);
      } else if(cPick === "paper"){
        humanScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU WIN! Scissors wins against paper!`);
      } else{
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. DRAW!`);
      }
    } else if(pPick === "paper"){
      if(cPick === "scissors"){
        computerScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU LOSE! Paper loses to scissors!`);
      } else if(cPick === "rock"){
        humanScore++;
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. YOU WIN! Paper wins againt rock!`);
      } else{
        console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}. DRAW!`);
      }
    }
  }
}

playGame();
declareWinner(computerScore, humanScore);