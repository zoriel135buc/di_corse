const db = require("../config/knexconnect");

class User_workouts {
  static async getAllUser_workouts() {
    return await db("user_workouts").select("*");
  }

  static async getUser_workoutsById(id) {
    return await db("user_workouts").where({ id }).first();
  }

  static async createUser_workouts(username, email, password) {
    const [userId] = await db("user_workouts").insert({
      username,
      email,
      password,
    });
    return await this.getUser_workoutsById(userId);
  }

  static async updateUser_workouts(id, username, email, password) {
    await db("user_workouts")
      .where({ id })
      .update({ username, email, password });
    return await this.getUser_workoutsById(id);
  }

  static async deleteUser_workouts(id) {
    await db("user_workouts").where({ id }).del();
  }
}

module.exports = User_workouts;
