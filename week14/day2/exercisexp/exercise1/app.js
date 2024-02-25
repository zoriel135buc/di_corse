const express = require(`express`);
const router = require(`./routes/index.js`);
const app = express();

app.use(router);
app.listen(5000, () => {
  console.log(`hello from server`);
});
