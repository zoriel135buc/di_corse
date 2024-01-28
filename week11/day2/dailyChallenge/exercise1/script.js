function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(isString)) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject("sorry ,all valus shold be string");
    }
  })
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
}

function isString(arg) {
  return typeof arg === "string";
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length >= 4) {
      resolve(words.sort());
    } else {
      reject("sorry,array to short");
    }
  })
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
}
const words = ["hello", "people", "how", "you"];
makeAllCaps(words);
sortWords(words);
