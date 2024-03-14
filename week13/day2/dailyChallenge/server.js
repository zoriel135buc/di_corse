const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let randomEmoji = {};
let score = 0;
let globalRandom = -1;
const emojis = [
  { emoji: "😊", name: "Smiling Face with Smiling Eyes" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "😍", name: "Smiling Face with Heart-Eyes" },
  { emoji: "🤔", name: "Thinking Face" },
  { emoji: "😎", name: "Smiling Face with Sunglasses" },
  { emoji: "😜", name: "Winking Face with Tongue" },
  { emoji: "😘", name: "Face Blowing a Kiss" },
  { emoji: "😢", name: "Crying Face" },
  { emoji: "😡", name: "Pouting Face" },
  { emoji: "🥳", name: "Partying Face" },
];

const generateRandom = () => {
  let random;
  let randomName;
  let randomFace;
  do {
    random = Math.floor(Math.random() * emojis.length);
    console.log(random, globalRandom);
    randomName = emojis[random].name;
    randomFace = emojis[random].emoji;
  } while (random === globalRandom);
  globalRandom = random;
  return { randomFace, randomName };
};

app.get(`/`, (req, res) => {
  randomEmoji = generateRandom();
  res.json({ emojis, randomEmoji });
});
app.post(`/submit`, (req, res) => {
  const { emojiName } = req.body;
  if (emojiName === randomEmoji.randomName) {
    score++;
    randomEmoji = generateRandom();
    res.json({ massage: "you correct", randomEmoji, score });
  } else {
    res.json({ massage: "try again", score, randomEmoji });
  }
});
app.listen(3001, () => {
  console.log(`Server is running on ${3001}`);
});
