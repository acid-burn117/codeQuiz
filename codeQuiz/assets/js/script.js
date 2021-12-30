var startArea = document.getElementById("startArea")
var quizArea = document.getElementById("quizArea")
var startButton = document.getElementById("startButton")
var questionTitle = document.getElementById("questionTitle")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var counter = 0
var score = 0
var timer = 60
var mainEl = document.querySelector("main")
startButton.addEventListener("click", function () {
    startArea.classList.add("hide")
    quizArea.classList.remove("hide")
    startGame()
})
var questions = [
    {
        question: "What color is the sky?",
        options: ["blue", "red", "green", "brown"],
        answer: "blue",
    },
    {
        question: "What color is the ocean",
        options: ["blue", "red", "green", "brown"],
        answer: "blue",
    },
    {
        question: "What color is the ground?",
        options: ["blue", "red", "green", "brown"],
        answer: "brown",
    },
]
function startGame() {
    questionTitle.textContent = questions[counter].question
    answer1.textContent = questions[counter].options[0]
    answer2.textContent = questions[counter].options[1]
    answer3.textContent = questions[counter].options[2]
    answer4.textContent = questions[counter].options[3]

}
function endGame() {
    console.log("game over")
}
function checkAnswer(event) {
    var userChoice = event.target.innerHTML
    if (userChoice == questions[counter].answer) {
        score++
        console.log("correct")
    } else {
        timer -= 5
        console.log("wrong")
    };
    counter++
    if (counter >= questions.length) {
        endGame()
    } else {
        startGame()
    }
}

function countdown() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}
function sendMessage(){
    timer.textContent= " ";
    mainEl.append("Game Over!")
}

countdown();
// change questions, choose answer, get timer going, save to local storage