function compareToTen(num) {
  const bigerTen = new Promise((res, rej) => {
    if (num <= 10) {
      res("last for 10");
    } else {
      rej("bigger 10");
    }
  });
  bigerTen
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

compareToTen(15);
