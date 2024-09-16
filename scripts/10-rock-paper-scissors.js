let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}*/

function playerGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "lose";
    } else if (computerMove === "Paper") {
      result = "win";
    } else if (computerMove === "Scissors") {
      result = "tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "win";
    } else if (computerMove === "Paper") {
      result = "tie";
    } else if (computerMove === "Scissors") {
      result = "lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "tie";
    } else if (computerMove === "Paper") {
      result = "lose";
    } else if (computerMove === "Scissors") {
      result = "win";
    }
  }
  if (result === "win") {
    score.wins += 1;
  } else if (result === "lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `Result: ${result}`;

  document.querySelector(".js-moves").innerHTML = `Moves: You picked 
  <img
    src="/10-photo-rock-paper-scissors/${playerMove}-emoji.png"
    alt="${playerMove}"
    class="move-icon"
  />
  . Computer picked 
  <img
    src="/10-photo-rock-paper-scissors/${computerMove}-emoji.png"
    alt="${computerMove}"
    class="move-icon"
  />.`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}