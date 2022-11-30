var Uname = localStorage.getItem("name");
var Uscore = localStorage.getItem("mostRecentScore");
$("h1").addClass("hide");
$("h1").addClass("hidden");
$("table").removeClass("hide");


var myArray = [{ name: Uname, score: Uscore }];

if (Uscore == null) {
  $("h1").removeClass("hide");
  $("table").addClass("hide");
  myArray = [];
}

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

setTimeout(() => {
  $(".spinner").addClass("hidden");
  $("table").removeClass("hidden");
  $(".col").removeClass("hidden");
  $("h1").removeClass("hidden");
}, 500);