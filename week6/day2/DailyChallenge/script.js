const layer = document.getElementById("layer");
let letters = /^[A-Za-z]+$/;

layer.addEventListener("keypress", function (e) {
  if (!letters.test(e.key)) {
    e.preventDefault();
  }
});
