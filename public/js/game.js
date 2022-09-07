const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [
  {
    question: "Hi1",
    choice1: "<title> </body>",
    choice2: "<head> </head>",
    choice3: "<table> </table>",
    choice4: "<body> </body>",
    answer: 4,
  },
  {
    question: "Hi2",
    choice1: "Google",
    choice2: "Mozilla",
    choice3: "WWWC",
    choice4: "Microsoft",
    answer: 3,
  },
  {
    question: "Hi3",
    choice1: "<title> </body>",
    choice2: "<head> </head>",
    choice3: "<table> </table>",
    choice4: "<body> </body>",
    answer: 4,
  },
  {
    question: "Hi4",
    choice1: "Google",
    choice2: "Mozilla",
    choice3: "WWWC",
    choice4: "Microsoft",
    answer: 3,
  },
  {
    question: "Hi5",
    choice1: "<title> </body>",
    choice2: "<head> </head>",
    choice3: "<table> </table>",
    choice4: "<body> </body>",
    answer: 4,
  },
  {
    question: "Hi6",
    choice1: "Google",
    choice2: "Mozilla",
    choice3: "WWWC",
    choice4: "Microsoft",
    answer: 3,
  },
  {
    question: "Hi7",
    choice1: "<title> </body>",
    choice2: "<head> </head>",
    choice3: "<table> </table>",
    choice4: "<body> </body>",
    answer: 4,
  },
  {
    question: "Hi8",
    choice1: "Google",
    choice2: "Mozilla",
    choice3: "WWWC",
    choice4: "Microsoft",
    answer: 3,
  },
  {
    question: "Hi9",
    choice1: "<title> </body>",
    choice2: "<head> </head>",
    choice3: "<table> </table>",
    choice4: "<body> </body>",
    answer: 4,
  },
  {
    question: "Hi10",
    choice1: "Google",
    choice2: "Mozilla",
    choice3: "WWWC",
    choice4: "Microsoft",
    answer: 3,
  },
];

let questions = [];

//Fetching Questions from Database MONGO DB
const loadData = async () => {
  const res = await fetch("/api/questions");
  const data = await res.json();
  availableQuestions = data;
  startGame();
};

loadData();

// Using Fetch API from OpenTrivia DB https://opentdb.com/api_config.php
// fetch(
//  https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple
// )
// .then((res) => {
//   return res.json();
// })
// .then((loadedQuestions) => {
//   questions = loadedQuestions.results.map((loadedQuestion) => {
//     const formattedQuestion = {
//       question: loadedQuestion.question,
//     };

//     const answerChoices = [...loadedQuestion.incorrect_answers];
//     formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
//     answerChoices.splice(
//       formattedQuestion.answer - 1,
//       0,
//       loadedQuestion.correct_answer
//     );

//     answerChoices.forEach((choice, index) => {
//       formattedQuestion["choice" + (index + 1)] = choice;
//     });

//     return formattedQuestion;
//   });
//   startGame();
// })
// .catch((err) => {
//   console.log(err);
// });

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

//Start game
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...availableQuestions];
  localStorage.setItem("mostRecentScore", score);
  focus();
  getNewQuestion();
}

//Tab-Switch Preventer
function focus() {
  var count = 3;
  window.addEventListener("blur", function () {
    count--;
    if (count === 0) {
      localStorage.setItem("mostRecentScore", score);
      return window.location.replace("end.html");
    }
    alert(
      "Tab Switch is Prohibited!, You have " +
        (count - 1) +
        " accidental-switch(es) left!"
    );
  });
}

//endQuiz
function endQuiz() {
  localStorage.setItem("mostRecentScore", score);
  return window.location.replace("end.html");
}

// Displays Question from Array
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.replace("end.html");
  }
  questionCounter++;
  //Change qn no in html
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

  // Selects Random Question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  question.innerText = currentQuestion.question;

  //Displays it's Respective Choices
  choices.forEach((choices) => {
    const number = choices.dataset["number"];
    choices.innerText = currentQuestion["choice" + number];
  });

  //Remove Question to avoid repetition
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    //Change on Correct Answer
    var classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
      localStorage.setItem("mostRecentScore", score);
    }

    //add class to parent element to display correct or wrong
    selectedChoice.parentElement.classList.add(classToApply);

    //Shows Correct answer if answer is wrong by user
    if (classToApply === "incorrect") {
      switch (currentQuestion.answer) {
        case 1:
          document.getElementById("option1").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("option1").classList.add("hidden");
          }, 1000);
          break;
        case 2:
          document.getElementById("option2").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("option2").classList.add("hidden");
          }, 1000);
          break;
        case 3:
          document.getElementById("option3").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("option3").classList.add("hidden");
          }, 1000);
          break;
        case 4:
          document.getElementById("option4").classList.remove("hidden");
          setTimeout(() => {
            document.getElementById("option4").classList.add("hidden");
          }, 1000);
          break;
      }
    }

    //remove class before changing to next question
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

    count = 16;
  });
});

//Score Incrementor
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
