import express from "express";
import {
  _getAllProducts,
  _search4Product,
  _getOneProduct,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/all", _getAllProducts);
router.get("/search", _search4Product);
router.get("/one/:id", _getOneProduct);

export default router;

/**
 * index.html
 * script.js
 * 
 * all of your products
 */
