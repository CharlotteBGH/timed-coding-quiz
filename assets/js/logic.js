// List variables and add document query selectors

// Time-related
var startingTime = 60;
var clockTimer = document.getElementById("timer");

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
  clockTimer.innerText = startingTime;
  startDiv.classList.add("hide"); // adds the "hide" class
  questionsDiv.classList.remove("hide"); // reomves the "hide" class
  showQuestions();
};

// Questions are displayed
var showQuestions = function () {
  var currentQuestion = questionsArray[questionIndex];
  var questPrompt = document.getElementById("question-title");
  questPrompt.textContent = currentQuestion.questionText;
  for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].innerText = currentQuestion.choices[i];
  }

  // event listener for each button (maybe in the baove for loop)
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
