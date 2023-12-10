let numberOfBeers = getUserInput();
let numbersOfBeersTakeAway = 1;

function getUserInput() {
  const answer = prompt("how many beers?");
  if (answer == "") return alert("please enter a somthing");
  const number = Number(answer);
  if (Number.isNaN(number)) return alert("please enter a number");
  return number;
}

while (numberOfBeers > 0) {
  const stanza = makeStanza(numberOfBeers, numbersOfBeersTakeAway);
  console.log(stanza);
  numberOfBeers -= numbersOfBeersTakeAway;
  numbersOfBeersTakeAway++;
}

function makeStanza(num, cunter) {
  const bottleOrBottles = getBottleOrBottles(num);
  const bottleToTakeAway = getSmallerNumber(cunter, num);
  const remainingBottles = getBiggerNumber(num - cunter, 0);
  const stanza = `${num} ${bottleOrBottles} of beer on the wall
   take ${num} ${bottleOrBottles} of beer
    Take ${bottleToTakeAway} down, pass it around
    ${remainingBottles} ${getBottleOrBottles(
    remainingBottles
  )} of beer on the wall`;

  return stanza;
}

function getBiggerNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function getSmallerNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function isPlural(num) {
  return num > 1;
}

function getBottleOrBottles(num) {
  if (isPlural(num)) {
    return "bottles";
  } else {
    return "bottle";
  }
}
