import {startConfetti,stopConfetti,removeConfetti} from './confetti.js-master/confetti.js';
//player data
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');


const resultTextEl = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerScissor = document.getElementById('playerScissor');
const playerPaper = document.getElementById('playerPaper');

const gameIconsEl = document.querySelectorAll('i');


const computerRock = document.getElementById('computerRock');
const computerScissor = document.getElementById('computerScissor');
const computerPaper = document.getElementById('computerPaper');


let playerScoreNum = 0;
let computerScoreNum = 0;

let computerChoice = '';
const choices = {
  rock: { name: 'rock', defeats: ['scissor'] },
  paper: { name: 'paper', defeats: ['rock'] },
  scissor: { name: 'scissor', defeats: ['paper'] },
 
};


function removeSelection()
{
  gameIconsEl.forEach((icon)=>{
    icon.classList.remove('selected','selected2');
  })

  stopConfetti();
  removeConfetti();
}

function computerRandomChoice()
{
  let randomChoiceNum = Math.random();
  if(randomChoiceNum < 0.3)
  {
    computerChoice = 'rock';
  


  }
  else if(randomChoiceNum <=0.5)
  {
    computerChoice = 'paper';
    
  }
  else{
    computerChoice = 'scissor';
   
  }

  
}

function updateScore(playerChoice)
{
  if(playerChoice===computerChoice)
  {
    resultTextEl.textContent = "It's a Tie";
  }else{
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1)
    {
      startConfetti();
      resultTextEl.textContent = "You won !";
      playerScoreNum++;
      playerScoreEl.textContent = playerScoreNum;
    }
    else{
      resultTextEl.textContent = "You Lost !";
      computerScoreNum++;
      computerScoreEl.textContent = computerScoreNum;
    }
  }
}


function checkResult(playerChoice)
{
  removeSelection();
  computerRandomChoice();
  showComputerChoice(computerChoice);
  updateScore(playerChoice);
}
function select(playerChoice)
{
  checkResult(playerChoice);
  switch(playerChoice)
  {
    case 'rock':
      playerChoiceEl.textContent = '--Rock';
      playerRock.classList.add('selected');
      break;

    case 'paper':
      playerChoiceEl.textContent = '--Paper';
      playerPaper.classList.add('selected');
    break;

    case 'scissor':
      playerChoiceEl.textContent = '--Scissor';
      playerScissor.classList.add('selected');
      break;
    default:
      break;
  }
}



function showComputerChoice(computerChoice)
{
  switch(computerChoice)
  {
    case 'rock':
      computerRock.classList.add('selected2');
      computerChoiceEl.textContent = '--Rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected2');
      computerChoiceEl.textContent = '--Paper';
    break;

    case 'scissor':
      computerScissor.classList.add('selected2');
      computerChoiceEl.textContent = '--Scissor';
      break;
    default:
      break;
  }
}


function resetGame()
{
 
  playerScoreNum = 0;
  computerScoreNum = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultTextEl.textContent = '';
  removeSelection();

}

window.resetGame = resetGame;
window.select = select;

