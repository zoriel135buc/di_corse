import { TodoList } from "./todoapp4";

const todoList = new TodoList();

todoList.addTask("Buy groceries");
todoList.addTask("Clean the house");
todoList.addTask("Do laundry");

todoList.markTaskAsComplete(0);
todoList.markTaskAsComplete(2);

todoList.listAllTasks();
