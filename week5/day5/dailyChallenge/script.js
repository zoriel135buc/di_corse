const tasks = [];

const myForm = document.forms.addTasksForm;
const input = myForm.myInput;
const listTasks = document.getElementById("listTasks");

myForm.addEventListener(`submit`, addTasks);

function addTasks(e) {
  e.preventDefault();
  if (input.value === "" || input.value === "") {
    alert("please add proper todo");
    return;
  }
  listTasks.innerHTML = "";
  const ul = document.createElement("ul");

  tasks.push(input.value);
  for (let todo in tasks) {
    const newTodo = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click", function () {
      let position = tasks.indexOf(todo);
      tasks.splice(position, 1);
      newTodo.remove();
      addTasks(e);
    });

    newTodo.textContent = todo;
    newTodo.append(button);
    ul.append(newTodo);
  }
  input.value = "";
}
