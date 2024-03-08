const express = require("express");
const router = require(`./routes/books.js`);
const app = express();

app.use(express.json());

app.use(`/books`, router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`i listening ${process.env.PORT || 3000}`);
});
