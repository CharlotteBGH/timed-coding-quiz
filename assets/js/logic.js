//document query selector
var startBtn = document.getElementById("start");
var timerSpan = document.getElementById("time");
var startDiv = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");

// List variables
var time = 60;

var buildQuestion = function () {
  // target the question and each of the choices
  // assignt the textValue to be the question/choices from your array
};

//handleanswer

var startGame = function () {
  timerSpan.innerText = time;
  startDiv.classList.add("hide");
  questionsDiv.classList.remove("hide");
};

// event listeners
startBtn.addEventListener("click", startGame);
