var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var startGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Choose R, P, or S:");

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // If user pressed Cancel, alert and immediately end function
  if (!userChoice) {
    window.alert("No answer given");
    return;
  }

  // Compare if user selected one of the options
  if(userChoice == "R" || userChoice == "P" || userChoice == "S"){
    window.alert("You selected " + userChoice);
  } else {
    window.alert("That's not an option");
    return;
  }

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // Check every win condition for the player
  if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If choices are the same, it's a tie
  } else if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
  }

  // If above conditions failed, assume player lost 
  else  {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    startGame();
  }
};

// Run the game for the first time
startGame();
