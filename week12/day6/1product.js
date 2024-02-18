const products = [
  {
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
  },
  {
    name: "Headphones",
    price: 49.99,
    category: "Electronics",
  },
  {
    name: "T-shirt",
    price: 19.99,
    category: "Apparel",
  },
  {
    name: "Jeans",
    price: 39.99,
    category: "Apparel",
  },
  {
    name: "Book",
    price: 14.99,
    category: "Books",
  },
];

function findProduct(productName) {
  return products.find((product) => product.name === productName);
}

module.exports = {
  products,
};
