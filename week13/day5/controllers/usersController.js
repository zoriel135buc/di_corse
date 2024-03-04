const Users = require("../models/usersModel");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await Users.getAllUsers();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const Users = await Users.getUsersById(id);
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUsers = async (req, res) => {
  try {
    const { username, email, id } = req.body;

    const newUsers = await Users.createExercise(username, email, id);
    res.status(201).json(newUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, password } = req.body;

    const updatedUsers = await Users.updateExercise(
      id,
      username,
      email,
      password
    );
    res.json(updatedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.deleteUsers(id);
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
