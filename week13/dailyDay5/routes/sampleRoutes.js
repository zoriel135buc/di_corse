const { getPublic } = require("../controllers/sampleController.js");
const express = require("express");
const router = express.Router();

router.get(`/public`, (req, res) => {
  res.send(`public route`);
});

router.get(`/user-profile`, (req, res) => {
  res.send(`User Profile route`);
});
router.post(`/admin-panel`, (req, res) => {
  res.send(`Admin Panel route (POST)`);
});
router.get(`/admin-panel`, (req, res) => {
  res.send(`Admin Panel route`);
});
module.exports = router;
