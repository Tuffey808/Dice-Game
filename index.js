var randomNumber1 = (Math.floor(Math.random()*6)+1);
var diceValue1 = ("images/dice" + randomNumber1 + ".png");
document.querySelector(".img1").setAttribute("src", diceValue1);

var randomNumber2 = (Math.floor(Math.random()*6)+1);
var diceValue2 = ("images/dice" + randomNumber2 + ".png");
document.querySelector(".img2").setAttribute("src", diceValue2);

if (diceValue1 > diceValue2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (diceValue1 < diceValue2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
