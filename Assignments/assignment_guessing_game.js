document.addEventListener("DOMContentLoaded", function () {
  let hiddenNumber, guess;
  let messagePara = document.querySelector("main p");
  let textInput = document.getElementById("guess");
  let newGameButton = document.querySelector("form + a");
  let submitButton = document.querySelector("input[type=submit]");

  function newGame() {
    hiddenNumber = rand100();
    messagePara.textContent =
      "Please try to guess the hidden number, from 1 - 100.";
    submitButton.disabled = false;
    submitButton.style.background =
      "linear-gradient(to bottom, #cc183e 0%, #780e24 100%)";
  }
  function rand100() {
    return Math.ceil(Math.random() * 100);
  }

  document.querySelector("form").addEventListener("submit", (e) => {
    let message;
    e.preventDefault();
    guess = parseInt(textInput.value, 10);
    if (guess < 1 || guess > 100 || !guess) {
      alert("Must be a number between the range!");
    } else {
      if (guess > hiddenNumber) {
        message = "The number was too high!";
      } else if (guess < hiddenNumber) {
        message = "The number was too low!";
      } else {
        message = "You win! The answer was " + guess + "! Well done.";
        submitButton.disabled = true;
        submitButton.style.background = "gray";
      }
      messagePara.textContent = message;
    }
  });

  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    newGame();
  });
  newGame();
});
