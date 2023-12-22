//SetTimeout-> run code ONCE after given time
// const button = document.querySelector("button");
// function sayHi(username) {
//   alert(`Hello! ${username}`);
// }

// let timoutId = setTimeout(sayHi, 3000, "dani123");

// button.addEventListener("click", function () {
//   clearTimeout(timoutId);
// });

//SetInterval
// const myP = document.querySelector("#myP");
// let counter = 0;

// function incrementSeconds() {
//   myP.innerText = counter;
//   counter++;
// }
// let intervalId = setInterval(incrementSeconds, 100);

// button.addEventListener("click", function () {
//   clearInterval(intervalId);
// });

//Animations-> Moving box

const child = document.getElementById("child");

let pos = 0;
let intervalId = setInterval(function () {
  if (pos == 300) {
    clearInterval(intervalId);
    // pos = 0;
  }
  pos++;
  child.style.left = `${pos}px`;
  child.style.top = `${pos}px`;
}, 10);
