const express = require("express");
const router = express.Router();
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
router.get(`/`, (req, res) => {
  console.log(` Get all books `);
  res.json(books);
});

router.post(`/`, (req, res) => {
  console.log(req.body);
  const { title, author, publishedYear } = req.body;
  console.log(title);
  const id = books.length + 1;
  books.push({
    id: id,
    title: title,
    author: author,
    publishedYear: publishedYear,
  });
  res.json(books);
});

router.put(`/:id`, (req, res) => {});

router.delete(`/`, (req, res) => {});
module.exports = router;
