"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".header--number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent =
        "plese select a number modafucka 👊🏼 ")
    );
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector(".message").textContent =
        "saurabh you are legend 👊🏼 ")
    );
    score++;
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector(".message").textContent = "too high 👊🏼 ")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game  ";
    }
  } else if (guess < secretNumber) {
    if (score < 1) {
      console.log(
        (document.querySelector(".message").textContent = "too low 👊🏼 ")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game  ";
    }
  }
});
