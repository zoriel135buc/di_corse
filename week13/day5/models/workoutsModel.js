const db = require("../config/knexconnect");

class workouts {
  static async getAllworkouts() {
    return await db("workouts").select("*");
  }

  static async getworkoutsById(id) {
    return await db("workouts").where({ id }).first();
  }

  static async createworkouts(username, email, password) {
    const [userId] = await db("workouts").insert({
      username,
      email,
      password,
    });
    return await this.getworkoutsById(userId);
  }

  static async updateworkouts(id, username, email, password) {
    await db("workouts").where({ id }).update({ username, email, password });
    return await this.getworkoutsById(id);
  }

  static async deleteworkouts(id) {
    await db("workouts").where({ id }).del();
  }
}

module.exports = workouts;
