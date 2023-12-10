function hotelCost() {
  let answer;
  while (!isOnlyNumbers(answer)) {
    answer = prompt("how many nights would you like to stay");
  }
  const numberOfNights = Number(answer);
  const costPerNight = 140;
  const totalPrice = numberOfNights * costPerNight;
  return totalPrice;
}
// hotelCost();

function isOnlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}
function includNumbers(str) {
  const regex = new RegExp(/\d/);
  return regex.test(str);
}

function planeRideCost() {
  let destintion = "";
  while (destintion == "" || includNumbers(destintion)) {
    destintion = prompt("wehere are you going?");
  }

  if (destintion === "london") return 183;
  if (destintion === "paris") return 220;
  return 300;
}
rentalCarCost();
function rentalCarCost() {
  let answer;

  while (!isOnlyNumbers(answer)) {
    answer = prompt("how many days you want rent the car?");
  }
  const dailyPrise = 40;
  const numberOfDays = Number(answer);

  let discount = 0;
  if (numberOfDays >= 10) discount = 0.05;
  //   const totalPrice = dailyPrise * numberOfDays * (1 - discount);
  //   return totalPrice;
}

function totalVacationCoast() {
  const carprise = rentalCarCost();
  const hotelprice = hotelCost();
  const planeprice = planeRideCost();

  console.log(`carprice:`, carprise);
  console.log(`hotelprice:`, hotelprice);
  console.log(`planprice:`, planeprice);
  const totalPrice = carprise + hotelprice + planeprice;
  console.log(`totalprice`, totalPrice);
}
totalVacationCoast();
