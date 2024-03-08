const { db } = require(`../config/db.js`);

const _getAllProduct = () => {
  return db(`products`).select(`id`, `name`);
};

const _getProductById = (productid) => {
  return db(`products`).select(`*`).where({ id: productid });
};

module.exports = {
  _getAllProduct,
  _getProductById,
};
