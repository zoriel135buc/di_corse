const express = require("express");
const router = express.Router();

router.get(`/`, (req, res) => {
  const data = console.log("hello");
  res.json(data);
});
router.get(`/about`, (req, res) => {
  const data = console.log("about");
  ("about");
  res.json(data);
});

module.exports = router;
