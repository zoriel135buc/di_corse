const express = require(`express`);
const {
  getAllTasks,
  getTasksById,
  createTasks,
  updateTask,
  deleteTasks,
} = require("../controllers/tasks.js");

const router = express.Router();

router.get(`/`, getAllTasks);
router.get(`/:tid`, getTasksById);
router.post(`/`, createTasks);
router.put(`/:id`, updateTask);
router.delete(`/:id`, deleteTasks);

module.exports = router;
