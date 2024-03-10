const { db } = require("../config/db.js");
const {
  _getAllTasks,
  _getTasksById,
  _createTasks,
  _updateTasks,
  _delateTasks,
} = require(`../models/tasks.js`);

const getAllTasks = async (req, res) => {
  try {
    const data = await _getAllTasks();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Not found" });
  }
};
const getTasksById = async (req, res) => {
  try {
    const { tid } = req.params;
    const data = await _getTasksById(tid);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "not found" });
  }
};
const createTasks = async (req, res) => {
  try {
    const { text } = req.body;
    const id = db.length + 1;
    await _createTasks(text, id);
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRows = await _updateTasks(id);
    if (updatedRows > 0) {
      const updatedTask = await _getTasksById(id);
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const deleateTask = await _delateTasks(id);
    if (deleateTask > 0) {
      res.status(201).json({ message: "Task deleated successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllTasks,
  getTasksById,
  createTasks,
  updateTask,
  deleteTasks,
};
