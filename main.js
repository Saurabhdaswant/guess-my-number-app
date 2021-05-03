"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".header--number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "please select number!";

    //when player wins
  } else if (guess === secretNumber) {
    if (score < 20) {
      document.querySelector(".message").textContent = "fucking correct";
      score++;
      document.querySelector(".score").textContent = score;

      document.querySelector("body").style.backgroundColor = "#60b347";
    }

    //when player guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    }

    //when player guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  //when player loss
  if (score === 0) {
    document.querySelector(".message").textContent = "you lost";
  }
});
