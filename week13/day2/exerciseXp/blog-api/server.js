const express = require(`express`);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second blog post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third blog post.",
  },
];

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});
app.get(`/posts`, (req, res) => {
  res.json(data);
  if (!data) {
    return res.status(404).json({ massage: `not found` });
  }
});
app.get(`/posts/:id`, (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const product = data.find((item) => item.id == id);
  if (!product) {
    return res.status(404).json({ massage: `not found` });
  }
  res.json(product);
});
app.post(`/posts`, (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;
  const newProduct = { ...req.body, id: data.length + 1 };
  if (!newProduct) {
    return res.status(404).json({ massage: `not found` });
  }
  data.push(newProduct);
  res.send(`ok from req.body`);
  res.json(req.body);
});
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const indx = data.findIndex((item) => item.id == id);
  if (!indx) {
    return res.status(404).json({ massage: `not found` });
  }
  data[indx] = { ...data[indx], title, content };
  res.json(data);
});
app.delete(`/posts/:id`, (req, res) => {
  const { id } = req.params;
  const indx = data.findIndex((item) => item.id == id);
  if (!indx) {
    return res.status(404).json({ massage: `not found` });
  }
  data.splice(indx, 1);
  res.json(data);
});
