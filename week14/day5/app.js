const express = require("express");
const router = require("./routes/tasks.js");

const app = express();

app.use(express.json());
app.use(`/tasks`, router);
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`i listening ${process.env.PORT || 3000}`);
});
