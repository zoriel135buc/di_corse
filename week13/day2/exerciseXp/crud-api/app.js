const express = require("express");
const { fetchPosts } = require("./data/dataService");
const app = express();

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Posts fetched and sent successfully.");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error retrieving posts:", error);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`run on ${process.env.PORT || 5000}`);
});
