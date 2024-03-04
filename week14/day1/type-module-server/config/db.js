import knex from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5433,
    user: "postgres",
    database: "postgres",
    password: "123456",
  },
});

