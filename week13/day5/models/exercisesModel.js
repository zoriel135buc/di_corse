const db = require("../config/knexconnect");

class Exercise {
  static async getAllExercises() {
    return await db("exercises").select("*");
  }

  static async getExerciseById(id) {
    return await db("exercises").where({ id }).first();
  }

  static async createExercise(username, email, password) {
    const [userId] = await db("users").insert({ username, email, password });
    return await this.getUsersById(userId);
  }

  static async updateExercise(id, username, email, password) {
    await db("users").where({ id }).update({ username, email, password });
    return await this.getUsersById(id);
  }

  static async deleteExercise(id) {
    await db("users").where({ id }).del();
  }
}

module.exports = Exercise;
