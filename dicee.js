var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

function winner() {
  if (randomnumber1 > randomnumber2) return 0;
  else if (randomnumber1 < randomnumber2) return 1;
  else return 2;
}
var win = winner();

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomnumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomnumber2 + ".png");

if (win === 0) {
  document.querySelector("h1").innerHTML = "🤟 Player 1 Win!";
}
if (win === 1) {
  document.querySelector("h1").innerHTML = "Player 2 Win! 🤟";
}
if (win === 2) {
  document.querySelector("h1").innerHTML = "🤝 Its a draw! 🤝";
}
