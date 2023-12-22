generateColor();
let currenColor;
listenToMain();
let ismousePressed = false;
const button = document.querySelector(".clear button");
ListenToClearButton();

function ListenToClearButton() {
  button?.addEventListener("click", clearcanvas);
}

function clearcanvas() {
  currenColor = null;
  const squares = document.querySelectorAll("#main>div");
  for (const sqare of squares) {
    sqare.style.backgroundColor = `white`;
  }
  button.style.backgroundColor = `white`;
}

function listenToMain() {
  const main = document.getElementById("main");
  main.addEventListener("mousedown", handleClick);
  main.addEventListener("mousemove", handleMove);
  document.body.addEventListener("mouseup", handleMouseRelase);
}

function handleMouseRelase() {
  ismousePressed = false;
}
function handleClick() {
  if (currenColor == null) return;
  ismousePressed = true;
}

function handleMove(e) {
  if (!ismousePressed) return;
  console.log("coordinates:", e.x, e.y);
  const hoverDiv = document.elementsFromPoint(e.x, e.y);
  hoverDiv.style.backgroundColor = currenColor;
}

function generateColor() {
  const colorDivs = document.querySelectorAll(".color");
  for (const colorDiv of colorDivs) {
    const randomColor = generateRandomColor();
    colorDiv.style.backgroundColor = randomColor;
    colorDiv.dataset.color = randomColor;
    colorDiv.addEventListener("click", setcurrenColor);
  }
}

function generateRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex;
}

function setcurrenColor(e) {
  const choserColor = e.target.dataset.color;
  currenColor = choserColor;
  button.style.backgroundColor = choserColor;
}
