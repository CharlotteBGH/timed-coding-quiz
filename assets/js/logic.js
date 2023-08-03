// List variables and add document query selectors

// Time-related
var timeRemaining = 60;
var clockTimer = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeRemaining == 0) {
    clearInterval(timerId);
    //Startaskingquestions();
  } else {
    clockTimer.innerHTML = timeRemaining;
    timeRemaining--;
  }
}

//Starting the quiz
var startDiv = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

//Answering the questions
var questionsDiv = document.getElementById("questions");
var answerChoices = document.getElementsByClassName("choice");
var questionIndex = 0;

//Submitting initials and scores
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var seeHighScores = document.getElementById("scores");

// Player starts game by clicking start button
var startGame = function () {
  clockTimer.innerText = timeRemaining;
  startDiv.classList.add("hide"); // adds the "hide" class
  questionsDiv.classList.remove("hide"); // removes the "hide" class
  showQuestions();
};

// What is happening to the countdown clock
setInterval(function () {
  if (clockTimer > 0) clockTimer--;
  document.getElementById("timer").innerHTML = timeRemaining;
  if (clockTimer <= 0) clockTimer = 60;
}, 1000);

// Questions are displayed
var showQuestions = function () {
  var currentQuestion = questionsArray[questionIndex];
  var questPrompt = document.getElementById("question-title");
  questPrompt.textContent = currentQuestion.questionText;
  for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].innerText = currentQuestion.choices[i];
  }

  // event listener for each button (maybe in the above for loop)
  // check if the text for the current chose answer matches the one in your currentQuestion
  // if yes, move onto following question else subtract time
};
// What happens with the answer
var handleAnswer = function () {
  //
};

var endGame = function () {};

// event listeners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", endGame);
