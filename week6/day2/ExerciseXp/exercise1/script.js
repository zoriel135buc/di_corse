// function hello() {}

// const button = document.getElementById("clear");

// function P2() {
//   let counter = 0;
//   const div = document.getElementById("container");
//   const myP = document.createElement("p");
//   div.append(myP);
//   myP.innerText = "Hello World";
//   counter++;
// }
// let intervalId = setInterval(P2, 2000);

const container = document.getElementById("container");
const clearButton = document.getElementById("clear");
let paragraphCount = 0;
let interval;

function addParagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Hello World";
  container.appendChild(newParagraph);
  paragraphCount++;

  if (paragraphCount >= 5) {
    clearInterval(interval);
  }
}
interval = setInterval(addParagraph, 2000);

clearButton.addEventListener("click", function () {
  clearInterval(interval);
});
