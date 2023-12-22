const nanner = document.querySelector("div");

function showTitle() {
  nanner.setAttribute(
    "style",
    "display: flex; justify-content: center; display: none"
  );
}
setTimeout(showTitle, 5000);
