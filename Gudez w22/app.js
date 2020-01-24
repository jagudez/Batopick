const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerKamao = document.querySelector(".pkamao");
    const computerKamao = document.querySelector(".ckamao");
    const kamay = document.querySelectorAll(".kamay img");

    kamay.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["bato", "papel", "gunting"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareKamay(this.textContent, computerChoice);
          //Update Images
          playerKamao.src = `./assets/${this.textContent}.png`;
          computerKamao.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerKamao.style.animation = "shakePlayer 2s ease";
        computerKamao.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const ScoreP = document.querySelector(".ScoreP p");
    const ScoreC = document.querySelector(".ScoreC p");
    ScoreP.textContent = pScore;
    ScoreC.textContent = cScore;
  };

  const compareKamay = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Tabla";
      return;
    }
    //Check for Bato
    if (playerChoice === "bato") {
      if (computerChoice === "gunting") {
        winner.textContent = "Panalo";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Talo";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for papel
    if (playerChoice === "papel") {
      if (computerChoice === "gunting") {
        winner.textContent = "Talo";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Panalo";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for gunting
    if (playerChoice === "gunting") {
      if (computerChoice === "bato") {
        winner.textContent = "Talo";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Panalo";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
