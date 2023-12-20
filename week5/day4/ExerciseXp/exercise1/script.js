const h1 = document.querySelector("h1");
console.log(h1);
const last = document.getElementsByTagName("p")[3];
last.remove();

const h2Elements = document.getElementsByTagName("h2");

const firstH2Element = h2Elements[0];

firstH2Element.addEventListener("click", function () {
  firstH2Element.style.backgroundColor = "red";
});

const h3Element = document.getElementsByTagName("h3");

const firstH3Element = h3Element[0];

firstH3Element.addEventListener("click", function () {
  firstH3Element.style.display = "none";
});

// Get the button element by its id
const boldButton = document.getElementById("boldButton");

const paragraphs = document.querySelectorAll("p");

boldButton.addEventListener("click", function () {
  paragraphs.forEach((paragraph) => {
    const isBold = window.getComputedStyle(paragraph).fontWeight === "700";

    paragraph.style.fontWeight = isBold ? "normal" : "bold";
  });
});
