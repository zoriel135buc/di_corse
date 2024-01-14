let party = [
  {
    desert: "Chocolate Mousse",
    calories: 30,
  },
  {
    desert: "Apple Pie",
    calories: 15,
  },
  {
    desert: "Croissant",
    calories: 50,
  },
  {
    desert: "Strawberry Icecream",
    calories: 5,
  },
];
//   Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85

let sum = party.reduce((acc, val) => {
  if (val.desert === "Apple Pie") {
    return acc;
  }
  return acc + val.calories;
}, 0);
console.log(sum);
