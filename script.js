'use strict';


let myNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
let score=20;

const displayMessage = function (message)
{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🛑 No number !!');
  } else if (guess === myNumber) {
    displayMessage('🎉 correct guess !!');

    // changing the color of body after wining
    document.querySelector('body').style.backgroundColor='#60b347';

    document.querySelector('.number').style.width ='30rem';
    document.querySelector('.number').textContent=myNumber;
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }


  } else if(score>1) {
      if (guess > myNumber && guess - myNumber > 5) {
        displayMessage(' Too high..');
      } else if (guess < myNumber && myNumber - guess > 5) {
        displayMessage('Too Low ..');
      } else {
        displayMessage('❌ wrong number');
      }
        document.querySelector('.score').textContent = --score;
      
  } else{
    // you have lost the game.
    if(score-1===0) // making the score ===0;
    document.querySelector('.score').textContent = --score;

    displayMessage('You have Lost the Game !!');
    document.querySelector('body').style.backgroundColor='red';

    document.querySelector('.number').style.width ='30rem';
    document.querySelector('.number').textContent=myNumber;
  }
});


document.querySelector('.again').addEventListener('click',function(){

    myNumber = Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value=null;

    displayMessage('Start guessing...');
    
    document.querySelector('.number').textContent='?';

    document.querySelector('body').style.backgroundColor='#333';

    document.querySelector('.number').style.width='15rem';


});
