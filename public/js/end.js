const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore + " / 100";

saveHighScore = () => {};

saveHighScore();
