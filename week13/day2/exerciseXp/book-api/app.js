const express = require(`express`);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});
const books = [
  {
    id: 1,
    title: `Don Quixote`,
    author: `Miguel de Cervantes`,
    publishedYear: 2018,
  },
  {
    id: 2,
    title: `	Alice's Adventures in Wonderland`,
    author: `Lewis Carroll`,
    publishedYear: 2017,
  },
  {
    id: 3,
    title: `	The Adventures of Huckleberry Finn`,
    author: `	Mark Twain`,
    publishedYear: 2001,
  },
  {
    id: 4,
    title: `	The Adventures of Tom Sawyer	`,
    author: `	Mark Twain`,
    publishedYear: 2004,
  },
];
app.get(`/api/books`, (req, res) => {
  res.json(books);
});
app.get(`/api/books/:id`, (req, res) => {
  const { id } = req.params;
  const bookId = books.find((item) => item.id == id);
  if (bookId) {
    res.json(bookId);
  } else {
    res.status(404).json({ massage: `not found` });
  }
});
app.post(`/api/books`, (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;
  const newbook = { ...req.body, id: books.length + 1 };
  books.push(newbook);
  res.send(`ok from req.body`);
});
