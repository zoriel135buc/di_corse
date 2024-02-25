const express = require("express");
const router = express.Router();

router.get(`/`, (req, res) => {
  console.log(`hello from homepage`);
  res.json(`welcome to home page`);
});

router.get(`/about`, (req, res) => {
  console.log(`hello from about page`);
  res.json(`welcome to our about page`);
});

module.exports = router;
