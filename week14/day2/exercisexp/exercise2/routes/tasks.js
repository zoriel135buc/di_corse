const express = require("express");
const router = express.Router();
const todo = [{ id: 1, task: `homework` }];
router.get(`/`, (req, res) => {
  console.log(`hello from homepage`);
  res.json(todo);
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const indx = todo.findIndex((item) => item.id == id);
  if (!indx) {
    return res.status(404).json({ massage: `not found` });
  }
  todo[indx] = { ...todo[indx], task };
  res.json(todo);
});
router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const indx = todo.findIndex((item) => item.id == id);
  if (!indx) {
    return res.status(404).json({ massage: `not found` });
  }
  todo.splice(indx, 1);
  res.json(todo);
});

router.post(`/`, (req, res) => {
  console.log(req.body);
  const task = req.body.task;
  console.log(task);
  const id = todo.length + 1;
  todo.push({ id: id, task: task });
  res.json(todo);
});

module.exports = router;
