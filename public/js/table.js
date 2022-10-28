var Uname = localStorage.getItem("name");
var Uscore = localStorage.getItem("mostRecentScore");
$("h1").addClass("hide");
if (Uname === null) {
  $("h1").removeClass("hide");
  $("table").addClass("hide");
}

if (Uscore == null) {
  Uscore = 0;
}

var myArray = [
  { name: Uname, score: Uscore },
];

buildTable(myArray);

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
          <td>${i + 1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].score}</td>
        </tr>`;
    table.innerHTML += row;
  }
}
