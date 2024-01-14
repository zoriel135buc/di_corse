// let bankAmount = 11500;
// const vat = 17;
// const details = [200, -100, 146, 167, -2900];
// let totalSum = 0;

// details.forEach((element, index) => {
//   details[index] += (element * vat) / 100;
//   totalSum += details[index];
// });

// console.log(`Total bank acc at end of the month:
// ${bankAmount + totalSum}`);

//Functions
//Function decleration
// function say(name) {
//   console.log("hello " + name);
// }

//Function Expression

// let say = function (name) {
//   console.log(name);
// };

//Arrow Function

// let say = (name) => {
//   console.log(name);
// };

//return arrow 1liner

// let say1 = (name) => name;

// console.log(say1("dani"));

//Hoisting
// say(myName);

// function say(name) {
//   console.log("hello " + name);
// }

// say("dani");
// let say = function (name) {
//   console.log(name);
// };
// let myName = "dani";

//Self Invoking
// (function (name) {
//   alert("hello " + name);
// })("Dani");

//Nested Functions

// function verify(name) {
//   function isJohn() {
//     return name === "John";
//   }
//   isJohn() && alert("this is john");
// }

// verify("Johan");

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(5);
// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
//     console.log(counter);
//   }
//   plus();
// }

// add();

//Closure
// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }

// let fnInside = outside(5);
// console.log(fnInside(3));

//Currying
// const add = (a) => (b) => a + b;
// const res = add(5);
// console.log(res(3));

//Objects
// const person = {
//   fname: "Daniel",
//   lname: "Robin",
//   age: 27,
// };
// const newObj = {};
// const newObjConstructor = new Object();

// console.log(newObj);
// console.log(newObjConstructor);
// console.log(person.fname);
// console.log(person["lname"]);
// newObjConstructor.eyeColor = "blue";
// newObjConstructor.name = "shimon";
// newObjConstructor.height = "180m";
// newObjConstructor.eyeColor = "black";
// newObjConstructor["city"] = "Pardes Hanna";
// console.log(newObjConstructor);

//Property Value Shorthand

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// console.log(makeUser("dani", 26));

// function makeUserShorthand(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// console.log(makeUserShorthand("dani", 123));

// const person = {
//   name: "Lydia",
//   age: 21,
//   country: "Israel",
// };

// for (let item in person) {
//   console.log(person[item]);
// }

let object1 = { value: 10 };
let object2 = object1;
object1.value = 15;

let objectCopy = { ...object1 };

objectCopy.value = 200;
// console.log(object1);
// console.log(objectCopy);

let myArr = ["Dani", "yosi", "amit", "ronen"];
let myArr2 = [...myArr];

myArr2.push("Yoav");

console.log(myArr);
console.log(myArr2);
