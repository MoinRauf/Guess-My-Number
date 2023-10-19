'use strict';

let initialScore = 20; // Store the initial score
let scoree = initialScore;
const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ NO Number!';
    displayMessage('⛔ NO Number!');
    // document.querySelector('.guess').value = '';
  } else if (guess === SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;
    // document.querySelector('.message').textContent = ' Correct Number! 🎉';
    displayMessage(' Correct Number! 🎉');
    // document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoree > highscore) {
      highscore = scoree;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (scoree > 1) {
      // document.querySelector('.message').textContent =
      // guess < SecretNumber ? ' Too low! 📉' : ' Too high! 📈';
      displayMessage(guess < SecretNumber ? ' Too low! 📉' : ' Too high! 📈');
      scoree--;
      document.querySelector('.score').textContent = scoree;

      //   document.querySelector('.guess').value = '';
    } else {
      // document.querySelector('.message').textContent = '😭 You lost the game!';
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   else if (guess < SecretNumber) {
//     if (scoree > 1) {
//       document.querySelector('.message').textContent = ' Too low! 📉';
//       scoree--;
//       document.querySelector('.score').textContent = scoree;

//       //   document.querySelector('.guess').value = '';
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   else if (guess > SecretNumber) {
//     if (scoree > 1) {
//       document.querySelector('.message').textContent = ' Too high! 📈';
//       scoree--;
//       document.querySelector('.score').textContent = scoree;

//       //   document.querySelector('.guess').value = '';
//     } else {
//       document.querySelector('.message').textContent = '😭you lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  scoree = initialScore;
  document.querySelector('.score').textContent = scoree;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = ' Start guessing...';
  displayMessage(' Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
