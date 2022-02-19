'use strict';

// Selecting elemetns
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const heading =  document.querySelector('h1');

// Generating random number between 1-6
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Adding random number to dice image
img1.setAttribute('src', `images/dice${randomNumber1}.png`);
img2.setAttribute('src', `images/dice${randomNumber2}.png`);

// See which player is the winner
if(randomNumber1 > randomNumber2) {
  heading.textContent = 'Player 1 Wins 🥳 ';
}

if(randomNumber1 < randomNumber2) {
  heading.textContent = 'Player 2 Wins 🥳 ';

}

if(randomNumber1 === randomNumber2) {
  heading.textContent = 'Draw 💀 ';

}

// Use button to reload the page
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  location.reload();
})
