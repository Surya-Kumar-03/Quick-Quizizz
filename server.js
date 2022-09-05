//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var favicon = require("serve-favicon");
var path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "Favicon.png")));

// Connect MongoDb Database
mongoose.connect("mongodb://localhost:27017/quizDataBase", {
  useNewUrlParser: true,
});

// Schema for Questions
const questionsSchema = {
  question: String,
  choice1: String,
  choice2: String,
  choice3: String,
  choice4: String,
  answer: Number,
};

// Model  quizDataBase -> Quiz -> Question
const Quiz = mongoose.model("Quiz", questionsSchema);

// Adding Default Questions
const question1 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question2 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question3 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question4 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question5 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question6 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question7 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question8 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question9 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const question10 = new Quiz({
  question: "Test Qn",
  choice1: "2",
  choice2: "2",
  choice3: "2",
  choice4: "2",
  answer: 2,
});

const questionsall = [
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
];

//insert questions
Quiz.insertMany(questionsall, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/quiz.html", function (req, res) {
  res.sendFile(__dirname + "/quiz.html");
});

app.get("/api/questions", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(questionsall));
});

app.get("/end.html", function (req, res) {
  res.sendFile(__dirname + "/end.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/examiner.html", function (req, res) {
  res.sendFile(__dirname + "/examiner.html");
});

app.listen(process.env.PORT || 4000, function () {
  console.log("Server started on port 4000.");
});
