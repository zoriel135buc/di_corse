//Map
//let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//   console.log(element);
// });

// let newArr = arr.map((element) => {
//   return element * 3;
// });

// console.log(newArr);

// let myArr = [10, 20, 30, 40];

// let newArr = myArr.map((val, i) => {
//   return {
//     value: val,
//     index: i,
//   };
// });

// console.log(newArr);

//Filter
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// let newArr = words.filter((element) => {
//   return element[0] === "e";
// });

// console.log(newArr);
// console.log(words);
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let newNumArr = nums.filter((element) => element > 2 && element < 6);
// console.log(newNumArr);

//Reduce
// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//   console.log(`acc ${acc}`);
//   console.log(`val ${val}`);
//   console.log(`val +acc ${val + acc}`);
//   console.log(`---------`);
//   return acc + val;
// }, 0);

// console.log(sum);
// let party = [
//   {
//     desert: "Chocolate Mousse",
//     calories: 30,
//   },
//   {
//     desert: "Apple Pie",
//     calories: 15,
//   },
//   {
//     desert: "Croissant",
//     calories: 50,
//   },
//   {
//     desert: "Strawberry Icecream",
//     calories: 5,
//   },
// ];

// let sum = party.reduce((acc, val) => {
//     if (val.desert==="Apple Pie"){
//         return acc
//     }
//   return acc + val.calories;
// }, 0);

// console.log(sum);

//Destructuring

// let arr = [1, 2];
// let [a, b] = arr;
// console.log(a);
// console.log(b);

// let obj = {
//   fname: "Daniel",
//   lname: "Robin",
// };

// let { fname, lname } = obj;
// console.log(fname);
// console.log(lname);

//Spread
// let a = 10;
// let b = 20;
// let rest = [30, 40, 50];

// let arr = [a, b, ...rest];
// console.log(arr);

//Rest
// let [c, d, ...rest] = [10, 20, 30, 40, 50];
// console.log(c);
// console.log(d);
// console.log(rest);

// let arr = [1, 2, 3];
// console.log(...arr);

//Cloning
// let rainbow = ["red", "orange", "yellow"];
// let rainbowClone = [...rainbow];

// rainbowClone.push("blue");
// console.log(rainbow);

// console.log(rainbowClone);
// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);

// let str =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus atque tenetur delectus ea, accusamus mollitia, minima distinctio impedit praesentium ipsum consectetur. Est, doloribus! In architecto quos esse velit similique!";

// console.log(...str);
