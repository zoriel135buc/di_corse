const express = require(`express`);
const router = require(`./routes/tasks.js`);
const app = express();

app.use(express.json());
app.use(router);
app.listen(5000, () => {
  console.log(`hello from server`);
});
