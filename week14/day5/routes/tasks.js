const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

// Path to the JSON file
const tasksFilePath = "./tasks.json";

// Helper function to read tasks from JSON file
async function readTasksFromFile() {
  try {
    const data = await fs.readFile(tasksFilePath);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

// Helper function to write tasks to JSON file
async function writeTasksToFile(tasks) {
  try {
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    throw error;
  }
}

// GET /tasks: Retrieve a list of all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /tasks/:id: Retrieve a specific task by ID
router.get("/:id", async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    const task = tasks.find((task) => task.id === parseInt(req.params.id));
    if (!task) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /tasks: Create a new task
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400).json({ error: "Title and description are required" });
    } else {
      const tasks = await readTasksFromFile();
      const newTask = { id: tasks.length + 1, title, description };
      tasks.push(newTask);
      await writeTasksToFile(tasks);
      res.status(201).json(newTask);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /tasks/:id: Update a task by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title && !description) {
      res
        .status(400)
        .json({
          error: "At least one field (title or description) is required",
        });
    } else {
      const tasks = await readTasksFromFile();
      const taskIndex = tasks.findIndex(
        (task) => task.id === parseInt(req.params.id)
      );
      if (taskIndex === -1) {
        res.status(404).json({ error: "Task not found" });
      } else {
        const updatedTask = {
          id: parseInt(req.params.id),
          title: title || tasks[taskIndex].title,
          description: description || tasks[taskIndex].description,
        };
        tasks[taskIndex] = updatedTask;
        await writeTasksToFile(tasks);
        res.json(updatedTask);
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /tasks/:id: Delete a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    const taskIndex = tasks.findIndex(
      (task) => task.id === parseInt(req.params.id)
    );
    if (taskIndex === -1) {
      res.status(404).json({ error: "Task not found" });
    } else {
      tasks.splice(taskIndex, 1);
      await writeTasksToFile(tasks);
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const tasks = require(`../tasks.json`);

// router.get(`/`, (req, res) => {
//   res.json(tasks);
// });
// router.get(`/:id`, (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;
//   const product = data.find((item) => item.id === id);
//   if (!product) {
//     return res.status(404).json({ massage: `not found` });
//   }
// });
// router.post(`/`, (req, res) => {
//   const { task } = req.body;
//   const newTask = { ...req.body, id: tasks.length + 1, task };
//   if (!newTask) {
//     return res.status(404).json({ massage: `not found` });
//   }
//   tasks.push(newTask);
//   res.send(`ok from req.body`);
//   res.json(tasks);
// });
// router.put(`/:id`, (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;
//   const indx = tasks.findIndex((item) => item.id == id);
//   if (!indx) {
//     return res.status(404).json({ massage: `not found` });
//   }
//   tasks[indx] = { ...tasks[indx], task };
//   res.json(tasks);
// });
// router.delete(`/:id`, (req, res) => {
//   const { id } = req.params;
//   const indx = tasks.findIndex((item) => item.id == id);
//   if (!indx) {
//     return res.status(404).json({ massage: `not found` });
//   }
//   data.splice(indx, 1);
//   res.json(tasks);
// });
// module.exports = router;
