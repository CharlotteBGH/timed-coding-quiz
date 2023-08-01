// List variables and add document query selectors

// Time-related
var startingTime = 60;
var clockTimer = document.getElementById("timer");

//Starting the quiz
var startDiv = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

//Answering the questions
var questionsDiv = document.getElementById("questions");
var answerChoices = document.getElementById("choices");
var questionList = 0;

//Submitting initials and scores
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var seeHighScores = document.getElementById("scores");

// Player starts game by clicking start button
var startGame = function () {
  clockTimer.innerText = startingTime;
  startDiv.classList.remove("start");
  questionsDiv.classList.add("hide");
};
// Questions are displayed
var showQuestions = function () {
  var currentQuestion = questionsArray[questionList];
  var questPrompt = document.getElementById("question-title");
  questPrompt.textContent = currentQuestion.prompt;
  answerChoices.innerHTML = "";

  // target the question and each of the choices
  // assign the textValue to be the question/choices from your array
};
// What happens with the answer
var handleAnswer = function () {
  //
};

// event listeners
startBtn.addEventListener("click", startGame);
//submitBtn.addEventListener("click", WHAT GOES HERE?);
