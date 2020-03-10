let dodger = document.getElementById("dodger");
let div = document.getElementById('game');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  // if (left < (div.offsetWidth - dodger.offsetWidth)) {
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "ArrowLeft":
      moveDodgerLeft();
      break
    case "ArrowRight":
      moveDodgerRight();
      break
  }
});