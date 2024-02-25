const express = require(`express`);
const router = require(`./routes/books.js`);
const app = express();

app.use(express.json());
app.use(router);
app.listen(3000, () => {
  console.log(`hello from server`);
});
