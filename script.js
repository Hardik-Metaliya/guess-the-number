'use strict';
//test content is used to get or change text value
// value is use to manupalate the input field
// then we have a event listner which takes a 'click ' and a fumction (){} to do
// document.querySelector('.guess').value=129;

// let secreatnumber;
// const randgenerator = function () {
//   return (secreatnumber = Math.trunc(Math.random() * 20) + 1);
// };
// let score = 19;
// randgenerator();
// document.querySelector('.number').textContent = secreatnumber;

let secreatnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;
// document.querySelector('.number').textContent = secreatnumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessvalue = document.querySelector('.guess').value;
  if (!guessvalue || guessvalue < 0) {
    document.querySelector('.message').textContent = '❌No Number';
  } else if (guessvalue == secreatnumber) {
    document.querySelector('.message').textContent = '✨🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreatnumber;
    if (Highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
    // document.querySelector('.guess').value = NULL;
  } else if (guessvalue > secreatnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '➕ Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗You lost the game';
      document.querySelector('body').style.backgroundColor = '#ff0000';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guessvalue < secreatnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '➖ Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❗You lost the game';
      document.querySelector('body').style.backgroundColor = '#ff0000';

      document.querySelector('.score').textContent = 0;
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    // secreatnumber=randgenerator();
    secreatnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.number').textContent = secreatnumber;
  });
  console.log(guessvalue);
});
