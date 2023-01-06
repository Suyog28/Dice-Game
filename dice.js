var randomDiceNumber = Math.floor(Math.random() * 6) + 1;

let randomImage = "dice" + randomDiceNumber + ".png";

let randomImageDice = "images/" + randomImage;

let randomImageOne = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageDice);

let randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "dice" + randomDiceNumber2 + ".png";

let randomImageDice2 = "images/" + randomImage2;

let randomImageTwo = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageDice2);

if (randomDiceNumber > randomDiceNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomDiceNumber2 > randomDiceNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
