var number1 = Math.floor(Math.random() * 6) + 1; 
var newimage1 = "images/dice" + number1 + ".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", newimage1);

var number2 = Math.floor(Math.random() * 6) + 1;
var newimage2 = "images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newimage2);

if (number1 > number2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }