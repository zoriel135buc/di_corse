const express = require(`express`);
const { getAllProduct, getProductById } = require("../controllers/products");

const router = express.Router();

router.get(`/`, getAllProduct);
router.get(`/:pid`, getProductById);

module.exports = router;
