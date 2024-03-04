const knex = require("knex");

const knexConfig = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "zori135buc",
    database: "miniProject",
    port: 5432,
  },
};

const db = knex(knexConfig);

module.exports = db;
