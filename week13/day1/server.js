const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

const products = [
  { id: 1, name: `iphone`, price: 800 },
  { id: 2, name: `ipad`, price: 700 },
  { id: 3, name: `iwatch`, price: 600 },
];

app.get(`/api/products`, (req, res) => {
  res.json(products);
});
app.get("/test", (req, res) => {
  res.send("ok");
});
//  get data from request with pharams
app.get(`/api/products/:id`, (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ massage: `not found` });
  }
  res.json(product);
});
// get data from request with a query string?name=aa&email=bbb
app.get(`/api/search`, (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterProduct = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterProduct.length === 0) {
    return res.status(404).json({ massage: "your search name not found" });
  }
  res.json(filterProduct);
});

// get data from body=> req.body
app.post(`/api/products`, (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { ...req.body, id: products.length + 1 };
  //   const newProduct = {
  //     id: products.length + 1,
  //     name: req.body.name,
  //     price: req.body.price,
  //   };
  products.push(newProduct);
  res.send(`ok from req.body`);
});

// put-update product=>id of product in the params
// the name and price =>on the body
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indx = products.findIndex((item) => item.id == id);
  products[indx] = { ...products[indx], name, price };
  res.json(products);
});
// delete a product -id in pharams
app.delete(`.api/products`, (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  products.splice(indx, 1);
  res.json(products);
});
