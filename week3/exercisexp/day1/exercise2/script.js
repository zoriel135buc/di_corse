let birthday=1996;
let futureyear=2025;
let claculate = futureyear-birthday;
console.log("i will be  " + claculate + "in "  +  futureyear);
array
let user1="John";
let user2="Bill";
let user3="Nancy";
let users=["John", "Bill" , "Nancy"];

console.log(users[1]);
let arrayInsideArray=[[1,2,3], [4,5,6,7], [8]];
console.log(arrayInsideArray[1][0]);

// canging Element in array
let colors = ["blue", "green", "yellow", "black", "pink"];

console.log(colors);

colors[1] = "orange";
console.log(colors);

properties

console.log(colors.length);

//  Array Methods

let colors = ["blue", "yellow","green", "pink"];
console.log(colors);

colors.push("brown");
console.log(colors);

colors.pop();
colors.pop();
console.log(colors);

colors.splice(1, 1,"purple", "Light blue");
console.log(colors);

console.log(colors.toString());

exercise3

let pets= ["cat", "dog", "fish", "rabbit", "cow"];
let indexOfDog=pets.indexOf("dog");
console.log(pets[indexOfDog]);
console.log(pets[1])
pets.splice(3 ,1, "rabbit");
console.log(pets);
console.log(pets.length);

// user interface functions
// alert
console.log("before alert");
alert("sorry you must log in to view this page...");
console.log("after alert");

prompt

let userAnswer = prompt("please enter your user name;","username...");
console.log(userAnswer);

alert("welcome " + userAnswer);

confirm

let deleteAcc = confirm("are you sure you want to delate your account?");

if (deleteAcc) {
    console.log("Acc deleted");
} else{
    console.log("you acc is still active");
}

// comprarison
// check the value and the type
console.log(Boolean("1"=== 1));
// checks only the value
console.log(Boolean("1"== 1));

// !=

console.log(Boolean("1" != 1));
console.log(Boolean("1"!== 1));
// ><
console.log(Boolean(1>1));
console.log(Boolean(1< 1));
console.log(Boolean(1>= 1));

// || & &&
console.log(Boolean(1===1 && "2"===2));
console.log(Boolean(1===1 || "2"===2));

let x=2;
console.log(x);
// x=x=1;
x++;
console.log(x);

x+=10
console.log(x);


