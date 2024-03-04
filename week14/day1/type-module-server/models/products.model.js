import { db } from "../config/db.js";

export const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

export const search4Product = (name) => {
  return db("products")
    .select("id", "name", "price")
    .whereILike("name", "%" + name + "%");
};

export const getOneProduct = (id) => {
  return db("products")
  .select("id", "name", "price")
  .where({ id: id });
};
