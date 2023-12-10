function isDivisible() {
  let sum = 0;
  for (i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum = sum + i;
    }
  }
  console.log("the sum of numbers divisiable by 23 is:", sum);
}
isDivisible();
