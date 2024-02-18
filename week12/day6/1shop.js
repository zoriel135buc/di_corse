const { products } = require(`./1product.js`);

console.log(products);

const shopproduct = (productname) => {
  const res = products.filter((product) => product.name == productname);
  console.log(res);
};
shopproduct(`Book`);
