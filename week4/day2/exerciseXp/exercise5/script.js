// 1.Note: Read the illustration (point 4), while reading the instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange) {
  console.log("the item price is:", itemPrice);
  const sum = calculatesum(amountOfChange);
  return sum > itemPrice;
}

function calculatesum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let coinValue;
    const numberOfCoins = arr[i];
    if (i === 0) {
      coinValue = 0.25;
    }
    if (i === 1) {
      coinValue = 0.1;
    }
    if (i === 2) {
      coinValue = 0.05;
    }
    if (i === 3) {
      coinValue = 0.01;
    }
    console.log(
      "we have ",
      numberOfCoins,
      "coins that have a value of",
      coinValue
    );
    sum = sum + numberOfCoins * coinValue;
  }
  console.log("your own:", sum);
  return sum;
}
changeEnough(4.25, [25, 20, 5, 0]);
