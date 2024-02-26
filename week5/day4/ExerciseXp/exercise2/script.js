const form = document.querySelector("form");
console.log(form);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const button = document.getElementById("submit");
console.log(fname);
console.log(lname);
console.log(button);

const fname2 = document.getElementsByName("firstname");
const lname2 = document.getElementsByName("lastname");
console.log(fname2);
console.log(lname2);

function logFormInputs(e) {
  e.preventDefault();
  const firstname = document.querySelector("[name=firstname]").value;
  const lastname = document.querySelector("[name=lastname]").value;
  console.log(firstname, lastname);
  if (firstname === "" || lastname === "") {
    alert("please fill in all fieldes");
  } else {
    const ul = document.querySelector(".usersAnswer");
    ul.innerHTML = " ";
    const firstLi = document.createElement("li");
    const lastLi = document.createElement("li");
    firstLi.innerText = firstname;
    lastLi.innerText = lastname;
    ul.append(firstLi, lastLi);
  }
}
form.addEventListener("click", logFormInputs);
