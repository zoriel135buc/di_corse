let bankAmount = 1500;
const vat = 17;
let totalSum = 0;
const datails = [200, -100, 146, 167, -2900];
datails.forEach((element, index) => {
  datails[index] += (element * vat) / 100;
  totalSum += datails[index];
});
console.log(datails);
console.log(`total sum is${totalSum + bankAmount}`);
