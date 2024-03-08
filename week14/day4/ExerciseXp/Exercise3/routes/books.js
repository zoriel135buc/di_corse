const express = require("express");
const router = express.Router();

const books = [
  { id: 1, name: "haarry potter" },
  { id: 2, name: "The Line of Beauty" },
];

router.get(`/`, (req, res) => {
  res.json(books);
});
router.post(`/`, (req, res) => {
  const { name } = req.body;
  const newBook = { id: books.length + 1, name };
  books.push(newBook);
  res.status(201).json(newBook);
});
router.put(`/:id`, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const booksUpdate = books.find((book) => book.id);
  if (!booksUpdate) return res.status(404).json({ message: "Todo not found" });
  booksUpdate.name = name;
  res.json(booksUpdate);
});
router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });
  books.splice(index, 1);
  res.sendStatus(204);
});
module.exports = router;
