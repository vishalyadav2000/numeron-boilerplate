// Iteration 2: Generate 2 random number and display it on the screen
document.addEventListener('DOMContentLoaded', () => {
  // Function to generate random numbers between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Display initial random numbers
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();

  document.getElementById('number1').textContent = number1;
  document.getElementById('number2').textContent = number2;
});
// Iteration 3: Make the options button functional
document.addEventListener('DOMContentLoaded', () => {
  // Function to generate random numbers between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Display initial random numbers
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();

  document.getElementById('number1').textContent = number1;
  document.getElementById('number2').textContent = number2;

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
      alert('Correct!');
    } else if (guess === 'equal' && number1 === number2) {
      alert('Correct!');
    } else if (guess === 'lesser' && number1 < number2) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }

    // Generate new numbers for the next round
    const newNumber1 = generateRandomNumber();
    const newNumber2 = generateRandomNumber();

    // Update displayed numbers
    document.getElementById('number1').textContent = newNumber1;
    document.getElementById('number2').textContent = newNumber2;

    // Update the variables for the next round
    number1 = newNumber1;
    number2 = newNumber2;
  }
});
// Iteration 4: Build a timer for the game
document.addEventListener('DOMContentLoaded', () => {
  let number1, number2; // Declare variables for numbers

  // Function to generate random numbers between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to start the game
  function startGame() {
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
        alert('Time is up! Game over.');
        // Optionally, you can redirect or handle end of game actions here
      }
    }, 1000);
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
      alert('Correct!');
    } else if (guess === 'equal' && number1 === number2) {
      alert('Correct!');
    } else if (guess === 'lesser' && number1 < number2) {
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

