document.addEventListener("DOMContentLoaded", function() {
  var greetBtn = document.getElementById("greet_button");
  greetBtn.addEventListener("click", function() {
    var name = document.getElementById("inputText").value;
    var greeting_message = "Hi, " + name + "!";
    displayGreeting(greeting_message);
  });
});

function displayGreeting(message) {
  var greeting_div = document.getElementById("greeting_message");
  greeting_div.textContent = message;
}
