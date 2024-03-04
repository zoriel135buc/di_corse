const express = require("express");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.listen(3001, () => {
  console.log(`run on 3001`);
});

app.use("/", express.static(__dirname));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  // Add more emoji objects
];

app.get("/emojis", (request, response) => {
  //   console.log('params=>',request.params);
  //   console.log("query=>", request.query);
  response.json(emojis);
});

app.post("/home", (req, res) => {
  console.log("body=>", req.body);
  res.json({ a: 1 });
});
