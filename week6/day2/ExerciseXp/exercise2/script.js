let distance = 0;
let interval;

function myMove() {
  interval = setInterval(moveRedSquare, 1);
}

function moveRedSquare() {
  const width_of_container = 400;
  const width_of_square = 50;
  if (distance === width_of_container - width_of_square)
    return clearInterval(interval);

  distance = distance + 1;
  const redSquare = document.getElementById("animate");
  redSquare.style.left = distance + "px";
}
