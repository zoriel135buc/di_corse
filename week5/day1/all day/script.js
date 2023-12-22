// // const myP = document.querySelector("#anotherP");
// // console.log(myP);
// // const againMyP = document.getElementById("anotherP");
// // console.log(againMyP.textContent);

// // const lis = document.getElementsByTagName("h2");
// // console.log(lis);

// // const lis = document.getElementsByClassName("listItems");
// // console.log(lis);

// const body = document.body;
// const h1 = document.createElement("h1");
// h1.innerText = "Dom manipulation";
// const myp = document.createElement("p");
// myp.innerText =
//   "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate magnam officiis eaque provident quod debitis odit. At autem fugit, nostrum itaque officiis tenetur sunt beatae veritatis maxime similique ipsam.";

// myp.style.border = "4 px dotted salmon";
// console.log(myp.style);
// body.append(h1, myp);

// const h3 = document.querySelector("h3");
// h3.innerText = "h3h3h3";

// // h3.remove();
// console.log(h1.matches("h1"));

// for (let element of body.children) {
//   if (element.matches("h1")) {
//     console.log(element);
//   }
// }
// console.log(body.children);

// console.log(h3.closest(".adiv"));

// const div = document.querySelector("#elem");
// console.log(div.hasAttribute("id"));
// console.log(div.getAttribute("id"));
// console.log(div.getAttribute("src")); //  will get null

// div.setAttribute("style", "border:5px solid blue");
// div.setAttribute("class", "myClass red allHeaders");

// console.log(div.hasAttribute("class"));

// div.removeAttribute("style");
// div.className = "newClass";
// console.log(div.className);

// const style = document.getElementById("text");
// console.log(
//   style.setAttribute(
//     "style"`font-size:30px;color:orange; text-decoration:undreline`
//   )
// );
