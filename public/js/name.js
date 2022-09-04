function submitForm() {
  let name = document.forms["welcome_form"]["name"].value;
  localStorage.setItem("name", name);
  location.href("/quiz.html");
}
