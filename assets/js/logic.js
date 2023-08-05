// List variables and add document query selectors

// Time-related - add 60-second countdown clock
var timeRemaining = 60;
var clockTimer = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeRemaining <= 0) {
    endGame();
    //Include showing the end screen
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
var questionDisplayed = document.getElementById("question-title");
var currentQuestion = questionsArray[questionIndex];
var questionIndex = 0;
var questionPosition = -1;

//Scores
var currentScore = 0;

//Submitting initials and scores
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var seeHighScores = document.getElementById("scores");

//Ending the game
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

// Player starts game by clicking start button
var startGame = function () {
  countdown();
  startDiv.classList.add("hide"); // adds the "hide" class
  questionsDiv.classList.remove("hide"); // removes the "hide" class
  showQuestions();
};

// Questions are displayed
var showQuestions = function () {
  var currentQuestion = questionsArray[questionIndex];
  var questPrompt = document.getElementById("question-title");
  questPrompt.textContent = currentQuestion.questionText;
  for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].innerText = currentQuestion.choices[i];

    //Adding an event listener for each for each button
    var choiceBtn1 = document.getElementById("choice1");
    choiceBtn1.addEventListener("click", handleAnswer);
    var choiceBtn2 = document.getElementById("choice2");
    choiceBtn2.addEventListener("click", handleAnswer);
    var choiceBtn3 = document.getElementById("choice3");
    choiceBtn3.addEventListener("click", handleAnswer);
    var choiceBtn4 = document.getElementById("choice4");
    choiceBtn4.addEventListener("click", handleAnswer);
  }
};

// Check that the text in the button matches the text in the correct answer.
// If they get it right, move to the next question, if it's wrong, minus 10 off the time
function handleAnswer(event) {
  console.log("Are they being moved here");
  var correctAnswers = "Klingon" || "()" || "loop";
  if (event.target.textContent === correctAnswers) {
    feedback.innerHTML += "Correct! You definitely know your stuff!";
    nextQuestion();
  } else {
    timeRemaining -= 10;
    feedback.innerHTML +=
      "Close, but that is incorrect. Keep going - you've got this!";
    nextQuestion();
  }
}

function nextQuestion() {
  console.log("Clicked on the right answer");
  questionPosition++;
  if (questionPosition === questionsArray.length) {
    timeRemaining = 0;
    endGame();
  } else {
    questionIndex++;
    showQuestions();
  }
}

// Check that the text for the answer matches the answer in the currentQuestion
//If the answer is wrong, subtract 10 from the time
//Do I need to create a variable for user answer?
//if (this.value !== correctAnswers) {
//If the answer is right, show the next question
//} else {
//showQuestions();
//questionIndex++;
//}

//Give user feedback on their answer - correct/incorrect
//var answerFeedback = getElementById("feedback");
//answerFeedback.textContent = "Sorry, that's wrong!";
//answerFeedback.textContent = "Nice work!";

//Dealing with the clock timer. Need moving up?
//if (timeRemaining < 0) {
//timeRemaining = 0;
//clockTimer.textContent = timeRemaining;
//Once run out of questions, end game
//} else if (questionIndex === questionsArray.length) {
//endGame();
//}

//Need to show end screen
var endGame = function () {
  clearInterval(timerId);
  prompt("Time is up");
};

// event listeners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", endGame);
