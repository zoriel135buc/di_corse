const _ = require("lodash");
const { add, multiply } = require(`./math.js`);

// Example usage
console.log("Adding 5 and 3:", add(5, 3)); // Output: 8
console.log("Multiplying 5 and 3:", multiply(5, 3)); // Output: 15

// Example usage of lodash
const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log("Sum of numbers:", sum); // Output: 15
