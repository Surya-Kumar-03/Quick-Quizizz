//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var favicon = require("serve-favicon");
var path = require("path");
var port = 4000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname,'public','images','Favicon.png')));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/quiz.html", function (req, res) {
  res.sendFile(__dirname + "/quiz.html");
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

app.listen(port, function () {
  console.log("Server started on port 4000.");
});
