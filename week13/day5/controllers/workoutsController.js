const workouts = require("../models/workoutsModel");

exports.getAllworkouts = async (req, res) => {
  try {
    const workouts = await Workouts.getAllworkouts();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getworkoutsById = async (req, res) => {
  try {
    const id = req.params.id;
    const workouts = await User_Workout.getworkoutsById(id);
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createworkouts = async (req, res) => {
  try {
    const { username, email, id } = req.body;

    const newworkouts = await Workout.createworkouts(username, email, id);
    res.status(201).json(newworkouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateworkouts = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;

    const updatedworkouts = await workouts.updatedUser_workouts(
      id,
      username,
      email,
      password
    );
    res.json(updatedworkouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteworkouts = async (req, res) => {
  try {
    const id = req.params.id;
    await User_workouts.deleteworkouts(id);
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
