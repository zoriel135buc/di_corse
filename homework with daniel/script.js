const tasks = [];

const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.getElementsByClassName("listTasks")[0];

const ul = document.createElement("ul");
div.append(ul);
console.log(button);
console.log(input);

function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("Please fill ");
    return;
  } else {
    tasks.push(input.value);
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.append(li);
    const cleanBtn = document.createElement("button");
    cleanBtn.innerText = "Clean";
    li.append(cleanBtn);
    cleanBtn.addEventListener("click", () => {
      li.remove();
    });
  }
  console.log(tasks);
}

button.addEventListener("click", addTask);
