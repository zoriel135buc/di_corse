// const arr = [1, 2, 3, 4];
// const arr2 = arr;
// const actualCopy = [...arr];

// arr.push(5);
// console.log(arr);
// console.log(arr2);

// console.log(actualCopy);

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: [
      {
        paidagain: true,
      },
    ],
    meansOfPayment: ["cash", "creditCard"],
  },
};

// const displayGroceries = () => {
//   groceries.fruits.forEach((fruit) => {
//     console.log(fruit);
//   });
// };

// displayGroceries();

// const cloneGroceries = () => {
//   const user = client;
//   client = "betty";
//   console.log(`user: ${user}`);
//   console.log(`client: ${client}`);
//   const shopping = groceries;
//   groceries.totalPrice = "$35";

//   groceries.other.paid[0].paidagain = false;
//   console.log(shopping);
// };
// cloneGroceries();

// const gameInfo = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"],
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"],
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"],
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"],
//   },
// ];
// const arr = [];
// gameInfo.forEach((element) => {
//   arr.push(element.username + "!");
// });

// console.log(arr);

// const winners = [];

// gameInfo.forEach((element) => {
//   if (element.score > 5) {
//     winners.push(element.username);
//   }
// });
// console.log(winners);

// let totalScore = 0;

// gameInfo.forEach((element) => {
//   totalScore += element.score;
// });

// console.log(totalScore);

// let finalScore = gameInfo.reduce((acc, val) => {
//   return acc + val.score;
// }, 0);

// console.log(finalScore);

const menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];

// let answer = menu.some((element) => {
//   console.log(element);
//   return element.type == "dessert";
// });
// console.log(answer ? "there is atleast one dessert" : "no dessert");

// let answer = menu.every((element) => {
//   return element.type == "main";
// });

// if (!answer) {
//   menu.push({ type: "main", name: "shnitzel" });
// }

// console.log(menu);

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

// menu.forEach((element, i) => {
//   if (
//     vegetarian.some((veg) => {
//       return element.name.toUpperCase().includes(veg.toUpperCase());
//     })
//   ) {
//     menu[i].vegetarian = true;
//   } else {
//     menu[i].vegetarian = false;
//   }
// });

// console.log(menu);
