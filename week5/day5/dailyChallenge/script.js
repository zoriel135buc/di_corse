const form = document.getElementById("form");
const ul = document.getElementById("list-tasks");

form.addEventListener("submit", handleSubmit);
const tasks = [];

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const task = ("formData:", formData.get("task"));
  if (task === "") return;
  tasks.push(task);
  renderTasks(tasks);
  form.reset();
}

function renderTasks() {
  console.log("tasks:", tasks);
  ul.innerHTML = "";

  for (const task of tasks) {
    console.log("the current task is", task);
    const li = generateLi(task);
    ul.append(li);
  }
}

function generateLi(task) {
  const li = document.createElement("li");

  const xMark = document.createElement("i");
  xMark.classList.add("fa-solid", "fa-xmark");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const span = document.createElement("span");
  span.innerText = task;

  li.append(xMark, checkbox, span);

  return li;
}
