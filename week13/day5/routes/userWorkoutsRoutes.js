const express = require("express");
const router = express.Router();
const user_workoutsController = require("../controllers/userWorkoutsController");

router.get("/", user_workoutsController.getAllUser_workouts);
router.get("/:id", user_workoutsController.getUser_workoutsById);
router.post("/", user_workoutsController.createUser_workouts);
router.put("/:id", user_workoutsController.updateUser_workouts);
router.delete("/:id", user_workoutsController.deleteUser_workouts);

module.exports = router;
