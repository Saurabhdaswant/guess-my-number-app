"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".header--number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "please select number!";
  } else if (guess === secretNumber) {
    if (score < 20) {
      document.querySelector(".message").textContent = "fucking correct";
      score++;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  if (score === 0) {
    document.querySelector(".message").textContent = "you lost";
  }
});
