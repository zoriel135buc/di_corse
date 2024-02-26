const div1 = document.querySelector("div");
const div2 = document.querySelectorAll("div")[0];
const div3 = document.querySelector("body").firstElementChild;
console.log(div1.textContent);
console.log(div2);
console.log(div3);

const ul1 = div1.nextElementSibling;
const ul = document.querySelector("ul");
console.log(ul.textContent);

const lis1 = document.querySelectorAll("li")[1];
const lis2 = ul.children[1];
console.log(lis1);
console.log(lis2);
