const { db } = require(`../config/db.js`);

const _getAllTasks = async () => {
  return db(`tasks`).select(`id`, `text`, `completed`).orderBy(`id`, `asc`);
};

const _getTasksById = async (tasksid) => {
  return db(`tasks`).select(`*`).where({ id: tasksid });
};
const _createTasks = async (taskText) => {
  return db("tasks").insert({ text: taskText, completed: false });
};
const _updateTasks = async (taskId) => {
  return db(`tasks`).where({ id: taskId }).update({ completed: true });
};
const _delateTasks = async (Id) => {
  return db(`tasks`).select(`*`).where({ id: Id }).del();
};
module.exports = {
  _getAllTasks,
  _getTasksById,
  _createTasks,
  _updateTasks,
  _delateTasks,
};
