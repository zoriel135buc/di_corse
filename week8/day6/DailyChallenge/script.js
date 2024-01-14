let client = "Betty";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "35$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};
let displayGroceries = groceries.fruits;

displayGroceries.forEach((fruitsItem, index) => {
  console.log(`${index + 1}# choice is ${fruitsItem}`);
});

const cloneGroceries = () => {
  let user = client;
  shopping = groceries;
  return user;
};
const userCopy = cloneGroceries();
console.log(userCopy);
