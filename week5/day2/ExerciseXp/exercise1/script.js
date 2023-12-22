<<<<<<< HEAD
const div1 = document.getElementById("container");
console.log(div1);

const li1 = document.getElementsByTagName("ul")[0].lastElementChild;
li1.innerText = "richard";
console.log(li1.textContent);

const li2 = document.getElementsByTagName("li")[3];
li2.remove(li2);
console.log(li2.textContent);

const lists = (document.querySelectorAll(
  ".list"
)[1].firstElementChild.textContent = "zori");
const lists2 = (document.querySelectorAll(
  ".list"
)[0].firstElementChild.textContent = "zori");
console.log(lists, lists2);
=======
const div1 = document.getElementById("container");
console.log(div1);

const li1 = document.getElementsByTagName("ul")[0].lastElementChild;
li1.innerText = "richard";
console.log(li1.textContent);

const li2 = document.getElementsByTagName("li")[3];
li2.remove(li2);
console.log(li2.textContent);

const lists = (document.querySelectorAll(
  ".list"
)[1].firstElementChild.textContent = "zori");
const lists2 = (document.querySelectorAll(
  ".list"
)[0].firstElementChild.textContent = "zori");
console.log(lists, lists2);
>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
