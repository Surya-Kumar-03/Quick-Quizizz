//Working On Timer

var count = 16;
var interval = setInterval(function () {
  document.getElementById("timer").innerHTML = count - 1;
  count--;
  if (count === 0) {
    getNewQuestion();
    count = 16;
  }
}, 1000);
