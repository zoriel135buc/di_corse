const answer = prompt("type a few words seperated by commas");

const words = answer.split(" ,");

const lengthOfLongestWord = getLengthOfLongestWord();

displayRows(words, lengthOfLongestWord);

function displayRows(words, lengthOfLongestWord) {
  const delimiterRow = createDelimiterRow();
  console.log(delimiterRow);
  for (const word of words) {
    displayWordWithStars(word, lengthOfLongestWord);
  }
  console.log(delimiterRow);
}

function displayWordWithStars(word) {
  const numberOfSoacesToAdd = lengthOfLongesWord - word.length + 1;
  const emptySpaces = " ".repeat(numberOfSoacesToAdd);
  console.log("* " + word + emptySpaces + "* ");
}
