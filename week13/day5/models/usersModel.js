const db = require("../config/knexconnect");

class Users {
  static async getAllUsers() {
    return await db("users").select("*");
  }

  static async getUsersById(id) {
    return await db("users").where({ id }).first();
  }

  static async createUser(username, email, password) {
    const [userId] = await db("users").insert({ username, email, password });
    return await this.getUsersById(userId);
  }

  static async updateUser(id, username, email, password) {
    await db("users").where({ id }).update({ username, email, password });
    return await this.getUsersById(id);
  }

  static async deleteUser(id) {
    await db("users").where({ id }).del();
  }
}

module.exports = Users;
