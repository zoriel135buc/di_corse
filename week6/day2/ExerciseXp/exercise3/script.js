const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box");

yellowBox.addEventListener("dragover", handleDragEnter);
yellowBox.addEventListener("dragenter", handleDragEnter);
yellowBox.addEventListener("dragleave", handleDragLeave);
yellowBox.addEventListener("drop", handleDrop);

function handleDragLeave(event) {
  event.preventDefault();
  yellowBox.classList.remove("is-hovered");
}
function handleDragEnter(event) {
  event.preventDefault();
  yellowBox.classList.add("is-hovered");
}
function handleDrop() {
  yellowBox.classList.remove("is-hovered");
  yellowBox.append(box);
}
