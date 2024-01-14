function allTruthy(...args) {
  // Use the every() method to check if all elements are truthy
  return args.every((value) => Boolean(value));
}

// Examples
console.log(allTruthy(true, true, true)); // Output: true
console.log(allTruthy(true, false, true)); // Output: false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // Output: false
