// List variables and add document query selectors

// Time-related
var startingTime = 60;
var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("time-remaining");

//Starting the quiz
var startDiv = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

//Answering the questions
var questionsDiv = document.getElementById("questions");
var answerChoices = document.getElementById("choices");

//Submitting initials and scores
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var seeHighScores = document.getElementById("scores");

// Player starts game by clicking start button
var startGame = function () {
  timer.innerText = timeRemaining;
  startDiv.classList.add("hide");
  questionsDiv.classList.remove("hide");
  showQuestions();
};

// Player starts ansewering questions
var showQuestions = function () {
  //
  // target the question and each of the choices
  // assign the textValue to be the question/choices from your array
};
// What happens with the answer
var handleAnswer = function () {
  //
};

// event listeners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", submit);
