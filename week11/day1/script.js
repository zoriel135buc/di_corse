//Synchronous:

// function thirdFunc() {
//   console.log("Greetings from thirdFunc()");
// }

// function secondFunc() {
//   thirdFunc();
//   console.log("Greetings from secondFunc()");
// }

// function firstFunc() {
//   secondFunc();
//   console.log("Greetings from firstFunc()");
// }

// firstFunc();

//Asynchornos

// console.log("Start of script");

// setTimeout(function () {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");

//Promise
// let goodGrades = true;

let endSemester = new Promise((resolve, reject) => {
  if (goodGrades) {
    resolve("I will get a gift");
  } else {
    reject("I wont get the gift");
  }
});

endSemester
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("regardless of resolve or reject I run");
  });

//Another promise exmaple
// let grade = 79;
// let endSemester = new Promise((res, rej) => {
//   if (grade > 90) {
//     res("Computer");
//   } else if (grade > 80 && grade <= 89) {
//     res("Phone");
//   } else {
//     rej("I won't get the gift");
//   }
// });

// endSemester.then((value) => console.log("i got a " + value)).catch((e) => console.log(e));

// endSemester.finally(() => console.log("No matter if i get a gift or not"));

// endSemester.catch((e) => console.log(e));

//Another example
// let goodGrades = 95;

// let endSemester = new Promise((resolve, reject) => {
//   console.log("test1");
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if ((goodGrades) => 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
//   console.log("test2");
// });

// endSemester.then((value) => console.log("Yeahhh I got a gift"));
// endSemester.finally(() => console.log(`No matter if I get a gift or not,  I want to have good grades`));
// console.log("test3");

//Another example- chaining promises
// let bankAmount = 1000;
// let expense = 501;
// let bankPromise = new Promise((resolve, reject) => {
//   if (expense < bankAmount) {
//     resolve(expense);
//   } else {
//     reject("Rejected by the Bank");
//   }
// });

// bankPromise
//   .then((result) => {
//     console.log(`The expense is ${result} dollars`);
//     return result * 1.17;
//   })
//   .then((resultTwo) => {
//     console.log(`Including taxes is ${resultTwo}`);
//     bankAmount -= resultTwo;
//     console.log(`I have ${bankAmount} dollars left`);
//     return bankAmount;
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Promise All

// let promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// let promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));
// let promise4 = new Promise((resolve, reject) => setTimeout(() => reject(4), 1000));
// Promise.all([promise1, promise2, promise3, promise4])
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

//Promise Allsettled

// let promise1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 3000));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// let promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));
// let promise4 = new Promise((resolve, reject) => setTimeout(() => reject(4), 1000));

// Promise.allSettled([promise1, promise2, promise3, promise4]).then((result) => console.log(result));

//Promise.resolve/.reject

// Promise.resolve("Created resolved promise").then((res) => console.log(res));

// Promise.reject("creates a rejected promise with error.").catch((e) => console.log(e));

//Promise Examples
// const flip = () => {
//   let x = Math.floor(Math.random() * 2) == 0;
//   if (x) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// };

// console.log("I'm about to flip a coin!");

// const flipACoin = new Promise((resolve, reject) => {
//   console.log("I'm flipping the coin!");
//   setTimeout(() => {
//     const flipResult = flip(); //let's say flip() takes a few seconds
//     if (flipResult) {
//       console.log("Here is the coin flip result!", flipResult);
//       resolve();
//     } else {
//       reject();
//     }
//   }, 3000);
// }).then(() => {
//   console.log("I have flipped the coin.");
// });

//Create promise call it later
// const doThisLater = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Done!");
//     resolve();
//   });
// };
// console.log("After promise-creating function");

// console.log(doThisLater());

// const resolvingPromise = Promise.resolve("instant resolve");
// resolvingPromise.then((data) => console.log(data));

//Promise Race
// let promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 999));
// let promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

// Promise.race([promise1, promise2, promise3]).then((data) => console.log(data));
