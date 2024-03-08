const express = require(`express`);
const cors = require(`cors`);
const router = require(`./routes/product.js`);

const app = express();
app.use(cors());

app.use(`/api/products`, router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`run on ${process.env.PORT || 5000}`);
});
