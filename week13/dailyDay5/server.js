const express = require("express");
const cors = require("cors");
const router = require("./routes/sampleRoutes.js");
const app = express();
const rbacMiddleware = require("./middleware/rbacMiddleware.js");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const users = [
  { username: "admin", role: "admin", password: "admin123" },
  { username: "user", role: "user", password: "user123" },
];
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.user = null;
  } else {
    const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");

    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    req.user = user || null;
  }
  next();
});

app.use(rbacMiddleware);

app.use(`/`, router);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
