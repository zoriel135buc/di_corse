<<<<<<< HEAD
// 1. Add the stock and prices objects to your js file.
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// 2.Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
//  It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"];

// 3.Create a function called myBill() that takes no parameters.

// 4.The function should return the total price of your shoppingList.
//  In order to do this you must follow these rules:

// 1.The item must be in stock. (Hint : check out if .. in)

// 2.If the item is in stock find out the price in the prices object.

// Call the myBill() function.

function myBill() {
  for (const item of shoppingList) {
    const quantityInStock = stock[item];
    if (quantityInStock > 0) {
      const price = prices[item];
      console.log(`the price of`, item, "is ", price);
    } else {
      console.log("there is no", item, "in the stock");
    }
  }
}

myBill();
=======
// 1. Add the stock and prices objects to your js file.
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// 2.Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
//  It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"];

// 3.Create a function called myBill() that takes no parameters.

// 4.The function should return the total price of your shoppingList.
//  In order to do this you must follow these rules:

// 1.The item must be in stock. (Hint : check out if .. in)

// 2.If the item is in stock find out the price in the prices object.

// Call the myBill() function.

function myBill() {
  for (const item of shoppingList) {
    const quantityInStock = stock[item];
    if (quantityInStock > 0) {
      const price = prices[item];
      console.log(`the price of`, item, "is ", price);
    } else {
      console.log("there is no", item, "in the stock");
    }
  }
}

myBill();
>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
