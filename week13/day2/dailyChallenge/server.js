const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample emojis
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  // Add more emoji objects
];

// Function to generate random emoji and distractors
function generateQuestion() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];
  const options = [correctEmoji.name];

  while (options.length < 4) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(randomEmoji.name)) {
      options.push(randomEmoji.name);
    }
  }

  return { emoji: correctEmoji.emoji, options: shuffleArray(options) };
}

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let score = 0;

// Endpoint to serve the game
app.get("/game", (req, res) => {
  const question = generateQuestion();
  res.send(`
        <h1>Guess the Emoji!</h1>
        <form action="/submit" method="POST">
            <h2>${question.emoji}</h2>
            ${question.options
              .map(
                (option) =>
                  `<input type="radio" name="guess" value="${option}">${option}<br>`
              )
              .join("")}
            <input type="submit" value="Submit">
        </form>
        <h3>Score: ${score}</h3>
    `);
});

// Endpoint to handle form submission
app.post("/submit", (req, res) => {
  const guess = req.body.guess;
  const correctAnswer = emojis.find(
    (emoji) => emoji.emoji === req.body.emoji
  ).name;

  if (guess === correctAnswer) {
    score++;
    res.send('<h1>Correct! Well done!</h1><a href="/game">Play Again</a>');
  } else {
    res.send(
      `<h1>Wrong! The correct answer was ${correctAnswer}</h1><a href="/game">Try Again</a>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
