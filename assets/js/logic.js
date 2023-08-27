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
var initialsDiv = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var seeHighScores = document.getElementById("scores");

//Ending the game
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var highScores = JSON.parse(localStorage.getItem("high-scores"));
localStorage.setItem("high-scores", JSON.stringify([]));

//CODE FOR GOING THROUGH QUIZ

// Player starts game by clicking start button
var startGame = function () {
  timeRemaining = 40;
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
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!";
    toggleFeedback = setTimeout(function () {
      feedback.classList.add("hide");
      clearTimeout(toggleFeedback);
    }, 2800);
    currentScore++;
  } else {
    feedback.classList.remove("hide");
    timeRemaining -= 10;
    feedback.textContent = "Close, but that is incorrect.";
    toggleFeedback = setTimeout(function () {
      feedback.classList.add("hide");
      clearTimeout(toggleFeedback);
    }, 2800);
  }
  nextQuestion();
}

function nextQuestion() {
  if (questionPosition <= questionsArray.length) {
    questionIndex++;
    showQuestions();
  } else {
    clearInterval(countdown);
    endGame();
  }
}

// Need to show end screen with initials form and submit button
var endGame = function () {
  endScreen.classList.remove("hide");
  questionsDiv.classList.add("hide");
  feedbackDiv.classList.add("hide");
  finalScore.textContent = currentScore;
};

// Allow user to submit initials, and store these in local storage

function submitInitials() {
  var userInitials = initialsDiv.value.trim();
  if (userInitials === "") {
    return alert("Woah! Please enter your initials to save your highscore.");
  } else if (userInitials.length > 4) {
    return alert(
      "Your potential isn't limited, but your initials are (to 4). Please try again."
    );
  }
  highScores.push({ currentScore, initials: userInitials.toUpperCase() });
  localStorage.setItem("high-scores", JSON.stringify(highScores));
  window.location.href = "highscores.html";
}

// event listeners
startBtn.addEventListener("click", startGame);
questionsDiv.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", submitInitials);
