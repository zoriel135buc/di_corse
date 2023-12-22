<<<<<<< HEAD
// // event handelers
// function clicked() {
//   alert("i was clicked");
// }

// const button = document.querySelector("button");
// button.onclick = clicked;

// exercise1
// const table = document.querySelector("table");
// let myRow = 2;
// function insertRow() {
//   myRow += 1;
//   const newRow = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   td1.innerText = `Row${myRow}cell1`;
//   td2.innerText = `Row${myRow}cell2`;
//   newRow.append(td1, td2);
//   table.append(newRow);
//   cpnsole.log(myRow);
// }

// addEventListenet

// let x = document.getElementById("btn");
// let y = document.getElementById("btn1");

// function RespondClick(e) {
//   console.log(e.target.innerText);
//   //   console.log("Button Clicked");
// }

// function RespondMouseOver() {
//   console.log("My mouse is over the btn");
// }

// function RespondMouseOut() {
//   console.log("My mouse is out of the btn");
// }

// x.addEventListener("click", RespondClick);
// // x.addEventListener("mouseover", RespondMouseOver);
// // x.addEventListener("mouseOut", RespondMouseOut);

// y.addEventListener("click", RespondClick);
// // y.addEventListener("mouseOver", RespondMouseOver);
// // y.addEventListener("mouseOut", RespondMouseOut);

// let x = document.getElementById("jsstyle");

// function RespondClick(e) {

// }

// x.addEventListener("click", RespondClick);
// let form = document.forms.my;

// form.addEventListener("submit", getUserComments);

// function getUserComments(e) {
//   e.preventDefault();
//   alert("submit !");
//   console.log(e.target);
// }

// exercise3

// const form = document.forms.form1;
// console.log(form);
// function getInfo(banana) {
//   banana.preventDefault();
//   let input1 = form[0].value;
//   let input2 = form[1].value;
//   console.log(`first  name:${input1} last name: ${input2}`);
// }

// form.addEventListener("submit", getInfo);
=======
const newDiv = document.getElementById("navBar");
newDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const textLI = document.createTextNode("Logout");
newLi.appendChild(textLI);
document.getElementById("socialNetworkNavigation").appendChild(newLi);
>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
