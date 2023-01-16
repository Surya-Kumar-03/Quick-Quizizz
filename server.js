//jshint esversion:6

require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
var favicon = require("serve-favicon");
var path = require("path");
const mongoose = require("mongoose");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "Favicon.png")));

// Connect MongoDb Database
// mongoose.connect("mongodb://localhost:27017/quizDataBase", {
//   useNewUrlParser: true,
// });

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
  }
);

// Schema for Questions
const questionsSchema = {
  quizId: Number,
  questions: [
    {
      qno: Number,
      question: String,
      choice1: String,
      choice2: String,
      choice3: String,
      choice4: String,
      answer: Number,
    },
  ],
};

//Schema for Users
const userSchema = {
  name: String,
  score: Number,
};

//Model for User
const User = mongoose.model("User", userSchema);

// Model  quizDataBase -> Quiz -> Question
const Quiz = mongoose.model("Quiz", questionsSchema);

// Adding Default Questions
var question1 = {
  qno: 0,
  question: "What is my Name?",
  choice1: "Hari",
  choice2: "Kiran",
  choice3: "Surya",
  choice4: "Bhaskar",
  answer: 3,
};

var question2 = {
  qno: 0,
  question: "2+2",
  choice1: "6",
  choice2: "9",
  choice3: "4",
  choice4: "3",
  answer: 3,
};

var question3 = {
  qno: 0,
  question: "8+8",
  choice1: "3",
  choice2: "12",
  choice3: "11",
  choice4: "16",
  answer: 4,
};

var question4 = {
  qno: 0,
  question: "3-1",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
};

var question5 = {
  qno: 0,
  question: "Is MongoDB SQL or NoSQL Database",
  choice1: "SQL",
  choice2: "NoSQL",
  choice3: "Both",
  choice4: "None",
  answer: 2,
};

var question6 = {
  qno: 0,
  question: "Successor of C Language is?",
  choice1: "C++",
  choice2: "Java",
  choice3: "Python",
  choice4: "None",
  answer: 1,
};

var question7 = {
  qno: 0,
  question: "Rate Yourself",
  choice1: "100",
  choice2: "90",
  choice3: "0",
  choice4: "50",
  answer: 1,
};

var question8 = {
  qno: 0,
  question: "Testing Answer Feedback, Press A Option",
  choice1: "A",
  choice2: "B",
  choice3: "C",
  choice4: "D",
  answer: 1,
};

var question9 = {
  qno: 0,
  question: "What's my College?",
  choice1: "SIST",
  choice2: "IIT",
  choice3: "NIT",
  choice4: "None",
  answer: 1,
};

var question10 = {
  qno: 0,
  question: "Testing Press 1st Option",
  choice1: "1",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
};

// insert default questions after deleting
var questionsall = new Quiz({
  quizId: 0,
  questions: [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
  ],
});

// Quiz.deleteMany({ answer: { $gte: 0 } }).catch(function (error) {
//   console.log(error); // Failure
// });

Quiz.find({ quizId: 0 }, function (err, docs) {
  if (docs.length === 0) {
    Quiz.create(questionsall, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("New Questions Added");
      }
    });
  }
});

//insert questions
// Quiz.insertMany(questionsall, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/quiz.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/quiz.html");
});

app.post("/addquestions", function (req, res) {
  question1.question = req.body.questionU1;
  question1.choice1 = req.body.option1U1;
  question1.choice2 = req.body.option2U1;
  question1.choice3 = req.body.option3U1;
  question1.choice4 = req.body.option4U1;
  question1.answer = req.body.correctU1;

  question2.question = req.body.questionU2;
  question2.choice1 = req.body.option1U2;
  question2.choice2 = req.body.option2U2;
  question2.choice3 = req.body.option3U2;
  question2.choice4 = req.body.option4U2;
  question2.answer = req.body.correctU2;

  question3.question = req.body.questionU3;
  question3.choice1 = req.body.option1U3;
  question3.choice2 = req.body.option2U3;
  question3.choice3 = req.body.option3U3;
  question3.choice4 = req.body.option4U3;
  question3.answer = req.body.correctU3;

  question4.question = req.body.questionU4;
  question4.choice1 = req.body.option1U4;
  question4.choice2 = req.body.option2U4;
  question4.choice3 = req.body.option3U4;
  question4.choice4 = req.body.option4U4;
  question4.answer = req.body.correctU4;

  question5.question = req.body.questionU5;
  question5.choice1 = req.body.option1U5;
  question5.choice2 = req.body.option2U5;
  question5.choice3 = req.body.option3U5;
  question5.choice4 = req.body.option4U5;
  question5.answer = req.body.correctU5;

  question6.question = req.body.questionU6;
  question6.choice1 = req.body.option1U6;
  question6.choice2 = req.body.option2U6;
  question6.choice3 = req.body.option3U6;
  question6.choice4 = req.body.option4U6;
  question6.answer = req.body.correctU6;

  question7.question = req.body.questionU7;
  question7.choice1 = req.body.option1U7;
  question7.choice2 = req.body.option2U7;
  question7.choice3 = req.body.option3U7;
  question7.choice4 = req.body.option4U7;
  question7.answer = req.body.correctU7;

  question8.question = req.body.questionU8;
  question8.choice1 = req.body.option1U8;
  question8.choice2 = req.body.option2U8;
  question8.choice3 = req.body.option3U8;
  question8.choice4 = req.body.option4U8;
  question8.answer = req.body.correctU8;

  question9.question = req.body.questionU9;
  question9.choice1 = req.body.option1U9;
  question9.choice2 = req.body.option2U9;
  question9.choice3 = req.body.option3U9;
  question9.choice4 = req.body.option4U9;
  question9.answer = req.body.correctU9;

  question10.question = req.body.questionU10;
  question10.choice1 = req.body.option1U10;
  question10.choice2 = req.body.option2U10;
  question10.choice3 = req.body.option3U10;
  question10.choice4 = req.body.option4U10;
  question10.answer = req.body.correctU10;

  //update database
  questionsall = {
    quizId: 0,
    questions: [
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
    ],
  };
  Quiz.deleteMany({ answer: { $gte: 0 } }).catch(function (error) {
    console.log(error); // Failure
  });

  Quiz.create(questionsall, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New Questions Added");
    }
  });

  res.sendFile(__dirname + "/public/html/questionsAdded.html");
});

var questionsr = [];
app.get("/api/questions", async function (req, res) {
  let response = await Quiz.findOne({ quizId: 0 }, "questions").exec(); //Future Feature
  res.setHeader("Content-Type", "application/json");
  questionsr = response.questions;
  res.end(JSON.stringify(questionsr));
});

app.get("/end.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/end.html");
  // const scoreReq = localStorage.mostRecentScore;
  // const nameReq = localStorage.getItem("name");
  // console.log(scoreReq);
  // console.log(nameReq);
});

app.post("/userDetails", function (req, res) {
  console.log(localStorage.getItem("name"));
});

app.get("/examinerLogin.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/examinerLogin.html");
});

app.get("/questionsAdded.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/questionsAdded.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

var authorised = false;
app.get("/examiner.html", function (req, res) {
  authorised = false;
  if (authorised === true) {
    res.sendFile(__dirname + "/public/html/examiner.html");
  } else {
    res.sendFile(__dirname + "/public/html/examinerLogin.html");
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log("Server started on port 4000.");
});

app.post("/logindetails", function (req, res) {
  var usernameG = req.body.username;
  var passwordG = req.body.password;
  authorised = false;
  
  if (usernameG == process.env.USERNAME_ADMIN && passwordG == process.env.PASSWORD_ADMIN) {
    authorised = true;
  }

  if (authorised === true) {
    res.sendFile(__dirname + "/public/html/examiner.html");
  } else {
    res.sendFile(__dirname + "/public/html/examinerLogin.html");
  }
});

app.get("/scoresViewer.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/scoresViewer.html");
});