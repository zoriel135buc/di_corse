const container = document.getElementById("container");
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = () => {
  return new Promise((resolve, reject) => {
    let parsedObject = JSON.parse(morse);
    if (!parsedObject) {
      reject("there was an problem");
    } else {
      resolve(parsedObject);
    }
  });
};

toJs()
  .then((res) => {
    // console.log(res);
    return toMorse(res);
  })
  .then((newData) => {
    joinWords(newData);
  })
  .catch((e) => {
    console.log(e);
  });

const toMorse = (obj) => {
  return new Promise((resolve, reject) => {
    let userWord = prompt("Give me a word");
    let arrayOfLetters = userWord.split("");

    let morseArr = arrayOfLetters.map((letter) => {
      if (letter.toLowerCase() in obj) {
        return obj[letter.toLowerCase()];
      } else {
        reject(`${letter} is not in the object sorry bye`);
      }
    });
    resolve([morseArr, userWord]);
  });
};

const joinWords = (translationArray) => {
  let joined = translationArray[0].join(`
  `);
  container.innerText = ` ${translationArray[1]} translated to:
   ${joined}`;
  console.log(joined);
};
