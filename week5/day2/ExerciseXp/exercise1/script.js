const div1 = document.getElementById("container");
console.log(div1);

const li1 = document.getElementsByTagName("ul")[0].lastElementChild;
li1.innerText = "richard";
console.log(li1.textContent);

const li2 = document.getElementsByTagName("li")[3];
li2.remove(li2);
console.log(li2.textContent);

const ulLists = document.querySelectorAll(".list");
console.log(ulLists);
for (let i = 0; i < ulLists.length; i++) {
  const firstNameElement = ulLists[i].querySelector("li");
  console.log(firstNameElement.textContent);
  firstNameElement.textContent = "zori";
}
