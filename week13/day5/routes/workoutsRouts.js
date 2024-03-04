const express = require("express");
const router = express.Router();
const workoutsController = require("../controllers/workoutsController");

router.get("/", workoutsController.getAllworkouts);
router.get("/:id", workoutsController.getworkoutsById);
router.post("/", workoutsController.createworkouts);
router.put("/:id", workoutsController.updateworkouts);
router.delete("/:id", workoutsController.deleteworkouts);

module.exports = router;
