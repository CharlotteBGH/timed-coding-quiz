// List variables

var allScores = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

// Results need to load straight away

showResults();

// Retrieve scores from local storage and list them

function showResults() {
  allScores.textContent = "";
  var highScores = JSON.parse(localStorage.getItem("high-scores"));
  if (highScores) {
    for (var i = 0; i < highScores.length; i++) {
      var calculatedScore = document.createElement("li");
      calculatedScore.textContent = `${highScores[i].initials} - ${highScores[i].currentScore}`;
      allScores.appendChild(calculatedScore);
    }
  } else {
    localStorage.setItem("high-scores", JSON.stringify([]));
  }
}

// Clear scores

function clearScores() {
  localStorage.removeItem("high-scores");
  location.reload();
}

// Event listener for clear button
clearButton.addEventListener("click", clearScores);
