const express = require("express");
const router = require(`./routes/index.js`);
const app = express();

app.use(`/`, router);
app.use(`/about`, router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`i am listening ${process.env.PORT || 5000}`);
});
