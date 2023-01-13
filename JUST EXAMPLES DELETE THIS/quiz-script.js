// variables connected to the HTML
var $startButton = document.querySelector(".start-button");
var $highScore = document.querySelector("#high-score");
var $timer = document.querySelector("#timer");
var $startScreen = document.querySelector(".start-screen");
var $questionArea = document.querySelector(".question-area")
var $highscoreList = document.querySelector("#highscore-list")
var $submitName = document.querySelector("submit-name")

// elements created in javascript
var h2El = document.createElement("h2")
var ulEl = document.createElement("ul")
var pEl = document.createElement("p")

// event listeners
$startButton.addEventListener('click', startQuiz);
$questionArea.addEventListener("click", checkAnswer);

// other global variables
var secondsLeft = 100;
var questionCount = 0;
var score = 0;
var initials = "";
var timerInterval;

// list of questions, their choices, and the correct answers
var questionList = [

    {
        question: "Which one creates the basic structure of a page?",
        choices: ["git", "CSS", "HTML", "JavaScript"],
        answer: "HTML"
    },

    {
        question: "Which one is NOT a semantic element?",
        choices: ["nav", "aside", "section", "span"],
        answer: "span"
    },

    {
        question: "Which method removes whitespace?",
        choices: ["split()", "trim()", "slice()", "pop()"],
        answer: "trim()"
    },

    {
        question: "If var a = 1, var b = 2, and var c = 3, which one is TRUE?",
        choices: ["c !== b", "a === c", "b % a == 1", "c <= a"],
        answer: "c !== b"
    },

    {
        question: "Which one is NOT a built-in functionalityini JavaScript?",
        choices: ["document", "onclick", "divTags", "currentTarget"],
        answer: "divTags"
    },

]
// makes the timer go down
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        $timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

// checks if the clicked element is the correct answer or not
function checkAnswer(event) {
    event.preventDefault();
    if (event.target.matches("li")) {
        console.log(event.target);
        if (event.target.textContent == questionList[questionCount].answer) {
            console.log("answer is correct");
        } else {
            console.log("answer is wrong");
            // subtracts 15 seconds for every wrong answer
            secondsLeft = secondsLeft - 15;
        }
    // adds to the question counter so teh code knows to continue or stop
    questionCount++;
    // next question
    presentQuestion();
    }
}

function presentQuestion() {
    
    console.log("question count " + questionCount)
    // if quesions are not finished, continue
    if (questionCount < questionList.length) {
        h2El.textContent = questionList[questionCount].question;
        ulEl.innerHTML = `<li>${questionList[questionCount].choices[0]}</li><li>${questionList[questionCount].choices[1]}</li><li>${questionList[questionCount].choices[2]}</li><li>${questionList[questionCount].choices[3]}</li>`;
        //"<li>" + questionList[0].choices[0] + "</li><li>" + questionList[0].choices[1] + "</li><li>" + questionList[0].choices[2] + "</li><li>" + questionList[0].choices[3] + "</li>";

    }
    // if question count reaches max questions
    else {
        console.log("questions are finished")
        console.log(score);

        //clear the question for the results
        $questionArea.textContent = "";
  
        // stop timer and the remaining time is the score
        score = secondsLeft;
        clearInterval(timerInterval)

        // inserted element to display score
        $questionArea.appendChild(pEl);
        pEl.textContent = "score: " + score;

    }
}

// after clicking start quiz, the screen empties and ready for questions
function startQuiz(event) {
    event.preventDefault();
    event.stopPropagation();
    $startScreen.textContent = "";
    $startScreen.innerHTML = "<h1>Coding Quiz</h1>";
    $questionArea.innerHTML = "";
    setTime();

    $questionArea.appendChild(h2El);
    $questionArea.appendChild(ulEl);

    // show first question
    presentQuestion();
}