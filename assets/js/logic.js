// List variables and add document query selectors
var clockTimer = document.getElementById("timer");
//Starting the quiz
var startDiv = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

//Answering the questions
var questionsDiv = document.getElementById("questions");
var answerChoices = document.getElementsByClassName("choice");
var questionDisplayed = document.getElementById("question-title");
var feedbackDiv = document.getElementById("feedback");
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
  timeRemaining = 60;
  startDiv.classList.add("hide"); // adds the "hide" class
  questionsDiv.classList.remove("hide"); // removes the "hide" class
  showQuestions();
  startTimer();
};

function startTimer() {
  var countdown = setInterval(function () {
    timeRemaining--;
    clockTimer.textContent = timeRemaining;
    if (timeRemaining === 0 || questionDisplayed === questions.length) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

// Questions are displayed
var showQuestions = function () {
  var currentQuestion = questionsArray[questionIndex];
  var questPrompt = document.getElementById("question-title");
  questPrompt.textContent = currentQuestion.questionText;
  for (var i = 0; i < answerChoices.length; i++) {
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
  if (
    questionsArray[questionIndex].correctAnswer.toString() ===
    event.target.textContent
  ) {
    feedback.innerHTML += "Correct! You definitely know your stuff!";
    nextQuestion();
  } else {
    timeRemaining -= 10;
    feedback.innerHTML +=
      "Close, but that is incorrect. Keep going - you've got this!";
    nextQuestion();
  }
}

// Check that the text in the button matches the text in the correct answer.
// If they get it right, move to the next question, if it's wrong, minus 10 off the time

//Need to sort out clearing the innerHTML

function nextQuestion() {
  questionPosition++;
  if (questionPosition === questionsArray.length) {
    timeRemaining = 0;
    endGame();
  } else {
    questionIndex++;
    showQuestions();
  }
}

// Need to show end screen with initials form and submit button
var endGame = function () {
  endScreen.classList.remove("hide");
  questionsDiv.classList.add("hide");
  feedbackDiv.classList.add("hide");
};

// event listeners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", endGame);
