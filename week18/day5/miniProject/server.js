const express = require(`express`);
const { db } = require(`./config/db.js`);
const cors = require(`cors`);
const router = require(`./routes/tasks.js`);

const app = express();
app.use(express.json());
app.use(cors());

app.use(`/tasks`, router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`run on ${process.env.PORT || 5000}`);
});
