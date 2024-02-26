const express = require(`express`);

const { products } = require("./config/db.js");

/** routes,controller,modules
 *server
 * |_config->connection to db, connection to files
 * |_medals->sql queries to db,i/0 filesystem
 * |_controllers->logic,req & res
 * |_routes->router->"traffic control"
 * |_middleware??
 **/

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.get("/test", (req, res) => {
  res.send("ok");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = products.finf((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ massage: "not found" });
  }
  res.json(product);
});
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filterName = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterName.length === 0) {
    return res.status(404).json({ massage: "not found" });
  }
  res.json(filterName);
});

// get the data from the body
app.post("/api/products", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const indx = products.findIndex((item) => item.id == id);
  // {id:2,name:"ipad",price:700}
  products[indx] = { ...products[indx], name, price };

  //   products[indx].name = name;
  //   products[indx].price = price;
  res.json(products);
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  products.splice(indx, 1);
  res.json(products);
});
// **
// *crud
// c-create-post
// R-read-get
// U-update/modify-PUT
// D-deleate-DELETE
// **
