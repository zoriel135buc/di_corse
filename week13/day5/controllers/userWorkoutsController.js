const User_workouts = require("../models/userWorkoutsModel");

exports.getAllUser_workouts = async (req, res) => {
  try {
    const User_workouts = await User_Workouts.getAllUser_workouts();
    res.json(User_workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser_workoutsById = async (req, res) => {
  try {
    const id = req.params.id;
    const user_workouts = await User_Workout.getUser_workoutsById(id);
    res.json(user_workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser_workouts = async (req, res) => {
  try {
    const { username, email, id } = req.body;

    const newUser_workouts = await User_Workout.createUser_workouts(
      username,
      email,
      id
    );
    res.status(201).json(newUser_workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser_workouts = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;

    const updatedUser_workouts = await User_workouts.updatedUser_workouts(
      id,
      username,
      email,
      password
    );
    res.json(updatedUser_workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser_workouts = async (req, res) => {
  try {
    const id = req.params.id;
    await User_workouts.deleteUser_workouts(id);
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
