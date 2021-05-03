"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displaymessage(" plzz select the number mather faker");
    //when player wins
  } else if (guess === secretNumber) {
    if (score < 20) {
      displaymessage(" you have won the fucking game mah boi");

      document.querySelector(".header--number").textContent = secretNumber;

      score++;
      document.querySelector(".score").textContent = score;

      document.querySelector("body").style.backgroundColor = "#60b347";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  }

  //when guess is wrong baby
  else if (guess !== secretNumber) {
    displaymessage(guess > secretNumber ? " too high " : " too low");
    score--;
    document.querySelector(".score").textContent = score;
  }

  //when player guess is too high
  //  else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📈 too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
  //when player guess is too low
  //  else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📉 too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }

  //when player loss
  if (score === 0) {
    document.querySelector(".message").textContent = "you lost";
  }
});

// when player click again btn

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#ccc";

  document.querySelector(".header--number").textContent = "?";

  displaymessage(" start quessing...");

  document.querySelector(".guess").value = " ";

  score = 20;
  document.querySelector(".score").textContent = score;
});
