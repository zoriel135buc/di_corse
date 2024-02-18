export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markTaskAsComplete(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      this.tasks[taskIndex].completed = true;
    } else {
      console.error("Invalid task index");
    }
  }

  listAllTasks() {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? "x" : " "}] ${task.task}`);
    });
  }
}
