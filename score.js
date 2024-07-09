// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener('DOMContentLoaded', () => {
  let number1, number2; // Declare variables for numbers
  let score = 0; // Initialize score variable

  // Function to generate random numbers between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to start the game
  function startGame() {
    // Reset score and display
    score = 0;
    updateScoreDisplay();

    // Display initial random numbers
    number1 = generateRandomNumber();
    number2 = generateRandomNumber();
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;

    // Start the timer
    let secondsLeft = 60; // Adjust this value as needed
    const timerDisplay = document.getElementById('timer-value');
    timerDisplay.textContent = secondsLeft;

    const countdown = setInterval(() => {
      secondsLeft--;
      timerDisplay.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(countdown);
        endGame();
      }
    }, 1000);
  }

  // Function to update score display
  function updateScoreDisplay() {
    document.getElementById('score-board').textContent = score;
  }

  // Function to end the game
  function endGame() {
    alert(`Game Over! Your final score is ${score}`);
    // Redirect to game over screen or perform other end-game actions
    // Example: window.location.href = 'gameover.html';

    // Display game over text and score box
    document.getElementById('game-over-text').style.display = 'block';
    document.getElementById('score-box').style.display = 'block';
    document.getElementById('score-board').textContent = score;
  }

  // Get reference to the play button and start the game on click
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', () => {
    startGame();
    // Optionally, you can navigate to game.html or reset the UI here
  });

  // Get references to buttons
  const greaterThanButton = document.getElementById('greater-than');
  const equalToButton = document.getElementById('equal-to');
  const lesserThanButton = document.getElementById('lesser-than');

  // Add event listeners to buttons
  greaterThanButton.addEventListener('click', () => {
    checkRelation('greater');
  });

  equalToButton.addEventListener('click', () => {
    checkRelation('equal');
  });

  lesserThanButton.addEventListener('click', () => {
    checkRelation('lesser');
  });

  // Function to check user's guess
  function checkRelation(guess) {
    if (guess === 'greater' && number1 > number2) {
      score++;
      updateScoreDisplay();
      alert('Correct!');
    } else if (guess === 'equal' && number1 === number2) {
      score++;
      updateScoreDisplay();
      alert('Correct!');
    } else if (guess === 'lesser' && number1 < number2) {
      score++;
      updateScoreDisplay();
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }

    // Generate new numbers for the next round
    number1 = generateRandomNumber();
    number2 = generateRandomNumber();

    // Update displayed numbers
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
  }
});
