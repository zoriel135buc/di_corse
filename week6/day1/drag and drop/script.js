const draggable = document.getElementById("draggable");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

draggable.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

container1.addEventListener("dragover", allowDrop);
container2.addEventListener("dragover", allowDrop);

container1.addEventListener("drop", function (event) {
  drop(event, container1);
});

container2.addEventListener("drop", function (event) {
  drop(event, container2);
});

function allowDrop(event) {
  event.preventDefault();
}

function drop(event, destination) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);

  // Check if the drop target is a valid container
  if (destination.classList.contains("container")) {
    destination.appendChild(draggedElement);
  }
}
