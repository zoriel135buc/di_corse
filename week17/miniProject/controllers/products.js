const { _getAllProduct, _getProductById } = require(`../models/products.js`);

const getAllProduct = async (req, res) => {
  try {
    const data = await _getAllProduct();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "not found" });
  }
};
const getProductById = async (req, res) => {
  try {
    const { pid } = req.params;
    const data = await _getProductById(pid);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "not found" });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
};
