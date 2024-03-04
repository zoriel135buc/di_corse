const Exercise = require("../models/exercisesModel");

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.getAllExercises();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = await Exercise.getExerciseById(id);
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const { name, description, muscle_group } = req.body;
    // Validate request body here if necessary
    const newExercise = await Exercise.createExercise(
      name,
      description,
      muscle_group
    );
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, muscle_group } = req.body;
    // Validate request body here if necessary
    const updatedExercise = await Exercise.updateExercise(
      id,
      name,
      description,
      muscle_group
    );
    res.json(updatedExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const id = req.params.id;
    await Exercise.deleteExercise(id);
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
