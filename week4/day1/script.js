// functions

// function drinkcoffe(){
//     console.log("drink cofee");
// }

// // functions with parameter

// function userInfo(username,userAge) {
//     alert("welcome" +username+"your age is" +userAge);

// }

// calling a function

// drink cofee ();
// userInfo("dani123",26);

// userInfo("yossi135",35);
// userInfo();
// function calculate(a,b,c,d){
//     console.log(a+b+c+d)
// }

// clculate(2,5,8,7)

// defult valyus

// function userInfo(username="anonymous",userAge=30){
//     console.log("my name is" +username+"my age is"+userAge);
// }
// userInfo("sarah",12);

// local veriables
// let x=2;
// function userMoreInfo(username,userAge){
//     let eyeColor="blue"
//     console.log("my name is"+username+"my age is"+userAge+"I have "+eyeColor+"eyes");
//     function useruseruser(){
//         console.log(eyeColor)
//         let myName="daniel"
//     }
//     useruseruser()
// }

// userMoreInfo("dani",26);
// // console.log(eyeColor);


// exercise1

// function userAge(myAge){
//      const myAgeMom=myAge*2
//      const myAgeFather=myAgeMom*1.2
//      console.log("my mom is"+myAgeMom+"my dad is"+myAgeFather+"years old");
//      console.log(`my mom is ${mom} years old and my dad is ${dad} years old`);
// }
  
// return

// function userInfo(username,userAge){
//     let result=`my username is ${username} and my age is ${userAge}`;
//     // console.log(result);
// return result;
// console.log(result);
// // return=leave the function
// console.log("somthing");
// }

// const returnFromFunction=userInfo("dani",26);
// console.log(returnFromFunction);

// function askUser(){
//     return prompt("what is your name")

// }
// function greetUser(username){
//     const userName=askUser();
//     console.log(`welcome ${username}`);
// }

// greetUser(askUser());

// exercise2

// function momsage(myAge){
//     return myAge*2
// }
// const result=momsage(15);
// console.log(result);



// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function


// object methodes

const person={
    firstName: "sarah",
    eyecolor:"blue",
    eat:function(){
        console.log(`y name is ${this.firstName} and i love chocolate`);
    },
}
person.eat();










