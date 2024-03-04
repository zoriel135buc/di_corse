fetch("http://localhost:3001/emojis")
  .then((res) => res.json())
  .then((emojis) => {
    console.log(emojis);
  })
  .catch((err) => {
    console.log(err);
  });
